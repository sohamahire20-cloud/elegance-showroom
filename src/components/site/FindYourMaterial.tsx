import { useState } from "react";
import { openConcierge } from "@/lib/concierge-bus";

const SPACES = ["Living Room", "Bedroom", "Wardrobe", "Office"];
const FEELS = ["Warm", "Natural", "Luxury", "Minimal", "Textured"];

const RECS: Record<string, string[]> = {
  Warm: ["Natural Wood Veneer", "Heritage Lime Plaster", "Cane Roll Detailing"],
  Natural: ["Natural Wood Veneer", "Designer Veneer", "Lime Finishes"],
  Luxury: ["Designer Veneer", "Leather Laminate", "Hand-Designed Laminate"],
  Minimal: ["Natural Wood Veneer", "Lime Finishes", "Hand-Designed Laminate"],
  Textured: ["Textured Veneer", "Fluted / Wave Veneer", "Heritage Lime Plaster"],
};

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-6 py-3 text-[0.68rem] tracking-[0.24em] uppercase transition-all duration-400 ${
        selected
          ? "border-oak bg-oak/10 text-oak"
          : "border-border text-muted-foreground hover:border-ivory/40 hover:text-ivory"
      }`}
    >
      {label}
    </button>
  );
}

export function FindYourMaterial() {
  const [space, setSpace] = useState<string | null>(null);
  const [feel, setFeel] = useState<string | null>(null);

  const ready = Boolean(space && feel);
  const recs = (feel ? RECS[feel] : []) ?? [];

  return (
    <section id="find" className="px-6 py-24 md:px-14 md:py-36">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow">03 — Find Your Material</p>

        <div className="mt-14 space-y-12">
          <div>
            <h3 className="display text-[clamp(1.6rem,4vw,2.6rem)]">
              What are you designing?
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {SPACES.map((s) => (
                <Chip
                  key={s}
                  label={s}
                  selected={space === s}
                  onClick={() => setSpace(s)}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="display text-[clamp(1.6rem,4vw,2.6rem)]">
              What feel do you want?
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {FEELS.map((f) => (
                <Chip
                  key={f}
                  label={f}
                  selected={feel === f}
                  onClick={() => setFeel(f)}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-16 overflow-hidden border border-border transition-all duration-700"
          style={{
            opacity: ready ? 1 : 0.35,
            maxHeight: ready ? 600 : 130,
          }}
        >
          <div className="p-8 md:p-12">
            <p className="eyebrow">Your Material Direction</p>
            {ready ? (
              <>
                <p className="display mt-4 text-[clamp(1.8rem,4.5vw,3rem)] text-oak">
                  {feel} · {space}
                </p>
                <ul className="mt-8 space-y-3">
                  {recs.map((r) => (
                    <li
                      key={r}
                      className="flex items-center gap-4 border-b border-border/60 pb-3 text-sm text-ivory"
                    >
                      <span className="h-1 w-1 rounded-full bg-oak" />
                      {r}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={openConcierge}
                  className="mt-10 inline-flex items-center gap-4 border border-border px-8 py-4 text-[0.68rem] tracking-[0.3em] uppercase text-ivory transition-colors duration-500 hover:border-oak hover:text-oak"
                >
                  Talk to Elegance
                </button>
              </>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">
                Choose a space and a feeling.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
