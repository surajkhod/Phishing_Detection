// src/components/DetectionSection.tsx

import React, { useState } from 'react';
import { usePhishingDetection } from '../hooks/usePhishingDetection';
import ResultCard from './ResultCard';

const DetectionSection: React.FC = () => {
  const [urlInput, setUrlInput] = useState<string>('');
  const { loading, result, error, checkUrl, reset } = usePhishingDetection();

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!urlInput.trim()) {
      return;
    }

    // Add http:// if no protocol specified
    let fullUrl = urlInput.trim();
    if (!fullUrl.startsWith('http://') && !fullUrl.startsWith('https://')) {
      fullUrl = 'http://' + fullUrl;
    }

    await checkUrl(fullUrl);
  };

  /**
   * Handle new check
   */
  const handleNewCheck = () => {
    setUrlInput('');
    reset();
  };

  return (
    <section id="detection" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Check Website Safety
          </h2>
          <p className="text-xl text-gray-300">
            Enter any website URL to analyze its security status
          </p>
        </div>

        {/* Detection Card - Dark Theme */}
        <div className="bg-gradient-to-br from-gray-800 to-slate-900 rounded-3xl shadow-2xl p-10 border border-gray-700">
          {/* Input Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-8">
              <label 
                htmlFor="url-input" 
                className="block text-lg font-semibold text-white mb-4"
              >
                Website URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg 
                    className="w-5 h-5 text-gray-400" 
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
                </div>
                <input
                  id="url-input"
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full pl-12 pr-5 py-4 text-lg bg-gray-900 text-white border-2 border-gray-700 rounded-xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition-all placeholder-gray-500"
                  disabled={loading}
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Action Button */}
            <button
              type="submit"
              disabled={loading || !urlInput.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-700 disabled:to-gray-700 text-white font-bold py-5 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 disabled:cursor-not-allowed shadow-xl disabled:shadow-none flex items-center justify-center text-lg"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing URL...
                </>
              ) : (
                <>
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Check Website
                </>
              )}
            </button>
          </form>

          {/* Error Display */}
          {error && (
            <div className="mb-8 p-5 bg-red-900/30 border-l-4 border-red-500 rounded-lg animate-pulse">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-red-300 mb-1">Error</h4>
                  <p className="text-red-200">{error}</p>
                  <p className="text-sm text-red-300 mt-2">
                    💡 Make sure the API is running in Google Colab
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Result Display */}
          {result && (
            <>
              <ResultCard result={result} />
              
              {/* New Check Button */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleNewCheck}
                  className="w-full py-4 border-2 border-gray-600 hover:border-gray-500 hover:bg-gray-700/50 rounded-xl font-bold text-gray-300 hover:text-white transition-all duration-200"
                >
                  Check Another URL
                </button>
              </div>
            </>
          )}
        </div>

        {/* Stats/Badges Section
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white font-semibold">99.2% Accuracy</span>
          </div>
          
          <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-full">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-semibold">Real-time Detection</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default DetectionSection;
