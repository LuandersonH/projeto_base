import type { FormEvent } from "react";
import type { Variants } from "framer-motion";

import {
  MessageCircleIcon,
  ClockIcon,
  DollarSignIcon,
  HelpCircleIcon,
  SendIcon,
} from "lucide-react";
import { motion } from "framer-motion";
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

const faqItems = [
  {
    icon: ClockIcon,
    title: "Qual o prazo médio?",
    desc: "Depende dos documentos, consenso entre herdeiros e exigências do cartório.",
  },
  {
    icon: DollarSignIcon,
    title: "Quanto custa?",
    desc: "A estimativa fica mais clara após entender bens, impostos e etapa atual.",
  },
  {
    icon: HelpCircleIcon,
    title: "Preciso ter tudo pronto?",
    desc: "Não. A orientação inicial ajuda a organizar o que falta.",
  },
];

function handleQualifiedContact(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const getValue = (field: string) => String(formData.get(field) ?? "").trim();

  const message = [
    "Olá, tudo bem? Vim pelo site sobre inventário extrajudicial e gostaria de uma análise inicial.",
    "",
    `Nome: ${getValue("name")}`,
    `Cidade/UF: ${getValue("city") || "Não informado"}`,
    `Situação dos herdeiros: ${getValue("caseStatus")}`,
    `Principal bem envolvido: ${getValue("assetType")}`,
    `Observações: ${getValue("notes") || "Não informado"}`,
  ].join("\n");

  redirectToWhatsapp(message);
}

export function Contact() {
  return (
    <section className="w-full min-h-svh bg-legal-ink relative pb-24 md:pb-0">
      <div className="w-full min-h-svh flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6">
            <p className="uppercase tracking-widest text-sm text-legal-gold-soft font-semibold">
              Contato
            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-semibold leading-[1.18]">
              Pronto para entender o melhor caminho para o inventário?
            </h2>

            <p className="text-base md:text-lg text-legal-paper/80 leading-8">
              Fale com um especialista em inventário extrajudicial e receba uma
              orientação inicial sobre documentos, custos e próximos passos.
            </p>

            <div className="border-l-4 border-legal-gold pl-4">
              <p className="text-base text-legal-paper/90 leading-7">
                Você não precisa ter todas as respostas agora. A primeira
                conversa serve justamente para organizar o cenário.
              </p>
            </div>

            <Button
              onClick={() => redirectToWhatsapp()}
              className="min-h-14 w-full text-base font-bold rounded-lg gap-3 bg-legal-green hover:bg-legal-green-hover text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageCircleIcon className="size-5 md:size-6" />
              Prefiro chamar direto no WhatsApp
            </Button>

            <p className="text-sm text-white/60">
              Atendimento confidencial. Análise inicial sem compromisso.
            </p>
          </div>

          <div className="grid gap-4">
            <form
              onSubmit={handleQualifiedContact}
              className="rounded-lg border border-legal-gold/25 bg-legal-paper p-5 md:p-6 shadow-2xl"
            >
              <p className="text-sm uppercase tracking-widest text-legal-burgundy font-semibold">
                Pré-atendimento
              </p>
              <h3 className="mt-2 text-2xl font-serif font-semibold text-legal-ink">
                Envie um resumo do caso
              </h3>
              <p className="mt-2 text-sm text-legal-slate">
                Leva menos de um minuto e já abre uma conversa no WhatsApp.
              </p>

              <div className="mt-5 grid gap-3">
                <label className="grid gap-1 text-sm font-medium text-legal-charcoal">
                  Nome
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Seu nome"
                    className="min-h-11 rounded-lg border border-legal-sand bg-white px-3 text-base outline-none focus:border-legal-gold focus:ring-2 focus:ring-legal-gold/25"
                  />
                </label>

                <label className="grid gap-1 text-sm font-medium text-legal-charcoal">
                  Cidade/UF
                  <input
                    name="city"
                    autoComplete="address-level2"
                    placeholder="Ex.: Sorocaba/SP"
                    className="min-h-11 rounded-lg border border-legal-sand bg-white px-3 text-base outline-none focus:border-legal-gold focus:ring-2 focus:ring-legal-gold/25"
                  />
                </label>

                <label className="grid gap-1 text-sm font-medium text-legal-charcoal">
                  Situação dos herdeiros
                  <select
                    name="caseStatus"
                    required
                    defaultValue=""
                    className="min-h-11 rounded-lg border border-legal-sand bg-white px-3 text-base outline-none focus:border-legal-gold focus:ring-2 focus:ring-legal-gold/25"
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    <option>Todos estão de acordo</option>
                    <option>Existe alguma dúvida ou divergência</option>
                    <option>Ainda não sei informar</option>
                  </select>
                </label>

                <label className="grid gap-1 text-sm font-medium text-legal-charcoal">
                  Principal bem envolvido
                  <select
                    name="assetType"
                    required
                    defaultValue=""
                    className="min-h-11 rounded-lg border border-legal-sand bg-white px-3 text-base outline-none focus:border-legal-gold focus:ring-2 focus:ring-legal-gold/25"
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    <option>Imóvel</option>
                    <option>Conta bancária ou aplicação</option>
                    <option>Veículo</option>
                    <option>Mais de um tipo de bem</option>
                    <option>Ainda estou levantando</option>
                  </select>
                </label>

                <label className="grid gap-1 text-sm font-medium text-legal-charcoal">
                  Observações
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Ex.: já tenho certidão de óbito, escritura, documentos dos herdeiros..."
                    className="rounded-lg border border-legal-sand bg-white px-3 py-2 text-base outline-none resize-none focus:border-legal-gold focus:ring-2 focus:ring-legal-gold/25"
                  />
                </label>
              </div>

              <Button
                type="submit"
                className="mt-5 min-h-14 w-full rounded-lg bg-legal-green hover:bg-legal-green-hover text-base font-bold text-white"
              >
                <SendIcon className="size-5" />
                Enviar resumo pelo WhatsApp
              </Button>

              <p className="mt-3 text-xs text-legal-slate">
                Seus dados serão usados apenas para iniciar o atendimento.
              </p>
            </form>

            {faqItems.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="bg-legal-paper/95 rounded-lg p-4 shadow-lg flex items-start gap-4 hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="mt-1 size-5 shrink-0 text-legal-burgundy" />
                <div>
                  <p className="text-base text-legal-ink font-semibold">
                    {title}
                  </p>
                  <p className="text-sm text-legal-slate mt-1 leading-6">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-legal-gold text-legal-ink py-6 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="text-base leading-7">
            Quanto antes o cenário é organizado, mais previsível fica o
            inventário.
          </p>

          <p className="text-base font-semibold leading-7">
            Dê o primeiro passo com orientação profissional e sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
}
