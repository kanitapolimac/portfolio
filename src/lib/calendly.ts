export const CALENDLY_URL = "https://calendly.com/kanita-polimac/30min";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

let loading: Promise<void> | null = null;

function loadCalendly(): Promise<void> {
  if (window.Calendly) return Promise.resolve();
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Calendly widget failed to load"));
      document.head.appendChild(script);
    });
  }
  return loading;
}

export async function openCalendly(e?: { preventDefault: () => void }) {
  e?.preventDefault();
  try {
    await loadCalendly();
    window.Calendly!.initPopupWidget({ url: CALENDLY_URL });
  } catch {
    window.open(CALENDLY_URL, "_blank", "noopener");
  }
}
