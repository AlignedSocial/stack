import Image from "next/image";
import Link from "next/link";

const services = [
  {
    n: "01",
    name: "Neuromodulators",
    desc: "Botox & Dysport, dosed with restraint for movement that still reads as yours.",
    from: "from $13 / unit",
  },
  {
    n: "02",
    name: "Dermal Fillers",
    desc: "Hyaluronic acid artistry — lip, cheek, jawline. Structure, never stiffness.",
    from: "from $750 / syringe",
  },
  {
    n: "03",
    name: "Medical-Grade Facials",
    desc: "The Signature HydraGlow: cleanse, exfoliate, extract, infuse. Ninety minutes.",
    from: "from $275",
  },
  {
    n: "04",
    name: "Laser Resurfacing",
    desc: "Fractional and picosecond protocols for tone, texture, and pigment.",
    from: "from $600",
  },
  {
    n: "05",
    name: "Microneedling + PRF",
    desc: "Collagen induction paired with platelet-rich fibrin. A quiet reset.",
    from: "from $850",
  },
  {
    n: "06",
    name: "Body Contouring",
    desc: "EmSculpt NEO and cryolipolysis for definition without downtime.",
    from: "from $1,200",
  },
];

const team = [
  {
    name: "Dr. Elena Marchetti",
    role: "Medical Director",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Maya Okafor, RN",
    role: "Lead Injector",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sara Lindqvist",
    role: "Master Aesthetician",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
];

const shortTestimonials = [
  {
    quote:
      "The most undetectable work I've ever had. Everyone just says I look rested.",
    name: "Amélie",
    treatment: "Neuromodulators",
  },
  {
    quote:
      "A consultation that felt like a conversation, not a sales pitch. Rare.",
    name: "Priya",
    treatment: "Dermal Fillers",
  },
  {
    quote:
      "My skin has never behaved like this. The HydraGlow is non-negotiable now.",
    name: "Jordan",
    treatment: "Signature Facial",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-bone text-ink selection:bg-moss selection:text-bone">
      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-clay/40 bg-bone/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-serif text-xl tracking-tight text-ink"
          >
            Lumen<span className="text-moss">.</span>
          </Link>
          <ul className="hidden items-center gap-10 text-sm text-ink/70 md:flex">
            <li>
              <a href="#services" className="hover:text-ink">
                Treatments
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-ink">
                Practice
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-ink">
                Journal
              </a>
            </li>
            <li>
              <a href="#visit" className="hover:text-ink">
                Visit
              </a>
            </li>
          </ul>
          <a
            href="#visit"
            className="group inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-xs uppercase tracking-eyebrow text-ink transition hover:bg-ink hover:text-bone"
          >
            Book
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </nav>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <p className="mb-8 text-xs uppercase tracking-eyebrow text-ink/60">
              Est. 2019 · Medical Aesthetics
            </p>
            <h1 className="font-serif text-6xl leading-[0.92] -tracking-[0.02em] text-ink md:text-[9.5rem] md:leading-[0.88]">
              Skin,
              <br />
              <em className="font-serif italic text-moss">considered</em>
              <span className="text-moss">.</span>
            </h1>
            <p className="mt-10 max-w-md text-pretty text-base leading-relaxed text-ink/75 md:text-lg">
              A small, physician-led medical aesthetics practice. We take the
              time most clinics don&apos;t — and the result looks like nothing
              at all.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="#visit"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm text-bone transition hover:bg-moss"
              >
                Book a consultation
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 border-b border-ink/40 pb-1 text-sm text-ink/80 transition hover:border-ink hover:text-ink"
              >
                Explore treatments
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-clay/30">
              <Image
                src="https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1200&auto=format&fit=crop"
                alt="A quiet treatment suite at Lumen Aesthetics"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-5 bottom-5 rounded-sm border border-bone/30 bg-bone/85 px-5 py-4 backdrop-blur">
                <p className="text-[10px] uppercase tracking-eyebrow text-ink/60">
                  Featured
                </p>
                <p className="mt-1 font-serif text-lg leading-tight text-ink">
                  The Signature HydraGlow Facial
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-eyebrow text-ink/50">
              <span>Vol. 06</span>
              <span>Spring / Summer 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────── */}
      <section
        id="services"
        className="border-t border-clay/50 bg-bone py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-eyebrow text-ink/60">
                01 — Treatments
              </p>
              <h2 className="mt-6 font-serif text-5xl leading-[0.95] -tracking-[0.01em] text-ink md:text-7xl">
                A considered
                <br />
                <em className="italic text-moss">menu</em>.
              </h2>
            </div>
            <p className="self-end text-pretty text-base leading-relaxed text-ink/70 md:col-span-6 md:col-start-7 md:text-lg">
              Every protocol at Lumen is selected, not sold. We work from a
              short, disciplined menu — the treatments our medical director
              would recommend to a friend.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-px bg-clay/40 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.n}
                className="group relative flex flex-col justify-between bg-bone p-10 transition hover:bg-blush/40"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-sm text-moss">{s.n}</span>
                    <span className="text-[10px] uppercase tracking-eyebrow text-ink/40">
                      Treatment
                    </span>
                  </div>
                  <h3 className="mt-10 font-serif text-3xl leading-tight -tracking-[0.01em] text-ink">
                    {s.name}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-12 flex items-center justify-between border-t border-clay/60 pt-5">
                  <span className="text-xs uppercase tracking-eyebrow text-ink/60">
                    {s.from}
                  </span>
                  <span className="text-ink/40 transition group-hover:translate-x-0.5 group-hover:text-ink">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / TEAM ────────────────────────────────────────────── */}
      <section
        id="about"
        className="border-t border-clay/50 bg-bone py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
            <div className="relative md:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-clay/30">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop"
                  alt="Dr. Elena Marchetti"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-6 text-xs uppercase tracking-eyebrow text-ink/50">
                Portrait — Dr. Marchetti, 2025
              </p>
            </div>

            <div className="md:col-span-6 md:col-start-7 md:pt-10">
              <p className="text-xs uppercase tracking-eyebrow text-ink/60">
                02 — The Practice
              </p>
              <h2 className="mt-6 font-serif text-5xl leading-[0.95] -tracking-[0.01em] text-ink md:text-6xl">
                Led by{" "}
                <em className="italic text-moss">Dr. Elena Marchetti</em>, MD.
              </h2>
              <p className="mt-8 text-pretty text-base leading-relaxed text-ink/75 md:text-lg">
                Lumen was founded on a simple idea: that aesthetic medicine
                should be quiet. No trends, no packages, no pressure. Just a
                physician, a thorough assessment, and a plan that ages with
                you.
              </p>
              <ul className="mt-10 flex flex-wrap gap-2">
                {[
                  "Board Certified",
                  "Harvard-Trained",
                  "12+ Years Practicing",
                  "ASDS Member",
                ].map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-ink/20 px-4 py-2 text-xs uppercase tracking-eyebrow text-ink/70"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Team row */}
          <div className="mt-24 border-t border-clay/50 pt-12">
            <div className="mb-10 flex items-end justify-between">
              <p className="text-xs uppercase tracking-eyebrow text-ink/60">
                The Team
              </p>
              <p className="hidden text-xs uppercase tracking-eyebrow text-ink/40 md:block">
                Three practitioners · One standard
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
              {team.map((m) => (
                <figure key={m.name} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-clay/30">
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      sizes="(min-width: 640px) 30vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-5 flex items-baseline justify-between">
                    <span className="font-serif text-xl text-ink">
                      {m.name}
                    </span>
                    <span className="text-xs uppercase tracking-eyebrow text-ink/50">
                      {m.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
      <section
        id="testimonials"
        className="border-t border-clay/50 bg-bone py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-eyebrow text-ink/60">
                03 — In their words
              </p>
            </div>
            <div className="md:col-span-8">
              <blockquote className="font-serif text-3xl leading-[1.15] -tracking-[0.01em] text-ink md:text-5xl">
                <span className="text-moss">&ldquo;</span>I walked in nervous
                and walked out looking like myself on my{" "}
                <em className="italic text-moss">best day</em>. No puffiness,
                no freeze. Just me — in sharper focus.
                <span className="text-moss">&rdquo;</span>
              </blockquote>
              <p className="mt-8 text-xs uppercase tracking-eyebrow text-ink/60">
                Noor H. · Client since 2022
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-px border-t border-clay/50 bg-clay/40 md:grid-cols-3">
            {shortTestimonials.map((t) => (
              <div key={t.name} className="bg-bone p-8 md:p-10">
                <p className="font-serif text-lg leading-snug text-ink/85">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 text-[11px] uppercase tracking-eyebrow text-ink/50">
                  {t.name} · {t.treatment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING / VISIT ─────────────────────────────────────────── */}
      <section
        id="visit"
        className="border-t border-clay/50 bg-blush/60 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-eyebrow text-ink/60">
                04 — Visit
              </p>
              <h2 className="mt-6 font-serif text-5xl leading-[0.95] -tracking-[0.01em] text-ink md:text-7xl">
                Come in.
                <br />
                <em className="italic text-moss">Stay a while.</em>
              </h2>
              <p className="mt-8 max-w-sm text-pretty text-base leading-relaxed text-ink/75">
                The studio is above the old library on Linden St. Press the
                brass button marked <em>Lumen</em>, and someone will come down
                for you.
              </p>
            </div>

            <div className="md:col-span-7 md:pt-12">
              <div className="grid grid-cols-1 gap-px bg-clay/50 sm:grid-cols-2">
                <div className="bg-bone p-8">
                  <p className="text-[10px] uppercase tracking-eyebrow text-ink/50">
                    Studio
                  </p>
                  <p className="mt-4 font-serif text-xl leading-snug text-ink">
                    221 Linden St, Suite 4<br />
                    Brooklyn, NY 11217
                  </p>
                </div>
                <div className="bg-bone p-8">
                  <p className="text-[10px] uppercase tracking-eyebrow text-ink/50">
                    Hours
                  </p>
                  <ul className="mt-4 space-y-1 font-serif text-lg text-ink/85">
                    <li>Tue – Fri &nbsp;·&nbsp; 10 – 7</li>
                    <li>Saturday &nbsp;·&nbsp; 9 – 4</li>
                    <li className="text-ink/50">
                      Sun &amp; Mon &nbsp;·&nbsp; By request
                    </li>
                  </ul>
                </div>
                <div className="bg-bone p-8">
                  <p className="text-[10px] uppercase tracking-eyebrow text-ink/50">
                    Reach Us
                  </p>
                  <ul className="mt-4 space-y-1 font-serif text-lg text-ink/85">
                    <li>(718) 555&nbsp;·&nbsp;0491</li>
                    <li>hello@lumenaesthetics.co</li>
                  </ul>
                </div>
                <div className="flex flex-col justify-between bg-ink p-8 text-bone">
                  <p className="text-[10px] uppercase tracking-eyebrow text-bone/60">
                    Ready?
                  </p>
                  <a
                    href="#"
                    className="group mt-10 inline-flex items-center justify-between border-b border-bone/40 pb-3 font-serif text-2xl text-bone transition hover:border-bone"
                  >
                    Book online
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="border-t border-clay/50 bg-bone">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="col-span-2">
              <Link
                href="/"
                className="font-serif text-2xl tracking-tight text-ink"
              >
                Lumen<span className="text-moss">.</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
                A quieter kind of medical aesthetics. Brooklyn, New York.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-eyebrow text-ink/50">
                Practice
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/75">
                <li>
                  <a href="#services" className="hover:text-ink">
                    Treatments
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-ink">
                    About
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-ink">
                    Journal
                  </a>
                </li>
                <li>
                  <a href="#visit" className="hover:text-ink">
                    Visit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-eyebrow text-ink/50">
                Elsewhere
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/75">
                <li>
                  <a href="#" className="hover:text-ink">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-ink">
                    Substack
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-ink">
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-clay/50 pt-6 text-[11px] uppercase tracking-eyebrow text-ink/50 md:flex-row md:items-center">
            <p>© 2026 Lumen Aesthetics PLLC</p>
            <p>Privacy · Accessibility · HIPAA Notice</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
