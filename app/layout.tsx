import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Engines",
    template: "%s | Engines",
  },
  description: "Setup any repo with one command. Engines is an AI platform engineer that containerizes codebases, debugs Terraform code, and helps you get complex monorepos setup.",
  openGraph: {
    title: "Engines",
    description: "Setup any repo with one command. Engines is an AI platform engineer that containerizes codebases, debugs Terraform code, and helps you get complex monorepos setup.",
    url: baseUrl,
    siteName: "Engines",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Engines Dev Logo Display 3.png",
        width: 1200,
        height: 630,
        alt: "Engines - Setup any repo with one command",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="antialiased bg-[#1B1F24] text-[#EAEAEA]">
        <main className="flex-auto min-w-0 flex flex-col">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
