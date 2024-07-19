// @ts-nocheck

import { Skeleton } from "@/components/ui/skeleton";

const number = [1, 2, 3];

const LoadingSkeleton = () => {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-3">
      {number.map((num) => (
        <div key={num} className="space-y-2">
          <Skeleton className="lg:w-72 lg:h-96 md:w-52 md:h-80 sm:w-64 sm:h-80 w-96 h-96" />
          <Skeleton className="lg:w-72 h-5 md:w-52 sm:w-64 w-96" />
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
