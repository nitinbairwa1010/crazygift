export const PHONE_PRIMARY = "+91 7414821377";
export const WHATSAPP_BASE = "https://wa.me/917414821377";

export function whatsappUrl(message?: string) {
  return message ? `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}` : WHATSAPP_BASE;
}

export function openWhatsApp(message: string) {
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}