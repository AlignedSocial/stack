import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumen Aesthetics — Medical Aesthetics Studio",
  description:
    "A considered medical aesthetics practice in the heart of the city. Board-certified care, editorial results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Inter:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-bone text-ink antialiased">{children}</body>
    </html>
  );
}
