import type { Variants } from "framer-motion";

import {
  TrendingUpIcon,
  UsersIcon,
  FileWarningIcon,
  MessageCircleIcon,
  TimerIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import imgBg from "@/assets/hero/fundo_authority.png";
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
        backgroundImage: `linear-gradient(180deg, rgba(16, 22, 23, 0.92), rgba(16, 22, 23, 0.86) 46%, rgba(111, 48, 43, 0.74) 100%), url(${imgBg})`,
      }}
    >
      <div className="w-full min-h-[calc(100svh-6rem)] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6">
            <p className="uppercase tracking-widest text-sm text-legal-gold-soft font-semibold">
              Urgência responsável
            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-semibold leading-[1.18]">
              <TimerIcon className="mb-4 size-10 text-legal-gold-soft" />
              Adiar o inventário raramente deixa o caminho mais simples.
            </h2>

            <p className="text-base md:text-lg text-legal-paper/85 leading-8">
              Resolver cedo não é agir com pressa. É ganhar clareza sobre
              documentos, custos e decisões antes que a situação fique mais
              difícil de administrar.
            </p>

            <Button
              onClick={() => redirectToWhatsapp()}
              className="min-h-14 w-full text-base font-bold rounded-lg text-white bg-legal-green hover:bg-legal-green-hover shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageCircleIcon className="size-5 md:size-6" />
              Quero avaliar meu inventário
            </Button>

            <div className="border-l-4 border-legal-gold pl-4">
              <p className="text-base text-legal-paper/90 leading-7">
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
                className="bg-legal-paper/95 rounded-lg border border-legal-gold/20 p-5 shadow-lg flex items-start gap-4 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="mt-1 size-6 shrink-0 text-legal-burgundy" />
                <p className="text-base text-legal-charcoal leading-7">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-legal-burgundy text-white py-6 px-4 text-center">
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
