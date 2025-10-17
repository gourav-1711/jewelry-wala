import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// SEO Configuration for Jewellery Walla
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME || "Jewellery Walla",
  legalName:
    process.env.NEXT_PUBLIC_BUSINESS_LEGAL_NAME ||
    "Jewellery Walla Private Limited",
  description:
    process.env.NEXT_PUBLIC_BUSINESS_DESCRIPTION ||
    "Premium jewellery store in Jodhpur offering exquisite gold, silver, and diamond jewellery for men and women. Discover unique designs and traditional craftsmanship.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.jewellerywalla.com",
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || "jewellerywalla.com",

  contact: {
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "info@jewellerywalla.com",
    phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+91-291-1234567",
    mobile: process.env.NEXT_PUBLIC_BUSINESS_MOBILE || "+91-9876543210",
    whatsapp: process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP || "+919876543210",
  },

  address: {
    street:
      process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_STREET ||
      "123, Clock Tower Road",
    locality:
      process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LOCALITY || "Sojati Gate",
    city: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_CITY || "Jodhpur",
    state: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_STATE || "Rajasthan",
    postalCode:
      process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_POSTAL_CODE || "342001",
    country: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_COUNTRY || "India",
  },

  social: {
    facebook:
      process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ||
      "https://facebook.com/jewellerywalla",
    instagram:
      process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ||
      "https://instagram.com/jewellerywalla",
    twitter:
      process.env.NEXT_PUBLIC_SOCIAL_TWITTER ||
      "https://twitter.com/jewellerywalla",
    pinterest:
      process.env.NEXT_PUBLIC_SOCIAL_PINTEREST ||
      "https://pinterest.com/jewellerywalla",
    youtube:
      process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE ||
      "https://youtube.com/@jewellerywalla",
  },

  business: {
    foundedYear: process.env.NEXT_PUBLIC_BUSINESS_FOUNDED_YEAR || "2020",
    priceRange: process.env.NEXT_PUBLIC_BUSINESS_PRICE_RANGE || "₹₹₹",
    hoursWeekday:
      process.env.NEXT_PUBLIC_BUSINESS_HOURS_WEEKDAY || "10:00 AM - 8:00 PM",
    hoursWeekend:
      process.env.NEXT_PUBLIC_BUSINESS_HOURS_WEEKEND || "10:00 AM - 9:00 PM",
  },

  keywords: [
    "jewellery store jodhpur",
    "gold jewellery jodhpur",
    "silver jewellery jodhpur",
    "diamond jewellery jodhpur",
    "traditional jewellery rajasthan",
    "bridal jewellery jodhpur",
    "men jewellery",
    "women jewellery",
    "jewellery shop near me",
    "online jewellery store",
    "rajasthani jewellery",
    "kundan jewellery",
    "meenakari jewellery",
    "wedding jewellery jodhpur",
    "jewellery walla",
    "personalised jewellery",
    "gift items",
    "track your order",
  ],

  categories: [
    "Rings",
    "Necklaces",
    "Earrings",
    "Bracelets",
    "Bangles",
    "Pendants",
    "Chains",
    "Mangalsutra",
    "Nose Pins",
    "Anklets",
    "Bridal Sets",
    "Men's Jewellery",
    "Women's Jewellery",
    "Personalised Jewellery",
    "Gift Items",
    "Track Your Order",
    "Contact Us",
  ],
};

// Get full address as string
export const getFullAddress = () => {
  const { street, locality, city, state, postalCode, country } =
    siteConfig.address;
  return `${street}, ${locality}, ${city}, ${state} ${postalCode}, ${country}`;
};

// Get structured address for schema
export const getStructuredAddress = () => ({
  "@type": "PostalAddress",
  streetAddress: siteConfig.address.street,
  addressLocality: siteConfig.address.city,
  addressRegion: siteConfig.address.state,
  postalCode: siteConfig.address.postalCode,
  addressCountry: siteConfig.address.country,
});

// Default metadata for pages
export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Premium Jewellery Store in Jodhpur`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} - Premium Jewellery Store in Jodhpur`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Premium Jewellery Store in Jodhpur`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpg`],
    creator: "@jewellerywalla",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};
