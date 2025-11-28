import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className="flex justify-center items-center container mx-auto md:pb-10 pb-6">
      <Carousel dir={dir} className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Link href={"/rooms"}>
                  <Image
                    src={"/imgs/hero-slider.png"}
                    alt="slider"
                    width={1000}
                    height={1000}
                    className="w-full rounded-xl"
                  />
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="end-0 translate-x-1/2" />
        <CarouselNext className="start-0 -translate-x-1/2" />
      </Carousel>
    </section>
  );
}
