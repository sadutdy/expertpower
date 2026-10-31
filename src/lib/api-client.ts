/**
 * Expert Power — API Client
 * =========================
 * Frontend client for communicating with the Express contact API backend.
 *
 * The API base URL is configured via environment variable.
 * Falls back to Google Forms if the API is unavailable (for backward compatibility).
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
  /** Honeypot field — must stay empty. Filled in by bots, never by real users. */
  website?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
  details?: { field: string; message: string }[];
}

/**
 * Submit a contact form enquiry to the Next.js API route.
 * @returns Promise resolving to the API response
 * @throws Error if the network request fails or server returns error
 */
export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  const result: ApiResponse = await response.json();

  if (!response.ok) {
    const errorMessage = result.error || `Server error (${response.status})`;
    throw new ApiError(errorMessage, response.status, result.details);
  }

  return result;
}

/**
 * Custom error class for API failures.
 * Includes the HTTP status code and validation details if available.
 */
export class ApiError extends Error {
  statusCode: number;
  details?: { field: string; message: string }[];

  constructor(message: string, statusCode: number, details?: { field: string; message: string }[]) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.details = details;
  }
}
