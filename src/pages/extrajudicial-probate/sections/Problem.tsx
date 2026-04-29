import { Item, ItemDescription, ItemMedia } from "@/components/ui/item";
import {
  CalculatorIcon,
  UsersIcon,
  FileTextIcon,
  ClockIcon,
  TriangleAlertIcon,
  MessageCircleIcon,
} from "lucide-react";
import imgBg from "@/assets/hero/second_problem.jpg";
import { Button } from "@/components/ui/button";
import { redirectToWhatsapp } from "@/constants/contact";

const painPoints = [
  {
    icon: FileTextIcon,
    text: "Documentos espalhados e exigências que mudam de cartório para cartório.",
  },
  {
    icon: ClockIcon,
    text: "A demora impede venda, transferência ou uso seguro dos bens.",
  },
  {
    icon: CalculatorIcon,
    text: "Impostos, taxas e custos ficam confusos sem uma estimativa clara.",
  },
  {
    icon: UsersIcon,
    text: "Dúvidas entre herdeiros podem virar conflito quando ninguém conduz o processo.",
  },
];

export function Problem() {
  return (
    <section
      className="w-full min-h-svh bg-cover bg-center bg-no-repeat px-4 py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.48)), url(${imgBg})`,
      }}
    >
      <div className="flex flex-col max-w-7xl min-h-[calc(100svh-8rem)] justify-center items-center mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-widest text-sm text-yellow-300 font-semibold">
            O problema
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-white mt-3">
            Inventário não precisa virar anos de espera e desgaste familiar.
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-200">
            Para quem acabou de perder alguém, a burocracia pode parecer ainda
            mais pesada. O primeiro passo é entender o que pode ser resolvido em
            cartório e o que exige atenção antes de avançar.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-5 text-white max-w-2xl w-full mx-auto mt-10">
          {painPoints.map(({ icon: Icon, text }) => (
            <Item
              key={text}
              variant="muted"
              className="bg-white/90 border border-white/20 px-4 py-4 shadow-lg"
            >
              <ItemMedia variant="icon">
                <Icon className="size-5 md:size-6 text-red-800" />
              </ItemMedia>
              <ItemDescription className="text-base md:text-lg text-gray-950 line-clamp-none">
                {text}
              </ItemDescription>
            </Item>
          ))}

          <div className="mt-2 rounded-lg border border-red-400/40 bg-black/70 p-5 text-center shadow-xl">
            <TriangleAlertIcon className="mx-auto size-7 text-red-400" />
            <p className="mt-3 text-lg md:text-xl font-semibold text-white">
              O risco não é só perder tempo.
            </p>
            <p className="mt-2 text-sm md:text-base text-gray-200">
              Sem orientação, o inventário pode ficar parado, gerar custos
              desnecessários e aumentar a tensão entre familiares.
            </p>
          </div>

          <Button
            onClick={() => redirectToWhatsapp()}
            className="min-h-14 w-full rounded-lg text-base md:text-lg font-bold text-white bg-[#1f8f4d] hover:bg-[#187a41] shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <MessageCircleIcon className="size-5 md:size-6" />
            Quero orientação antes de iniciar
          </Button>

          <p className="text-sm text-white/90 text-center">
            Atendimento confidencial, com análise inicial do cenário familiar e
            documental.
          </p>
        </div>
      </div>
    </section>
  );
}
