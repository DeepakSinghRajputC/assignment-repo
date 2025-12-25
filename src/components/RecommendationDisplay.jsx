import React from "react";

const RecommendationDisplay = ({ recommendations, searchQuery, onReset }) => {
  return (
    <div className="bg-gradient-to-r from-primary-50 via-white to-secondary-50 rounded-3xl shadow-soft border border-primary-100 p-8 mb-8 animate-slide-up">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div className="flex items-center mb-6 lg:mb-0">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4 shadow-md">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-1">
              AI Recommendations
            </h2>
            <p className="text-neutral-600 font-medium">
              Personalized for your needs
            </p>
          </div>
        </div>

        <button
          onClick={onReset}
          className="btn btn-secondary px-6 py-3 flex items-center space-x-2 hover:shadow-md transition-all duration-200"
          aria-label="Show all products instead of recommendations"
        >
          <svg
            className="w-4 h-4"
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
          <span className="font-semibold">Show All Products</span>
        </button>
      </div>

      {/* Search Query Display */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-neutral-100">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-5 h-5 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-neutral-700 mb-1">
              Your Request:
            </p>
            <blockquote className="text-lg text-neutral-800 italic leading-relaxed border-l-4 border-primary-500 pl-4">
              "{searchQuery}"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <div className="bg-gradient-to-r from-success-50 to-success-100 border border-success-200 rounded-2xl p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-success-500 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-success-800 mb-1">
              Perfect Match Found!
            </h3>
            <p className="text-success-700">
              Our AI analyzed your request and found{" "}
              <span className="font-bold text-success-800">
                {recommendations.length} product
                {recommendations.length !== 1 ? "s" : ""}
              </span>{" "}
              that match{recommendations.length === 1 ? "es" : ""} your criteria
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-success-200">
          <div className="flex flex-wrap gap-4 text-sm text-success-700">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              AI Verified
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Quality Assured
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Personalized
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationDisplay;
