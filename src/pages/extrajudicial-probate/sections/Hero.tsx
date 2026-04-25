import { Button } from "@/components/ui/button";
import imgHero from "@/assets/hero/hero.png";

export function Hero() {
  return (
    <section
      className="w-full min-h-[100svh] flex items-center bg-amber-50 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${imgHero})`,
      }}
    >
      <div className="w-full px-6 lg:px-20 space-y-6">
        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-white text-center">
          INVENTÁRIO RÁPIDO
          <br />
          <span className="text-yellow-500">SEM DOR DE CABEÇA</span>
        </h1>

        <div className="text-gray-300 text-lg max-w-2xl mx-auto">
          <p>
            Resolva tudo com segurança e agilidade, sem burocracia
            desnecessária.
          </p>
          <p>Evite anos de espera e desgaste familiar.</p>
        </div>

        <Button className="w-full md:w-auto bg-yellow-500 text-black hover:bg-yellow-400 mx-auto flex items-center justify-center min-h-12 px-6 text-sm md:text-base font-semibold rounded-lg shadow-md transition-all duration-200">
          Falar com um especialista agora
        </Button>

        <div className="text-sm text-gray-400 text-center">
          <p>• Atendimento humanizado •</p>
          <p>• Processo simplificado •</p>
          <p>• Sem surpresas •</p>
        </div>
      </div>
    </section>
  );
}
