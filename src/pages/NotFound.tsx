import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Página não encontrada...</h1>
      <p>O endereço acessado é inválido</p>
      <button onClick={() => navigate("/")}>Voltar para Home</button>
    </>
  );
}
