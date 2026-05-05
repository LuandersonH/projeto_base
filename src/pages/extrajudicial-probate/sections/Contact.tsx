import type { FormEvent } from "react";

import {
  ClockIcon,
  DollarSignIcon,
  HelpCircleIcon,
  SendIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { redirectToWhatsapp } from "@/constants/contact";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppIcon } from "@/components/ui/svg/pre-made-icons";

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
    <section className="w-full max-w-full min-h-svh bg-legal-ink relative pb-28 md:pb-0 ">
      <div className="w-full min-h-svh flex items-center justify-center px-4 pt-12 pb-10 md:py-16">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 md:gap-10 items-center min-w-0">
          <div className="text-white space-y-5 md:space-y-6 max-w-full min-w-0">
            <p className="uppercase tracking-widest text-sm text-legal-gold-soft font-semibold">
              Contato
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold leading-[1.16] md:leading-[1.18]">
              Pronto para entender o melhor caminho para o inventário?
            </h2>

            <p className="text-base md:text-lg text-legal-paper/80 leading-7 md:leading-8">
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
              className="min-h-14 w-full text-base font-bold rounded-lg gap-3 bg-legal-green hover:bg-legal-green-hover text-white shadow-lg transition-all duration-300 hover:scale-[1.02] whitespace-normal"
            >
              <WhatsAppIcon className="size-5 md:size-6" />
              Chamar direto no WhatsApp
            </Button>

            <p className="text-sm text-white/60">
              Atendimento confidencial. Análise inicial sem compromisso.
            </p>
          </div>

          <div className="flex flex-col gap-y-4 min-w-0">
            <form
              onSubmit={handleQualifiedContact}
              className=" max-w-full rounded-lg border border-legal-gold/25 bg-legal-paper p-5 md:p-6 shadow-2xl"
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
                  <Input
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Seu nome"
                    className="min-h-12 md:min-h-11 rounded-lg border border-legal-sand bg-white px-3 text-base outline-none focus:border-legal-gold focus:ring-2 focus:ring-legal-gold/25 min-w-0"
                  />
                </label>

                <label className="min-w-0 grid gap-1 text-sm font-medium text-legal-charcoal">
                  Cidade/UF
                  <Input
                    name="city"
                    autoComplete="address-level2"
                    placeholder="Ex.: Sorocaba/SP"
                    className="min-h-12 md:min-h-11 rounded-lg border border-legal-sand bg-white px-3 text-base outline-none focus:border-legal-gold focus:ring-2 focus:ring-legal-gold/25"
                  />
                </label>

                <label className="min-w-0 grid gap-1 text-sm font-medium text-legal-charcoal">
                  Situação dos herdeiros
                  <Select name="caseStatus" required>
                    <SelectTrigger className="min-w-0 min-h-12 md:min-h-11 w-full rounded-lg border border-legal-sand bg-white px-3 text-base outline-none focus:border-legal-gold focus:ring-2 focus:ring-legal-gold/25">
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>

                    <SelectContent position="popper">
                      <SelectItem value="all">Todos estão de acordo</SelectItem>
                      <SelectItem value="divergencia">
                        Existe alguma dúvida ou divergência
                      </SelectItem>
                      <SelectItem value="nsei">
                        Ainda não sei informar
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </label>

                <label className="min-w-0 grid gap-1 text-sm font-medium text-legal-charcoal">
                  Principal bem envolvido
                  <Select name="assetType" required>
                    <SelectTrigger className="min-w-0 min-h-12 md:min-h-11 w-full rounded-lg border border-legal-sand bg-white px-3 text-base">
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>

                    <SelectContent position="popper">
                      <SelectItem value="imovel">Imóvel</SelectItem>
                      <SelectItem value="conta">
                        Conta bancária ou aplicação
                      </SelectItem>
                      <SelectItem value="veiculo">Veículo</SelectItem>
                      <SelectItem value="multiplos">
                        Mais de um tipo de bem
                      </SelectItem>
                      <SelectItem value="levantando">
                        Ainda estou levantando
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </label>

                <label className="min-w-0 grid gap-1 text-sm font-medium text-legal-charcoal">
                  Observações
                  <Textarea
                    name="notes"
                    rows={3}
                    placeholder="Ex.: já tenho certidão de óbito, escritura, documentos dos herdeiros..."
                    className="rounded-lg border border-legal-sand bg-white px-3 py-3 md:py-2 text-base outline-none resize-none focus:border-legal-gold focus:ring-2 focus:ring-legal-gold/25"
                  />
                </label>
              </div>

              <Button
                type="submit"
                className="mt-5 min-h-14 w-full rounded-lg bg-legal-green hover:bg-legal-green-hover text-base font-bold text-white whitespace-normal"
              >
                <SendIcon className="size-5" />
                Enviar resumo pelo WhatsApp
              </Button>

              <p className="mt-3 text-xs text-legal-slate">
                Seus dados serão usados apenas para iniciar o atendimento.
              </p>
            </form>

            {faqItems.map(({ icon: Icon, title, desc }) => (
              <div className="min-w-0 bg-legal-paper/95 rounded-lg p-4 shadow-lg flex items-start gap-4 hover:shadow-xl hover:-translate-y-1">
                <Icon className="mt-1 size-5 shrink-0 text-legal-burgundy" />
                <div>
                  <p className="text-base text-legal-ink font-semibold">
                    {title}
                  </p>
                  <p className="text-sm text-legal-slate mt-1 leading-6">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-legal-gold text-legal-ink py-6 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-2">
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
