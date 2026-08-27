import { AppShell } from "@/components/layout/AppShell";
import { ToastContainer } from "@/components/ui/toast";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rose Associates — Prosperity Builder Scorecard",
  description: "Strategic Real Estate & Economic Development Decision Platform by Rose Associates",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased text-foreground bg-background`} suppressHydrationWarning>
        <AppShell>
          {children}
        </AppShell>
        <ToastContainer />
      </body>
    </html>
  );
}
