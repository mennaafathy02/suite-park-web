import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getLocale, getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suite Park",
  description: "Generated",
};

export default async function RootLayout({
  children,
}: // params: {locale},
{
  children: React.ReactNode;
  // params: {locale: string};
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={dir} className=" 3xl:text-[1vw]">
      <head>
        <title>Suite Park</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <meta
          name="description"
          content="A Global Team of Experts at Your Service, Our team of over 60 specialists spans the globe, bringing together an exceptional blend of skills and expertise. From consultants, engineers, and green building experts to climate scientists, ESG reporting professionals, social scientists, legal advisors, economists, accountants, graphic designers, creatives, and software developers – we cover every angle of sustainability. Our core team of 30+ consultants is dedicated to delivering customized, impactful solutions, working closely to meet your unique ESG goals."
        />
        <meta
          name="keywords"
          content="Sustainability, GRI, Masader, SASB Standars, TCFD, ESG, AA1000"
        />
        <meta
          property="og:title"
          content="Masader | Bespoke Corporate Sustainability"
        />
        <meta
          property="og:description"
          content="Our team of over 60 specialists spans the globe, bringing together an exceptional blend of skills and expertise. From consultants, engineers, and green building experts to climate scientists, ESG reporting professionals, social scientists, legal advisors, economists, accountants, graphic designers, creatives, and software developers – we cover every angle of sustainability. Our core team of 30+ consultants is dedicated to delivering customized, impactful solutions, working closely to meet your unique ESG goals."
        />
        <meta
          name="twitter:title"
          content="Masader | Bespoke Corporate Sustainability"
        />
        <meta
          name="twitter:description"
          content="A Global Team of Experts at Your Service Our team of over 60 specialists spans the globe, bringing together an exceptional blend of skills and expertise. From consultants, engineers, and green building experts to climate scientists, ESG reporting professionals, social scientists, legal advisors, economists, accountants, graphic designers, creatives, and software developers – we cover every angle of sustainability. Our core team of 30+ consultants is dedicated to delivering customized, impactful solutions, working closely to meet your unique ESG goals."
        /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div className="flex-1 pt-28 overflow-hidden">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
