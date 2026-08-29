"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import ProductCard from "../../_components/product-card";
import { useQuery } from "@tanstack/react-query";
import { AllProductsApiResponse } from "@/components/types/products-data-type";
import { useDebounce } from "@/components/hooks/useDebounce";
import MireyagsDropdown from "@/components/ui/mireyags-dropdown";
import { CategoriesApiResponse } from "@/components/types/category-data-type";
import { BrandsApiResponse } from "@/components/types/brands-data-type";
import MireyagsPagination from "@/components/ui/mireyags-pagination";
import { ProductGridSkeleton, QueryError } from "@/components/shared/AsyncStates";

export default function ProductsContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [category, setCategory] = useState<string | undefined>("");
  const [brand, setBrand] = useState<string | undefined>("");

  const { data, isLoading, error, isError, refetch } = useQuery<AllProductsApiResponse>({
    queryKey: ["all-products", currentPage, debouncedSearch, category, brand],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/get-all-products?page=${currentPage}&limit=8&search=${debouncedSearch}&category=${category}&brand=${brand}`,
      );

      return res.json();
    },
  });

  const products = data?.data;

  console.log(isError, error, isLoading);

  const { data: categoryResponse } =
    useQuery<CategoriesApiResponse>({
      queryKey: ["all-categories"],
      queryFn: async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/category/get-all-categories?limit=100`
        );
        return res.json();
      },
    });

  const categories =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categoryResponse?.data?.data?.map((item: any) => ({
    id: item._id,       // mongodb id
    name: item.name,
    value: item._id,    // dropdown value
  })) ?? [];
  console.log(categories)

  const { data: brandResponse } =
    useQuery<BrandsApiResponse>({
      queryKey: ["all-brands"],
      queryFn: async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/brands/get-all-brands?limit=100`
        );
        return res.json();
      },
    });


    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const brands = brandResponse?.data?.data?.map((item:any)=> ({
    id : item?._id,
    name : item?.name,
    value: item?._id
  })) ?? [];

  return (
    <main className="min-h-screen bg-black py-10 text-white md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
            Research Products
          </h1>
          <p className="mt-2 text-sm text-white/60 md:text-base">
            Browse our premium catalog of research peptides and compounds.
          </p>
        </div>

        {/* search and filter dropdown  */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6">
          {/* search  */}
          <div>
            <label htmlFor="product-search" className="mb-2 block text-sm font-medium text-white">
              Search products
            </label>
            <Input
              id="product-search"
              type="search"
              className="h-[50px] w-full rounded-xl border border-white/30 bg-white px-4 text-black shadow-none outline-none placeholder:text-black/45 focus-visible:border-white focus-visible:ring-2 focus-visible:ring-white/40"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </div>
          {/* category dropdown  */}
          <div className="w-full">
            <label className="mb-2 block text-sm font-medium text-white">
              Filter by category
            </label>
            <MireyagsDropdown
              list={categories}
              selectedValue={category}
              placeholderText="Category"
              onValueChange={(value) => {
                setCategory(value);
              }}
            />
          </div>
          {/* brands dropdown */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Filter by brand
            </label>
            <MireyagsDropdown
              list={brands}
              selectedValue={brand}
              placeholderText="Brand"
              onValueChange={(value) => {
                setBrand(value);
              }}
            />
          </div>
        </div>

        {/* Results */}
        <div className="mt-6">
            <p className="text-sm text-white/60">
            Showing {products?.data?.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-5">
          {isLoading ? <ProductGridSkeleton count={8} /> : isError ? (
            <QueryError message="Products are temporarily unavailable. Please try again." onRetry={() => refetch()} />
          ) : products?.data?.length ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
              {products.data.map((product) => <ProductCard key={product._id} product={product} />)}
            </div>
          ) : (
            <div className="rounded-xl border border-white/15 bg-white/5 px-6 py-12 text-center text-white/70">No products found. Try a different search or filter.</div>
          )}
        </div>

         {/* pagination  */}
        {
          data && data?.data && data?.data?.pagination && data?.data?.pagination?.totalPages > 1 && (
            <div className="w-full flex items-center justify-between py-2">
              <p className="text-base font-normal text-white/60 leading-[150%]">
                Showing {currentPage} to 8 of {data?.data?.pagination?.totalData} results
              </p>
              <div>
                <MireyagsPagination
                  currentPage={currentPage}
                  totalPages={data?.data?.pagination?.totalPages}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          )
        }
      </div>
    </main>
  );
}
