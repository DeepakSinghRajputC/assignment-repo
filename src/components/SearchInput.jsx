import React, { useState, useRef, useEffect } from "react";

const SearchInput = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleExampleClick = (example) => {
    setQuery(example);
    // Focus input after setting query for better UX
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Clear input when search is completed
  useEffect(() => {
    if (!isLoading && query) {
      // Optionally clear after search
    }
  }, [isLoading, query]);

  const exampleQueries = [
    "I want a phone under $500",
    "Looking for a laptop for programming",
    "Need wireless headphones with noise cancellation",
    "Want a tablet for creative work",
    "Looking for a gaming laptop under $1500",
  ];

  return (
    <div className="mb-8 animate-slide-up">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4 max-w-4xl mx-auto">
          <div className="flex-1 relative group">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tell me what you're looking for..."
              className="input-field pr-16 text-base group-hover:shadow-md focus:shadow-lg transition-all duration-300"
              disabled={isLoading}
              aria-label="Search for products"
              autoComplete="off"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-neutral-400 group-hover:text-primary-500 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary px-8 py-3 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed focus:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-200"
            disabled={isLoading || !query.trim()}
            aria-describedby="search-button-help"
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
                <span className="font-semibold">Searching...</span>
              </div>
            ) : (
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="font-semibold">Get Recommendations</span>
              </div>
            )}
          </button>
        </div>
        <div id="search-button-help" className="sr-only">
          Click to search for product recommendations based on your query
        </div>
      </form>

      {/* Enhanced Example Queries Section */}
      <div className="text-center">
        <p className="text-sm font-medium text-neutral-600 mb-4">
          Try these example searches:
        </p>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {exampleQueries.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              className="group px-4 py-2.5 text-sm bg-white hover:bg-primary-50 text-neutral-700 hover:text-primary-700 rounded-xl border border-neutral-200 hover:border-primary-300 transition-all duration-200 hover:shadow-sm hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              disabled={isLoading}
              aria-label={`Use example: ${example}`}
            >
              <span className="flex items-center">
                <svg
                  className="w-3 h-3 mr-2 text-neutral-400 group-hover:text-primary-500 transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
                {example}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
