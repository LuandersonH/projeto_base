// "use client";

// import { useRef } from "react";
// import type { ReactNode } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// type SectionTransitionProps = {
//   children: [ReactNode, ReactNode];
// };

// export function SectionTransition({ children }: SectionTransitionProps) {
//   const [first, second] = children;
//   const ref = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     // "start start": Topo do container bate no topo da tela
//     // "end start": Final do container bate no topo da tela
//     offset: ["start start", "end start"],
//   });

//   /**
//    * 🎬 A animação ocorre exatamente entre 0 e 0.5 (primeira metade do scroll),
//    * que é o tempo exato em que a segunda seção está subindo para cobrir a primeira.
//    */
//  //  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   return (
//     <div ref={ref} className="relative min-w-full">
//       {/* 🔴 SEÇÃO QUE FICA FIXADA (PROBLEM)
//         Ela gruda no topo enquanto damos scroll, e o Framer Motion
//         aplica o fade out e o scale down.
//       */}
//       <motion.div
//         style={{ opacity }}
//         className="sticky top-0 h-[100svh] w-full overflow-hidden"
//       >
//         {first}
//       </motion.div>

//       {/* 🟢 SEÇÃO QUE ROLA POR CIMA (SOLUTION)
//         Não precisa de animação em 'y'. O fluxo natural do scroll
//         vai empurrar ela para cima da seção fixada!
//       */}
//       <div className="relative z-10 w-full bg-white">
//         {/* ⚠️ IMPORTANTE: Essa div precisa obrigatoriamente de uma cor de fundo
//           sólida (ex: bg-white, bg-black, bg-zinc-900). Se for transparente,
//           a seção de baixo vai aparecer através dela enquanto diminui!
//         */}
//         {second}
//       </div>
//     </div>
//   );
// }
