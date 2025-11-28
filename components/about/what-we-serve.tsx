import { useTranslations } from "next-intl";
import { BookOpen, Gem, Medal, Ticket } from "lucide-react";

export default function WhatWeServe() {
  const t = useTranslations();
  const items = [
    {
      icon: <Ticket className="size-8 text-primary" />,
      title: "Ultimate flexibility",
      desc: "You're in control, with free cancellation and payment options to satisfy any plan or budget.",
    },
    {
      icon: <BookOpen className="size-8 text-primary" />,
      title: "Memorable experiences",
      desc: "Browse and book tours and activities so incredible, you'll want to tell your friends.",
    },
    {
      icon: <Gem className="size-8 text-primary" />,
      title: "Quality at our core",
      desc: "High-quality standards. Millions of reviews. A tourz company.",
    },
    {
      icon: <Medal className="size-8 text-primary" />,
      title: "Award-winning support",
      desc: "New price? New plan? No problem. We're here to help, 24/7.",
    },
  ];
  return (
    <section className="container mx-auto md:py-10 py-6 space-y-4">
      <div className="space-y-2">
        <h2 className="md:text-4xl sm:text-2xl text-lg font-extrabold">
          {t("index.what_we_serve")}
        </h2>
        <p className="text-lg">{t("index.what_we_serve_desc")}</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {items.map((el, index) => (
          <div key={index} className="p-4 space-y-4">
            {el.icon}
            <h3 className="font-semibold">{el.title}</h3>
            <p className="text-primary/80">{el.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
