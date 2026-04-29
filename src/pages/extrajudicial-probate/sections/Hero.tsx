import { Button } from "@/components/ui/button";
import { redirectToWhatsapp } from "@/constants/contact";
import {
  BadgeCheckIcon,
  CheckCircle2Icon,
  MessageCircleIcon,
  ShieldCheckIcon,
} from "lucide-react";

const heroHighlights = [
  "Análise inicial",
  "Documentos orientados",
  "Atendimento direto",
];

const extrajudicialRequirements = [
  "Herdeiros maiores, capazes e em acordo",
  "Documentação essencial organizada",
  "Condução em cartório, quando o caso permite",
];

export function Hero() {
  return (
    <section
      className="relative w-full min-h-svh flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(16,22,23,0.94) 0%,
            rgba(16,22,23,0.86) 46%,
            rgba(16,22,23,0.64) 76%,
            rgba(16,22,23,0.88) 100%
          ),
          url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80')
        `,
      }}
    >
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-legal-ink" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-lg border border-legal-gold/40 bg-legal-paper/10 px-4 py-2 text-xs sm:text-sm text-legal-gold-soft font-semibold tracking-wide uppercase backdrop-blur">
            <ShieldCheckIcon className="size-4" />
            Advogado para inventário extrajudicial
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl leading-[1.12] font-serif font-semibold text-white">
              Inventário extrajudicial com clareza,
              <span className="block text-legal-gold-soft">
                segurança e orientação simples
              </span>
            </h1>

            <p className="text-base md:text-lg text-legal-paper max-w-2xl leading-8">
              Receba orientação jurídica para resolver a partilha em cartório,
              quando a família está em consenso e a documentação permite.
            </p>

            <p className="text-sm md:text-base text-white/75 max-w-2xl leading-7">
              Um caminho mais previsível para regularizar bens, reduzir dúvidas
              e evitar desgaste familiar desnecessário.
            </p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => redirectToWhatsapp()}
              className="min-h-14 w-full sm:w-auto px-6 text-base font-bold rounded-lg text-white shadow-xl bg-legal-green hover:bg-legal-green-hover transition-all duration-300 hover:scale-[1.02]"
              aria-label="Conversar com especialista em inventário extrajudicial pelo WhatsApp"
            >
              <MessageCircleIcon className="size-5" />
              Falar com especialista no WhatsApp
            </Button>
            <p className="text-sm text-white/70 leading-6">
              Primeira conversa confidencial para entender documentos, herdeiros
              e próximos passos.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 pt-1">
            {heroHighlights.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-legal-paper text-center backdrop-blur-sm"
              >
                <CheckCircle2Icon className="mx-auto mb-2 size-4 text-legal-gold-soft" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex justify-end">
          <div className="w-full max-w-md rounded-lg border border-legal-gold/20 bg-legal-ink/70 backdrop-blur-xl p-7 shadow-2xl">
            <p className="text-sm uppercase tracking-widest text-legal-gold-soft font-semibold">
              Caminho mais simples
            </p>

            <h2 className="mt-3 text-2xl font-serif text-white leading-snug">
              Veja se o seu caso pode ser resolvido sem processo judicial.
            </h2>

            <p className="mt-4 text-sm text-white/75 leading-7">
              Na conversa inicial, avaliamos os requisitos e indicamos o roteiro
              mais seguro para iniciar o inventário.
            </p>

            <div className="mt-6 space-y-4">
              {extrajudicialRequirements.map((item) => (
                <div key={item} className="flex items-start gap-3 text-white">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-legal-gold text-legal-ink">
                    <BadgeCheckIcon className="size-4" />
                  </span>
                  <span className="text-sm leading-6">{item}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => redirectToWhatsapp()}
              className="w-full mt-8 min-h-14 rounded-lg bg-legal-gold text-legal-ink hover:bg-legal-gold-soft font-bold text-base"
              aria-label="Ver se meu caso pode ser inventário extrajudicial"
            >
              Ver se meu caso se encaixa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
