import { Skeleton } from "@/components/ui/skeleton";

export default function PageSkeleton() {
  return (
    <main className="min-h-screen bg-black px-4 py-10 md:py-14">
      <div className="container">
        <Skeleton className="h-10 w-64 bg-white/10" />
        <Skeleton className="mt-4 h-5 w-full max-w-xl bg-white/10" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Skeleton className="h-56 w-full bg-white/10" />
          <div>
            <Skeleton className="h-7 w-3/4 bg-white/10" />
            <Skeleton className="mt-4 h-5 w-full bg-white/10" />
            <Skeleton className="mt-2 h-5 w-5/6 bg-white/10" />
            <Skeleton className="mt-8 h-11 w-36 bg-white/10" />
          </div>
        </div>
      </div>
    </main>
  );
}
