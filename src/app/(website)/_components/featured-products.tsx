"use client";

import * as React from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./product-card";
import { useQuery } from "@tanstack/react-query";
import { AllProductsApiResponse } from "@/components/types/products-data-type";
import { ProductGridSkeleton, QueryError } from "@/components/shared/AsyncStates";


export default function FeaturedResearchPeptidesSection() {
  const plugin = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );


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
    <section className="w-full bg-black py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Featured Research Peptides
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/70 md:text-base">
            Explore our most popular products
          </p>
        </div>

        <div className="relative mt-10">
          {isLoading ? <ProductGridSkeleton count={4} /> : isError ? <QueryError message="Featured products couldn't be loaded." onRetry={() => refetch()} /> : (
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {products?.data?.map((product) => (
                <CarouselItem
                  key={product._id}
                  className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {products?.data && products.data.length > 4 && (
              <>
                <CarouselPrevious className="-left-4 hidden border-white/20 bg-black text-white shadow-sm hover:bg-white hover:text-black md:flex" />
                <CarouselNext className="-right-4 hidden border-white/20 bg-black text-white shadow-sm hover:bg-white hover:text-black md:flex" />
              </>
            )}
          </Carousel>
          )}
        </div>

        {products?.data && products.data.length > 4 && (
          <div className="mt-10 flex justify-center">
            <Button
              asChild
              className="h-12 rounded-lg bg-white px-7 text-base font-semibold text-black hover:bg-white/80"
            >
              <Link href="/products" className="inline-flex items-center gap-2">
                See All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
