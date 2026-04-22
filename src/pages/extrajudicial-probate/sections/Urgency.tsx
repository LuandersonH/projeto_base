import {
  TriangleAlertIcon,
  TrendingUpIcon,
  UsersIcon,
  FileWarningIcon,
} from "lucide-react";
import imgBg from "@/assets/hero/problem.webp";

export function Urgency() {
  return (
    <section
      className="w-full min-h-dvh bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url(${imgBg})`,
      }}
    >
      <div className="w-full min-h-dvh flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE - COPY */}
          <div className="text-white space-y-6">
            <p className="uppercase tracking-widest text-sm text-gray-400">
              Urgência
            </p>

            <h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight">
              Adiar só torna tudo
              <br />
              mais caro — e mais difícil
            </h1>

            <p className="text-base md:text-lg text-gray-300">
              Cada dia que passa sem resolver o inventário não é neutro.
              <br />
              <span className="text-white font-semibold">
                Ele joga contra você.
              </span>
            </p>

            <div className="border-l-4 border-red-500 pl-4">
              <p className="text-base md:text-lg text-gray-200">
                O que hoje é simples, amanhã pode virar um problema maior.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - CARDS */}
          <div className="grid gap-4">
            <div className="bg-white rounded-xl p-5 shadow-lg flex items-start gap-4">
              <TrendingUpIcon className="text-red-600 mt-1" />
              <p className="text-base md:text-lg text-gray-800">
                Impostos e multas continuam crescendo
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-lg flex items-start gap-4">
              <UsersIcon className="text-red-600 mt-1" />
              <p className="text-base md:text-lg text-gray-800">
                Pequenos desentendimentos viram grandes conflitos
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-lg flex items-start gap-4">
              <FileWarningIcon className="text-red-600 mt-1" />
              <p className="text-base md:text-lg text-gray-800">
                A documentação se complica com o tempo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP (IMPACTO FINAL) */}
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
