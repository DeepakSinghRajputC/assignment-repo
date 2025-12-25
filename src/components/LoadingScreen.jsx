import React, { useState, useEffect } from "react";

const LoadingScreen = ({ isLoading, query = "" }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    { text: "Analyzing your query...", icon: "search" },
    { text: "Scanning product database...", icon: "database" },
    { text: "Applying AI algorithms...", icon: "brain" },
    { text: "Calculating relevance scores...", icon: "calculator" },
    { text: "Generating recommendations...", icon: "sparkles" },
    { text: "Finalizing results...", icon: "check" },
  ];

  useEffect(() => {
    if (!isLoading) {
      setProgress(0);
      setCurrentStep(0);
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 250);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [isLoading, loadingSteps.length]);

  const getStepIcon = (iconName, isActive, isCompleted) => {
    const iconClass = `w-5 h-5 ${
      isCompleted ? "text-white" : isActive ? "text-white" : "text-neutral-400"
    }`;

    switch (iconName) {
      case "search":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        );
      case "database":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
            />
          </svg>
        );
      case "brain":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        );
      case "calculator":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        );
      case "sparkles":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3l1.5 4.5L11 9 6.5 10.5 5 15l-1.5-4.5L-1 9l4.5-1.5L5 3z"
            />
          </svg>
        );
      case "check":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        );
    }
  };

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
      role="dialog"
      aria-labelledby="loading-title"
      aria-describedby="loading-description"
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 transform animate-scale-in">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-3xl mb-6 shadow-lg">
            <svg
              className="w-10 h-10 text-white animate-pulse"
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
          </div>
          <h3
            id="loading-title"
            className="text-2xl font-bold text-neutral-900 mb-2"
          >
            AI Recommendation Engine
          </h3>
          <p
            id="loading-description"
            className="text-neutral-600 italic leading-relaxed"
          >
            Processing:{" "}
            <span className="font-semibold text-primary-700">"{query}"</span>
          </p>
        </div>

        {/* Progress Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-neutral-700">
              Overall Progress
            </span>
            <span className="text-sm font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
              {Math.round(Math.min(progress, 100))}%
            </span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-primary h-3 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading Steps */}
        <div className="space-y-4" role="status" aria-live="polite">
          <h4 className="text-sm font-semibold text-neutral-700 mb-3">
            Processing Steps:
          </h4>
          {loadingSteps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            const isPending = index > currentStep;

            return (
              <div
                key={index}
                className={`flex items-center p-4 rounded-2xl transition-all duration-500 transform ${
                  isCompleted
                    ? "bg-success-50 border border-success-200 scale-105"
                    : isActive
                    ? "bg-primary-50 border-2 border-primary-200 scale-102 shadow-md"
                    : "bg-neutral-50 border border-neutral-200"
                }`}
                aria-current={isActive ? "step" : undefined}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    isCompleted
                      ? "bg-success-500 text-white shadow-md"
                      : isActive
                      ? "bg-primary-500 text-white animate-pulse shadow-lg"
                      : "bg-neutral-200 text-neutral-500"
                  }`}
                >
                  {isCompleted ? (
                    getStepIcon(step.icon, false, true)
                  ) : isActive ? (
                    <svg
                      className="w-5 h-5 text-white animate-spin"
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
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div className="ml-4 flex-1">
                  <p
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      isCompleted
                        ? "text-success-800"
                        : isActive
                        ? "text-primary-800"
                        : "text-neutral-600"
                    }`}
                  >
                    {step.text}
                  </p>
                  {isActive && (
                    <p className="text-xs text-primary-600 mt-1">
                      Currently processing...
                    </p>
                  )}
                </div>
                {isCompleted && (
                  <div className="ml-2">
                    <svg
                      className="w-5 h-5 text-success-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-500 leading-relaxed">
            Our AI is working hard to find the perfect products for you. This
            usually takes just a few seconds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
