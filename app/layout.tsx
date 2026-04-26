import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://riverbendhvac.com'),
  title: {
    default: `${site.name} | Chattanooga's 24/7 HVAC Experts`,
    template: `%s | ${site.name}`,
  },
  description: `${site.shortPitch} Call ${site.phone} for a free estimate.`,
  keywords: [
    'Chattanooga HVAC',
    'AC repair Chattanooga',
    'Chattanooga heating',
    'HVAC contractor TN',
    'emergency HVAC Chattanooga',
    'Carrier dealer Chattanooga',
    'Hixson HVAC',
    'Ooltewah HVAC',
    'Cleveland TN HVAC',
    'Ringgold GA HVAC',
  ],
  openGraph: {
    type: 'website',
    title: `${site.name} | Chattanooga's 24/7 HVAC Experts`,
    description: site.shortPitch,
    url: 'https://riverbendhvac.com',
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Chattanooga's 24/7 HVAC Experts`,
    description: site.shortPitch,
  },
  robots: { index: true, follow: true },
};

const ldJson = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: site.name,
  description: site.shortPitch,
  url: 'https://riverbendhvac.com',
  telephone: site.phoneRaw,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 35.0456, longitude: -85.3097 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: site.google.rating,
    reviewCount: site.google.reviews,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-white text-navy-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
        {children}
      </body>
    </html>
  );
}
