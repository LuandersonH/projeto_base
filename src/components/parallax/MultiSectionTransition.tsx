import React, { useRef } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  progress,
} from "framer-motion";

type MultiSectionTransitionProps = {
  children: ReactNode[];
};

export function MultiSectionTransition({
  children,
}: MultiSectionTransitionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const count = React.Children.count(children);

  // Rastreia o scroll do container inteiro
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative min-w-full">
      {React.Children.map(children, (child, index) => (
        <SectionItem
          key={index}
          index={index}
          total={count}
          progress={scrollYProgress}
        >
          {child}
        </SectionItem>
      ))}
    </div>
  );
}

// --- COMPONENTE AUXILIAR ---

type SectionItemProps = {
  children: ReactNode;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function SectionItem({
  children,
  index,
  isLast,
}: {
  children: React.ReactNode;
  index: number;
  isLast: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isTall, setIsTall] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      if (!contentRef.current) return;
      const h = contentRef.current.offsetHeight;
      setIsTall(h > window.innerHeight);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        zIndex: index + 1,
        marginBottom: isLast ? 0 : "-100vh",
      }}
    >
      <motion.div
        style={{
          scale: !isTall && !isLast ? scale : 1,
          opacity: !isTall && !isLast ? opacity : 1,
        }}
        className={!isTall ? "sticky top-0 w-full origin-top" : "relative"}
      >
        <div
          ref={contentRef}
          className="w-full bg-white min-h-screen shadow-2xl"
        >
          {children}
        </div>
      </motion.div>

      {!isLast && <div className="h-screen pointer-events-none" />}
    </div>
  );
}
