import { useEffect, useRef, useState } from "react";
import frame1 from "@/assets/veneer-macro.jpg";
import frame2 from "@/assets/hero-02.jpg";
import frame3 from "@/assets/cat-veneers.jpg";
import frame4 from "@/assets/hero-04.jpg";

const FRAMES = [
  { src: frame1, label: "Wood Grain" },
  { src: frame2, label: "Material" },
  { src: frame3, label: "Interior" },
  { src: frame4, label: "Space" },
];

function clamp(v: number, a = 0, b = 1) {
  return Math.min(b, Math.max(a, v));
}

export function ScrollHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current;
        if (!el) return;
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = -el.getBoundingClientRect().top;
        setP(clamp(total > 0 ? scrolled / total : 0));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // frames occupy 0 -> 0.78, brand reveal 0.7 -> 1
  const filmP = clamp(p / 0.78);
  const pos = filmP * (FRAMES.length - 1);
  const reveal = clamp((p - 0.66) / 0.3);

  return (
    <div ref={wrapRef} className="relative h-[420vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        {FRAMES.map((f, i) => {
          const d = Math.abs(pos - i);
          const opacity = clamp(1 - d);
          const scale = 1.14 - 0.1 * clamp(1 - Math.abs(pos - i) / 1.6);
          return (
            <img
              key={f.label}
              src={f.src}
              alt={`Elegance Veneers material sequence — ${f.label.toLowerCase()}`}
              width={1920}
              height={1088}
              loading={i === 0 ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-cover will-change-transform"
              style={{
                opacity,
                transform: `scale(${scale})`,
                filter: `brightness(${0.55 + 0.35 * opacity})`,
              }}
            />
          );
        })}

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 45%, transparent 0%, oklch(0.145 0.008 60 / 0.55) 60%, oklch(0.145 0.008 60 / 0.94) 100%)",
          }}
        />
        <div
          className="absolute inset-0 bg-background"
          style={{ opacity: reveal * 0.72 }}
        />

        {/* Sequence caption */}
        <div
          className="absolute bottom-10 left-6 md:left-14"
          style={{ opacity: clamp(1 - reveal * 1.6) }}
        >
          <div className="flex items-center gap-3">
            {FRAMES.map((f, i) => (
              <span
                key={f.label}
                className="eyebrow transition-opacity duration-500"
                style={{ opacity: Math.round(pos) === i ? 1 : 0.28 }}
              >
                {f.label}
              </span>
            ))}
          </div>
        </div>

        {/* Brand reveal */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{
            opacity: reveal,
            transform: `translateY(${(1 - reveal) * 28}px)`,
            pointerEvents: reveal > 0.6 ? "auto" : "none",
          }}
        >
          <p className="eyebrow mb-6">Nashik · Since the grain</p>
          <h1 className="display text-[clamp(2.8rem,9vw,8rem)] text-ivory">
            ELEGANCE
            <span className="block italic text-oak">Veneers</span>
          </h1>
          <p className="mt-6 max-w-md text-sm tracking-[0.32em] uppercase text-muted-foreground">
            The Art of Material
          </p>
          <a
            href="#materials"
            className="group mt-12 inline-flex items-center gap-4 border border-border px-8 py-4 text-[0.7rem] tracking-[0.3em] uppercase text-ivory transition-colors duration-500 hover:border-oak hover:text-oak"
          >
            Explore Collection
            <span className="inline-block h-px w-8 bg-current transition-all duration-500 group-hover:w-12" />
          </a>
        </div>

        {/* scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ opacity: clamp(1 - p * 6) }}
        >
          <span className="eyebrow">Scroll</span>
        </div>
      </div>
    </div>
  );
}
