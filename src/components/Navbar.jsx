import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 animate-dropIn bg-ink transition-shadow duration-300 ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-3"
        >
          {/* Logo ringed with a spinning barber-pole stripe border */}
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full p-[3px]">
            <span className="pole-strip absolute inset-0 rounded-full" />
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-parchment p-1.5">
              <Image
                src="/logo/logo-black.png"
                alt="Persian Salon logo"
                width={40}
                height={40}
                className="h-full w-full object-contain"
                priority
              />
            </span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-3xl tracking-wide text-parchment">
              Persian Salon
            </span>
            <span className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-brass">
              Est. 2009 &middot; Camp, Pune
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative text-sm font-medium uppercase tracking-wide text-parchment/85 transition-colors hover:text-barber-light after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-barber after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="group btn-primary !px-6 !py-2.5"
          >
            <span className="btn-shine-sweep" />
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-parchment/25 text-parchment lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-ink transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-96 shadow-soft" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-parchment/10 px-5 pb-5 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium uppercase tracking-wide text-parchment/85 hover:bg-parchment/10 hover:text-barber-light"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="group btn-primary w-full"
            >
              <span className="btn-shine-sweep" />
              Book Appointment
            </a>
            <a
              href="tel:+910000000000"
              className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-brass"
            >
              <Phone size={15} /> Call the salon
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
