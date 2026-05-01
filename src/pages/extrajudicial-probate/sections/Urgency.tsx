import {
  TrendingUpIcon,
  UsersIcon,
  FileWarningIcon,
  TimerIcon,
} from "lucide-react";
import imgBg from "@/assets/hero/fundo_authority.png";
import { Button } from "@/components/ui/button";
import { redirectToWhatsapp } from "@/constants/contact";
import { WhatsAppIcon } from "@/components/ui/svg/pre-made-icons";

const urgencyCards = [
  {
    icon: TrendingUpIcon,
    text: "Custos, impostos e exigências podem ficar mais difíceis de organizar.",
  },
  {
    icon: UsersIcon,
    text: "Quanto mais tempo passa, maior a chance de ruídos entre herdeiros.",
  },
  {
    icon: FileWarningIcon,
    text: "Bens sem regularização limitam venda, transferência e planejamento.",
  },
];

export function Urgency() {
  return (
    <section
      className="w-full min-h-svh bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(16, 22, 23, 0.92), rgba(16, 22, 23, 0.86) 46%, rgba(111, 48, 43, 0.74) 100%), url(${imgBg})`,
      }}
    >
      <div className="w-full min-h-[calc(100svh-6rem)] flex items-center justify-center px-4 pt-12 pb-28 md:py-16">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-5 md:space-y-6">
            <p className="uppercase tracking-widest text-md text-red-500 font-semibold flex gap-4 items-end">
              É URGENTE!
            </p>
            <TimerIcon className="size-9 md:size-10 text-red-500 animate-spin " />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold leading-[1.16] md:leading-[1.18]">
              Adiar o inventário raramente deixa o caminho mais simples.
            </h2>

            <p className="text-base md:text-lg text-legal-paper/85 leading-7 md:leading-8">
              Resolver cedo não é agir com pressa. É ganhar clareza sobre
              documentos, custos e decisões antes que a situação fique mais
              difícil de administrar.
            </p>

            <Button
              onClick={() => redirectToWhatsapp()}
              className="min-h-14 w-full text-base font-bold rounded-lg text-white bg-legal-green hover:bg-legal-green-hover shadow-lg transition-all duration-300 hover:scale-[1.02] whitespace-normal"
            >
              <WhatsAppIcon className="size-5 md:size-6" />
              Quero avaliar meu inventário
            </Button>

            <div className="border-l-4 border-legal-gold pl-4">
              <p className="text-base text-legal-paper/90 leading-7">
                Uma conversa inicial ajuda a definir se o caso pode seguir pelo
                cartório e quais documentos devem ser reunidos primeiro.
              </p>
            </div>
          </div>

          <div className="min-w-0 max-w-full flex flex-col gap-4">
            {urgencyCards.map(({ icon: Icon, text }) => (
              <div className="min-w-0 bg-legal-paper/95 rounded-lg border border-legal-gold/20 p-5 shadow-lg flex items-start gap-4 transition-all hover:shadow-xl hover:-translate-y-1">
                <Icon className="mt-1 size-6 shrink-0 text-legal-burgundy" />
                <p className="text-[0.95rem] sm:text-base text-legal-charcoal leading-7">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-legal-burgundy text-white px-4 pt-6 pb-28 md:py-6 text-center">
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="text-base leading-7">
            Patrimônio regularizado traz segurança para a família decidir com
            tranquilidade.
          </p>

          <p className="text-base font-semibold leading-7">
            O próximo passo é simples: entender o cenário e montar o roteiro.
          </p>

          <p className="text-sm md:text-base opacity-90">
            Orientação inicial pelo WhatsApp, sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
}
