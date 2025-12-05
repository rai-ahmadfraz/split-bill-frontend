import "./globals.css";
import ToastProvider from "./components/ToastProvider";
import { getTheme } from "@/app/api-services/commonService";
import React from "react";
import FlashMessageWrapper from "./components/FlashMessageWrapper";
import ServiceWorkerRegistrar from "./components/ServiceWorkerRegistrar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const theme = await getTheme();
  return (
    <html lang="en" data-theme={theme || "light"}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <FlashMessageWrapper/>
        {children}
        <ToastProvider />
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
