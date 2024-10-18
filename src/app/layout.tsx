import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="./fonts/subject.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <Script
          type="module"
          src="/path/to/modern.js"
          strategy="beforeInteractive"
        />
        <title>Syncona Ltd</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
