"use client";
import { useState } from "react";
import Image from "next/image";

export default function RepairAccount() {
  const [q, setQ] = useState("");
  const submit = (e) => {
    e.preventDefault();
    window.open(
      `https://wa.me/27648188737?text=${encodeURIComponent(`Hi Cape Tech, please can I get an update on repair job ${q}?`)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
    <main>
      <section className="relative overflow-hidden bg-[#07111f] text-white">
        <div className="absolute inset-0 grid-noise" />
        <div className="shell relative grid min-h-[500px] items-center gap-12 py-20 lg:grid-cols-[1fr_.8fr]">
          <div>
            <p className="eyebrow mb-6 text-[#b7f34a]">Repair status</p>
            <h1 className="display max-w-3xl">Already on our bench?</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Use the job number on your intake receipt to request the latest
              update directly from the workshop team.
            </p>
            <p className="mt-7 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300">
              Reference ready? It only takes a moment.
            </p>
          </div>
          <div className="relative hidden h-[380px] overflow-hidden rounded-2xl lg:block">
            <Image
              src="/images/diagnostics.jpg"
              alt="Electronics repair job undergoing diagnostics"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/45 to-transparent" />
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="section-kicker">Before you request</p>
            <h2 className="section-title">Find your job number.</h2>
            <div className="mt-7 space-y-5 text-sm leading-7 text-slate-600">
              <p>
                <b className="block text-[#07111f]">
                  Check your intake receipt
                </b>
                The reference was provided when the device was booked in.
              </p>
              <p>
                <b className="block text-[#07111f]">No reference available?</b>
                Send your name, phone number and device description instead.
              </p>
            </div>
          </div>
          <form
            onSubmit={submit}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-300/40 md:p-10"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#b7f34a] text-xl">
              ↻
            </span>
            <h2 className="mt-6 text-2xl font-extrabold">
              Request a workshop update
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              We&apos;ll open WhatsApp with your repair reference ready to send.
            </p>
            <label className="mt-7 block text-sm font-extrabold" htmlFor="job">
              Job or reference number
            </label>
            <input
              id="job"
              required
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="field mt-2 uppercase"
              placeholder="e.g. CTR-1048"
            />
            <button className="mt-4 w-full rounded-lg bg-[#07111f] px-6 py-4 font-extrabold text-white hover:bg-[#b7f34a] hover:text-[#07111f]">
              Continue in WhatsApp →
            </button>
            <p className="mt-5 text-center text-xs text-slate-500">
              Or call{" "}
              <a href="tel:+27648188737" className="font-bold underline">
                064 818 8737
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
