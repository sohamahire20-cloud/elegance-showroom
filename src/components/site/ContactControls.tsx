import { Instagram, MapPin, MessageCircle, Mic, Phone } from "lucide-react";
import {
  INSTAGRAM_HREF,
  MAPS_HREF,
  TEL_HREF,
  WHATSAPP_HREF,
} from "@/lib/elegance";
import { openConcierge } from "@/lib/concierge-bus";

const LINKS = [
  { label: "WhatsApp", href: WHATSAPP_HREF, Icon: MessageCircle, ext: true },
  { label: "Call", href: TEL_HREF, Icon: Phone, ext: false },
  { label: "Instagram", href: INSTAGRAM_HREF, Icon: Instagram, ext: true },
  { label: "Maps", href: MAPS_HREF, Icon: MapPin, ext: true },
];

export function ContactControls() {
  return (
    <>
      {/* Desktop right rail */}
      <div className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-2 md:flex">
        <button
          type="button"
          onClick={openConcierge}
          aria-label="Talk to Elegance"
          className="group pointer-events-auto flex items-center gap-3 border border-border bg-background/70 px-4 py-3 backdrop-blur-sm transition-colors duration-500 hover:border-oak"
        >
          <span className="text-[0.6rem] tracking-[0.28em] uppercase text-muted-foreground transition-colors group-hover:text-oak">
            Talk
          </span>
          <Mic className="h-4 w-4 text-ivory transition-colors group-hover:text-oak" />
        </button>
        {LINKS.map(({ label, href, Icon, ext }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(ext
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group pointer-events-auto flex items-center gap-3 border border-border bg-background/70 px-4 py-3 backdrop-blur-sm transition-colors duration-500 hover:border-oak"
          >
            <span className="text-[0.6rem] tracking-[0.28em] uppercase text-muted-foreground transition-colors group-hover:text-oak">
              {label}
            </span>
            <Icon className="h-4 w-4 text-ivory transition-colors group-hover:text-oak" />
          </a>
        ))}
      </div>

      {/* Mobile bottom bar */}
      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-border bg-background/90 backdrop-blur-md md:hidden">
        <button
          type="button"
          onClick={openConcierge}
          aria-label="Talk to Elegance"
          className="flex flex-col items-center gap-1.5 py-3 text-oak"
        >
          <Mic className="h-4 w-4" />
          <span className="text-[0.55rem] tracking-[0.2em] uppercase">Talk</span>
        </button>
        {LINKS.map(({ label, href, Icon, ext }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(ext
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex flex-col items-center gap-1.5 py-3 text-muted-foreground active:text-oak"
          >
            <Icon className="h-4 w-4" />
            <span className="text-[0.55rem] tracking-[0.2em] uppercase">
              {label}
            </span>
          </a>
        ))}
      </nav>
    </>
  );
}
