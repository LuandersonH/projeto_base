export function redirectToWhatsapp(customMessage?: string) {
  const phone = "5515997555112";
  const message =
    customMessage ??
    "Olá, tudo bem? Vim pelo site e gostaria de conversar com o advogado responsável sobre inventário extrajudicial.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}
