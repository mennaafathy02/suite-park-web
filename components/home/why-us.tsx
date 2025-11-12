import { BookOpen, Gem, Medal, Ticket } from "lucide-react";
import { useTranslations } from "next-intl";
// import Image from "next/image";

export default function WhyUs() {
  const t = useTranslations();
  const items = [
    {
      icon: <Ticket className="size-8 text-primary" />,
      title: "Ultimate flexibility",
      desc: "You&lsquo;re in control, with free cancellation and payment options to satisfy any plan or budget.",
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
    <div className="md:px-8 px-6 py-10 space-y-4">
      <h2 className="md:text-4xl text-2xl font-extrabold">
        {t("index.whyus")}
      </h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
        {items.map((el, index) => (
          <div key={index} className="p-4 space-y-4">
            {el.icon}
            <h3 className="font-semibold">{el.title}</h3>
            <p className="text-primary/80">{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
