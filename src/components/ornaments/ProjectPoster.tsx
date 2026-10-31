import { useId } from "react";

/**
 * Flat-colour screen-print style poster for each project. Original artwork,
 * pure SVG — scales cleanly and costs nothing to render.
 */
export function ProjectPoster({ kind }: { kind: "estate" | "cinema" }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <svg className={`poster poster--${kind}`} viewBox="0 0 400 500" role="img" aria-label={`${kind === "estate" ? "Bất động sản số" : "Cinesmart"} poster`}>
      <defs>
        <pattern id={`dots${uid}`} width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="4.5" cy="4.5" r="1.6" className="poster__dot" />
        </pattern>
      </defs>
      {kind === "estate" ? <Estate dots={`url(#dots${uid})`} /> : <Cinema dots={`url(#dots${uid})`} />}
    </svg>
  );
}

function Estate({ dots }: { dots: string }) {
  return (
    <g>
      <rect width="400" height="500" fill="#1450c8" />
      <path d="M0 0 H400 V230 L0 300 Z" fill={dots} opacity="0.35" />
      {/* Sun */}
      <g className="poster__float">
        <circle cx="280" cy="140" r="78" fill="#38d6ff" stroke="#04102e" strokeWidth="5" />
        <path d="M280 62 V40 M280 218 V240 M202 140 H180 M358 140 H380 M225 85 L210 70 M335 195 L350 210 M335 85 L350 70 M225 195 L210 210" stroke="#04102e" strokeWidth="5" strokeLinecap="round" />
      </g>
      {/* Skyline */}
      <g className="poster__rise" stroke="#04102e" strokeWidth="5" strokeLinejoin="round">
        <rect x="26" y="250" width="86" height="200" fill="#f5fbff" />
        <rect x="104" y="170" width="92" height="280" fill="#04102e" />
        <rect x="190" y="220" width="70" height="230" fill="#f5fbff" />
        <path d="M252 290 H340 V450 H252 Z" fill="#04102e" />
        <path d="M150 170 V130 H170 V170" fill="#04102e" />
      </g>
      <g fill="#f5fbff">
        {Array.from({ length: 7 }, (_, r) =>
          Array.from({ length: 3 }, (_, c) => (
            <rect key={`w${r}${c}`} x={118 + c * 24} y={190 + r * 34} width="14" height="18" opacity={(r + c) % 3 ? 1 : 0.35} />
          )),
        )}
      </g>
      <g fill="#04102e">
        {Array.from({ length: 5 }, (_, r) => (
          <rect key={`s${r}`} x="44" y={272 + r * 34} width="50" height="10" />
        ))}
      </g>
      {/* Map pin sticker */}
      <g className="poster__pin" transform="rotate(10 300 260)">
        <path d="M300 214 C280 214 268 228 268 245 C268 268 300 296 300 296 C300 296 332 268 332 245 C332 228 320 214 300 214 Z" fill="#f5fbff" stroke="#04102e" strokeWidth="5" />
        <circle cx="300" cy="245" r="10" fill="#38d6ff" stroke="#04102e" strokeWidth="4" />
      </g>
      {/* Lettering */}
      <rect x="0" y="440" width="400" height="60" fill="#04102e" />
      <text x="200" y="488" textAnchor="middle" className="poster__title" fill="#f5fbff" textLength="350" lengthAdjust="spacingAndGlyphs">
        BẤT ĐỘNG SẢN SỐ
      </text>
      <text x="22" y="40" className="poster__small" fill="#04102e">
        REAL ESTATE / 2026
      </text>
      <path d="M22 54 C60 44 90 62 130 50" stroke="#04102e" strokeWidth="4" fill="none" strokeLinecap="round" />
    </g>
  );
}

function Cinema({ dots }: { dots: string }) {
  const rows = [6, 7, 8];
  return (
    <g>
      <rect width="400" height="500" fill="#38d6ff" />
      <path d="M0 500 V250 L400 160 V500 Z" fill={dots} opacity="0.3" />
      {/* Screen with rays */}
      <g className="poster__float">
        <path d="M200 140 L40 20 M200 140 L120 0 M200 140 L280 0 M200 140 L360 20" stroke="#04102e" strokeWidth="5" strokeLinecap="round" />
        <rect x="70" y="70" width="260" height="120" fill="#f5fbff" stroke="#04102e" strokeWidth="5" transform="rotate(-4 200 130)" />
        <text x="200" y="146" textAnchor="middle" className="poster__small" fill="#04102e" transform="rotate(-4 200 130)">
          NOW SHOWING
        </text>
      </g>
      {/* Seats */}
      <g className="poster__rise">
        {rows.map((count, r) =>
          Array.from({ length: count }, (_, i) => {
            const gap = 40;
            const x = 200 - ((count - 1) * gap) / 2 + i * gap;
            const taken = (r * 5 + i * 3) % 4 === 0;
            return (
              <rect
                key={`${r}-${i}`}
                x={x - 15}
                y={228 + r * 44}
                width="30"
                height="30"
                rx="8"
                fill={taken ? "#04102e" : "#f5fbff"}
                stroke="#04102e"
                strokeWidth="4"
              />
            );
          }),
        )}
      </g>
      {/* Ticket */}
      <g className="poster__pin" transform="rotate(-10 200 400)">
        <path
          d="M80 360 H320 V384 A14 14 0 0 0 320 412 V436 H80 V412 A14 14 0 0 0 80 384 Z"
          fill="#1450c8"
          stroke="#04102e"
          strokeWidth="5"
        />
        <path d="M250 364 V432" stroke="#04102e" strokeWidth="3" strokeDasharray="6 6" />
        <text x="165" y="410" textAnchor="middle" className="poster__small" fill="#04102e">
          ADMIT ONE
        </text>
        <text x="286" y="410" textAnchor="middle" className="poster__small" fill="#04102e">
          E7
        </text>
      </g>
      <rect x="0" y="440" width="400" height="60" fill="#04102e" />
      <text x="200" y="488" textAnchor="middle" className="poster__title" fill="#f5fbff">
        CINESMART
      </text>
    </g>
  );
}
