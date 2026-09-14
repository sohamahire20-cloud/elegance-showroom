import { useRef, useState } from "react";
import surface from "@/assets/veneer-macro.jpg";

export function MaterialExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const [pt, setPt] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPt({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <section className="px-6 py-24 md:px-14 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">02 — Material Experience</p>
        <h2 className="display mt-5 max-w-2xl text-[clamp(2rem,5.5vw,4rem)]">
          Light is what makes a
          <span className="italic text-oak"> surface speak.</span>
        </h2>

        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className="relative mt-12 overflow-hidden border border-border"
        >
          <img
            src={surface}
            alt="Close-up of natural walnut veneer grain"
            width={1920}
            height={1088}
            loading="lazy"
            className="h-[46vh] w-full object-cover transition-transform duration-[900ms] ease-out md:h-[70vh]"
            style={{ transform: active ? "scale(1.05)" : "scale(1)" }}
          />
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: active ? 1 : 0.35,
              background: `radial-gradient(38% 52% at ${pt.x}% ${pt.y}%, oklch(0.95 0.05 80 / 0.28) 0%, transparent 70%)`,
              mixBlendMode: "screen",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(0.145 0.008 60 / 0.92) 0%, transparent 55%)",
            }}
          />
          <div className="pointer-events-none absolute bottom-0 left-0 flex w-full flex-col gap-4 p-6 md:flex-row md:items-end md:justify-between md:p-10">
            <div>
              <p className="eyebrow">Natural Wood Veneer</p>
              <p className="display mt-2 text-2xl text-ivory md:text-4xl">
                Move across the grain.
              </p>
            </div>
            <a
              href="#find"
              className="pointer-events-auto inline-flex w-fit items-center gap-4 border border-border px-7 py-3.5 text-[0.68rem] tracking-[0.3em] uppercase text-ivory transition-colors duration-500 hover:border-oak hover:text-oak"
            >
              Explore Materials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
