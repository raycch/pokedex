import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Header from "./components/header";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppShell, AppShellMain, Center } from "@mantine/core";
import names from "./names.json";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokédex",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: true,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppShell padding="md" header={{ height: 48 }}>
            <Header pokemons={names} />
            <AppShellMain display="flex">
              <Center flex={1}>{children}</Center>
            </AppShellMain>
          </AppShell>
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
