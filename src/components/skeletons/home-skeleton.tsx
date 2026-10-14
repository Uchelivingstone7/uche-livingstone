import PageWrapper from "@/components/layout/page-wrapper";
import { Skeleton } from "@/components/ui/skeleton";

const HomeSkeleton = () => {
  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="width-layout relative">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Skeleton className="h-3 w-56 max-w-full" />
              <Skeleton className="mt-5 h-12 w-full max-w-[36rem] sm:h-16" />
              <Skeleton className="mt-2 h-12 w-[88%] max-w-[24rem] sm:h-16" />
              <Skeleton className="mt-2 h-12 w-[72%] max-w-[16rem] sm:h-16" />
              <Skeleton className="mt-2 h-12 w-[64%] max-w-[14rem] sm:hidden" />
              <Skeleton className="mt-5 h-4 w-full max-w-xs" />
              <div className="mt-6 flex gap-3">
                <Skeleton className="h-10 w-32 rounded-full" />
                <Skeleton className="h-10 w-40 rounded-full" />
              </div>
            </div>
            <div className="@container lg:col-span-5">
              <Skeleton className="aspect-[4/5] w-full rounded-[22px] lg:aspect-auto lg:h-[min(125cqw,calc(100svh-15.5rem))]" />
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-white/10 py-20">
        <PageWrapper className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-4/5" />
          </div>
          <div className="space-y-4 lg:col-span-6 lg:col-start-7">
            <Skeleton className="h-20 w-full" />
            <div className="grid gap-3 sm:grid-cols-2">
              <Skeleton className="h-16 rounded-[22px]" />
              <Skeleton className="h-16 rounded-[22px]" />
            </div>
          </div>
        </PageWrapper>
      </section>
    </div>
  );
};

export default HomeSkeleton;
