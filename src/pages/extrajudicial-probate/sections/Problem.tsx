import { Item, ItemDescription, ItemMedia } from "@/components/ui/item";
import {
  CalculatorIcon,
  UsersIcon,
  FileTextIcon,
  ClockIcon,
  TriangleAlertIcon,
} from "lucide-react";
import imgBg from "@/assets/hero/problem.webp";
export function Problem() {
  return (
    <section
      className="w-full min-h-[100svh] bg-cover bg-center bg-no-repeat p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.6)), url(${imgBg})`,
      }}
    >
      <div className="flex flex-col min-h-[100svh] justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-serif font-semibold mx-auto text-center text-white pt-5 pb-12">
          SABEMOS O QUÃO CANSATIVO UM INVENTÁRIO PODE SER
        </h1>

        <div className="flex flex-col gap-6 md:gap-8 text-white max-w-xl w-full mx-auto">
          <Item variant={"muted"} className="bg-blend-overlay">
            <ItemMedia variant="icon">
              <FileTextIcon className="size-5 md:size-6 text-red-800" />
            </ItemMedia>
            <ItemDescription className="text-base md:text-lg text-black">
              Papelada que nunca acaba.
            </ItemDescription>
          </Item>

          <Item variant={"muted"} className="bg-blend-overlay">
            <ItemMedia variant="icon">
              <ClockIcon className="size-5 md:size-6 text-red-800" />
            </ItemMedia>
            <ItemDescription className="text-base md:text-lg text-black">
              Processos que duram anos.
            </ItemDescription>
          </Item>

          <Item variant={"muted"} className="bg-blend-overlay">
            <ItemMedia variant="icon">
              <CalculatorIcon className="size-5 md:size-6 text-red-800" />
            </ItemMedia>
            <ItemDescription className="text-base md:text-lg text-black">
              Impostos e custos excessivos.
            </ItemDescription>
          </Item>

          <Item variant={"muted"} className="bg-blend-overlay">
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

          <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-base md:text-lg px-6 py-4 rounded-xl shadow-lg transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-6 h-6"
              fill="currentColor"
            >
              <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.893.756 5.61 2.07 7.964L0 32l7.84-2.058A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16.004C32 7.56 24.837.396 16 .396zm0 29.207c-2.6 0-5.14-.697-7.36-2.017l-.526-.312-4.654 1.22 1.243-4.54-.343-.558A13.51 13.51 0 0 1 2.49 16.396c0-7.45 6.06-13.51 13.51-13.51s13.51 6.06 13.51 13.51-6.06 13.51-13.51 13.51zm7.42-10.17c-.406-.203-2.4-1.183-2.77-1.317-.37-.135-.64-.203-.91.203-.27.406-1.047 1.317-1.283 1.588-.237.27-.474.305-.88.102-.406-.203-1.714-.632-3.265-2.014-1.206-1.076-2.02-2.404-2.257-2.81-.237-.406-.025-.625.178-.828.183-.182.406-.474.609-.711.203-.237.27-.406.406-.676.135-.27.068-.508-.034-.711-.102-.203-.91-2.19-1.248-3-.33-.79-.665-.683-.91-.695l-.776-.014c-.27 0-.711.102-1.08.508s-1.417 1.385-1.417 3.377 1.452 3.916 1.654 4.187c.203.27 2.855 4.36 6.92 6.11.967.417 1.72.665 2.307.852.969.308 1.85.265 2.548.16.777-.116 2.4-.98 2.74-1.928.338-.947.338-1.76.237-1.928-.102-.169-.372-.27-.777-.474z" />
            </svg>
            Falar com um especialista agora
          </a>

          <p className="text-sm text-white text-center">
            Sem compromisso e 100% confidencial
          </p>
        </div>
      </div>
    </section>
  );
}
