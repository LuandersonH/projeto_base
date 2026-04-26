import type { Variants } from "framer-motion";

import {
  TrendingUpIcon,
  UsersIcon,
  FileWarningIcon,
  MessageCircleIcon,
  TimerIcon,
  ClockIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import imgBg from "@/assets/hero/problem.webp";
import { Button } from "@/components/ui/button";

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

export function Urgency() {
  return (
    <section
      className="w-full min-h-[100svh] bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.6)), url(${imgBg})`,
      }}
    >
      <div className="w-full min-h-[100svh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE - COPY */}
          <div className="text-white space-y-6">
            <p className="uppercase tracking-widest text-sm text-gray-300">
              TOME A INICIATIVA
            </p>

            <h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight">
              <ClockIcon className="size-10 md:size-15 animate-spin" />
              Adiar só torna tudo mais caro — e mais difícil.
            </h1>

            <p className="text-base md:text-lg text-gray-300">
              Cada dia que passa sem resolver o inventário não é neutro.
              <br />
              <span className="text-white font-semibold">
                Ele joga contra você.
              </span>
            </p>
            <Button className="min-h-20 w-full text-base font-bold rounded-xl text-white bg-red-950 shadow-lg animate-pulse-soft transition-all duration-300 hover:scale-[1.02]">
              <span className="text-white-600">
                RESOLVA SEU PROBLEMA JUNTO COM O ADVOGADO AGORA!
              </span>
            </Button>

            <div className="border-l-4 border-red-500 pl-4">
              <p className="text-base md:text-lg text-gray-200">
                O que hoje é simples, amanhã pode virar um problema maior.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - CARDS COM ANIMAÇÃO */}
          <div className="grid gap-4">
            {[
              {
                icon: <TrendingUpIcon className="text-red-600 mt-1" />,
                text: "Impostos e multas continuam crescendo",
              },
              {
                icon: <UsersIcon className="text-red-600 mt-1" />,
                text: "Pequenos desentendimentos viram grandes conflitos",
              },
              {
                icon: <FileWarningIcon className="text-red-600 mt-1" />,
                text: "A documentação se complica com o tempo",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl p-5 shadow-lg flex items-start gap-4 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {item.icon}
                <p className="text-base md:text-lg text-gray-800">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="w-full bg-red-600 text-white py-6 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="text-base md:text-lg">
            E enquanto você espera, o patrimônio segue bloqueado — sem cumprir o
            papel dele.
          </p>

          <p className="text-base md:text-lg font-semibold">
            Resolver agora não é pressa.
            <br />É evitar prejuízo, desgaste e dor de cabeça.
          </p>

          <p className="text-sm md:text-base opacity-90">
            Quanto antes você agir, mais rápido você encerra esse capítulo.
          </p>
        </div>
      </div>
    </section>
  );
}
