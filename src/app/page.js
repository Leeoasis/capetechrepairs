import Link from "next/link";
import ContactForm from "../app/components/contactForm";
import Maps from "./components/map";

export default function Home() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* ================= HERO (UNCHANGED – GOLD STANDARD) ================= */}
      <section className="relative text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/repair-hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <p className="uppercase tracking-widest text-green-400 mb-4">
            Repairs • Sales • Refurbished • Audio • Gaming
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Professional Electronics Repair
            <br />
            Done Properly
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-200 mb-10">
            Component-level repair and carefully selected devices for sale.
            Honest diagnostics. No unnecessary replacements.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-xl font-bold text-black text-lg"
            >
              Book a Repair
            </Link>

            <Link
              href="/shop"
              className="bg-white/90 hover:bg-white px-10 py-4 rounded-xl font-bold text-neutral-900 text-lg"
            >
              View Devices for Sale
            </Link>
          </div>

          <p className="mt-8 text-sm text-neutral-300">
            Bellville walk-in store • Nationwide courier repairs & sales
          </p>
        </div>
      </section>

      {/* ================= SOCIAL PROOF (SPLIT EVIDENCE) ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-extrabold mb-6">
              Real Work. Real Proof.
            </h2>

            <p className="text-neutral-600 text-lg leading-relaxed mb-10">
              We document our repairs publicly — live diagnostics, board-level work,
              and final testing. You can see exactly how we work before trusting us
              with your device.
            </p>

            <div className="flex flex-col gap-4 text-lg font-semibold">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                ▶ Watch real repairs on YouTube
              </a>

              <a href="#reviews" className="text-green-600 hover:underline">
                ★ Read verified customer reviews
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/repair-still-1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>

        </div>
      </section>

      {/* ================= WHAT WE DO (REPAIRS + SALES) ================= */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

          {/* IMAGE */}
          <div className="relative h-[460px] rounded-2xl overflow-hidden order-last md:order-first">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/repair-still-2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10">
              What We Do
            </h2>

            <div className="grid gap-12 text-lg text-neutral-700">
              <div>
                <h3 className="font-bold text-xl mb-4">Repairs</h3>
                <ul className="space-y-3">
                  <li>• Laptops & desktop computers</li>
                  <li>• TVs (LED, OLED, QLED)</li>
                  <li>• Gaming consoles</li>
                  <li>• HDMI, charging & power faults</li>
                  <li>• Audio equipment & amplifiers</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4">Sales</h3>
                <ul className="space-y-3">
                  <li>• Refurbished laptops & desktops</li>
                  <li>• Custom-built PCs & gaming systems</li>
                  <li>• Monitors, TVs & displays</li>
                  <li>• Parts & upgrades</li>
                </ul>

                <div className="mt-6">
                  <Link
                    href="/shop"
                    className="text-green-600 font-semibold hover:underline"
                  >
                    Browse available devices →
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <Link
                href="/quote"
                className="inline-block bg-green-500 hover:bg-green-600 px-10 py-4 rounded-xl font-bold text-black text-lg"
              >
                Get a Repair Quote
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ================= HOW IT WORKS (PROCESS EVIDENCE) ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10">
              How It Works
            </h2>

            <div className="space-y-8 text-neutral-700 text-lg">
              <div>
                <p className="text-green-600 font-bold text-sm mb-1">STEP 1</p>
                <p className="font-bold">Book or visit</p>
                <p>Walk in or arrange courier collection.</p>
              </div>

              <div>
                <p className="text-green-600 font-bold text-sm mb-1">STEP 2</p>
                <p className="font-bold">Diagnosis & approval</p>
                <p>We assess the device and contact you before repair.</p>
              </div>

              <div>
                <p className="text-green-600 font-bold text-sm mb-1">STEP 3</p>
                <p className="font-bold">Repair or replace</p>
                <p>Device repaired, tested, or replaced if necessary.</p>
              </div>
            </div>

            <div className="mt-14">
              <Link
                href="/quote"
                className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-xl font-bold text-black text-lg"
              >
                Book a Repair Now
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative h-[460px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/repair-still-3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>

        </div>
      </section>

      {/* ================= CONTACT (HUMAN CLOSE) ================= */}
      <section className="py-32 bg-neutral-50" id="reviews">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-extrabold mb-6">
              Visit or Contact Us
            </h2>
            <p className="text-neutral-600 mb-10 max-w-md">
              Whether you need a repair or a replacement device,
              we’ll guide you honestly.
            </p>

            <ul className="space-y-4 text-neutral-700 mb-10">
              <li>📞 064 818 8737</li>
              <li>📍 147 Voortrekker Rd, Bellville, Cape Town</li>
              <li>🕘 Sunday–Friday: 9:00 – 18:00</li>
            </ul>

            <Maps />
          </div>

          <div className="bg-white rounded-2xl p-12">
            <h3 className="text-2xl font-bold mb-8">
              Send Us a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

    </main>
  );
}
