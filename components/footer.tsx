import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";

// --- STYLING CONSTANTS ---
const DARK_BG = "#101719"; // Very dark background color
const TEXT_COLOR = "#E0E7E9"; // Light gray text color
const LIGHT_GREEN = "#387040"; // Green for accents and links

// --- FOOTER DATA ---
const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Email Marketing", href: "#" },
      { name: "Campaigns", href: "#" },
      { name: "Branding", href: "#" },
      { name: "Offline", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Our Story", href: "#" },
      { name: "Benefits", href: "#" },
      { name: "Team", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "FAQs", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full md:py-10 py-8 bg-[#1C262F] text-white">
      <div className="container">
        {/*
          MAIN GRID STRUCTURE
          Default (mobile): 1 column
          Medium screens (md): 2 columns
          Large screens (lg): 4 columns
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {/* Column 1: Our Info (Contact Details) */}
          <div className="lg:col-span-1">
            <h2
              className="text-4xl sm:text-5xl mb-8 font-serif font-light"
              style={{ color: TEXT_COLOR }}
            >
              Our Info
            </h2>

            <div className="space-y-6 text-sm">
              {/* Address */}
              <div className="flex items-start">
                <MapPin
                  size={20}
                  className="mt-1 flex-shrink-0"
                  style={{ color: LIGHT_GREEN }}
                />
                <div className="ml-3">
                  <p>Mellow hotel & resort</p>
                  <p>123 Serenity Avenue</p>
                  <p>Tranquil City, Peaceful State</p>
                  <p>Relaxingland</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <Phone
                  size={20}
                  className="flex-shrink-0"
                  style={{ color: LIGHT_GREEN }}
                />
                <a href="tel:+93123456789" className="ml-3 hover:underline">
                  (93) 123 456 789
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <Mail
                  size={20}
                  className="flex-shrink-0"
                  style={{ color: LIGHT_GREEN }}
                />
                <a
                  href="mailto:yourinfo@yourmail.com"
                  className="ml-3 hover:underline"
                >
                  yourinfo@yourmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Columns 2, 3, 4: Link Groups */}
          {footerLinks.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3
                className="text-lg font-semibold mb-6 uppercase"
                style={{ color: LIGHT_GREEN }}
              >
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                      style={{ color: TEXT_COLOR }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>{" "}
        {/* End of Main Grid */}
        {/* Separator and Bottom Bar (Placeholder for Social/Copyright) */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between text-xs">
          <p>
            &copy; {new Date().getFullYear()} Mellow Hotel & Resort. All rights
            reserved.
          </p>

          {/* Social Icons Placeholder */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              aria-label="Youtube"
              className="hover:text-white transition-colors"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
