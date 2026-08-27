import Link from "next/link";

const questions = [
  [
    "Is there a diagnostic or assessment charge?",
    "Assessment requirements can differ by device and fault. Contact the workshop with the brand, model and symptoms so any applicable charge can be explained before you book it in.",
  ],
  [
    "How long will the repair take?",
    "Timing depends on diagnosis, workload and parts availability. The workshop will give you the best available estimate once the fault and repair route are understood.",
  ],
  [
    "What warranty applies?",
    "Coverage can vary according to the completed repair and parts used. Ask the team to confirm the applicable cover on your quote or invoice before approving the work.",
  ],
  [
    "When do I pay?",
    "Payment requirements are confirmed by the workshop for the specific job. No additional repair work should proceed until the quoted route has been explained and approved.",
  ],
  [
    "What if repair does not make financial sense?",
    "Repair is not always the right answer. The workshop will explain the practical options so you can compare the repair route with replacement before deciding.",
  ],
];

export default function BookingConfidence({ compact = false }) {
  return (
    <section className={`bg-[#eafbc9] ${compact ? "py-16" : "section-space"}`}>
      <div className="shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="section-kicker">Before you commit</p>
          <h2 className="section-title">Know what to ask. Approve with confidence.</h2>
          <p className="mt-5 max-w-md leading-7 text-slate-600">
            These details can vary by repair. Cape Tech will confirm what applies
            to your device rather than promise a one-size-fits-all answer.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/quote" className="btn-dark">Ask about your device →</Link>
            <a
              href="https://maps.google.com/?q=Cape+Tech+Repairs+147+Voortrekker+Road+Bellville"
              className="inline-flex items-center rounded-lg border border-[#07111f]/20 px-5 py-3 text-sm font-extrabold hover:bg-white/60"
            >
              Check customer feedback on Google
            </a>
          </div>
        </div>
        <div className="divide-y divide-[#07111f]/15 border-y border-[#07111f]/15">
          {questions.map(([question, answer], index) => (
            <details key={question} className="group py-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-extrabold">
                <span>{question}</span>
                <span className="text-xl text-[#52751a] group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pt-4 text-sm leading-7 text-slate-700">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
