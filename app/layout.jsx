import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import RevealOnScroll from '../components/RevealOnScroll';

export const metadata = {
  title: 'AlzaWare | Smart Glasses for Alzheimer Support',
  description: 'AlzaWare graduation project website built with Next.js for deployment on Vercel.'
};

const assetVersion = process.env.VERCEL_GIT_COMMIT_SHA || process.env.NEXT_PUBLIC_BUILD_ID || 'dev';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href={`/styles.css?v=${assetVersion}`} />
        <link rel="icon" type="image/png" href={`/assets/alzaware-head.png?v=${assetVersion}`} />
        <link rel="apple-touch-icon" href={`/assets/alzaware-head.png?v=${assetVersion}`} />
      </head>
      <body>
        <SiteHeader assetVersion={assetVersion} />
        <main className="main-content">{children}</main>
        <SiteFooter />
        <RevealOnScroll />
      </body>
    </html>
  );
}