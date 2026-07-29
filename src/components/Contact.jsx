import { useState } from "react";
import { MapPin, Clock, Phone, MessageCircle, Send } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  // Hair Services
  "Haircut",
  "Kids Haircut",
  "Hair Wash & Blow Dry",
  "Hair Styling",
  "Hair Spa",
  "Deep Conditioning Treatment",
  "Scalp Treatment",
  "Hair Oiling & Massage",
  "Hair Straightening",
  "Hair Perming",
  "Hair Smoothening",
  "Hair Rebonding",
  "Keratin Treatment",
  "Botox Hair Treatment",
  "Hair Glossing",
  "Hair Color (Global)",
  "Hair Color (Root Touch-Up)",
  "Highlights",
  "Fashion Hair Colors",
  "Hair Bleach",
  "Head Shave",
  "Curling & Iron Styling",
  "Hair Repair Treatment",
  "Split Ends Treatment",
  "Nanoplastia Treatment",
  "Anti-Frizz Treatment",
  "Anti-Dandruff Hair Treatment",
  "Hair Fall Control Treatment",

  // Beard Services
  "Beard Trim",
  "Beard Styling",
  "Shaving",
  "Beard Color",

  // Face Services
  "Clean-Up",
  "Face Massage",
  "Face Scrub",
  "Basic Facial",
  "Gold Facial",
  "Diamond Facial",
  "Hydra Facial",
  "Brightening Facial",
  "De-Tan Facial",
  "Face Bleach",
  "Hand Bleach",
  "De-Tan Treatment",
  "Threading",
  "Face Waxing",
];

const HOURS = [
  { day: "Monday", time: "9:00 AM – 1:00 PM" },
  { day: "Tuesday – Sunday", time: "9:00 AM – 9:30 PM" },
];

const PHONE_NUMBER = "+91 9923191786";
const PHONE_HREF = "tel:+919923191786";
const WHATSAPP_HREF = "https://wa.me/919923191786";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: SERVICES[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello,

      I would like to book an appointment.

      Name: ${form.name}
      Phone: ${form.phone}
      Service: ${form.service}
      Message: ${form.message}

      Please confirm my appointment.`;

    const whatsappNumber = "919923191786"; // Owner's WhatsApp number

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-tag justify-center before:hidden">
              <span className="h-px w-8 bg-brass" />
              Get in Touch
            </span>
            <h2 className="mt-4 font-display text-4xl tracking-wide text-ink sm:text-5xl">
              VISIT US OR BOOK INSTANTLY
            </h2>
            <p className="mt-4 text-ink-soft">
              Drop by our salon in Camp or reach out below — we&rsquo;ll
              confirm your appointment in no time.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal delay={100}>
            <div className="space-y-6">
              <div className="group barber-card flex gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-parchment transition-transform group-hover:animate-wiggle">
                  <MapPin size={20} />
                </span>
                <div>
                  <h3 className="font-display text-2xl tracking-wide text-ink">
                    OUR LOCATION
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    Near Garden Vada Pav, Dastur Meher Road, Camp, Pune –
                    411001
                  </p>
                </div>
              </div>

              <div className="group barber-card flex gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brass text-ink transition-transform group-hover:animate-wiggle">
                  <Clock size={20} />
                </span>
                <div className="w-full">
                  <h3 className="font-display text-2xl tracking-wide text-ink">
                    OPERATING HOURS
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                    {HOURS.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span className="font-medium text-ink">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href={PHONE_HREF}
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-sm bg-barber px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-parchment shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  <span className="btn-shine-sweep" />
                  <Phone size={16} />
                  Call {PHONE_NUMBER}
                </a>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-sm border-2 border-ink/15 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-all hover:border-brass hover:text-brass hover:-translate-y-0.5"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </div>

              <div className="relative h-56 w-full overflow-hidden border-2 border-ink shadow-soft sm:h-64">
                <iframe
                  title="Persian Salon location map"
                  className="h-full w-full border-0 grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Dastur+Meher+Road,+Camp,+Pune+411001&output=embed"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="border-2 border-ink/10 bg-white p-6 shadow-card sm:p-8">
              <h3 className="font-display text-3xl tracking-wide text-ink">
                REQUEST AN APPOINTMENT
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Fill in your details and our team will call to confirm your
                slot.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-sm border border-ink/15 bg-parchment px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-barber"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 90000 00000"
                    className="w-full rounded-sm border border-ink/15 bg-parchment px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-barber"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Select Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-ink/15 bg-parchment px-4 py-3 text-sm text-ink focus:border-barber"
                  >
                    {SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us your preferred date, time, or any special request"
                    className="w-full resize-none rounded-sm border border-ink/15 bg-parchment px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-barber"
                  />
                </div>

                <button type="submit" className="group btn-primary w-full !bg-ink hover:!bg-barber">
                  <span className="btn-shine-sweep" />
                  <Send size={16} />
                  Send Request
                </button>

                {submitted && (
                  <p
                    role="status"
                    className="rounded-sm bg-brass/20 px-4 py-3 text-center text-sm font-medium text-ink"
                  >
                    Thank you! We&rsquo;ve received your request and will
                    call you shortly.
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
