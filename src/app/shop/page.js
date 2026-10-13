import Link from "next/link";
import ShopProducts from "./ShopProducts";
import { YouTubeBanner } from "../components/YouTubeLink";
import PageHero from "../components/PageHero";
export const metadata = {
  title: "Refurbished Laptops and Computers in Cape Town",
  description:
    "Shop tested refurbished laptops, desktop PCs, gaming systems, displays and computer parts from Cape Tech Repairs in Cape Town.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Refurbished Technology in Cape Town",
    description:
      "Tested pre-owned laptops, desktops, gaming systems and displays.",
    url: "/shop",
    images: ["/images/desktop-repair.jpg"],
  },
};
const categories = [
  [
    "Laptops",
    "Work, study, and everyday machines selected for practical value.",
    "01",
  ],
  [
    "Desktop PCs",
    "Reliable office systems and upgradeable home computers.",
    "02",
  ],
  [
    "Gaming systems",
    "Performance-focused machines and custom-build enquiries.",
    "03",
  ],
  [
    "Displays & parts",
    "Monitors, storage, memory, chargers, and selected components.",
    "04",
  ],
];
export default function Shop() {
  return (
    <main>
      <PageHero
        eyebrow="Refurbished & tested"
        title="More value. Less waste."
        description="Selected pre-owned technology prepared for its next owner, with condition, specifications and practical value explained clearly."
        image="/images/desktop-repair.jpg"
        imageAlt="Electronic components arranged neatly for inspection"
        note="Laptops · Desktops · Gaming · Displays · Parts"
      />
      <ShopProducts />
      <YouTubeBanner />
      <section className="py-16 md:py-24">
        <div className="shell">
          <div className="grid gap-5 md:grid-cols-2">
            {categories.map(([title, text, n]) => (
              <article
                key={title}
                className="card-lift flex min-h-56 flex-col rounded-2xl border border-slate-200 bg-white p-8"
              >
                <span className="text-sm font-black text-[#77a625]">{n}</span>
                <h2 className="mt-6 text-2xl font-extrabold">{title}</h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                  {text}
                </p>
                <a
                  href={`https://wa.me/27648188737?text=${encodeURIComponent(`Hi Cape Tech, what ${title.toLowerCase()} do you currently have available?`)}`}
                  className="mt-auto pt-6 text-sm font-extrabold underline decoration-[#b7f34a] decoration-4 underline-offset-8"
                >
                  Ask what’s available →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#eafbc9] py-16 md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-4 text-[#668d1f]">How we sell</p>
            <h2 className="section-title">A clear path to your purchase.</h2>
          </div>
          <div className="grid gap-5">
            {[
              [
                "Confirm the details",
                "Send your selection on WhatsApp. Confirm stock, condition, battery health, accessories and the final total before committing.",
              ],
              [
                "Arrange collection or delivery",
                "Contact the Kenridge workshop to arrange collection and ask about inspecting the device. Delivery availability and fees are confirmed separately.",
              ],
              [
                "Agree payment and keep a record",
                "Confirm EFT or cash arrangements directly with the workshop. Ask for written order confirmation, warranty and return terms, and a receipt.",
              ],
            ].map(([title, text], i) => (
              <div key={title} className="grid grid-cols-[40px_1fr] gap-4">
                <b>0{i + 1}</b>
                <div>
                  <h3 className="font-extrabold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Before you buy</p>
            <h2 className="section-title">Ask the questions that matter.</h2>
            <p className="mt-5 max-w-lg leading-7 text-slate-600">
              Refurbished stock is not one-size-fits-all. The right choice depends
              on your software, workload, budget and how long you expect to keep it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Specifications", "Processor, memory, storage, graphics and available upgrade options."],
              ["Physical condition", "Any visible wear, repaired damage and which accessories are included."],
              ["Battery health", "Relevant condition information for laptops and other portable devices."],
              ["After-sale cover", "Ask what support or warranty applies to the specific item before purchase."],
            ].map(([title, text], i) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-6">
                <b className="text-sm text-[#668d1f]">0{i + 1}</b>
                <h3 className="mt-4 font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-slate-200 bg-white py-12">
        <div className="shell grid gap-8 md:grid-cols-2">
          <div>
            <p className="section-kicker">Speak to the workshop</p>
            <h2 className="text-2xl font-extrabold">Cape Tech Repairs, Kenridge</h2>
            <p className="mt-3 leading-7 text-slate-600">Shop 6 Delphi Arena, 1 Old Oak Road, Kenridge, Cape Town. Contact us before travelling to confirm the product and collection arrangements.</p>
            <a className="mt-4 inline-block font-bold underline underline-offset-4" href="https://maps.google.com/?q=Cape+Tech+Repairs+Shop+6+Delphi+Arena+1+Old+Oak+Road+Kenridge">Find us on Google Maps →</a>
          </div>
          <div className="rounded-xl bg-slate-50 p-6">
            <h3 className="font-extrabold">Questions about a purchase?</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">For a product question, a fault after purchase or a return enquiry, contact us with your product name and order or receipt details. Confirm the terms for your specific item before paying.</p>
            <a className="mt-4 inline-block font-bold underline underline-offset-4" href="tel:+27648188737">Call 064 818 8737</a>
          </div>
        </div>
      </section>
      <section className="shop-cta py-16 text-center text-white md:py-20">
        <div className="shell">
          <h2 className="section-title">Looking for something specific?</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Stock changes frequently. Send us your preferred specifications and
            budget.
          </p>
          <Link
            href="/quote"
            className="btn-primary mt-7"
          >
            Send an enquiry →
          </Link>
        </div>
      </section>
    </main>
  );
}
