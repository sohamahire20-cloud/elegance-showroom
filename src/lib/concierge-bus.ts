export const CONCIERGE_EVENT = "elegance:concierge";

export function openConcierge() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(CONCIERGE_EVENT));
  }
}
