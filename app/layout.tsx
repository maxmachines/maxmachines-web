import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { EnquiryModalProvider } from "@/context/EnquiryModalContext";
import EnquiryModal from "@/components/EnquiryModal";
import SchemaMarkup from "@/components/SchemaMarkup";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Max Machine Tools",
  "url": "https://www.maxmachines.in",
  "logo": "https://www.maxmachines.in/logo.png",
  "description": "Industrial machinery supplier in Chennai and Ahmedabad. Established 1963. Pan-India supply and export.",
  "foundingDate": "1963",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "No 84, Armenian Street, Parrys",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600001",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Chinubhai House, Navrangpura",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-99620-61514",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Tamil", "Gujarati"]
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/maxmachinetools",
    "https://www.youtube.com/@MaxMachineTools",
    "https://www.facebook.com/MaxMachineToolsModi",
    "https://www.instagram.com/MaxMachineToolsModi"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Max Machine Tools",
  "image": "https://www.maxmachines.in/logo.png",
  "@id": "https://www.maxmachines.in",
  "url": "https://www.maxmachines.in",
  "telephone": "+91-99620-61514",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No 84, Armenian Street, Parrys",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.094066,
    "longitude": 80.285988
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "10:00",
    "closes": "19:00"
  }
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Max Machines — Legacy of Precision Since 1963",
  description:
    "Max Machines is a leading industrial machinery supplier based in Chennai and Ahmedabad, supplying Lathe, Drilling, Milling, Power Press, Bandsaw, and Laser machines across India since 1963.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SchemaMarkup data={organizationSchema} />
        <SchemaMarkup data={localBusinessSchema} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3H083HF63Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3H083HF63Q');
          `}
        </Script>
        <EnquiryModalProvider>
          {children}
          <EnquiryModal />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}
