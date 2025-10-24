const isServer = typeof window === "undefined";

// When running on the server (SSR inside the frontend container), use the
// internal Docker network address to reach the backend service. In the
// browser, use the public URL exposed on the host.
const API_BASE_URL = isServer
  ? process.env.INTERNAL_API_URL || process.env.NEXT_PUBLIC_API_URL || "http://back-end:5000/api"
  : process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const API_URL = API_BASE_URL;

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "API Error");
  }

  return res.json();
}

export default fetchAPI;
