import { AlertCircle, PackageOpen, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3">
          <Skeleton className="aspect-square w-full bg-white/10" />
          <Skeleton className="mt-4 h-5 w-3/4 bg-white/10" />
          <Skeleton className="mt-3 h-4 w-full bg-white/10" />
          <Skeleton className="mt-2 h-4 w-1/2 bg-white/10" />
          <Skeleton className="mt-5 h-9 w-full bg-white/10" />
        </div>
      ))}
    </div>
  );
}

export function ProductDetailsSkeleton() {
  return (
    <section className="w-full bg-black py-8 md:py-14">
      <div className="container grid gap-10 px-4 md:grid-cols-2 md:gap-14">
        <Skeleton className="aspect-square w-full bg-white/10" />
        <div>
          <Skeleton className="h-9 w-4/5 bg-white/10" />
          <Skeleton className="mt-5 h-5 w-1/3 bg-white/10" />
          <Skeleton className="mt-7 h-10 w-1/2 bg-white/10" />
          <Skeleton className="mt-8 h-5 w-24 bg-white/10" />
          <Skeleton className="mt-4 h-24 w-full bg-white/10" />
          <Skeleton className="mt-8 h-10 w-36 bg-white/10" />
        </div>
      </div>
    </section>
  );
}

export function ReviewsSkeleton() {
  return (
    <div className="mx-auto mt-10 max-w-3xl space-y-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex gap-3 border-b border-white/10 py-6">
          <Skeleton className="h-10 w-10 shrink-0 rounded-full bg-white/10" />
          <div className="flex-1">
            <Skeleton className="h-4 w-24 bg-white/10" />
            <Skeleton className="mt-4 h-4 w-full bg-white/10" />
            <Skeleton className="mt-2 h-4 w-4/5 bg-white/10" />
            <Skeleton className="mt-4 h-3 w-32 bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function OrdersSkeleton() {
  return (
    <div className="container space-y-4 rounded-lg border border-white/15 bg-white p-4">
      <Skeleton className="h-6 w-24 bg-black/10" />
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="grid gap-4 border-b border-black/10 py-5 md:grid-cols-3">
          <Skeleton className="h-24 w-full bg-black/10" />
          <div className="md:col-span-2">
            <Skeleton className="h-5 w-2/3 bg-black/10" />
            <Skeleton className="mt-3 h-4 w-1/3 bg-black/10" />
            <Skeleton className="mt-3 h-4 w-1/2 bg-black/10" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[10px] border border-white/15 bg-black px-6 py-14 text-center text-white">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
        <PackageOpen className="h-7 w-7 text-white" />
      </div>
      <h2 className="mt-5 text-xl font-semibold">{title}</h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-white/60">{description}</p>
    </div>
  );
}

export function QueryError({ message = "We couldn't load this content.", onRetry }: { message?: string; onRetry?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-12 text-center text-white">
      <AlertCircle className="mb-3 h-8 w-8 text-white" />
      <h3 className="text-lg font-semibold">Something went wrong</h3>
      <p className="mt-2 max-w-md text-sm text-white/60">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} className="mt-5 bg-white text-black hover:bg-white/80">
          <RefreshCw className="h-4 w-4" /> Try again
        </Button>
      )}
    </div>
  );
}
