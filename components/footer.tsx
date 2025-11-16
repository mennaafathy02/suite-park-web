import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

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
      <div className="container mx-auto">
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
     
            >
              Our Info
            </h2>

            <div className="space-y-6 text-sm">
              {/* Address */}
              <div className="flex items-start">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-primary"
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
                  className="shrink-0 text-primary"
                />
                <a href="tel:+93123456789" className="ml-3 hover:underline">
                  (93) 123 456 789
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <Mail
                  size={20}
                  className="shrink-0 to-primary"
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
                className="text-lg font-semibold mb-6 uppercase text-primary"
              >
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      
      </div>
    </footer>
  );
}
