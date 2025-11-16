import Image from "next/image";

export default function AboutInfo() {
  return (
    <section className="flex gap-6 flex-wrap relative justify-between items-center container mx-auto md:py-10 py-6">
      <div className="space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h2 className="md:text-4xl text-xl font-bold">
            Who <span className="text-primary">We Are?</span>
          </h2>
          <p className="text-xl max-w-md">
            We&lsquo;re all about creating unforgettable experiences for our
            guests. Our journey began with a simple passion for exploring the
            beauty of the World.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="md:text-4xl text-xl font-bold">
            Our <span className="text-primary">suite park</span>
          </h2>
          <p className="text-xl max-w-md">
            We&lsquo;re all about creating unforgettable experiences for our
            guests. Our journey began with a simple passion for exploring the
            beauty of the World.
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
