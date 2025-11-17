import Image from "next/image";

export default function ContactHero() {
  return (
    <>
      <section className="flex relative justify-center items-center container mx-auto md:pb-10 pb-6 min-h-96 overflow-hidden">
        <div className=" relative z-20 text-white max-w-2xl space-y-4 text-center">
          <h1 className="md:text-4xl text-xl font-bold">Contact us</h1>
          <p className="text-xl">
            From local escapes to far-flung adventures, find what makes you
            happy anytime, anywhere
          </p>
        </div>
        <div className="rounded-lg overflow-hidden absolute top-0 start-[50%] -translate-x-[50%] h-full w-[calc(100%-1rem)] lg:w-[calc(100%-2rem)] xl:w-[calc(100%-3rem)] 2xl:w-[calc(100%-4rem)] mx-auto">
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
      <section className="flex relative justify-center items-center container mx-auto py-10 pb-6 min-h-96 overflow-hidden">
        <Image
          src={"/imgs/map.png"}
          alt=""
          width={1000}
          height={1000}
          quality={100}
          className="object-cover w-full
        "
        />
      </section>
    </>
  );
}
