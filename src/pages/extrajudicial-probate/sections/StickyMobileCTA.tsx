import { Button } from "@/components/ui/button";
import { redirectToWhatsapp } from "@/constants/contact";
import { MessageCircleIcon } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 md:hidden border-t border-legal-gold/20 bg-legal-ink/95 px-4 pt-3 shadow-2xl backdrop-blur"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <Button
        onClick={() => redirectToWhatsapp()}
        className="min-h-12 w-full rounded-lg bg-legal-green text-sm font-bold text-white shadow-lg hover:bg-legal-green-hover"
        aria-label="Falar com especialista em inventário extrajudicial pelo WhatsApp"
      >
        <MessageCircleIcon className="size-5" />
        Falar com especialista agora
      </Button>
      <p className="mt-1 text-center text-[11px] text-white/70">
        Atendimento confidencial pelo WhatsApp
      </p>
    </div>
  );
}
