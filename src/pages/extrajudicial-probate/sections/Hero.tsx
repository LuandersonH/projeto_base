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
      className="relative w-full min-h-[92svh] flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(6,6,6,0.90) 0%,
            rgba(6,6,6,0.78) 42%,
            rgba(6,6,6,0.58) 68%,
            rgba(6,6,6,0.76) 100%
          ),
          url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80')
        `,
      }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 py-14 md:py-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-black/40 px-4 py-2 text-xs sm:text-sm text-yellow-300 font-semibold tracking-wide uppercase backdrop-blur">
            <ShieldCheckIcon className="size-4" />
            Advogado para inventário extrajudicial
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-serif font-semibold text-white">
              Inventário extrajudicial com clareza,
              <span className="block text-yellow-400">segurança e rapidez</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
              Receba orientação jurídica para resolver a partilha em cartório,
              quando a família está em consenso e a documentação permite.
            </p>

            <p className="text-base md:text-lg text-gray-300 max-w-2xl">
              Menos burocracia, menos desgaste familiar e um caminho mais
              previsível para regularizar o patrimônio.
            </p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => redirectToWhatsapp()}
              className="min-h-14 w-full sm:w-auto px-6 text-base md:text-lg font-bold rounded-lg text-white shadow-xl bg-[#1f8f4d] hover:bg-[#187a41] transition-all duration-300 hover:scale-[1.02]"
              aria-label="Conversar com especialista em inventário extrajudicial pelo WhatsApp"
            >
              <MessageCircleIcon className="size-5" />
              Falar com especialista no WhatsApp
            </Button>
            <p className="text-sm text-gray-300">
              Primeira conversa confidencial para entender documentos, herdeiros
              e próximos passos.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 pt-1">
            {heroHighlights.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-gray-100 text-center backdrop-blur-sm"
              >
                <CheckCircle2Icon className="mx-auto mb-2 size-4 text-yellow-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex justify-end">
          <div className="w-full max-w-md rounded-lg border border-white/10 bg-black/40 backdrop-blur-xl p-7 shadow-2xl">
            <p className="text-sm uppercase tracking-widest text-yellow-300 font-semibold">
              Caminho mais simples
            </p>

            <h2 className="mt-3 text-3xl font-serif text-white leading-snug">
              Veja se o seu caso pode ser resolvido sem processo judicial.
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Na conversa inicial, avaliamos os requisitos e indicamos o roteiro
              mais seguro para iniciar o inventário.
            </p>

            <div className="mt-6 space-y-4">
              {extrajudicialRequirements.map((item) => (
                <div key={item} className="flex items-start gap-3 text-white">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-black">
                    <BadgeCheckIcon className="size-4" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => redirectToWhatsapp()}
              className="w-full mt-8 min-h-14 rounded-lg bg-yellow-600 text-white hover:bg-yellow-500 font-bold text-base"
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
