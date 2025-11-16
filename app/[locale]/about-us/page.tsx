import AboutHero from "@/components/about/about-hero";
import AboutInfo from "@/components/about/about-info";
import WhatWeServe from "@/components/about/what-we-serve";
import NewsletterFooter from "@/components/home/newsletter";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <AboutHero />
      <AboutInfo />
      <WhatWeServe />
      <NewsletterFooter />
    </>
  );
}
