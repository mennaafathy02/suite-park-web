import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

// // Data for social links (using simple SVG icons or linking to an icon library)
// const socialLinks = [
//   { icon: "fa-facebook-f", url: "#" },
//   { icon: "fa-instagram", url: "#" },
//   { icon: "fa-twitter", url: "#" },
//   { icon: "fa-linkedin-in", url: "#" },
//   { icon: "fa-youtube", url: "#" },
// ];

const NewsletterFooter = () => {
  // Custom colors matching your theme

  return (
    <section className="container md:py-10 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* --- Left Column: About/Info --- */}
        <div className="flex flex-col gap-4">
          {/* Logo/Brand */}
          <Image
            src={"/imgs/logo.svg"}
            alt=""
            width={1000}
            height={1000}
            className="md:w-40 w-24"
          />

          {/* Description Text */}
          <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
            Welcome to Hotel Mellow, where comfort meets tranquility. Nestled in
            the heart of a bustling city, our hotel offers a peaceful retreat
            for both. Welcome to Hotel Mellow, where comfort meets
            tranquility...
            {/* The text is repetitive in your image; this is a truncated version */}
          </p>

          {/* Social Share Section */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-4 ">Social Share</h3>
            <div className="flex space-x-4">
              <ul className="flex md:gap-8 gap-2 items-center">
                <li>
                  <Link href={"https://facebook.com"}>
                    <Facebook className="fill-primary text-primary md:size-5 size-3" />
                  </Link>
                </li>
                <li>
                  <Link href={"https://facebook.com"}>
                    <Instagram className="text-primary md:size-5 size-3" />
                  </Link>
                </li>
                <li>
                  <Link href={"https://facebook.com"}>
                    <Twitter className="fill-primary text-primary md:size-5 size-3" />
                  </Link>
                </li>
                <li>
                  <Link href={"https://facebook.com"}>
                    <Linkedin className="fill-primary text-primary md:size-5 size-3" />
                  </Link>
                </li>
                <li>
                  <Link href={"https://facebook.com"}>
                    <Youtube className="text-primary md:size-5 size-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Right Column: Newsletter Form --- */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-6">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Sign up to our newsletter to receive latest news.
          </p>

          <form className="space-y-4">
            {/* Input: First Name */}
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
            {/* Input: Last Name */}
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
            {/* Input: Email Address */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full inline-flex rounded-none bg-primary-foreground items-center justify-center mt-6 px-6 py-3 text-gray-700 h-auto  shadow-none transition-colors duration-300"
            >
              Subscribe Newsletter
              <ArrowRight className="w-5 h-5 ms-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterFooter;
