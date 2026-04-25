import {
  MessageCircleIcon,
  ClockIcon,
  DollarSignIcon,
  HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function Contact() {
  return (
    <section className="w-full min-h-[100svh] bg-[#0a0a0a] relative">
      <div className="w-full min-h-[100svh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div className="text-white space-y-6">
            <p className="uppercase tracking-widest text-sm text-gray-400">
              Contato
            </p>

            <h2 className="text-3xl md:text-5xl font-serif font-semibold leading-tight">
              Pronto para resolver isso
              <br />
              de forma rápida e segura?
            </h2>

            <p className="text-base md:text-lg text-gray-300">
              Fale agora com um especialista em inventário extrajudicial e
              entenda exatamente o que precisa ser feito.
            </p>

            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-base md:text-lg text-gray-200">
                Conversa gratuitamente e sem compromisso.
              </p>
            </div>

            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-base md:text-lg px-6 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageCircleIcon className="size-5 md:size-6" />
              Falar com especialista agora
            </a>

            <p className="text-sm text-gray-400">
              Atendimento rápido • 100% confidencial
            </p>
          </div>

          {/* RIGHT SIDE - FAQ COM ANIMAÇÃO */}
          <div className="grid gap-4">
            {[
              {
                icon: <ClockIcon className="text-yellow-600 mt-1" />,
                title: "Qual o prazo médio?",
                desc: "Em muitos casos, o processo pode ser resolvido em semanas.",
              },
              {
                icon: <DollarSignIcon className="text-yellow-600 mt-1" />,
                title: "Quanto custa?",
                desc: "Você recebe uma estimativa clara após uma análise rápida do caso.",
              },
              {
                icon: <HelpCircleIcon className="text-yellow-600 mt-1" />,
                title: "Como funciona?",
                desc: "Orientamos todo o processo e cuidamos da parte burocrática.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl p-5 shadow-lg flex items-start gap-4 hover:shadow-xl hover:-translate-y-1"
              >
                {item.icon}
                <div>
                  <p className="text-base md:text-lg text-gray-800 font-medium">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="w-full bg-yellow-500 text-black py-6 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="text-base md:text-lg">
            Quanto antes você começar, mais simples e econômico será resolver.
          </p>

          <p className="text-base md:text-lg font-semibold">
            Evite atrasos, custos desnecessários e desgaste familiar.
          </p>

          <p className="text-sm md:text-base opacity-80">
            Dê o primeiro passo agora.
          </p>
        </div>
      </div>
    </section>
  );
}
