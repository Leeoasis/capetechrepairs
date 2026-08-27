import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
export const metadata = {
  title: "About Our Electronics Repair Workshop",
  description:
    "Meet Cape Tech Repairs, a Cape Town electronics repair team with more than a decade of experience and thousands of completed repairs.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Cape Tech Repairs",
    description:
      "Experienced electronics diagnostics and repair specialists in Cape Town.",
    url: "/about",
    images: ["/images/workbench.jpg"],
  },
};
export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="About the workshop"
        title="Repair is a craft."
        description="Founded in Cape Town, Cape Tech Repairs has grown into a trusted electronics repair specialist focused on integrity, quality and customer satisfaction."
        image="/images/workbench.jpg"
        imageAlt="Electronics technician working carefully on a circuit board"
        note="10+ years · Five specialists · Thousands of repairs"
      />
      <section className="py-24">
        <div className="shell grid gap-16 lg:grid-cols-2 lg:items-center">
          <Image
            src="/images/workbench.jpg"
            width={700}
            height={520}
            alt="Cape Tech electronics workbench"
            className="h-[500px] w-full rounded-2xl object-cover"
          />
          <div>
            <p className="eyebrow mb-4 text-[#668d1f]">Our journey</p>
            <h2 className="section-title">
              A decade of solving difficult faults.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              With more than ten years of industry experience, a five-person
              specialist team and thousands of completed repairs, we are
              equipped to handle everything from everyday failures to
              challenging electronics diagnostics.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Honest", "Clear options and transparent pricing."],
                ["Experienced", "More than a decade in the industry."],
                ["Specialised", "Five technicians across repair disciplines."],
                ["Proven", "Thousands of devices repaired."],
              ].map(([a, b]) => (
                <div key={a} className="rounded-xl bg-white p-5">
                  <b>{a}</b>
                  <p className="mt-1 text-sm text-slate-500">{b}</p>
                </div>
              ))}
            </div>
            <Link
              href="/quote"
              className="mt-8 inline-block rounded-lg bg-[#07111f] px-7 py-4 font-extrabold text-white"
            >
              Meet us at the bench →
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="section-kicker">What guides the work</p>
              <h2 className="section-title">Good repair starts with a better decision.</h2>
              <p className="mt-6 max-w-md leading-7 text-slate-600">
                The goal is not to replace parts until something works. It is to
                understand the fault, weigh the options and choose the most sensible
                route for the device and its owner.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl bg-slate-200 sm:grid-cols-2">
              {[
                ["Diagnose first", "We trace the symptom to its likely cause before recommending work."],
                ["Explain clearly", "You get practical options in plain language, including when repair may not be worthwhile."],
                ["Protect what matters", "Careful handling, data awareness and proper testing are part of the job."],
                ["Repair responsibly", "Component-level work can preserve useful equipment and reduce unnecessary replacement."],
              ].map(([title, text]) => (
                <article key={title} className="bg-[#f7f9fb] p-7 md:p-8">
                  <h3 className="text-xl font-extrabold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-space bg-[#07111f] text-white">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-4 text-[#b7f34a]">Local bench · Wider reach</p>
            <h2 className="section-title">Based in Bellville. Helping customers beyond Cape Town.</h2>
          </div>
          <div>
            <p className="leading-8 text-slate-300">
              Walk in at 147 Voortrekker Road or contact the workshop before
              sending a device by courier. We will confirm whether the equipment
              is suitable for assessment and explain how to package it safely.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quote" className="btn-primary">Book a repair →</Link>
              <a href="https://maps.google.com/?q=147+Voortrekker+Road+Bellville+Cape+Town" className="rounded-lg border border-white/20 px-7 py-4 font-extrabold hover:bg-white/10">Get directions</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
