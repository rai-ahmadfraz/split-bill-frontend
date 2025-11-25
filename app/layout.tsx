import "./globals.css";
import ToastProvider from "./components/ToastProvider";
import { cookies } from "next/headers";
import React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const cookieStore = await cookies();
  const cookieValue = cookieStore.get("theme")?.value;

  return (
    <html lang="en" data-theme={cookieValue || "light"}>
      <body>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
