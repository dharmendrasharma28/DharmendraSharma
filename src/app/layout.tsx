import type { Metadata } from "next";
import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Dharmendra Sharma - Mobile & Platform Engineering Lead, Android & iOS",
  description:
    "Dharmendra Sharma — Manager, Mobile & Platform Engineering at Mahindra Logistics. 13+ years shipping Android & iOS products and leading engineering teams.",
  openGraph: {
    title: "Dharmendra Sharma",
    description: "13+ years of Android & iOS. Leading mobile & platform engineering at Mahindra Logistics.",
    images: ["/dharmendra.jpg"],
  },
};

// Runs before paint so the stored theme never flashes.
const themeScript = `
(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full antialiased bg-bg text-ink font-body" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
