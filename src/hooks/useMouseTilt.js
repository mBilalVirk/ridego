import { useEffect, useRef } from "react";

export default function useMouseTilt() {
  const holderRef = useRef(null);
  const illustrationRef = useRef(null);

  useEffect(() => {
    const holder = holderRef.current;
    const illustration = illustrationRef.current;
    if (!holder || !illustration) return undefined;

    const move = (event) => {
      const rect = holder.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      illustration.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 8}deg)`;
    };
    const reset = () => {
      illustration.style.transform = "rotateY(0) rotateX(0)";
    };
    holder.addEventListener("mousemove", move);
    holder.addEventListener("mouseleave", reset);
    return () => {
      holder.removeEventListener("mousemove", move);
      holder.removeEventListener("mouseleave", reset);
    };
  }, []);

  return { holderRef, illustrationRef };
}
