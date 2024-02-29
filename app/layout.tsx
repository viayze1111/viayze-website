import React, { PropsWithChildren } from "react";
import "@/styles/global.css";
import Navbar from "@/components/widgets/Navbar";
import Footer from "@/components/widgets/Footer";

export const dynamic = "force-dynamic";

const meta = {
  title: "Viayze | Advanced AI Solutions & Automation",
  description:
    "Tailored Support for Efficient, Cost-effective, Satisfying Customer Service.",
  robots: "follow, index",
  favicon: "/favicon.ico",
  type: "website",
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  robots: meta.robots,
  favicon: meta.favicon,
  metadataBase: new URL(`${process.env.NEXT_APP_URL}`),
  type: meta.type,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: meta.type,
    site_name: meta.title,
  },
  twitter: {
    card: "summary_large_image",
    // site: '@vercel',
    title: meta.title,
    description: meta.description,
  },
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script> */}
      <body className="loading">
        <Navbar />
        <main
          id="skip"
          className="md:min-h[calc(100dvh-5rem)] min-h-[calc(100dvh-4rem)]"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
