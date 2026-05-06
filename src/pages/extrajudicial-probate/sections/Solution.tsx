import { Item, ItemDescription } from "@/components/ui/item";
import { CheckCircleIcon } from "lucide-react";
import imgBg from "@/assets/lampada.webp";
import imgLogo from "@/assets/logo.webp";
import imgSolution1 from "@/assets/solutionPoints-1.webp";
import imgSolution2 from "@/assets/solutionPoints-2.webp";
import imgSolution3 from "@/assets/solutionPoints-3.webp";
import imgSolution4 from "@/assets/solutionPoints-4.webp";
import { redirectToWhatsapp } from "@/constants/contact";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/svg/pre-made-icons";

const solutionPoints = [
  {
    text: "Não conseguem vender o imóvel por falta de inventário",
    imgUrl: imgSolution1,
  },
  {
    text: "O inventário está parado há meses (ou anos)",
    imgUrl: imgSolution2,
  },
  {
    text: "Preocupados com os custos do processo.",
    imgUrl: imgSolution3,
  },
  {
    text: "Não sabem por onde começar e tem medo de errar.",
    imgUrl: imgSolution4,
  },
];

export function Solution() {
  return (
    <section className="w-full min-h-svh relative px-4 pt-12 pb-28 md:py-16 overflow-hidden bg-legal-paper">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(247, 242, 232, 0.98), rgba(232, 220, 198, 0.94)), url(${imgBg})`,
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-amber-100" />

      <div className="relative z-10 flex flex-col min-h-[calc(100svh-8rem)] max-w-7xl mx-auto justify-center items-center">
        <div className="max-w-4xl text-center">
          <p className="tracking-widest text-sm text-legal-burgundy font-semibold">
            A solução pode ser mais simples do que parece
          </p>
          <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-legal-ink mt-3 leading-[1.16] md:leading-[1.18]">
            Inventário extrajudicial
          </h2>
          <p className="mt-4 text-base md:text-lg text-legal-slate leading-7 md:leading-8">
            <span className="font-bold">
              Você pode organizar tudo em cartório, de forma mais rápida e sem
              enfrentar anos na Justiça.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-x-3 md:gap-x-4 max-w-4xl w-full mx-auto mt-10">
          <p className="mx-auto text-base py-2 text-legal-burgundy font-bold text-center">
            Muitos estão com a vida travada por não conhecerem a solução
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 pt-1 w-full">
            {solutionPoints.map(({ text, imgUrl }) => (
              <Item
                key={text}
                variant="muted"
                className="relative min-h-55 overflow-hidden rounded-2xl border-0 bg-neutral-900 shadow-lg"
                style={{
                  backgroundImage: `url(${imgUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-black/15" />

                <div className="relative z-10 flex h-full min-h-55 flex-col items-center justify-end p-5 text-center">
                  <ItemDescription className="text-base text-center leading-6 text-white line-clamp-none overflow-visible">
                    {text}
                  </ItemDescription>
                </div>
              </Item>
            ))}
          </div>

          <div className="my-8 rounded-lg border border-legal-gold/35 bg-white/95 px-5 py-6 text-legal-charcoal shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <img
                src={imgLogo}
                alt="Logo José Arruda Jesus"
                className="w-36 rounded-lg bg-white p-2 shadow-sm"
              />
              <div className="text-center sm:text-left">
                <p className="flex justify-center sm:justify-start items-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-semibold text-legal-burgundy">
                  <CheckCircleIcon className="size-5" />
                  Condução profissional
                </p>
                <p className="mt-2 text-[0.95rem] sm:text-base leading-7">
                  Segurança jurídica, comunicação simples e acompanhamento
                  próximo até a regularização do patrimônio.
                </p>
              </div>
            </div>
          </div>

          <Button
            onClick={() => redirectToWhatsapp()}
            className="min-h-14 w-full rounded-lg text-base font-bold text-white bg-legal-green hover:bg-legal-green-hover shadow-lg transition-all duration-300 hover:scale-[1.02] whitespace-normal"
          >
            <WhatsAppIcon className="size-5 md:size-6" />
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
