import ContactForm from "../components/contactForm";
import PageHero from "../components/PageHero";
import BookingConfidence from "../components/BookingConfidence";
export const metadata = {
  title: "Book an Electronics Repair in Cape Town",
  description:
    "Request an electronics repair diagnosis from Cape Tech Repairs. Tell us about your laptop, TV, console, computer or audio equipment fault.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Book an Electronics Repair",
    description:
      "Send your device details and request a diagnosis from our Cape Town workshop.",
    url: "/quote",
    images: ["/images/diagnostics.jpg"],
  },
};
export default function Quote() {
  return (
    <main>
      <PageHero
        eyebrow="Book a repair"
        title="Tell us what your device is doing."
        description="The more detail you share, the better we can prepare for your diagnosis and explain the next step."
        image="/images/diagnostics.jpg"
        imageAlt="Professional electronics diagnostics tools at a repair workbench"
        note="Fastest response via WhatsApp · 064 818 8737"
        primaryLabel="Start your enquiry ↓"
        primaryHref="#repair-form"
        secondaryLabel="Call the workshop"
        secondaryHref="tel:+27648188737"
        compactMobile
      />
      <section className="py-16 md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <aside>
            <h2 className="text-2xl font-extrabold">Visit or get in touch</h2>
            <div className="mt-7 grid gap-6 text-sm">
              <div>
                <b className="block">Workshop</b>
                <a
                  className="mt-1 block text-slate-600 underline"
                  href="https://maps.google.com/?q=Shop+6+Delphi+Arena+1+Old+Oak+Road+Kenridge"
                >
                  Shop 6 Delphi Arena, 1 Old Oak Road, Kenridge
                </a>
              </div>
              <div>
                <b className="block">Phone & WhatsApp</b>
                <a
                  className="mt-1 block text-slate-600"
                  href="tel:+27648188737"
                >
                  064 818 8737
                </a>
              </div>
              <div>
                <b className="block">Email</b>
                <a
                  className="mt-1 block text-slate-600"
                  href="mailto:Info@capetechrepairs.co.za"
                >
                  Info@capetechrepairs.co.za
                </a>
              </div>
              <div>
                <b className="block">Hours</b>
                <p className="mt-1 text-slate-600">
                  Sunday–Friday · 09:00–18:00
                </p>
              </div>
            </div>
            <div className="mt-9 rounded-xl bg-[#eafbc9] p-6">
              <b>Courier repair?</b>
              <p className="mt-2 text-sm leading-6">
                Send the form first and mention your town. We’ll explain the
                safest way to package and send your device.
              </p>
            </div>
          </aside>
          <div id="repair-form" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-7 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
      <BookingConfidence compact />
      <section className="bg-white py-16 md:py-20">
        <div className="shell">
          <div className="text-center">
            <p className="section-kicker">What happens next</p>
            <h2 className="section-title">From enquiry to a clear answer.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["01", "We review the details", "The workshop checks the device type, symptoms and whether any extra information is needed."],
              ["02", "You arrange the handover", "Bring it to Bellville or discuss courier options if you are outside Cape Town."],
              ["03", "Diagnosis guides the quote", "Once assessed, the available repair route can be explained before approved work begins."],
            ].map(([number, title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-7">
                <b className="text-[#668d1f]">{number}</b>
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
