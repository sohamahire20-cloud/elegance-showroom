import { createFileRoute } from "@tanstack/react-router";
import { ScrollHero } from "@/components/site/ScrollHero";
import { Materials } from "@/components/site/Materials";
import { MaterialExperience } from "@/components/site/MaterialExperience";
import { FindYourMaterial } from "@/components/site/FindYourMaterial";
import { Closing } from "@/components/site/Closing";
import { ContactControls } from "@/components/site/ContactControls";
import { Concierge } from "@/components/site/Concierge";

const TITLE = "Elegance Veneers — The Art of Material | Nashik";
const DESC =
  "Veneers, laminates, heritage lime plaster and custom wardrobes. A material showroom in Canada Corner, Nashik.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background">
      <ScrollHero />
      <Materials />
      <MaterialExperience />
      <FindYourMaterial />
      <Closing />
      <ContactControls />
      <Concierge />
    </main>
  );
}
