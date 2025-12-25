import React from "react";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

const ProductList = ({ products, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="mt-12 animate-fade-in">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-4">
            <svg
              className="animate-spin w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="text-sm font-medium">Analyzing Products</span>
          </div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-3">
            Finding Perfect Matches...
          </h2>
          <p className="text-neutral-600 max-w-md mx-auto">
            Our AI is carefully analyzing products to find the best matches for
            your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <SkeletonCard />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20 animate-fade-in">
        <div className="max-w-md mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            No Products Found
          </h3>
          <p className="text-neutral-600 leading-relaxed mb-8">
            We couldn't find any products matching your current search criteria.
            Try adjusting your query or browse our complete collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="btn btn-outline px-6 py-3">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Clear Search
            </button>
            <button className="btn btn-primary px-6 py-3">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Browse All
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isRecommendations = products.length < 12;

  return (
    <section className="mt-12 animate-fade-in">
      <div className="text-center mb-12">
        {isRecommendations ? (
          <>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-success-100 text-success-700 mb-4">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">AI Curated</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Recommended Products
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {products.length === 1
                ? "Here's the perfect product we found for you"
                : `Found ${products.length} products selected specifically for your needs`}
            </p>
          </>
        ) : (
          <>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-4">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              <span className="text-sm font-medium">Complete Collection</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              All Products
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Browse our complete collection of premium products curated for
              quality and value
            </p>
          </>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Load More Button for All Products View */}
      {!isRecommendations && products.length >= 12 && (
        <div className="text-center mt-12">
          <button className="btn btn-outline px-8 py-3 text-base">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Load More Products
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductList;
