"use server";

import { cookies } from "next/headers";

const API_URL = process.env.API_URL ||"http://ec2-35-170-64-96.compute-1.amazonaws.com:8100";

const getToken = async () => {
  const cookie = await cookies();
  return cookie.get("token")?.value || "";
}

async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const token = await getToken();

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
      ...(options.headers || {})
    },
    cache: "force-cache",      // Use cached response
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    console.error("API Error:", res.status, res.statusText);
    return null;
  }

  try {
    return await res.json();
  } catch {
    return null;
  }
}
export default apiFetch;

