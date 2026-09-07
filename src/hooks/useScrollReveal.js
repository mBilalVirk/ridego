import { useEffect, useRef, useState } from "react";

export default function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(element);
    let frame = 0;
    const updateFlyover = () => {
      frame = 0;
      const bounds = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const distance =
        (bounds.top + bounds.height / 2 - viewportCenter) / window.innerHeight;
      const clampedDistance = Math.max(-1, Math.min(1, distance));
      element.style.setProperty("--fly-y", `${clampedDistance * 24}px`);
      element.style.setProperty("--fly-rotate", `${clampedDistance * -1.5}deg`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateFlyover);
    };
    updateFlyover();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return {
    ref,
    className: visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-4",
  };
}
