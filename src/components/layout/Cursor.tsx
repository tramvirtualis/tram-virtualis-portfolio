import { useEffect, useRef } from "react";

/**
 * Spray-can dot that trails the pointer and swells over links.
 * Mouse/trackpad only; skipped for touch and reduced motion. Moves with transforms only.
 */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = -100;
    let y = -100;
    let tx = -100;
    let ty = -100;
    let frame = 0;

    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = Math.abs(tx - x) + Math.abs(ty - y) > 0.3 ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.classList.add("is-on");
      const hot = (e.target as Element).closest("a, button, [role='button']");
      el.classList.toggle("is-hot", Boolean(hot));
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onLeave = () => el.classList.remove("is-on");
    const onDown = () => el.classList.add("is-down");
    const onUp = () => el.classList.remove("is-down");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <span />
    </div>
  );
}
