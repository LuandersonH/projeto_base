import { Item, ItemDescription, ItemMedia } from "@/components/ui/item";
import {
  CalculatorIcon,
  UsersIcon,
  FileTextIcon,
  ClockIcon,
  TriangleAlertIcon,
} from "lucide-react";
import imgBg from "@/assets/hero/second_problem.jpg";
import { Button } from "@/components/ui/button";
import { redirectToWhatsapp } from "@/constants/contact";
import { WhatsAppIcon } from "@/components/ui/svg/pre-made-icons";

const painPoints = [
  {
    icon: FileTextIcon,
    text: "Você entra em contato pelo WhatsApp",
  },
  {
    icon: ClockIcon,
    text: "Seu caso é analisado com atenção.",
  },
  {
    icon: CalculatorIcon,
    text: "Verificamos se o inventário pode ser extrajudicial",
  },
  {
    icon: UsersIcon,
    text: "você recebe orientação clara sobre documentos, custos e prazos.",
  },
  {
    icon: UsersIcon,
    text: "O processo é conduzido com acompanhamento do inicio ao fim.",
  },
];

export function Problem() {
  return (
    <section
      className="relative w-full min-h-svh bg-cover bg-center bg-no-repeat px-4 pt-12 pb-28 md:py-16 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(16, 22, 23, 0.98) 0%, rgba(16, 22, 23, 0.86) 42%, rgba(111, 48, 43, 0.70) 100%), url(${imgBg})`,
      }}
    >
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-legal-paper" />

      <div className="flex flex-col max-w-7xl min-h-[calc(100svh-8rem)] justify-center items-center mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-legal-gold-soft mt-3 leading-[1.16] md:leading-[1.18]">
            COMO FUNCIONA O ATENDIMENTO
          </h2>
          <p className="mt-4 text-base md:text-lg text-legal-paper/85 leading-7 md:leading-8">
            de forma simples e direta:
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 text-white max-w-4xl w-full mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 pt-1 max-w-4xl">
            {painPoints.map(({ icon: Icon, text }, i) => (
              <Item
                key={text}
                variant="default"
                className="flex flex-col items-center gap-1 px-2 py-1 md:px-2 md:py-1 md:gap-6 shadow-lg"
              >
                <ItemMedia variant="icon" className="mx-auto">
                  <Icon className="size-10 p-1.5 md:size-15 md:p-3 text-legal-gold-soft rounded-full bg-foreground" />
                </ItemMedia>
                <ItemDescription className="text-center text-[0.95rem] sm:text-base text-white leading-7 line-clamp-none">
                  <span className="text-muted-foreground">{i + 1}</span>
                  <div>{text}</div>
                </ItemDescription>
              </Item>
            ))}
          </div>
          <div className="mt-2 rounded-lg border border-legal-gold/30 bg-[#1f1a17]/25 p-5 text-center shadow-xl backdrop-blur-md">
            <TriangleAlertIcon className="mx-auto size-10 p-1.5 md:size-15 md:p-3 text-legal-gold-soft" />
            <p className="mt-3 text-lg font-semibold text-background">
              Não fique com dúvidas!
            </p>
            <p className="mt-2 text-sm md:text-base text-background leading-7">
              Te explicamos todo o passo a passo, com orientação transparência
              em cada etapa do processo!
              <br />
              <br />
              Sem orientação, o inventário pode ficar parado, gerar custos
              desnecessários e aumentar a tensão entre familiares. Te ajudamos a
              evitar dor de cabeça.
            </p>
          </div>

          <Button
            onClick={() => redirectToWhatsapp()}
            className="min-h-14 w-full rounded-lg text-base font-bold text-white bg-legal-green hover:bg-legal-green-hover shadow-lg transition-all duration-300 hover:scale-[1.02] whitespace-normal"
          >
            <WhatsAppIcon className="size-5 md:size-6" />
            Quero orientação antes de iniciar
          </Button>

          <p className="text-sm text-white/75 text-center leading-6">
            Atendimento confidencial, com análise inicial do cenário familiar e
            documental.
          </p>
        </div>
      </div>
    </section>
  );
}
