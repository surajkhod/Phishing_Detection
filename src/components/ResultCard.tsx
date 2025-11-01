// src/components/ResultCard.tsx

import React from 'react';
import { PredictionResponse } from '../lib/apiService';

interface ResultCardProps {
  result: PredictionResponse;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const isPhishing = result.is_phishing;
  
  return (
    <div
      className={`p-8 rounded-2xl border-2 transition-all duration-500 ${
        isPhishing
          ? 'bg-gradient-to-br from-red-900/40 to-red-800/30 border-red-500/50'
          : 'bg-gradient-to-br from-green-900/40 to-green-800/30 border-green-500/50'
      }`}
    >
      {/* Header */}
      <div className="flex items-start mb-6">
        <div className="text-5xl mr-5">
          {isPhishing ? '🚨' : '✅'}
        </div>
        <div className="flex-1">
          <h3
            className={`text-3xl font-bold mb-3 ${
              isPhishing ? 'text-red-300' : 'text-green-300'
            }`}
          >
            {isPhishing ? 'PHISHING DETECTED!' : 'URL IS SAFE'}
          </h3>
          <div className="bg-black/30 p-3 rounded-lg border border-gray-700">
            <p className="text-sm text-gray-400 font-medium mb-1">Analyzed URL:</p>
            <p className="text-gray-200 break-all font-mono text-sm">
              {result.url}
            </p>
          </div>
        </div>
      </div>

      {/* Confidence Scores */}
      <div className="space-y-4 mb-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-300">
              ✅ Legitimate Confidence:
            </span>
            <span className="font-bold text-lg text-green-400">
              {result.confidence.legitimate.toFixed(2)}%
            </span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden shadow-inner">
            <div
              className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
              style={{ width: `${result.confidence.legitimate}%` }}
            >
              {result.confidence.legitimate > 15 && (
                <span className="text-white text-xs font-bold">
                  {result.confidence.legitimate.toFixed(0)}%
                </span>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-300">
              🚨 Phishing Confidence:
            </span>
            <span className="font-bold text-lg text-red-400">
              {result.confidence.phishing.toFixed(2)}%
            </span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden shadow-inner">
            <div
              className="bg-gradient-to-r from-red-500 to-red-400 h-4 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
              style={{ width: `${result.confidence.phishing}%` }}
            >
              {result.confidence.phishing > 15 && (
                <span className="text-white text-xs font-bold">
                  {result.confidence.phishing.toFixed(0)}%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Warning Message for Phishing */}
      {isPhishing && (
        <div className="mb-6 p-5 bg-red-900/50 border-2 border-red-500/50 rounded-xl">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="font-bold text-red-300 text-lg mb-2">⚠️ DANGER - Do Not Proceed!</h4>
              <ul className="text-red-200 text-sm space-y-1 list-disc list-inside">
                <li>Do NOT enter passwords or login credentials</li>
                <li>Do NOT provide personal information</li>
                <li>Do NOT enter credit card or banking details</li>
                <li>Close this website immediately</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Safe Message */}
      {!isPhishing && (
        <div className="mb-6 p-5 bg-green-900/50 border-2 border-green-500/50 rounded-xl">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="font-bold text-green-300 text-lg mb-2">✅ URL Appears Safe</h4>
              <p className="text-green-200 text-sm">
                This URL has been analyzed and appears to be legitimate. However, always exercise caution when entering sensitive information online.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Risk Level Badge & Metadata */}
      <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2 border-gray-700">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-400">Risk Level:</span>
          <span
            className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase shadow-sm ${
              result.risk_level === 'high'
                ? 'bg-red-500/20 text-red-300 border-2 border-red-500/50'
                : 'bg-green-500/20 text-green-300 border-2 border-green-500/50'
            }`}
          >
            {result.risk_level}
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            {new Date(result.timestamp).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
