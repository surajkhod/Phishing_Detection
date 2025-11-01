// src/hooks/usePhishingDetection.ts

import { useState, useCallback } from 'react';
import { checkPhishingUrl, PredictionResponse } from '../lib/apiService';

interface UsePhishingDetectionReturn {
  loading: boolean;
  result: PredictionResponse | null;
  error: string | null;
  checkUrl: (url: string) => Promise<void>;
  reset: () => void;
}

/**
 * Custom hook for phishing URL detection
 * Manages API calls, loading states, and results
 */
export const usePhishingDetection = (): UsePhishingDetectionReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<PredictionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Check if a URL is phishing
   */
  const checkUrl = useCallback(async (url: string) => {
    // Reset previous state
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Validate URL format
      if (!url.trim()) {
        throw new Error('Please enter a URL');
      }

      // Call API
      const response = await checkPhishingUrl(url);
      setResult(response);
    } catch (err) {
      // Handle errors
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'An unexpected error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Reset all state to initial values
   */
  const reset = useCallback(() => {
    setLoading(false);
    setResult(null);
    setError(null);
  }, []);

  return {
    loading,
    result,
    error,
    checkUrl,
    reset,
  };
};
