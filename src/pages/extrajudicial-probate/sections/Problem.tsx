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
export function Problem() {
  return (
    <section
      className="w-full min-h-svh bg-cover bg-center bg-no-repeat p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.40)), url(${imgBg})`,
      }}
    >
      <div className="flex flex-col max-w-7xl min-h-svh justify-center items-center mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mx-auto text-center text-white pt-5 pb-12">
          SABEMOS O QUÃO CANSATIVO UM INVENTÁRIO PODE SER...
        </h1>

        <div className="flex flex-col gap-6 md:gap-8 text-white max-w-xl w-full mx-auto">
          <Item variant={"muted"} className="bg-background/70">
            <ItemMedia variant="icon">
              <FileTextIcon className="size-5 md:size-6 text-red-800" />
            </ItemMedia>
            <ItemDescription className="text-base md:text-lg text-black">
              Papelada que nunca acaba.
            </ItemDescription>
          </Item>

          <Item variant={"muted"} className="bg-background/70">
            <ItemMedia variant="icon">
              <ClockIcon className="size-5 md:size-6 text-red-800" />
            </ItemMedia>
            <ItemDescription className="text-base md:text-lg text-black">
              Processos que duram anos.
            </ItemDescription>
          </Item>

          <Item variant={"muted"} className="bg-background/70">
            <ItemMedia variant="icon">
              <CalculatorIcon className="size-5 md:size-6 text-red-800" />
            </ItemMedia>
            <ItemDescription className="text-base md:text-lg text-black">
              Impostos e custos excessivos.
            </ItemDescription>
          </Item>

          <Item variant={"muted"} className="bg-background/70">
            <ItemMedia variant="icon">
              <UsersIcon className="size-5 md:size-6 text-red-800" />
            </ItemMedia>
            <ItemDescription className="text-base md:text-lg text-black">
              Conflitos familiares sobre a posse.
            </ItemDescription>
          </Item>

          <Item variant={"muted"} className="bg-accent-foreground mt-1">
            <ItemMedia variant="icon" className="m-auto">
              <TriangleAlertIcon className="size-5 md:size-6 text-red-500" />
            </ItemMedia>
            <ItemDescription className="w-full text-base md:text-lg text-white text-center">
              <p className="text-base md:text-xl">
                O que era para ser um direito vira um desgaste financeiro e
                familiar
              </p>
            </ItemDescription>
            <ItemDescription className="w-full text-base md:text-lg text-white text-center">
              <p className="text-base md:text-xl">
                No fim, não é só tempo que se perde. É paz, clareza e
                equilíbrio.
              </p>
            </ItemDescription>
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

          <p className="text-shadow-md text-white text-center">
            Sem compromisso e 100% confidencial
          </p>
        </div>
      </div>
    </section>
  );
}
