import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative w-full min-h-[100svh] flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(0,0,0,0.82) 0%,
            rgba(0,0,0,0.72) 38%,
            rgba(0,0,0,0.55) 60%,
            rgba(0,0,0,0.72) 100%
          ),
          url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80')
        `,
      }}
    >
      {/* Glow decor */}
      <div className="absolute top-20 left-10 h-44 w-44 rounded-full bg-yellow-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400 font-medium">
            Atendimento rápido e seguro
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl md:text-6xl xl:text-8xl leading-tight font-serif font-semibold text-white">
              INVENTÁRIO RÁPIDO
              <br />
              <span className="text-yellow-500">SEM DOR DE CABEÇA</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
              Resolva tudo com <strong>segurança e agilidade</strong>, sem
              burocracia desnecessária.
            </p>

            <p className="text-base md:text-lg text-gray-300 max-w-xl">
              Evite anos de espera, conflitos familiares e surpresas no caminho.
            </p>
          </div>

          {/* <Button className="min-h-20 w-full text-base font-bold rounded-xl text-white hover:bg-green-500 shadow-xl transition-all duration-300 hover:scale-[1.02]">
            Conversar com um especialista agora
          </Button> */}

          <Button className="min-h-20 w-full text-base font-bold rounded-xl text-white bg-green-800 hover:bg-green-500 shadow-lg animate-pulse-soft transition-all duration-300 hover:scale-[1.03]">
            Conversar com especialista agora
          </Button>

          <div className="grid sm:grid-cols-3 gap-3 pt-2">
            {[
              "Atendimento humanizado",
              "Processo simplificado",
              "Sem surpresas",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 text-center backdrop-blur-sm"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="hidden lg:flex justify-end">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 shadow-2xl">
            <p className="text-sm uppercase tracking-widest text-yellow-400 font-semibold">
              Solução inteligente
            </p>

            <h3 className="mt-3 text-3xl font-serif text-white leading-snug">
              Resolva o inventário com tranquilidade.
            </h3>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Cuidamos de cada etapa para você focar no que importa: sua família
              e sua paz.
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Análise rápida do caso",
                "Orientação clara desde o início",
                "Acompanhamento próximo",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-500 text-black text-sm font-bold">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button className="w-full mt-8 min-h-12 rounded-xl bg-yellow-500 text-black hover:bg-yellow-400 font-semibold">
              Começar agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
