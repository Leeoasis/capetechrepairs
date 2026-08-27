import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../components/PageHero";
import StructuredData from "../../components/StructuredData";
import BookingConfidence from "../../components/BookingConfidence";
import { serviceEntries, servicePages } from "../serviceData";

export function generateStaticParams() {
  return serviceEntries.map(([slug]) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicePages[slug];
  if (!service) return {};
  return {
    title: `${service.name} in Cape Town`,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.name} in Cape Town`,
      description: service.description,
      url: `/services/${slug}`,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicePages[slug];
  if (!service) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `https://capetechrepairs.co.za/services/${slug}`,
    areaServed: { "@type": "City", name: "Cape Town" },
    provider: { "@id": "https://capetechrepairs.co.za/#business" },
  };

  return (
    <main>
      <StructuredData data={schema} />
      <PageHero eyebrow={service.eyebrow} title={service.title} description={service.description} image={service.image} imageAlt={service.imageAlt} note="Diagnosis first · Clear options · Approval before repair" />
      <section className="section-space">
        <div className="shell grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-kicker">Common symptoms</p>
            <h2 className="section-title">Does this sound familiar?</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.symptoms.map((item) => <div key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-bold"><span className="mr-2 text-[#668d1f]">✓</span>{item}</div>)}
            </div>
          </div>
          <div className="rounded-2xl bg-[#07111f] p-8 text-white md:p-10">
            <p className="eyebrow text-[#b7f34a]">Workshop capability</p>
            <h2 className="mt-4 text-3xl font-extrabold">What we can assess</h2>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {service.work.map((item) => <li key={item} className="border-b border-white/10 pb-3 text-sm text-slate-300">{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <div className="shell grid gap-8 rounded-2xl border border-slate-200 p-7 md:grid-cols-[.8fr_1.2fr] md:p-10">
          <div><p className="section-kicker">Before you arrive</p><h2 className="text-3xl font-extrabold">Prepare for a better first assessment.</h2></div>
          <div><p className="leading-7 text-slate-600">{service.bring}</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/quote" className="btn-dark">Book this repair →</Link><a href="tel:+27648188737" className="inline-flex items-center rounded-lg border border-slate-300 px-6 py-3 font-extrabold">Call 064 818 8737</a></div></div>
        </div>
      </section>
      <BookingConfidence compact />
      <section className="section-space bg-[#07111f] text-white">
        <div className="shell text-center"><p className="eyebrow text-[#b7f34a]">Bellville workshop</p><h2 className="section-title mx-auto mt-4 max-w-3xl">Ready to get a clear answer?</h2><p className="mx-auto mt-5 max-w-xl text-slate-300">Visit 147 Voortrekker Road, Bellville, or send the device details before arranging a courier.</p><Link href="/quote" className="btn-primary mt-8">Start your enquiry →</Link></div>
      </section>
    </main>
  );
}
