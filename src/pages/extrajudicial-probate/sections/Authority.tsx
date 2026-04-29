import imgAut from "@/assets/hero/hero_ze_vert.jpg";
import imgBg from "@/assets/hero/fundo_authority.png";

export function Authority() {
  return (
    <section
      className="w-full min-h-svh flex flex-col items-center px-4 py-12 bg-gray-50  bg-cover bg-left bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(242, 242, 199, 0.9), rgba(0, 0, 0, 0.65)), url(${imgBg})`,
      }}
    >
      <div className="space-y-2 text-center mb-4 md:mb-10">
        <h1 className="text-sm tracking-widest uppercase text-black/70 font-semibold">
          O ADVOGADO
        </h1>
        <h2 className="text-3xl md:text-5xl font-serif font-semibold mx-auto text-center text-white pt-5 pb-12">
          JOSÉ ARRUDA JESUS
        </h2>
        <p className="text-sm md:text-lg font-semibold text-black mx-auto md:mx-0 italic">
          Atuação focada em inventário extrajudicial, com condução estratégica
          para evitar conflitos, reduzir prazos e proteger o patrimônio.
        </p>
      </div>
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl">
        {/* TEXTO */}
        <div className="flex flex-col justify-between h-full p-6 bg-yellow-500/10">
          <div className="flex flex-col justify-between h-full text-base md:text-xl text-black leading-relaxed">
            <div className="space-y-2">
              <h1 className="font-bold text-center">
                O INVENTÁRIO É UMA PARTE IMPORTANTE NO BEM ESTAR DE UMA FAMILIA.
              </h1>
              <p>Por isso, meu trabalho vai além da parte jurídica.</p>
              <p>É sobre trazer clareza em meio à incerteza.</p>
              <p>
                É sobre transformar um caminho complicado em algo simples e
                resolutivo.
              </p>
            </div>

            <div className="space-y-2">
              <h1 className="font-bold text-center mt-10">
                MEU COMPROMISSO É DIRETO
              </h1>
              <p>
                Conduzir seu inventário com rapidez, transparência e total
                segurança — do início ao fim.
              </p>
              <p>Sem burocracia desnecessária.</p>
              <p>Sem surpresas no caminho.</p>
            </div>

            <div>
              <h1 className="font-bold text-center mt-10">
                COM O RESPEITO QUE SUA FAMILIA MERECE.
              </h1>
            </div>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="flex justify-center md:justify-end">
          <img src={imgAut} alt="Advogado" className="w-full object-contain" />
        </div>
      </div>
    </section>
  );
}
