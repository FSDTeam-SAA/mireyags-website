"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { ReviewsApiResponse } from "./ratings-and-reviews-data-type";
import moment from "moment";
import { EmptyState, QueryError, ReviewsSkeleton } from "@/components/shared/AsyncStates";

function ReviewStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-[#000000]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < rating ? "fill-current" : ""}`}
          strokeWidth={1.8}
        />
      ))}
    </div>
  );
}

export default function RatingsReviewsSection({ id }: { id: string }) {
  const { data, isLoading, error, isError, refetch } = useQuery<ReviewsApiResponse>({
    queryKey: ["all-reviews", id],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/review/${id}`,
      );

      return res.json();
    },
  });

  const reviews = data?.data?.data;
  console.log(reviews);

  console.log(isError, error, isLoading);
  return (
    <section className="w-full py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ratings and Reviews
          </h2>
          <p className="mt-3 text-sm text-white/60 md:text-base">
            {reviews?.length || 0} Reviews
          </p>
        </div>

        {isLoading ? <ReviewsSkeleton /> : isError ? <div className="mx-auto mt-10 max-w-3xl"><QueryError message="Reviews couldn't be loaded." onRetry={() => refetch()} /></div> : <div className="mx-auto mt-10 max-w-3xl border-b border-white/20">
          {reviews?.map((review) => (
            <div
              key={review?._id}
              className="flex gap-2 border-b border-slate-200 py-6 last:border-b-0"
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={review?.userId?.profileImage ||  "/assets/images/no-user.jpg"}
                  alt={review?.userId?.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <ReviewStars rating={review.rating} />

              <p className="mt-3 max-w-2xl text-sm leading-normal text-white/70">
                  {review.comment}
                </p>

                <h3 className="mt-4 text-sm leading-bold font-bold text-white">
                  {review?.userId?.name}
                </h3>

                <p className="mt-1 text-xs text-white/50 leading-normal font-normal">
                  {" "}
                  {moment(review?.createdAt).format("DD MMM, YYYY")}
                </p>
              </div>
            </div>
          ))}
        </div>}
        {!isLoading && !isError && !reviews?.length && <div className="mx-auto mt-10 max-w-3xl"><EmptyState title="No reviews yet" description="Be the first to share your research experience with this product." /></div>}
      </div>
    </section>
  );
}
