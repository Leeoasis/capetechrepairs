import Link from "next/link";
import PageHero from "../components/PageHero";
export const metadata = {
  title: "Electronics Repair Guides and Device Care Advice",
  description:
    "Practical laptop, TV, console and electronics troubleshooting, care and buying advice from Cape Tech Repairs in Cape Town.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Electronics Repair Guides",
    description:
      "Practical advice for caring for devices and making informed repair decisions.",
    url: "/blog",
    images: ["/images/technician-work.jpg"],
  },
};
const guides = [
  [
    "Before you book",
    "What to do when a laptop gets wet",
    "Power it off, disconnect the charger, and resist the urge to test it repeatedly. Fast, careful action limits further board damage.",
    "Laptop care · 4 min",
  ],
  [
    "Troubleshooting",
    "Why your TV has sound but no picture",
    "A failed backlight is common, but power, panel, and main-board faults can look similar. Here is why diagnosis matters.",
    "TV repair · 5 min",
  ],
  [
    "Console care",
    "How to prevent console overheating",
    "Airflow, dust, placement, and thermal performance all affect temperature. Small habits can extend your console’s useful life.",
    "Gaming · 4 min",
  ],
  [
    "Buying advice",
    "Is a refurbished laptop right for you?",
    "A well-tested refurbished machine can offer excellent value. Focus on condition, battery health, upgradeability, and support.",
    "Buying guide · 6 min",
  ],
  [
    "Repair decisions",
    "When is electronics repair worth it?",
    "Compare repair cost, replacement value, data, familiarity, expected lifespan, and environmental impact—not price alone.",
    "Advice · 5 min",
  ],
  [
    "Data safety",
    "What to bring with a computer repair",
    "Your charger, login details when appropriate, a clear fault description, and a recent backup can make diagnosis smoother.",
    "Checklist · 3 min",
  ],
];
export default function Blog() {
  return (
    <main>
      <PageHero
        eyebrow="Knowledge from the bench"
        title="Use it longer. Understand it better."
        description="Practical advice for protecting your devices, spotting faults early, and making smarter repair decisions."
        image="/images/technician-work.jpg"
        imageAlt="Technician using a microscope for detailed electronics repair"
        note="Care · Troubleshooting · Buying advice · Repair decisions"
      />
      <section className="py-16 md:py-24">
        <div className="shell">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.map(([tag, title, text, meta], i) => (
              <article
                key={title}
                className={`card-lift flex min-h-[320px] flex-col rounded-2xl p-7 ${i === 0 ? "bg-[#b7f34a]" : "border border-slate-200 bg-white"}`}
              >
                <p className="eyebrow text-[#52751a]">{tag}</p>
                <h2 className="mt-7 text-2xl font-extrabold leading-tight">
                  {title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
                <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                  <span className="text-xs font-bold text-slate-500">
                    {meta}
                  </span>
                  <span className="rounded-full bg-[#07111f] px-3 py-2 text-[10px] font-black uppercase tracking-wider text-white">Quick guide</span>
                </div>
              </article>
            ))}
          </div>
          <section className="mt-16 grid gap-10 rounded-2xl bg-[#eafbc9] p-8 md:p-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="section-kicker">The safe first response</p>
              <h2 className="text-3xl font-extrabold tracking-tight">Stop damage from getting worse.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["Liquid exposure", "Switch off, disconnect power and do not keep testing the device."],
                ["Burning smell", "Unplug it immediately and keep it away from combustible material."],
                ["Swollen battery", "Stop charging or pressing on the casing and ask for safe handling advice."],
                ["Important data", "Avoid repeated startup attempts if a drive is clicking or no longer detected."],
              ].map(([title, text]) => (
                <div key={title}>
                  <h3 className="font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="mt-14 rounded-2xl bg-[#07111f] p-8 text-white md:flex md:items-center md:justify-between md:p-12">
            <div>
              <h2 className="text-2xl font-extrabold">
                A guide can’t diagnose hardware.
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                If the fault persists, stop guessing and let us take a look.
              </p>
            </div>
            <Link
              href="/quote"
              className="mt-6 inline-block rounded-lg bg-[#b7f34a] px-6 py-4 font-extrabold text-[#07111f] md:mt-0"
            >
              Book a diagnosis →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
