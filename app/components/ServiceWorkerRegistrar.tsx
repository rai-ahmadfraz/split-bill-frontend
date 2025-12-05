"use client"; // 👈 important: marks this as a client component

import { useEffect } from "react";

export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => console.log("Service Worker registered"))
        .catch(console.error);
    }
  }, []);

  return null; // no UI needed
}
