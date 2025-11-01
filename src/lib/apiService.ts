// src/lib/apiService.ts

/**
 * Phishing Detection API Service
 * Communicates with Flask backend hosted on ngrok
 */

// ⚠️ REPLACE WITH YOUR NGROK URL FROM COLAB
const API_BASE_URL = 'https://erich-flattish-corrinne.ngrok-free.dev'; // Example: 'https://abc123-45-67-890-123.ngrok-free.app'

// Type definitions
export interface PredictionRequest {
  url: string;
}

export interface PredictionResponse {
  url: string;
  prediction: 'phishing' | 'legitimate';
  is_phishing: boolean;
  is_safe: boolean;
  confidence: {
    legitimate: number;
    phishing: number;
  };
  risk_level: 'high' | 'low';
  status: 'success';
  timestamp: string;
}

export interface ApiError {
  error: string;
  status: 'failed';
  message?: string;
}

/**
 * Check if a URL is phishing or legitimate
 */
export const checkPhishingUrl = async (
  url: string
): Promise<PredictionResponse> => {
  try {
    if (!url || url.trim() === '') {
      throw new Error('URL cannot be empty');
    }

    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: url.trim() }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to check URL');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API Error: ${error.message}`);
    }
    throw new Error('Failed to connect to the detection API');
  }
};

/**
 * Check if API is healthy and reachable
 */
export const checkApiHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) return false;
    
    const data = await response.json();
    return data.status === 'healthy';
  } catch (error) {
    console.error('API health check failed:', error);
    return false;
  }
};

/**
 * Get API base URL (useful for debugging)
 */
export const getApiUrl = (): string => {
  return API_BASE_URL;
};
