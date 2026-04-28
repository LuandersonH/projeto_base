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
export function Solution() {
  return (
    <section className="w-full min-h-svh relative p-4 overflow-hidden">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgBg})` }}
      />

      {/* overlay forte */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 flex flex-col min-h-svh max-w-7xl mx-auto justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mx-auto text-center text-white pt-5 pb-12">
          MAS O INVENTÁRIO EXTRAJUDICIAL RESOLVE!
        </h1>

        <div className="flex flex-col gap-6 md:gap-8 max-w-xl w-full mx-auto">
          <Item variant={"muted"} className="bg-background/70">
            <ItemMedia variant="icon">
              <FileTextIcon className="size-5 md:size-6 text-green-600" />
            </ItemMedia>
            <ItemDescription className="text-base md:text-lg text-black">
              Processo ágil, sem anos de espera
            </ItemDescription>
          </Item>

          <Item variant={"muted"} className="bg-background/70">
            <ItemMedia variant="icon">
              <ClockIcon className="size-5 md:size-6 text-green-600" />
            </ItemMedia>
            <ItemDescription className="text-base md:text-lg text-black">
              Menos burocracia, mais clareza
            </ItemDescription>
          </Item>

          <Item variant={"muted"} className="bg-background/70">
            <ItemMedia variant="icon">
              <CalculatorIcon className="size-5 md:size-6 text-green-600" />
            </ItemMedia>
            <ItemDescription className="text-base md:text-lg text-black">
              Custos controlados e previsíveis
            </ItemDescription>
          </Item>

          <Item variant={"muted"} className="bg-background/70">
            <ItemMedia variant="icon">
              <UsersIcon className="size-5 md:size-6 text-green-600" />
            </ItemMedia>
            <ItemDescription className="text-base md:text-lg text-black">
              Acordos feitos com respeito e equilíbrio
            </ItemDescription>
          </Item>

          {/* Bloco de resultado (equivalente ao alerta no Problem) */}
          <Item variant={"muted"} className="mt-1 px-5 bg-background/70">
            <ItemMedia variant="icon" className="m-auto w-full text-black">
              <CheckCircleIcon className="size-5 md:size-6 " /> Qualidade
              garantida por:
            </ItemMedia>
            <div className="grid grid-cols-1 mx-auto gap-4 items-center">
              {/* Lado Esquerdo: Imagem e Ícone */}
              <div className="flex flex-col items-center gap-2 max-w-30%">
                <img
                  src={imgLogo}
                  alt="Logo JaJ - José Arruda Jesus"
                  className="max-w-70 rounded-4xl"
                />
              </div>

              {/* Lado Direito: Textos */}
              <div className="flex flex-col gap-2">
                <ItemDescription className="w-full text-base md:text-lg text-center text-black">
                  <p className="text-base md:text-xl">
                    Segurança jurídica e acompanhamento profissional.
                    <br />
                    Resolvido de uma vez por todas.
                  </p>
                </ItemDescription>
              </div>
            </div>
          </Item>

          <Button
            onClick={redirectToWhatsapp}
            className="relative min-h-20 w-full overflow-hidden rounded-xl p-0.5 text-xl font-bold text-white hover:scale-[1.03] transition-all duration-300"
          >
            {/* borda */}
            <span className="absolute inset-0 rounded-xs bg-[linear-gradient(50deg,#650000,#ffffff,#650000,#ffffff)] bg-size-[200%_100%] animate-[pulse_2.0s_linear_infinite]" />

            {/* fundo */}
            <span className="absolute inset-0.5 rounded-[10px] bg-foreground" />

            {/* texto */}
            <span className="relative z-10 flex gap-x-2">
              <MessageCircleIcon className="size-5 md:size-6" />
              Conversar com especialista agora
            </span>
          </Button>

          <p className="text-sm text-white text-center">
            Sem compromisso e 100% confidencial
          </p>
        </div>
      </div>
    </section>
  );
}
