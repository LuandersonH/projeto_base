export function redirectToWhatsapp() {
  const phone = "5515997555112";
  const message =
    "Olá, tudo bem? vim pelo site e gostaria de conversar com o advogado responsável sobre inventário extrajudicial.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}
