type Props = {
  children: React.ReactNode;
  className?: string;
};

export function GlobalContainer({ children, className = "" }: Props) {
  return <div className={`w-full ${className}`}>{children}</div>;
}
