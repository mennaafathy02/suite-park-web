import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutInfo() {
  const t = useTranslations();
  return (
    <section className="flex gap-6 flex-wrap relative justify-between items-center container mx-auto md:py-10 py-6">
      <div className="space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h2 className="md:text-4xl text-xl font-bold">
            {t("index.who")}{" "}
            <span className="text-primary">{t("index.we_are")}</span>
          </h2>
          <p className="text-xl max-w-md">{t("index.who_we_are_desc")}</p>
        </div>
        <div className="space-y-4">
          <h2 className="md:text-4xl text-xl font-bold">
            {t("index.our")}{" "}
            <span className="text-primary">{t("index.suite_park")}</span>
          </h2>
          <p className="text-xl max-w-md">
            {t('index.our_suite_park_desc')}
          </p>
        </div>
      </div>
      <div>
        <Image
          src={"/imgs/about-img.png"}
          alt=""
          width={1000}
          height={1000}
          className="max-w-xl"
        />
      </div>
    </section>
  );
}
