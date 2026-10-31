import type { ReactNode } from "react";

/**
 * Selection plate: a slanted slab with an offset echo behind it.
 * Sits behind a row's content; CSS reveals it on hover / selection.
 * (`seed` is accepted for API compatibility and ignored.)
 */
export function Highlight({ className = "" }: { seed?: number; className?: string }) {
  return (
    <span className={`hl ${className}`} aria-hidden="true">
      <span className="hl__echo" />
      <span className="hl__plate" />
    </span>
  );
}

/**
 * Original tarot-style card used in place of a character portrait:
 * moon, rays and a numeral, framed like an arcana.
 */
export function ArcanaCard({ numeral, title, className = "" }: { numeral: string; title: string; className?: string }) {
  return (
    <svg className={`arcana ${className}`} viewBox="0 0 300 480" role="img" aria-label={title}>
      <rect x="4" y="4" width="292" height="472" rx="10" className="arcana__card" />
      <rect x="16" y="16" width="268" height="448" rx="4" className="arcana__frame" />
      <text x="150" y="62" textAnchor="middle" className="arcana__numeral">
        {numeral}
      </text>
      <g className="arcana__art">
        {Array.from({ length: 16 }, (_, i) => (
          <line key={i} x1="150" y1="230" x2="150" y2="110" transform={`rotate(${i * 22.5} 150 230)`} />
        ))}
        <circle cx="150" cy="230" r="70" className="arcana__moon" />
        <path d="M150 160 a70 70 0 0 1 0 140 a52 70 0 0 0 0 -140 Z" className="arcana__shade" />
        <path d="M60 352 C100 330 200 330 240 352" className="arcana__wave" />
        <path d="M44 376 C96 350 204 350 256 376" className="arcana__wave" />
        <path d="M30 400 C92 372 208 372 270 400" className="arcana__wave" />
      </g>
      <rect x="40" y="420" width="220" height="34" className="arcana__plate" />
      <text x="150" y="444" textAnchor="middle" className="arcana__title">
        {title}
      </text>
    </svg>
  );
}

const glyphPaths: Record<string, ReactNode> = {
  quill: <path d="M30 4 C18 8 10 18 8 30 L6 34 M8 30 C14 28 22 22 26 14 M14 24 L20 20" />,
  shield: <path d="M18 4 L31 9 V18 C31 26 25 31 18 34 C11 31 5 26 5 18 V9 Z M18 10 V28 M11 17 H25" />,
  key: (
    <>
      <circle cx="12" cy="12" r="7" />
      <path d="M17 17 L32 32 M26 26 L30 22 M29 29 L33 25" />
    </>
  ),
  vault: (
    <>
      <rect x="5" y="7" width="26" height="24" />
      <circle cx="18" cy="19" r="6" />
      <path d="M18 13 V25 M12 19 H24 M5 13 H2 M5 25 H2" />
    </>
  ),
  gear: (
    <>
      <circle cx="18" cy="18" r="5" />
      <path d="M18 3 V9 M18 27 V33 M3 18 H9 M27 18 H33 M7 7 L11 11 M25 25 L29 29 M29 7 L25 11 M11 25 L7 29" />
    </>
  ),
};

/** Line icon inside a ring — the emblem next to list rows. */
export function Emblem({ name, children }: { name?: string; children?: ReactNode }) {
  return (
    <span className="emblem" aria-hidden="true">
      <svg viewBox="0 0 36 36">{children ?? glyphPaths[name ?? "gear"]}</svg>
    </span>
  );
}
