import React from "react";

const SkeletonCard = () => {
  return (
    <div className="card animate-pulse">
      <div className="p-6 lg:p-8">
        {/* Header Skeleton */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex flex-col space-y-3">
            <div className="h-7 bg-neutral-200 rounded-full w-24 animate-pulse"></div>
            <div className="h-5 bg-neutral-200 rounded w-20 animate-pulse"></div>
          </div>
          <div className="h-10 w-10 bg-neutral-200 rounded-xl animate-pulse"></div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-6">
          {/* Title and Description */}
          <div>
            <div className="h-6 bg-neutral-200 rounded-lg w-3/4 mb-3 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 bg-neutral-200 rounded animate-pulse"></div>
              <div className="h-4 bg-neutral-200 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-neutral-200 rounded w-4/6 animate-pulse"></div>
            </div>
          </div>

          {/* Rating Skeleton */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-neutral-200 rounded animate-pulse"
                  ></div>
                ))}
              </div>
              <div className="h-4 bg-neutral-200 rounded w-12 animate-pulse"></div>
            </div>
            <div className="h-4 bg-neutral-200 rounded w-16 animate-pulse"></div>
          </div>

          {/* Features Skeleton */}
          <div>
            <div className="h-5 bg-neutral-200 rounded w-24 mb-3 animate-pulse"></div>
            <div className="space-y-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-3 h-3 bg-neutral-200 rounded mr-2 animate-pulse"></div>
                  <div className="h-3 bg-neutral-200 rounded flex-1 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Price and Action Skeleton */}
          <div className="pt-6 border-t border-neutral-100">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-8 bg-neutral-200 rounded w-20 animate-pulse"></div>
                <div className="h-4 bg-neutral-200 rounded w-24 animate-pulse"></div>
              </div>
              <div className="space-y-2">
                <div className="h-10 bg-neutral-200 rounded-xl w-24 animate-pulse"></div>
                <div className="h-3 bg-neutral-200 rounded w-16 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
