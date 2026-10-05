import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyActions from '@/components/MobileStickyActions';
import HotelSchema from '@/components/HotelSchema';
import { ContentProvider } from '@/context/ContentContext';

export const metadata = {
  title: {
    default: 'Dewdrop Shankh Hotel Amritsar | Luxury Budget Hotel Near Golden Temple',
    template: '%s | Dewdrop Shankh Hotel Amritsar',
  },
  description:
    'Dewdrop Shankh is a premier luxury budget hotel in Amritsar located near Golden Temple Parking Flyover on G.T. Road. Offering family rooms, executive suites, 24/7 room service, and spacious parking.',
  keywords: [
    'Dewdrop Shankh Hotel Amritsar',
    'Dewdrop Hotels Amritsar',
    'Hotel near Golden Temple Amritsar',
    'Best budget hotel in Amritsar',
    'Luxury rooms GT Road Amritsar',
    'Family rooms Amritsar hotel',
  ],
  authors: [{ name: 'Dewdrop Hotels' }],
  openGraph: {
    title: 'Dewdrop Shankh Hotel Amritsar | Luxury Budget Hotel',
    description: 'Experience refined hospitality, spacious luxury rooms, and prime location near Golden Temple Flyover in Amritsar.',
    url: 'https://dewdrophotels.co.in/',
    siteName: 'Dewdrop Shankh Hotel',
    images: [
      {
        url: 'https://dewdrophotels.co.in/public/images/imgi_4_DSC09497-scaled.jpg',
        width: 1200,
        height: 630,
        alt: 'Dewdrop Shankh Hotel Amritsar',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dewdrop Shankh Hotel Amritsar',
    description: 'Luxury budget hotel near Golden Temple Parking Flyover, Ram Talai Chownk, G.T. Road, Amritsar.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HotelSchema />
      </head>
      <body className="bg-canvas text-ink font-sans antialiased min-h-screen flex flex-col selection:bg-gold-200 selection:text-gold-700">
        <ContentProvider>
          <Navbar />
          <main className="flex-grow pt-24">{children}</main>
          <Footer />
          <MobileStickyActions />
        </ContentProvider>
      </body>
    </html>
  );
}
