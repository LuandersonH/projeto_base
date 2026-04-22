import {
  MessageCircleIcon,
  ClockIcon,
  DollarSignIcon,
  HelpCircleIcon,
} from "lucide-react";

export function Contact() {
  return (
    <section className="w-full min-h-dvh bg-[#0a0a0a] relative">
      <div className="w-full min-h-dvh flex items-center justify-center px-4 py-16">
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
                A primeira conversa é gratuita e sem compromisso.
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-base md:text-lg px-6 py-4 rounded-xl shadow-lg transition-all duration-300"
            >
              <MessageCircleIcon className="size-5 md:size-6" />
              Falar com especialista agora
            </a>

            <p className="text-sm text-gray-400">
              Atendimento rápido • 100% confidencial
            </p>
          </div>

          {/* RIGHT SIDE - CARDS */}
          <div className="grid gap-4">
            <div className="bg-white rounded-xl p-5 shadow-lg flex items-start gap-4">
              <ClockIcon className="text-yellow-600 mt-1" />
              <div>
                <p className="text-base md:text-lg text-gray-800 font-medium">
                  Qual o prazo médio?
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Em muitos casos, o processo pode ser resolvido em semanas.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-lg flex items-start gap-4">
              <DollarSignIcon className="text-yellow-600 mt-1" />
              <div>
                <p className="text-base md:text-lg text-gray-800 font-medium">
                  Quanto custa?
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Você recebe uma estimativa clara após uma análise rápida do
                  caso.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-lg flex items-start gap-4">
              <HelpCircleIcon className="text-yellow-600 mt-1" />
              <div>
                <p className="text-base md:text-lg text-gray-800 font-medium">
                  Como funciona?
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Orientamos todo o processo e cuidamos da parte burocrática.
                </p>
              </div>
            </div>
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
