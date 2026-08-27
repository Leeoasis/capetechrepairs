import Link from "next/link";
import Image from "next/image";
import { Icon } from "../components/Icons";
import PageHero from "../components/PageHero";
export const metadata = {
  title: "Electronics Repair Services in Cape Town",
  description:
    "Laptop, desktop, TV, monitor, gaming console, audio and board-level electronics repair in Cape Town. Honest diagnostics before work begins.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Electronics Repair Services in Cape Town",
    description:
      "Professional diagnostics and repairs for computers, TVs, consoles and audio equipment.",
    url: "/services",
    images: ["/images/laptop-repair.jpg"],
  },
};
const items = [
  [
    "laptop",
    "Laptop & desktop repair",
    [
      "No power / no display",
      "Slow performance & upgrades",
      "Liquid damage",
      "Data recovery",
    ],
  ],
  [
    "tv",
    "TV & monitor repair",
    [
      "Backlight failures",
      "Power supply faults",
      "Picture problems",
      "HDMI & input faults",
    ],
  ],
  [
    "game",
    "Console repair",
    [
      "HDMI port replacement",
      "Overheating & cleaning",
      "Power faults",
      "Storage upgrades",
    ],
  ],
  [
    "audio",
    "Audio equipment",
    [
      "Amplifiers & receivers",
      "Powered speakers",
      "Mixers & studio gear",
      "Power and output faults",
    ],
  ],
  [
    "tool",
    "Board-level repair",
    [
      "Microsoldering",
      "Charging ports",
      "Short-circuit diagnosis",
      "Component replacement",
    ],
  ],
];
export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Repair services · Cape Town"
        title="Fix the fault. Keep the device."
        description="From obvious damage to intermittent board faults, we diagnose before replacing parts and explain the trade-offs in plain language."
        image="/images/laptop-repair.jpg"
        imageAlt="Technician soldering a circuit board during electronics repair"
        note="Computers · TVs · Consoles · Audio · Board repair"
      />
      <section className="section-space">
        <div className="shell grid gap-6 md:grid-cols-2">
          {items.map(([icon, title, list]) => (
            <article
              key={title}
              className={`surface-card ${title === "Board-level repair" ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-center gap-4">
                <span className="icon-tile">
                  <Icon name={icon} />
                </span>
                <h2 className="text-2xl font-extrabold">{title}</h2>
              </div>
              <ul
                className={`mt-7 grid gap-3 text-slate-600 ${title === "Board-level repair" ? "md:grid-cols-2" : ""}`}
              >
                {list.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="text-[#7ba62c]">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#07111f] text-white">
        <div className="shell grid overflow-hidden lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="py-16 pr-0 lg:py-20 lg:pr-16">
            <p className="eyebrow mb-4 text-[#b7f34a]">
              Board-level capability
            </p>
            <h2 className="section-title max-w-xl">
              We look deeper than the symptom.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-slate-300">
              Accurate diagnosis can isolate a failed port, power rail,
              connector, or individual component—often avoiding the cost and
              waste of replacing an entire board.
            </p>
          </div>
          <Image
            src="/images/desktop-repair.jpg"
            alt="Electronic circuit boards and components arranged for inspection"
            width={1280}
            height={959}
            className="h-[360px] w-full rounded-t-2xl object-cover lg:h-[440px] lg:rounded-none"
          />
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="section-kicker">Common symptoms</p>
            <h2 className="section-title">When should you bring it in?</h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "No power",
                "Device is completely dead or shuts down unexpectedly.",
              ],
              [
                "No picture",
                "Power is present, but the display remains black or distorted.",
              ],
              [
                "Overheating",
                "Fans run loudly, performance drops, or the device becomes unusually hot.",
              ],
              [
                "Port damage",
                "Charging, HDMI, USB, or audio connections are loose or unreliable.",
              ],
              [
                "Unusual sound",
                "Buzzing, clicking, distorted audio, or abnormal fan noise.",
              ],
              [
                "Slow or unstable",
                "Freezing, crashes, long startup times, or intermittent faults.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#f7f9fb] p-7">
                <h3 className="font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-[#07111f] text-white">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4 text-[#b7f34a]">Before you arrive</p>
            <h2 className="section-title">Help us help you faster.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Back up important data if the device still starts.",
              "Bring the charger or power supply if power is part of the fault.",
              "Note any error messages and when the problem occurs.",
              "Do not keep powering on liquid-damaged electronics.",
            ].map((x, i) => (
              <div
                key={x}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <b className="text-[#b7f34a]">0{i + 1}</b>
                <p className="mt-2 text-sm leading-6 text-slate-300">{x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Workshop and courier</p>
            <h2 className="section-title">Repair support wherever practical.</h2>
            <p className="mt-6 max-w-lg leading-7 text-slate-600">
              The workshop serves Bellville and the wider Cape Town area. If you
              are farther away, contact us before booking a courier so we can
              confirm the device type and safe shipping requirements.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Walk-in assessment", "Visit 147 Voortrekker Road, Bellville, with the device and any fault-related power supply or accessory."],
              ["Courier enquiries", "Available by arrangement for suitable devices from elsewhere in South Africa."],
              ["Business equipment", "Ask about desktops, displays, audio equipment and other workshop-assessable electronics."],
              ["Unlisted devices", "Send the brand, model and symptoms first. Repairability and parts availability vary."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl bg-[#f7f9fb] p-6">
                <h3 className="font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="services-cta section-space text-white">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5 text-[#b7f34a]">
              Start with a diagnosis
            </p>
            <h2 className="section-title max-w-xl">
              Not sure what the fault is?
            </h2>
            <p className="mt-6 max-w-lg leading-7 text-slate-300">
              You do not need to diagnose it yourself. Tell us what happened,
              what the device is doing, and when the problem started.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quote" className="btn-primary">
                Request a diagnosis →
              </Link>
              <a
                href="https://wa.me/27648188737"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-7 py-4 font-extrabold hover:bg-white/10"
              >
                Ask on WhatsApp
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs font-extrabold uppercase tracking-wider text-slate-400">
              <span>Clear quote</span>
              <span>No hidden work</span>
              <span>Approval first</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
