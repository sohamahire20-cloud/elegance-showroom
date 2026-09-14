import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AGENT_ID, PHONE, TEL_HREF, WHATSAPP_HREF } from "@/lib/elegance";
import { CONCIERGE_EVENT } from "@/lib/concierge-bus";

const SCRIPT_SRC = "https://unpkg.com/@elevenlabs/convai-widget-embed";

export function Concierge() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(CONCIERGE_EVENT, handler);
    return () => window.removeEventListener(CONCIERGE_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!open || loaded) return;
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );
    if (existing) {
      setLoaded(true);
      return;
    }
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.type = "text/javascript";
    s.onload = () => setLoaded(true);
    document.body.appendChild(s);
  }, [open, loaded]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close concierge"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />
      <div
        className={`absolute bottom-0 right-0 h-auto w-full max-w-md border-l border-t border-border bg-card p-8 transition-transform duration-700 ease-out md:bottom-6 md:right-6 md:border ${
          open ? "translate-y-0" : "translate-y-6"
        }`}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="eyebrow">Elegance Concierge</p>
            <h2 className="display mt-3 text-3xl text-ivory">
              Talk to <span className="italic text-oak">Elegance</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="p-2 text-muted-foreground transition-colors hover:text-oak"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          Welcome to Elegance. Looking for the right material for your space?
          Ask about veneers, laminates, lime plaster, wardrobes or the showroom.
        </p>

        <div className="mt-7 min-h-24 border border-border p-5">
          {loaded ? (
            <elevenlabs-convai agent-id={AGENT_ID}></elevenlabs-convai>
          ) : (
            <p className="text-xs tracking-[0.24em] uppercase text-muted-foreground">
              Connecting the concierge…
            </p>
          )}
          <p className="mt-3 text-[0.65rem] leading-relaxed text-muted-foreground/80">
            Use the voice control to start the conversation. For prices, stock
            or exact specifications, the team will assist you directly.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={TEL_HREF}
            className="border border-border px-5 py-3 text-[0.62rem] tracking-[0.26em] uppercase text-ivory transition-colors hover:border-oak hover:text-oak"
          >
            {PHONE}
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-5 py-3 text-[0.62rem] tracking-[0.26em] uppercase text-muted-foreground transition-colors hover:border-oak hover:text-oak"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
