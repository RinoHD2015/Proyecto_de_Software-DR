import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AppLayout } from '@/components/app-layout';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <title>HomeFruit</title>
        <meta
          name="description"
          content="Dashboard for managing fruit sales and tasks."
        />
      </head>
      <body
        className="font-body antialiased"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <AppLayout>
          {children}
        </AppLayout>
        <Toaster />
      </body>
    </html>
  );
}
