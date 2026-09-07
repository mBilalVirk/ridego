import useScrollReveal from "../hooks/useScrollReveal";

export default function RevealSection({ children, className = "" }) {
  const reveal = useScrollReveal();
  return (
    <section
      ref={reveal.ref}
      className={`flyover-section transition-all duration-700 ease-out ${reveal.className} ${className}`}
    >
      {children}
    </section>
  );
}
