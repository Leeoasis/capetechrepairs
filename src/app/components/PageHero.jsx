import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  note,
}) {
  return (
    <section className="relative overflow-hidden bg-[#07111f] text-white">
      <div className="absolute inset-0 grid-noise" />
      <div className="shell relative grid min-h-[560px] items-stretch lg:grid-cols-[1.08fr_.92fr]">
        <div className="flex items-center py-20 pr-0 md:py-24 lg:pr-16">
          <div>
            <p className="eyebrow mb-6 text-[#b7f34a]">{eyebrow}</p>
            <h1 className="display max-w-3xl">{title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              {description}
            </p>
            {note && (
              <p className="mt-8 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300">
                {note}
              </p>
            )}
          </div>
        </div>
        <div className="relative min-h-[360px] lg:min-h-full">
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
