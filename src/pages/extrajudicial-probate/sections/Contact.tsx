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
    <section className="w-full min-h-svh bg-[#0a0a0a] relative pb-24 md:pb-0">
      <div className="w-full min-h-svh flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6">
            <p className="uppercase tracking-widest text-sm text-yellow-400 font-semibold">
              Contato
            </p>

            <h2 className="text-3xl md:text-5xl font-serif font-semibold leading-tight">
              Pronto para entender o melhor caminho para o inventário?
            </h2>

            <p className="text-base md:text-lg text-gray-300">
              Fale com um especialista em inventário extrajudicial e receba uma
              orientação inicial sobre documentos, custos e próximos passos.
            </p>

            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-base md:text-lg text-gray-200">
                Você não precisa ter todas as respostas agora. A primeira
                conversa serve justamente para organizar o cenário.
              </p>
            </div>

            <Button
              onClick={() => redirectToWhatsapp()}
              className="min-h-14 w-full text-base md:text-lg font-bold rounded-lg gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageCircleIcon className="size-5 md:size-6" />
              Prefiro chamar direto no WhatsApp
            </Button>

            <p className="text-sm text-gray-400">
              Atendimento confidencial. Análise inicial sem compromisso.
            </p>
          </div>

          <div className="grid gap-4">
            <form
              onSubmit={handleQualifiedContact}
              className="rounded-lg border border-white/10 bg-white p-5 md:p-6 shadow-2xl"
            >
              <p className="text-sm uppercase tracking-widest text-yellow-700 font-semibold">
                Pré-atendimento
              </p>
              <h3 className="mt-2 text-2xl font-serif font-semibold text-gray-950">
                Envie um resumo do caso
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Leva menos de um minuto e já abre uma conversa no WhatsApp.
              </p>

              <div className="mt-5 grid gap-3">
                <label className="grid gap-1 text-sm font-medium text-gray-800">
                  Nome
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Seu nome"
                    className="min-h-11 rounded-lg border border-gray-300 px-3 text-base outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20"
                  />
                </label>

                <label className="grid gap-1 text-sm font-medium text-gray-800">
                  Cidade/UF
                  <input
                    name="city"
                    autoComplete="address-level2"
                    placeholder="Ex.: Sorocaba/SP"
                    className="min-h-11 rounded-lg border border-gray-300 px-3 text-base outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20"
                  />
                </label>

                <label className="grid gap-1 text-sm font-medium text-gray-800">
                  Situação dos herdeiros
                  <select
                    name="caseStatus"
                    required
                    defaultValue=""
                    className="min-h-11 rounded-lg border border-gray-300 px-3 text-base outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20"
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    <option>Todos estão de acordo</option>
                    <option>Existe alguma dúvida ou divergência</option>
                    <option>Ainda não sei informar</option>
                  </select>
                </label>

                <label className="grid gap-1 text-sm font-medium text-gray-800">
                  Principal bem envolvido
                  <select
                    name="assetType"
                    required
                    defaultValue=""
                    className="min-h-11 rounded-lg border border-gray-300 px-3 text-base outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20"
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

                <label className="grid gap-1 text-sm font-medium text-gray-800">
                  Observações
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Ex.: já tenho certidão de óbito, escritura, documentos dos herdeiros..."
                    className="rounded-lg border border-gray-300 px-3 py-2 text-base outline-none resize-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20"
                  />
                </label>
              </div>

              <Button
                type="submit"
                className="mt-5 min-h-14 w-full rounded-lg bg-[#1f8f4d] hover:bg-[#187a41] text-base font-bold text-white"
              >
                <SendIcon className="size-5" />
                Enviar resumo pelo WhatsApp
              </Button>

              <p className="mt-3 text-xs text-gray-500">
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
                className="bg-white/95 rounded-lg p-4 shadow-lg flex items-start gap-4 hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="mt-1 size-5 shrink-0 text-yellow-700" />
                <div>
                  <p className="text-base md:text-lg text-gray-900 font-semibold">
                    {title}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-yellow-500 text-black py-6 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="text-base md:text-lg">
            Quanto antes o cenário é organizado, mais previsível fica o
            inventário.
          </p>

          <p className="text-base md:text-lg font-semibold">
            Dê o primeiro passo com orientação profissional e sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
}
