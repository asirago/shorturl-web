import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shortURL | URL shortening service",
  description: "URL shortering service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <main>
          <nav className="flex">
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
            <p>Projects</p>
            <p>CV/Resume</p>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
