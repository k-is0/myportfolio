import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: {
    default: `${profile.fullName} — ${profile.role}`,
    template: `%s — ${profile.fullName}`,
  },
  description: profile.positioning,
  metadataBase: new URL("https://kevin.example"),
  openGraph: {
    title: `${profile.fullName} — ${profile.role}`,
    description: profile.positioning,
    type: "website",
    locale: "en_GB",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <Cursor />
        <Nav />
        <main id="top" className="pt-[var(--nav-height)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
