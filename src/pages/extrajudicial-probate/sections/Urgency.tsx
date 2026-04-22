export function Urgency() {
  return (
    <section className="w-full min-h-dvh pt-12 pb-12 bg-cover bg-center bg-no-repeat p-4">
      <div className="flex flex-col min-h-dvh justify-center items-center">
        <h2 className="text-3xl font-serif">Urgência (por que não esperar)</h2>

        <p className="text-muted-foreground">
          Quanto mais você demora, mais custos surgem e maiores são os riscos.
        </p>

        <ul className="space-y-3">
          <li>⚠️ Impostos e multas aumentam</li>
          <li>⚠️ Conflitos familiares crescem</li>
          <li>⚠️ Processo fica mais complexo</li>
        </ul>
      </div>
    </section>
  );
}
