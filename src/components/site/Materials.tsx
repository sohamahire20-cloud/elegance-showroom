import veneers from "@/assets/cat-veneers.jpg";
import laminates from "@/assets/cat-laminates.jpg";
import plaster from "@/assets/cat-plaster.jpg";
import wardrobes from "@/assets/cat-wardrobes.jpg";

const ITEMS = [
  {
    n: "01",
    title: "Veneers",
    img: veneers,
    note: "Designer, natural wood, textured, 3D, wave and fluted.",
  },
  {
    n: "02",
    title: "Laminates",
    img: laminates,
    note: "Leather laminates and hand-designed surfaces.",
  },
  {
    n: "03",
    title: "Lime Plaster",
    img: plaster,
    note: "Heritage lime plaster and hand-applied lime finishes.",
  },
  {
    n: "04",
    title: "Wardrobes",
    img: wardrobes,
    note: "Modular and customised wardrobes, cane rolls.",
  },
];

export function Materials() {
  return (
    <section id="materials" className="relative px-6 py-28 md:px-14 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <p className="eyebrow">01 — Materials</p>
            <h2 className="display mt-5 text-[clamp(2.2rem,6vw,4.5rem)]">
              Four families,
              <span className="block italic text-oak">one language.</span>
            </h2>
          </div>
          <div className="hidden h-px flex-1 rule-line md:block" />
        </div>

        <div className="space-y-24 md:space-y-32">
          {ITEMS.map((item, i) => (
            <article
              key={item.title}
              className={`group grid items-center gap-8 md:grid-cols-12 ${
                i % 2 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="overflow-hidden md:col-span-7 md:[direction:ltr]">
                <img
                  src={item.img}
                  alt={`${item.title} by Elegance Veneers`}
                  width={1280}
                  height={1600}
                  loading="lazy"
                  className="h-[58vh] w-full object-cover brightness-[0.82] transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:brightness-100 md:h-[72vh]"
                />
              </div>
              <div className="md:col-span-5 md:px-10 md:[direction:ltr]">
                <p className="eyebrow">{item.n}</p>
                <h3 className="display mt-4 text-[clamp(2rem,5vw,3.4rem)] text-ivory transition-colors duration-500 group-hover:text-oak">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {item.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
