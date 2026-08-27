"use client";

import { useState } from "react";

const initialData = {
  name: "",
  phone: "",
  device: "",
  model: "",
  town: "",
  contact: "WhatsApp",
  message: "",
};

export default function ContactForm() {
  const [data, setData] = useState(initialData);
  const change = (event) =>
    setData({ ...data, [event.target.name]: event.target.value });

  const submit = (event) => {
    event.preventDefault();
    const text = `Hi Cape Tech Repairs, I'm ${data.name}.

Device: ${data.device}
Brand / model: ${data.model}
Town / suburb: ${data.town}
Problem: ${data.message}
Preferred response: ${data.contact}
Contact number: ${data.phone}

I can attach photos or a short video in this chat if helpful.`;
    window.open(
      `https://wa.me/27648188737?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form onSubmit={submit}>
      <h2 className="text-2xl font-extrabold">Repair enquiry</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        Complete the essentials. We&apos;ll open a WhatsApp message ready to
        send to the workshop.
      </p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold">Your name<input className="field mt-2" name="name" value={data.name} onChange={change} required placeholder="Jane Smith" autoComplete="name" /></label>
        <label className="text-sm font-bold">Phone number<input className="field mt-2" name="phone" value={data.phone} onChange={change} required placeholder="082 000 0000" inputMode="tel" autoComplete="tel" /></label>
        <label className="text-sm font-bold">Device type<input className="field mt-2" name="device" value={data.device} onChange={change} required placeholder="e.g. Laptop or PlayStation 5" /></label>
        <label className="text-sm font-bold">Brand and model<input className="field mt-2" name="model" value={data.model} onChange={change} required placeholder="e.g. HP 15-dw3xxx" /></label>
        <label className="text-sm font-bold">Town or suburb<input className="field mt-2" name="town" value={data.town} onChange={change} required placeholder="e.g. Bellville" autoComplete="address-level2" /></label>
        <label className="text-sm font-bold">Preferred response<select className="field mt-2" name="contact" value={data.contact} onChange={change}><option>WhatsApp</option><option>Phone call</option></select></label>
      </div>
      <label className="mt-5 block text-sm font-bold">What went wrong?<textarea className="field mt-2 min-h-36 resize-y" name="message" value={data.message} onChange={change} required placeholder="Describe the symptoms, damage, error message and when it started…" /></label>
      <div className="mt-5 rounded-xl bg-[#eafbc9] p-4 text-sm leading-6">
        <b className="block">Photos help.</b>
        After WhatsApp opens, attach clear photos of the device, model label,
        visible damage or error message where relevant.
      </div>
      <button className="mt-6 w-full rounded-lg bg-[#b7f34a] px-7 py-4 font-extrabold text-[#07111f] hover:bg-[#07111f] hover:text-white">Continue in WhatsApp →</button>
      <p className="mt-4 text-center text-xs text-slate-400">We&apos;ll only use these details to respond to your enquiry.</p>
    </form>
  );
}
