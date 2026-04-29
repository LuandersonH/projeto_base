import { Button } from "@/components/ui/button";
import { redirectToWhatsapp } from "@/constants/contact";
import imgAut from "@/assets/hero/hero_ze_vert.jpg";
import imgBg from "@/assets/hero/fundo_authority.png";
import { CheckCircle2Icon, MessageCircleIcon } from "lucide-react";

const commitments = [
  "Explicar cada etapa em linguagem simples",
  "Antecipar documentos, custos e riscos práticos",
  "Conduzir o inventário com discrição e respeito familiar",
];

export function Authority() {
  return (
    <section
      className="w-full min-h-svh flex flex-col items-center px-4 py-16 bg-cover bg-left bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 244, 229, 0.90), rgba(20, 20, 20, 0.72)), url(${imgBg})`,
      }}
    >
      <div className="max-w-4xl space-y-4 text-center mb-8 md:mb-12">
        <p className="text-sm tracking-widest uppercase text-black/70 font-semibold">
          O advogado
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-white">
          José Arruda Jesus
        </h2>
        <p className="text-base md:text-lg font-medium text-black mx-auto">
          Atuação focada em inventário extrajudicial, com condução estratégica
          para reduzir dúvidas, organizar documentos e proteger o patrimônio da
          família.
        </p>
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-2xl border border-white/20 bg-white/90">
        <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10 bg-[#111111] text-white">
          <p className="text-sm uppercase tracking-widest text-yellow-400 font-semibold">
            Compromisso de atendimento
          </p>

          <h3 className="mt-4 text-2xl md:text-4xl font-serif font-semibold leading-tight">
            Clareza para uma decisão sensível.
          </h3>

          <div className="mt-6 space-y-4 text-base md:text-lg text-gray-200 leading-relaxed">
            <p>
              Inventário envolve patrimônio, memória familiar e decisões que
              precisam ser tomadas com cuidado.
            </p>
            <p>
              O objetivo é transformar um processo que parece confuso em um
              caminho orientado, previsível e juridicamente seguro.
            </p>
          </div>

          <div className="mt-7 space-y-3">
            {commitments.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2Icon className="mt-0.5 size-5 shrink-0 text-yellow-400" />
                <span className="text-gray-100">{item}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={() => redirectToWhatsapp()}
            className="mt-8 min-h-14 w-full rounded-lg text-base font-bold text-white bg-[#1f8f4d] hover:bg-[#187a41] shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <MessageCircleIcon className="size-5" />
            Conversar com o advogado
          </Button>
        </div>

        <div className="flex justify-center md:justify-end bg-[#efe6cd]">
          <img
            src={imgAut}
            alt="Advogado José Arruda Jesus"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
