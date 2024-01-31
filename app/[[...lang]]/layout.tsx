import React from 'react';
import '@/styles/global.css';
import { Inter } from 'next/font/google';
// import Script from 'next/script';
import Navbar from '@/components/widgets/Navbar';
import Footer from '@/components/widgets/Footer';
import { getDictionary } from './dictionaries';
import { TLocale } from '@/middleware';

export const dynamic = 'force-dynamic';

const meta = {
  title: 'Viayze | Advanced AI Solutions & Automation',
  description:
    'Tailored Support for Efficient, Cost-effective, Satisfying Customer Service.',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  type: 'website'
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
    site_name: meta.title
  },
  twitter: {
    card: 'summary_large_image',
    // site: '@vercel',
    title: meta.title,
    description: meta.description
  }
};

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter'
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: TLocale
  };
}
console.clear();
console.log("Realised by New Web Order: https://www.newweborder.co/")
const RootLayout: React.FC<RootLayoutProps> = async ({ children, params }) => {
  const dict = await getDictionary(params.lang || 'en');

  return (
    <html lang={params.lang} className={`${inter.variable} font-sans`}>
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
        <Navbar data={dict} />
        <main
          id="skip"
          className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
        >
          {children}
        </main>
        <Footer data={dict} />
      </body>
    </html>
  );
};

export default RootLayout;

