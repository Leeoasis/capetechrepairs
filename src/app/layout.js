import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import StructuredData from "./components/StructuredData";
import WhatsAppWidget from "./components/WhatsAppWidget";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });
const description =
  "Expert laptop, desktop, TV, monitor and gaming console repair in Cape Town. Honest diagnostics, transparent pricing and quality parts.";

export const metadata = {
  metadataBase: new URL("https://capetechrepairs.co.za"),
  title: {
    default: "Cape Tech Repairs | Electronics Repair in Cape Town",
    template: "%s | Cape Tech Repairs",
  },
  description,
  applicationName: "Cape Tech Repairs",
  keywords: [
    "electronics repair Cape Town",
    "laptop repair Bellville",
    "computer repair Cape Town",
    "TV repair Cape Town",
    "gaming console repair",
    "board-level repair",
    "refurbished laptops Cape Town",
  ],
  authors: [
    { name: "Cape Tech Repairs", url: "https://capetechrepairs.co.za" },
  ],
  creator: "Cape Tech Repairs",
  publisher: "Cape Tech Repairs",
  category: "Electronics repair",
  icons: {
    icon: [{ url: "/cape-tech-logo.png", type: "image/png" }],
    shortcut: ["/cape-tech-logo.png"],
    apple: [{ url: "/cape-tech-logo.png", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "/",
    siteName: "Cape Tech Repairs",
    title: "Cape Tech Repairs | Electronics Repair in Cape Town",
    description,
    images: [
      {
        url: "/images/repair-hero.png",
        width: 1536,
        height: 1024,
        alt: "Cape Tech electronics repair technician at work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cape Tech Repairs",
    description,
    images: ["/images/repair-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  themeColor: "#07111f",
  colorScheme: "light",
};

const business = {
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  "@id": "https://capetechrepairs.co.za/#business",
  name: "Cape Tech Repairs",
  url: "https://capetechrepairs.co.za",
  logo: "https://capetechrepairs.co.za/cape-tech-logo.png",
  image: "https://capetechrepairs.co.za/images/repair-hero.png",
  description,
  telephone: "+27648188737",
  email: "Info@capetechrepairs.co.za",
  address: {
    "@type": "PostalAddress",
    streetAddress: "147 Voortrekker Road",
    addressLocality: "Bellville",
    addressRegion: "Western Cape",
    postalCode: "7530",
    addressCountry: "ZA",
  },
  areaServed: [
    { "@type": "City", name: "Cape Town" },
    { "@type": "AdministrativeArea", name: "Western Cape" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+27648188737",
    contactType: "customer service",
    areaServed: "ZA",
    availableLanguage: "English",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electronics repair services",
    itemListElement: [
      "Laptop and desktop repair",
      "TV and monitor repair",
      "Gaming console repair",
      "Audio equipment repair",
      "Board-level electronics repair",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://capetechrepairs.co.za/#organization",
  name: "Cape Tech Repairs",
  url: "https://capetechrepairs.co.za",
  logo: {
    "@type": "ImageObject",
    url: "https://capetechrepairs.co.za/cape-tech-logo.png",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+27648188737",
    contactType: "customer service",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-ZA">
      <body className={manrope.className}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <StructuredData data={[business, organization]} />
        <Navbar />
        <div id="main-content">{children}</div>
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}
