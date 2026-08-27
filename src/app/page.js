import Image from "next/image";
import Link from "next/link";
import { Icon } from "./components/Icons";
import Faq from "./components/Faq";
export const metadata = { alternates: { canonical: "/" } };
const services = [
  [
    "laptop",
    "Computers",
    "Laptop and desktop faults, upgrades, data recovery and board repair.",
    "/services/laptop-computer-repair",
  ],
  [
    "tv",
    "TVs & displays",
    "LED, OLED and QLED diagnostics, backlights, power and display faults.",
    "/services/tv-monitor-repair",
  ],
  [
    "game",
    "Gaming",
    "PlayStation, Xbox and Nintendo HDMI, power, cooling and storage repairs.",
    "/services/gaming-console-repair",
  ],
  [
    "audio",
    "Audio",
    "Amplifiers, speakers, mixers and other professional audio equipment.",
    "/services/audio-equipment-repair",
  ],
];
export default function Home() {
  return (
    <main>
      <section className="page-hero !py-0">
        <div className="absolute inset-0 grid-noise" />
        <div className="shell relative grid min-h-[700px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow mb-6 text-[#b7f34a]">Bellville · Cape Town</p>
            <h1 className="display max-w-3xl">
              We bring dead tech{" "}
              <span className="text-[#b7f34a]">back to life.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Component-level repairs for computers, TVs, consoles and audio
              gear. Clear diagnostics, honest advice, no guesswork.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/quote" className="btn-primary">
                Book a repair →
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-white/25 px-7 py-4 font-extrabold hover:border-white hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-slate-400">
              <span>✓ Walk-ins welcome</span>
              <span>✓ Nationwide courier</span>
              <span>✓ Approval before repair</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] border border-[#b7f34a]/30" />
            <Image
              src="/images/repair-hero.png"
              alt="Technician repairing an electronic circuit board"
              width={800}
              height={700}
              priority
              className="lime-shadow relative h-[520px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute -bottom-5 -left-3 rounded-xl bg-white p-5 text-[#07111f] shadow-2xl">
              <b className="block text-2xl">Repair first.</b>
              <span className="text-sm text-slate-500">
                Replace only when it makes sense.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#b7f34a]">
        <div className="shell grid grid-cols-2 py-7 text-center md:grid-cols-4">
          {[
            ["10+ years", "Industry experience"],
            ["5", "Specialist team"],
            ["1,000s", "Repairs completed"],
            ["100%", "Approval first"],
          ].map(([n, t]) => (
            <div key={t} className="border-r border-[#07111f]/20">
              <b className="text-2xl">{n}</b>
              <p className="text-xs font-bold uppercase tracking-wide">{t}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-b border-slate-200 bg-white py-5">
        <div className="shell grid gap-4 text-sm sm:grid-cols-3 sm:items-center">
          <a href="https://maps.google.com/?q=147+Voortrekker+Road+Bellville+Cape+Town" className="font-extrabold hover:text-[#668d1f]">
            <span className="mr-2 text-[#668d1f]">●</span>147 Voortrekker Road, Bellville
          </a>
          <p className="font-bold text-slate-600 sm:text-center">Sunday–Friday · 09:00–18:00</p>
          <a href="https://maps.google.com/?q=Cape+Tech+Repairs+147+Voortrekker+Road+Bellville" className="font-extrabold underline decoration-[#b7f34a] decoration-4 underline-offset-4 sm:text-right">
            Check customer feedback on Google →
          </a>
        </div>
      </section>
      <section className="section-space">
        <div className="shell">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4 text-[#668d1f]">What we repair</p>
              <h2 className="section-title max-w-2xl">
                One workshop. A world of electronics.
              </h2>
            </div>
            <Link
              href="/services"
              className="font-extrabold underline decoration-[#b7f34a] decoration-4 underline-offset-8"
            >
              View all services
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([icon, title, text, href], i) => (
              <article key={title} className="surface-card">
                <span className="icon-tile mb-8">
                  <Icon name={icon} />
                </span>
                <span className="text-xs font-black text-slate-400">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                <Link href={href} className="mt-6 inline-flex text-sm font-extrabold underline decoration-[#b7f34a] decoration-4 underline-offset-8">Learn more →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="shell grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <Image
              src="/images/repair-still-2.png"
              alt="Close-up electronics repair work"
              width={700}
              height={700}
              className="h-[520px] w-full rounded-2xl object-cover"
            />
            <span className="absolute right-4 top-4 rounded-full bg-[#b7f34a] px-4 py-2 text-xs font-black uppercase tracking-widest">
              Bench tested
            </span>
          </div>
          <div>
            <p className="eyebrow mb-4 text-[#668d1f]">How it works</p>
            <h2 className="section-title">No mystery. Just a solid process.</h2>
            <div className="mt-10 space-y-8">
              {[
                [
                  "01",
                  "Bring it in",
                  "Walk in at our Bellville workshop or arrange a courier.",
                ],
                [
                  "02",
                  "We diagnose",
                  "We find the actual fault and explain your options clearly.",
                ],
                [
                  "03",
                  "You approve",
                  "Nothing happens until you are happy with the quote.",
                ],
                [
                  "04",
                  "We repair & test",
                  "Your device is repaired, stress-tested and ready to work.",
                ],
              ].map(([n, t, d]) => (
                <div
                  key={n}
                  className="grid grid-cols-[48px_1fr] gap-4 border-b border-slate-200 pb-7"
                >
                  <b className="text-[#77a625]">{n}</b>
                  <div>
                    <h3 className="font-extrabold">{t}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="shell">
          <div className="text-center">
            <p className="eyebrow mb-4 text-[#668d1f]">Why Cape Tech</p>
            <h2 className="section-title">Service built on trust.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                "Expert technicians",
                "Our experienced specialists diagnose a wide range of electronics issues accurately and efficiently.",
              ],
              [
                "Transparent pricing",
                "You receive an honest quote with no hidden fees before repair work begins.",
              ],
              [
                "Quality parts",
                "We use dependable components selected for long-lasting performance and reliability.",
              ],
            ].map(([title, text]) => (
              <article key={title} className="surface-card">
                <span className="text-2xl text-[#77a625]">✓</span>
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="shell">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Inside the work</p>
              <h2 className="section-title max-w-2xl">
                Precision at every stage.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              From fault-finding to component replacement, good repair work
              starts with the right tools and a careful eye.
            </p>
          </div>
          <div className="grid h-[620px] grid-cols-2 gap-4 md:h-[520px] md:grid-cols-[1.35fr_.65fr_.8fr]">
            <Image
              src="/images/laptop-repair.jpg"
              alt="Technician soldering an electronic circuit board"
              width={1280}
              height={873}
              className="col-span-2 h-full w-full rounded-2xl object-cover md:col-span-1"
            />
            <Image
              src="/images/diagnostics.jpg"
              alt="Electronics diagnostics workbench and precision tools"
              width={700}
              height={932}
              className="h-full w-full rounded-2xl object-cover"
            />
            <Image
              src="/images/technician-work.jpg"
              alt="Microscope used for detailed electronics repair"
              width={700}
              height={1050}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-[#eafbc9] py-16">
        <div className="shell">
          <p className="eyebrow text-center text-[#668d1f]">
            Brands we work with
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-5 text-lg font-extrabold text-[#07111f]/70">
            {[
              "Apple",
              "ASUS",
              "Acer",
              "Dell",
              "HP",
              "Lenovo",
              "Samsung",
              "LG",
              "Sony",
              "Hisense",
              "PlayStation",
              "Xbox",
              "Nintendo",
            ].map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-2xl text-center text-sm text-[#07111f]/60">
            Brand not listed? Send us the model number and symptoms. Parts
            availability varies by device.
          </p>
        </div>
      </section>
      <Faq />
      <section className="home-cta section-space text-white">
        <div className="shell">
          <p className="eyebrow mb-5 text-[#b7f34a]">Ready when you are</p>
          <h2 className="section-title max-w-2xl">
            Your device deserves a proper diagnosis.
          </h2>
          <p className="mt-5 max-w-xl text-slate-300">
            Tell us what went wrong. We’ll guide you through the next step.
          </p>
          <Link href="/quote" className="btn-primary mt-8">
            Start your repair →
          </Link>
        </div>
      </section>
    </main>
  );
}
