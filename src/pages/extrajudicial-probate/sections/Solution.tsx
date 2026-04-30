import { Item, ItemDescription, ItemMedia } from "@/components/ui/item";
import {
  CalculatorIcon,
  CheckCircleIcon,
  ClockIcon,
  FileTextIcon,
  MessageCircleIcon,
  UsersIcon,
} from "lucide-react";
import imgBg from "@/assets/hero/lampada.png";
import imgLogo from "@/assets/hero/logo.png";
import { redirectToWhatsapp } from "@/constants/contact";
import { Button } from "@/components/ui/button";

const solutionPoints = [
  {
    icon: FileTextIcon,
    text: "Checklist documental desde o início, para evitar idas e vindas.",
  },
  {
    icon: ClockIcon,
    text: "Roteiro mais ágil quando o caso atende aos requisitos do cartório.",
  },
  {
    icon: CalculatorIcon,
    text: "Estimativa clara de custos, impostos e próximos passos.",
  },
  {
    icon: UsersIcon,
    text: "Condução técnica para manter consenso e reduzir ruídos familiares.",
  },
];

export function Solution() {
  return (
    <section className="w-full min-h-svh relative px-4 py-16 overflow-hidden bg-legal-paper">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(247, 242, 232, 0.98), rgba(232, 220, 198, 0.94)), url(${imgBg})`,
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-amber-100" />

      <div className="relative z-10 flex flex-col min-h-[calc(100svh-8rem)] max-w-7xl mx-auto justify-center items-center">
        <div className="max-w-3xl text-center">
          <p className="uppercase tracking-widest text-sm text-legal-burgundy font-semibold">
            A solução
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-legal-ink mt-3 leading-[1.18]">
            Inventário extrajudicial: um caminho mais claro quando há consenso.
          </h2>
          <p className="mt-4 text-base md:text-lg text-legal-slate leading-8">
            Com um advogado de inventário conduzindo a estratégia, a família
            entende documentos, custos e prazos antes de tomar decisões.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-5 max-w-2xl w-full mx-auto mt-10">
          {solutionPoints.map(({ icon: Icon, text }) => (
            <Item
              key={text}
              variant="muted"
              className="bg-white/95 border border-legal-sand px-4 py-4 shadow-sm"
            >
              <ItemMedia variant="icon">
                <Icon className="size-5 md:size-6 text-legal-green" />
              </ItemMedia>
              <ItemDescription className="text-base text-legal-charcoal leading-7 line-clamp-none">
                {text}
              </ItemDescription>
            </Item>
          ))}

          <div className="mt-2 rounded-lg border border-legal-gold/35 bg-white/95 px-5 py-6 text-legal-charcoal shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <img
                src={imgLogo}
                alt="Logo José Arruda Jesus"
                className="w-36 rounded-lg bg-white p-2 shadow-sm"
              />
              <div className="text-center sm:text-left">
                <p className="flex justify-center sm:justify-start items-center gap-2 text-sm uppercase tracking-widest font-semibold text-legal-burgundy">
                  <CheckCircleIcon className="size-5" />
                  Condução profissional
                </p>
                <p className="mt-2 text-base leading-7">
                  Segurança jurídica, comunicação simples e acompanhamento
                  próximo até a regularização do patrimônio.
                </p>
              </div>
            </div>
          </div>

          <Button
            onClick={() => redirectToWhatsapp()}
            className="min-h-14 w-full rounded-lg text-base font-bold text-white bg-legal-green hover:bg-legal-green-hover shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <MessageCircleIcon className="size-5 md:size-6" />
            Verificar documentos necessários
          </Button>

          <p className="text-sm text-legal-slate text-center leading-6">
            Sem compromisso e com orientação em linguagem direta.
          </p>
        </div>
      </div>
    </section>
  );
}
