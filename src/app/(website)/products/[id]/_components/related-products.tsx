"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/app/(website)/_components/product-card";
import { useQuery } from "@tanstack/react-query";
import { AllProductsApiResponse } from "@/components/types/products-data-type";
import { EmptyState, ProductGridSkeleton, QueryError } from "@/components/shared/AsyncStates";



export default function RelatedProductsSection() {

    const {data, isLoading, error, isError, refetch} = useQuery<AllProductsApiResponse>({
    queryKey: ["all-products"],
    queryFn: async ()=>{
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/get-all-products`)

      return res.json();
    }
  })

  const products = data?.data 

  console.log(isError, error, isLoading)
  return (
    <section className="w-full bg-black py-14 text-white md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Related Products
          </h2>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {isLoading ? <ProductGridSkeleton count={4} /> : isError ? <QueryError message="Related products couldn't be loaded." onRetry={() => refetch()} /> : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products?.data?.map((product) => <ProductCard key={product._id} product={product} />)}
          </div>
        )}
        {!isLoading && !isError && !products?.data?.length && <EmptyState title="No related products" description="There are no related products available right now." />}
      </div>
    </section>
  );
}
