import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="./fonts/subject.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        ></link>
        <script type="module" src="/path/to/modern.js"></script>
        <title>Syncona Ltd</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
