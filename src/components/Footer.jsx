import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href) => (e) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-ink text-parchment/80">
      <div className="pole-strip h-2 w-full" />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-parchment p-1.5">
                <Image
                  src="/logo/logo-black.png"
                  alt="Persian Salon logo"
                  width={38}
                  height={38}
                  className="object-contain"
                />
              </span>
              <span className="font-display text-2xl tracking-wide text-parchment">
                Persian Salon
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-parchment/60">
              Camp, Pune&rsquo;s trusted destination for hair, skin, bridal,
              and grooming — crafting fresh looks since 2009.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xl tracking-wide text-parchment">
              QUICK LINKS
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick(link.href)}
                    className="text-sm text-parchment/60 transition-colors hover:text-barber-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl tracking-wide text-parchment">
              FOLLOW US
            </h4>
            <p className="mt-4 text-sm text-parchment/60">
              Near Garden Vada Pav, Dastur Meher Road, Camp, Pune – 411001
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Persian Salon on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-parchment/15 transition-colors hover:border-barber hover:text-barber-light"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Persian Salon on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-parchment/15 transition-colors hover:border-barber hover:text-barber-light"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-parchment/10 pt-6 text-xs text-parchment/50 sm:flex-row">
          <p>&copy; {year} Persian Salon. All rights reserved.</p>
          <p>Designed with care for a fresh look, every time.</p>
        </div>
      </div>
    </footer>
  );
}
