import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutHero() {
  const t = useTranslations();
  return (
    <>
      <section className="flex relative justify-center items-center container mx-auto md:pb-10 pb-6 min-h-96 overflow-hidden">
        <div className=" relative z-20 text-white max-w-2xl space-y-4 text-center">
          <h1 className="md:text-4xl text-xl font-bold">
            {t("index.aboutus")}
          </h1>
          <p className="text-xl">{t("index.aboutus_desc")}</p>
        </div>
        <div className="rounded-lg overflow-hidden absolute top-0 ltr:end-1/2 rtl:start-1/2  translate-x-[50%] h-full w-[calc(100%-1rem)] lg:w-[calc(100%-2rem)] xl:w-[calc(100%-3rem)] 2xl:w-[calc(100%-4rem)] mx-auto">
          <Image
            src={"/imgs/bg-hero.jpg"}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
          <div className="container z-10 mx-auto bg-[#022C223D] xl overflow-hidden absolute top-0 start-0 h-full w-full"></div>
        </div>
      </section>
    </>
  );
}
