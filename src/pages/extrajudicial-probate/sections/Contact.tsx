import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="w-full min-h-dvh pt-12 pb-12 bg-cover bg-center bg-no-repeat p-4">
      <div className="flex flex-col min-h-dvh justify-center items-center">
        <h2 className="text-3xl font-serif">Pronto para resolver?</h2>

        <p className="text-muted-foreground">
          Fale agora com um especialista. A primeira conversa é gratuita.
        </p>

        <Button className="bg-yellow-500 text-black hover:bg-yellow-400">
          Quero falar com o advogado
        </Button>

        <div className="space-y-3 text-sm text-muted-foreground">
          <p>Qual o prazo médio?</p>
          <p>Quanto custa?</p>
          <p>Como funciona o processo?</p>
        </div>
      </div>
    </section>
  );
}
