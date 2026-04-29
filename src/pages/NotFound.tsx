import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HomeIcon } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-svh flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold tracking-tight">404</h1>

        <p className="text-xl font-medium text-muted-foreground">
          Página não encontrada
        </p>

        <p className="text-sm text-muted-foreground">
          A página que você tentou acessar não existe ou foi movida.
        </p>

        <div className="flex flex-col gap-3 justify-center">
          <Button variant="default" onClick={() => navigate("/")}>
            <HomeIcon />
            Voltar para a página inicial
          </Button>

          <Button variant="secondary" onClick={() => navigate(-1)}>
            <ArrowLeft />
            Voltar para a página anterior
          </Button>
        </div>
      </div>
    </div>
  );
}
