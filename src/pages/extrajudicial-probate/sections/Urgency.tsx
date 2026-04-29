import type { Variants } from "framer-motion";

import {
  TrendingUpIcon,
  UsersIcon,
  FileWarningIcon,
  MessageCircleIcon,
  TimerIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import imgBg from "@/assets/hero/problem.webp";
import { Button } from "@/components/ui/button";
import { redirectToWhatsapp } from "@/constants/contact";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,

    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.74), rgba(30, 20, 10, 0.55)), url(${imgBg})`,
      }}
    >
      <div className="w-full min-h-[calc(100svh-6rem)] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6">
            <p className="uppercase tracking-widest text-sm text-yellow-300 font-semibold">
              Urgência responsável
            </p>

            <h2 className="text-3xl md:text-5xl font-serif font-semibold leading-tight">
              <TimerIcon className="mb-4 size-10 md:size-12 text-yellow-400" />
              Adiar o inventário raramente deixa o caminho mais simples.
            </h2>

            <p className="text-base md:text-lg text-gray-200">
              Resolver cedo não é agir com pressa. É ganhar clareza sobre
              documentos, custos e decisões antes que a situação fique mais
              difícil de administrar.
            </p>

            <Button
              onClick={() => redirectToWhatsapp()}
              className="min-h-14 w-full text-base md:text-lg font-bold rounded-lg text-white bg-[#8f1d1d] hover:bg-[#741717] shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageCircleIcon className="size-5 md:size-6" />
              Quero avaliar meu inventário
            </Button>

            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-base md:text-lg text-gray-100">
                Uma conversa inicial ajuda a definir se o caso pode seguir pelo
                cartório e quais documentos devem ser reunidos primeiro.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {urgencyCards.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white/95 rounded-lg p-5 shadow-lg flex items-start gap-4 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="mt-1 size-6 shrink-0 text-red-700" />
                <p className="text-base md:text-lg text-gray-900">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#7f1d1d] text-white py-6 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="text-base md:text-lg">
            Patrimônio regularizado traz segurança para a família decidir com
            tranquilidade.
          </p>

          <p className="text-base md:text-lg font-semibold">
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
