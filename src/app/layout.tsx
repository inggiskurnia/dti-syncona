import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Syncona Ltd</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
