import Head from 'next/head';
import Script from 'next/script';
import Header from "@/components/header";
import { Nunito } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Sameer Ali | Software Engineer ",
  description: "Sameer Ali is a skilled software engineer at Utthan IT Solution, specializing in web development, mobile applications, and more. Explore my portfolio to see my latest projects and learn more about my skills.",
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
        <meta name="keywords" content="sameer ali, samprogrammer, software developer, web development, mobile applications, Utthan IT Solution" />
        <meta name="google-site-verification" content={metadata.googleSiteVerification} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourportfolio.com" />

        {/* Structured Data for SEO */}
        
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
        <Script type="application/ld+json" id="structured-data">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sameer Ali",
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Utthan IT Solution"
              },
              "url": "https://yourportfolio.com",
              "sameAs": [
                "https://www.linkedin.com/in/sameer-ali/",
                "https://github.com/samprogrammer"
              ]
            }
          `}
        </Script>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-8M18XZLS91`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8M18XZLS91', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
