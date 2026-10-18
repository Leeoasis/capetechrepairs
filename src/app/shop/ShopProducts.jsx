"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { products, formatPrice } from "./products";

const storageKey = "cape-tech-enquiry-cart";

export default function ShopProducts({ productId = null }) {
  const detailProduct = products.find((product) => product.id === productId);
  const visibleProducts = detailProduct ? [detailProduct] : products;
  const [cart, setCart] = useState([]);
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState("");
  const [fulfilment, setFulfilment] = useState("Collection enquiry");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      if (Array.isArray(saved)) {
        setCart(products.filter((p) => p.status === "available" && saved.includes(p.id)).map((p) => p.id));
      }
    } catch { /* The cart also works when browser storage is unavailable. */ }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      try { localStorage.setItem(storageKey, JSON.stringify(cart)); } catch { /* Keep the in-memory cart. */ }
    }
  }, [cart, ready]);

  const selected = products.filter((p) => p.status === "available" && cart.includes(p.id));
  const priced = selected.filter((p) => p.price !== null);
  const needsQuote = selected.some((p) => p.price === null);
  const total = priced.reduce((sum, p) => sum + p.price, 0);
  const subtotalLabel = needsQuote ? "Priced items subtotal" : "Product subtotal";
  const subtotal = priced.length ? formatPrice(total) : "To be quoted";
  const message = [
    "Hi Cape Tech Repairs, please confirm availability for:",
    ...selected.map((p) => `- ${p.name} (${p.finish}), ref ${p.id}, quantity 1: ${formatPrice(p.price)}`),
    `${subtotalLabel}: ${subtotal}`,
    ...(needsQuote ? ["Please quote the price-on-enquiry items separately and confirm the complete order total."] : []),
    `Preference: ${fulfilment}`,
    "Please confirm condition and any faults, battery health, included accessories, warranty and return terms, and the final total including any delivery fee.",
    "Please also confirm collection/inspection arrangements and EFT or cash payment options, and provide a written order confirmation and receipt.",
  ].join("\n");

  return (
    <section className="py-16 md:py-24" aria-labelledby="products-heading">
      <div className="shell">
        <p className="section-kicker">{detailProduct ? <Link href="/shop" className="underline underline-offset-4">Back to all laptops</Link> : "Shop laptops"}</p>
        {detailProduct ? <h1 id="products-heading" className="section-title">{detailProduct.name}</h1> : <h2 id="products-heading" className="section-title">Find your next laptop.</h2>}
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">Choose a product, review your selection and check availability with the workshop on WhatsApp. Payment is arranged directly after the details are confirmed.</p>
        <div className={`mt-8 grid items-start gap-6 ${detailProduct ? "xl:grid-cols-[1fr_340px]" : ""}`}>
          <div className={`grid gap-6 ${detailProduct ? "" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
            {visibleProducts.map((product) => {
              const added = selected.some((p) => p.id === product.id);
              const sold = product.status === "sold";
              if (!detailProduct) return (
                <article key={product.id} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-lg">
                  <Link href={`/shop/${product.id}`} className="relative block aspect-[4/3] bg-white p-5" aria-label={`View ${product.name} details`}>
                    <Image src={product.photos[0]} alt={`${product.finish} ${product.name}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-contain p-5 transition-transform group-hover:scale-105" />
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Pre-owned laptop</p>
                    <h3 className="mt-2 text-xl font-extrabold"><Link href={`/shop/${product.id}`} className="hover:underline">{product.name}</Link></h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{product.specs.slice(0, 3).map(([, value]) => value).join(" / ")}</p>
                    <p className="mt-4 text-2xl font-black">{formatPrice(product.price)}</p>
                    <p className="mt-2 text-xs font-bold text-[#456316]">{sold ? "Sold" : "Listed - confirm availability"}</p>
                    <Link href={`/shop/${product.id}`} className="btn-dark mt-5 w-full">View details</Link>
                    <button type="button" disabled={!ready || sold || added} className="mt-3 min-h-11 text-sm font-extrabold underline underline-offset-4 disabled:text-slate-400" onClick={() => {
                      setCart((current) => [...new Set([...current, product.id])]);
                      setNotice(`${product.name} added to your enquiry.`);
                    }}>{sold ? "Sold" : added ? "Added to your enquiry" : "Add to enquiry"}</button>
                  </div>
                </article>
              );
              return (
                <article key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <ProductGallery product={product} />
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="eyebrow text-[#668d1f]">Pre-owned laptop · {product.finish}</p>
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${sold ? "bg-slate-100 text-slate-600" : "bg-[#eafbc9] text-[#456316]"}`}>{sold ? "Sold" : "Listed · confirm availability"}</span>
                    </div>
                    <h3 className="mt-3 text-3xl font-extrabold">{product.name}</h3>
                    <p className="mt-3 text-3xl font-black">{formatPrice(product.price)}</p>
                    <p className="mt-4 leading-7 text-slate-600">{product.description}</p>
                    <dl className="my-6 divide-y divide-slate-100">
                      {product.specs.map(([label, value]) => (
                        <div key={label} className="grid gap-1 py-3 sm:grid-cols-[130px_1fr] sm:gap-4">
                          <dt className="text-sm font-bold">{label}</dt><dd className="text-sm text-slate-600">{value}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mb-6 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                      <p className="font-bold text-[#07111f]">Before you commit</p>
                      <p>Photos show the listed laptop. Cosmetic condition, any faults, battery health, accessories and item-specific warranty and return terms still need confirmation from the workshop.</p>
                    </div>
                    <button type="button" disabled={!ready || sold || added} className="btn-dark w-full disabled:cursor-default disabled:bg-slate-200 disabled:text-slate-600 sm:w-auto" onClick={() => {
                      setCart((current) => [...new Set([...current, product.id])]);
                      setNotice(`${product.name} added to your enquiry.`);
                    }}>{sold ? "Sold" : added ? "Added to your enquiry" : "Add to enquiry"}</button>
                    <a href="#enquiry-cart" className="mt-4 block text-sm font-bold underline underline-offset-4">Review your enquiry →</a>
                  </div>
                </article>
              );
            })}
          </div>
          <aside id="enquiry-cart" aria-labelledby="cart-heading" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 xl:sticky xl:top-24">
            <p className="section-kicker">Your selection</p>
            <h3 id="cart-heading" className="text-2xl font-extrabold">Enquiry cart ({selected.length})</h3>
            <p role="status" className="mt-3 text-sm text-[#456316]">{notice}</p>
            {selected.length === 0 ? <p className="my-6 text-sm leading-6 text-slate-600">Add a product to check availability and arrange your purchase.</p> : (
              <>
                <ul className="my-5 divide-y divide-slate-100">
                  {selected.map((p) => <li key={p.id} className="py-4">
                    <p className="font-bold">{p.name} · {p.finish}</p>
                    <p className="mt-1 text-sm text-slate-600">Quantity 1 · {formatPrice(p.price)}</p>
                    <button type="button" className="mt-2 min-h-11 text-sm font-bold underline underline-offset-4" aria-label={`Remove ${p.name} from enquiry`} onClick={() => {
                      setCart((current) => current.filter((id) => id !== p.id));
                      setNotice(`${p.name} removed from your enquiry.`);
                    }}>Remove</button>
                  </li>)}
                </ul>
                <div className="flex justify-between gap-3 border-t border-slate-200 pt-4 font-extrabold"><span>{subtotalLabel}</span><span>{subtotal}</span></div>
                {needsQuote && <p className="mt-2 text-sm font-bold text-slate-600">Price-on-enquiry items are quoted separately. Ask us for your complete order total.</p>}
                <p className="mt-2 text-xs leading-5 text-slate-500">Delivery, if needed, is quoted separately. Final price and availability are confirmed by the workshop. Adding an item does not reserve it.</p>
                <label htmlFor="fulfilment" className="mt-5 block text-sm font-bold">How would you like to receive it?</label>
                <select id="fulfilment" className="field mt-2" value={fulfilment} onChange={(e) => setFulfilment(e.target.value)}>
                  <option>Collection enquiry</option><option>Delivery quote enquiry</option>
                </select>
                <a href={`https://wa.me/27648188737?text=${encodeURIComponent(message)}`} className="btn-dark mt-5 w-full text-center">Check availability on WhatsApp →</a>
                <p className="mt-3 text-xs leading-5 text-slate-500">Opens WhatsApp with your selection. Review and send the message to start your enquiry. No payment is taken on this website.</p>
              </>
            )}
            <div className="mt-6 border-t border-slate-200 pt-5 text-sm leading-6">
              <p className="font-bold">Prefer to speak to us?</p>
              <a href="tel:+27648188737" className="underline underline-offset-4">064 818 8737</a>
              <a href="mailto:Info@capetechrepairs.co.za" className="block break-all underline underline-offset-4">Info@capetechrepairs.co.za</a>
            </div>
          </aside>
        </div>
        <noscript><p className="mt-6 rounded-xl bg-white p-6">To enquire without JavaScript, <a className="font-bold underline" href="https://wa.me/27648188737?text=Hi%20Cape%20Tech%2C%20please%20confirm%20pricing%20and%20availability%20for%20your%20listed%20laptops.">contact us on WhatsApp about our listed laptops</a> or call 064 818 8737.</p></noscript>
      </div>
    </section>
  );
}

function ProductGallery({ product }) {
  const [active, setActive] = useState(0);
  return <div className="border-b border-slate-100 p-5 md:p-8">
    <a href={encodeURI(product.photos[active])} aria-label={`Open full-size ${product.name} photo ${active + 1}`}>
      <Image src={product.photos[active]} alt={`${product.finish} ${product.name}, product photo ${active + 1} of ${product.photos.length}`} width={1122} height={1402} sizes="(min-width: 1280px) 700px, 100vw" className="h-[320px] w-full object-contain md:h-[420px]" />
    </a>
    <div className="mt-4 flex flex-wrap gap-2" aria-label={`${product.name} photos`}>
      {product.photos.map((photo, i) => <button key={photo} type="button" aria-label={`Show ${product.name} photo ${i + 1}`} aria-pressed={active === i} onClick={() => setActive(i)} className={`relative h-16 w-14 overflow-hidden rounded-lg border-2 ${active === i ? "border-[#668d1f]" : "border-slate-200"}`}>
        <Image src={photo} alt="" fill sizes="56px" className="object-contain" />
      </button>)}
    </div>
    <p className="mt-3 text-xs text-slate-500">Photo {active + 1} of {product.photos.length} · Select a thumbnail or open the photo full size.</p>
  </div>;
}
