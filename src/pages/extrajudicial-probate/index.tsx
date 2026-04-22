import { Hero } from "@/pages/extrajudicial-probate/sections/Hero";
import { Problem } from "@/pages/extrajudicial-probate/sections/Problem";
import { Solution } from "@/pages/extrajudicial-probate/sections/Solution";
import { Authority } from "@/pages/extrajudicial-probate/sections/Authority";
import { Urgency } from "@/pages/extrajudicial-probate/sections/Urgency";
import { Contact } from "@/pages/extrajudicial-probate/sections/Contact";

export default function Landing() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Authority />
      <Urgency />
      <Contact />
    </>
  );
}
