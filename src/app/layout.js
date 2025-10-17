import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Client } from "@/redux/provider/Client";
import { Toaster } from "sonner";
import Header from "@/components/comman/Header";
import Footer from "@/components/comman/Footer";
import { siteConfig, defaultMetadata, getStructuredAddress } from "@/lib/utils";
import AosProvider from "@/lib/AosProvider";
import { cookies } from "next/headers";
import { cache } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  ...defaultMetadata,
  title: {
    default: `${siteConfig.name} - Premium Jewellery Store in Jodhpur | Gold, Silver & Diamond Jewellery`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
  alternates: {
    canonical: siteConfig.url,
  },
};

// Organization Schema Component
function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    foundingDate: siteConfig.business.foundedYear,
    priceRange: siteConfig.business.priceRange,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: getStructuredAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.2389",
      longitude: "73.0243",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
      siteConfig.social.pinterest,
      siteConfig.social.youtube,
    ],
    areaServed: {
      "@type": "City",
      name: "Jodhpur",
      containedIn: {
        "@type": "State",
        name: "Rajasthan",
        containedIn: {
          "@type": "Country",
          name: "India",
        },
      },
    },
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
    currenciesAccepted: "INR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Schema Component
function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/product-listing?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const getUser = cache(async () => {
  const cookie = await cookies();
  const token = cookie.get("user");

  if (!token) return null;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/website/user/profile`,
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      method: "post",
    }
  );
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  if (!response.ok || !data._status) {
    return null;
  }
  return data;
});

async function getCart() {
  const cookie = await cookies();
  const token = cookie.get("user");

  if (!token) return null;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/website/cart/view`,
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      method: "post",
    }
  );
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  if (!response.ok || !data._status) {
    return null;
  }
  return data;
}

async function getWishlist() {
  const cookie = await cookies();
  const token = cookie.get("user");

  if (!token) return null;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/website/wishlist/view`,
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      method: "post",
    }
  );
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  if (!response.ok || !data._status) {
    return null;
  }
  return data;
}

export default async function RootLayout({ children }) {
  const user = await getUser();
  const cart = await getCart();
  const wishlist = await getWishlist();

  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <link rel="canonical" href={siteConfig.url} />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Jodhpur" />
        <meta name="geo.position" content="26.2389;73.0243" />
        <meta name="ICBM" content="26.2389, 73.0243" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased !overflow-x-hidden`}
      >
        <Client>
          <Toaster />
          <Header data={user } cart={cart} wishlist={wishlist} />
          <AosProvider>{children}</AosProvider>
          <Footer />
        </Client>
      </body>
    </html>
  );
}
