import showroom from "@/assets/showroom.jpg";
import { MAPS_HREF, PHONE, TEL_HREF, WHATSAPP_HREF } from "@/lib/elegance";
import { openConcierge } from "@/lib/concierge-bus";

export function Closing() {
  return (
    <>
      <section className="relative">
        <img
          src={showroom}
          alt="Elegance Veneers material showroom in Nashik"
          width={1920}
          height={1088}
          loading="lazy"
          className="h-[70vh] w-full object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 flex items-center px-6 md:px-14">
          <div className="mx-auto w-full max-w-6xl">
            <p className="eyebrow">04 — Showroom</p>
            <h2 className="display mt-5 text-[clamp(2rem,6vw,4.5rem)] text-ivory">
              Come experience
              <span className="block italic text-oak">the materials.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ivory/75">
              Business Square, Canada Corner
              <br />
              Nashik, Maharashtra 422002
            </p>
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-4 border border-ivory/40 px-8 py-4 text-[0.68rem] tracking-[0.3em] uppercase text-ivory transition-colors duration-500 hover:border-oak hover:text-oak"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 text-center md:px-14 md:py-44">
        <h2 className="display mx-auto max-w-3xl text-[clamp(2.4rem,8vw,6rem)]">
          Your space
          <br />
          starts with
          <br />
          <span className="italic text-oak">a material.</span>
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={openConcierge}
            className="border border-ivory/40 px-9 py-4 text-[0.68rem] tracking-[0.3em] uppercase text-ivory transition-colors duration-500 hover:border-oak hover:text-oak"
          >
            Talk to Elegance
          </button>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-9 py-4 text-[0.68rem] tracking-[0.3em] uppercase text-muted-foreground transition-colors duration-500 hover:border-oak hover:text-oak"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-border px-6 pb-28 pt-12 md:px-14 md:pb-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs tracking-[0.2em] uppercase text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span className="text-ivory">Elegance Veneers</span>
          <a href={TEL_HREF} className="transition-colors hover:text-oak">
            {PHONE}
          </a>
          <span>Canada Corner, Nashik</span>
        </div>
      </footer>
    </>
  );
}
