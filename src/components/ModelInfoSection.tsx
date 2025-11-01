// src/components/ModelInfoSection.tsx

import React from 'react';

const ModelInfoSection: React.FC = () => {
  return (
    <section id="model-info" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🤖 About Our ML Model</h2>
          <p className="text-xl text-gray-300">
            Advanced machine learning powered by XGBoost
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Accuracy */}
          <div className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700 hover:border-blue-500 transition-all">
            <div className="text-4xl font-bold text-blue-400 mb-2">97%</div>
            <div className="text-sm text-gray-400">Model Accuracy</div>
          </div>

          {/* Algorithm */}
          <div className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700 hover:border-green-500 transition-all">
            <div className="text-2xl font-bold text-green-400 mb-2">XGBoost</div>
            <div className="text-sm text-gray-400">ML Algorithm</div>
          </div>

          {/* Features */}
          <div className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700 hover:border-purple-500 transition-all">
            <div className="text-4xl font-bold text-purple-400 mb-2">17</div>
            <div className="text-sm text-gray-400">URL Features</div>
          </div>

          {/* Speed */}
          <div className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700 hover:border-yellow-500 transition-all">
            <div className="text-4xl font-bold text-yellow-400 mb-2">&lt;1s</div>
            <div className="text-sm text-gray-400">Detection Speed</div>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-center">Analyzed Features</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span className="text-gray-300">URL Length & Structure</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span className="text-gray-300">Domain Characteristics</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span className="text-gray-300">Special Character Patterns</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span className="text-gray-300">Protocol Security (HTTPS)</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span className="text-gray-300">IP Address Detection</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span className="text-gray-300">Subdomain Analysis</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span className="text-gray-300">Path Complexity</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span className="text-gray-300">Suspicious Patterns</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span className="text-gray-300">URL Shortening Detection</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span className="text-gray-300">And 8 more features...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-6">Built With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">Python</span>
            <span className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">XGBoost</span>
            <span className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">scikit-learn</span>
            <span className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">Flask API</span>
            <span className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">React + TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelInfoSection;
