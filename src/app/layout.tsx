import "./globals.css";
import type { ReactNode } from "react";
import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/next';
export const metadata = {
  title: "Lingam Estate",
  description:
    "Strategic land advisory for industrial and infrastructure investments in Tamil Nadu's emerging growth corridors.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#db7137" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="bg-background text-foreground">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
