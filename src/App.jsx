import React, { useState } from "react";
import { products } from "./products";
import ProductList from "./components/ProductList";
import SearchInput from "./components/SearchInput";
import RecommendationDisplay from "./components/RecommendationDisplay";
import LoadingScreen from "./components/LoadingScreen";
import { getAIRecommendationsWithRetry } from "./services/aiService";

function App() {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setIsLoading(true);
    setError("");

    try {
      const aiRecommendations = await getAIRecommendationsWithRetry(
        query,
        products
      );
      setRecommendations(aiRecommendations);
    } catch (err) {
      setError(`Failed to get recommendations: ${err.message}`);
      console.error("Error getting recommendations:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setRecommendations([]);
    setSearchQuery("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Enhanced Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="section-padding py-16 lg:py-24 relative">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white bg-opacity-20 text-white mb-4 backdrop-blur-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                AI-Powered Recommendations
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-balance">
              <span className="block">Discover Your Perfect</span>
              <span className="block text-gradient-primary bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed text-balance">
              Get intelligent product recommendations powered by advanced AI
              algorithms. Simply describe what you're looking for and let our
              system find the perfect matches tailored to your needs.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-primary-100">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-success-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Personalized Results
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-success-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Smart Analysis
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-success-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Instant Results
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-12 fill-current text-neutral-50"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="section-padding py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          <SearchInput onSearch={handleSearch} isLoading={isLoading} />

          {error && (
            <div className="animate-slide-up">
              <div className="bg-error-50 border border-error-200 rounded-2xl p-6 mb-8 shadow-soft">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-error-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-error-800 mb-1">
                      Something went wrong
                    </h3>
                    <p className="text-error-700">{error}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {recommendations.length > 0 && (
            <div className="animate-slide-up">
              <RecommendationDisplay
                recommendations={recommendations}
                searchQuery={searchQuery}
                onReset={handleReset}
              />
            </div>
          )}

          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <ProductList
              products={recommendations.length > 0 ? recommendations : products}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-neutral-800 to-neutral-900 text-neutral-300 mt-16">
        <div className="section-padding py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    AI Product Finder
                  </h3>
                </div>
                <p className="text-neutral-400 leading-relaxed max-w-md">
                  Empowering users to discover products they love through
                  intelligent AI recommendations. Find exactly what you need
                  with personalized suggestions.
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Features
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-success-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Smart Recommendations
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-success-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Personalized Results
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-success-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Real-time Processing
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-700 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-neutral-400 mb-4 md:mb-0">
                © 2024 AI Product Finder. Built with React, Tailwind CSS & AI.
              </p>
              <div className="flex space-x-6 text-sm">
                <span className="flex items-center text-neutral-400">
                  <svg
                    className="w-4 h-4 mr-1 text-success-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Powered by AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <LoadingScreen isLoading={isLoading} query={searchQuery} />
    </div>
  );
}

export default App;
