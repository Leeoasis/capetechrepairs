import Image from "next/image";
import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  note,
  primaryLabel = "Book a repair →",
  primaryHref = "/quote",
  secondaryLabel = "Ask on WhatsApp",
  secondaryHref = "https://wa.me/27648188737?text=Hi%20Cape%20Tech%20Repairs%2C%20I%20need%20help%20with%20a%20device.",
  compactMobile = false,
}) {
  return (
    <section className="relative overflow-hidden bg-[#07111f] text-white">
      <div className="absolute inset-0 grid-noise" />
      <div className={`shell relative grid items-stretch lg:min-h-[560px] lg:grid-cols-[1.08fr_.92fr] ${compactMobile ? "" : "min-h-[560px]"}`}>
        <div className={`flex items-center pr-0 lg:pr-16 ${compactMobile ? "py-14 md:py-20" : "py-16 md:py-24"}`}>
          <div>
            <p className="eyebrow mb-6 text-[#b7f34a]">{eyebrow}</p>
            <h1 className="display max-w-3xl">{title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={primaryHref} className="btn-primary">
                {primaryLabel}
              </Link>
              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-4 font-extrabold hover:bg-white/10"
              >
                {secondaryLabel}
              </a>
            </div>
            {note && (
              <p className="mt-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300">
                {note}
              </p>
            )}
          </div>
        </div>
        <div className={`relative lg:min-h-full ${compactMobile ? "hidden lg:block" : "min-h-[320px]"}`}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#07111f] lg:via-[#07111f]/15 lg:to-transparent" />
          <div className="absolute bottom-6 right-6 h-20 w-20 rounded-br-2xl border-b-2 border-r-2 border-[#b7f34a]" />
        </div>
      </div>
    </section>
  );
}
