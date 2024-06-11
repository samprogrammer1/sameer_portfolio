import Head from 'next/head';
import Header from "@/components/header";
import { Nunito } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Sameer Ali - Software Engineer | Utthan IT Solution",
  description: "Sameer Ali is a skilled software engineer at Utthan IT Solution, specializing in web development, mobile applications, and more.",
  googleSiteVerification: "17Xz9xFTbYcuQdDNt8VDQzQRrvt8movxDAXIbbp6P3Q",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="sameer, sameer ali , samprogrammer, software developer" />
        <meta name="google-site-verification" content={metadata.googleSiteVerification} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8M18XZLS91"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8M18XZLS91');
            `,
          }}
        />
      </Head>
      <body
        className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        
      </body>
    </html>
  );
}
