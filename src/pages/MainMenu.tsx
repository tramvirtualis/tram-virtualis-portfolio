import { useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LangToggle } from "../components/layout/LangToggle";
import { menu } from "../data/menu";
import { profile } from "../data/profile";
import { useLang } from "../i18n/lang";
import { ui } from "../i18n/ui";

// Per-entry left jitter (em) and size, like the hand-set words of the P3R pause menu.
const cascade = [0.3, 0, 0.18, 0.42, 0.08, 0.3];
const sizes = [1, 0.94, 1.12, 0.96, 1.05, 1];

/**
 * Random-ish jagged bar, as a CSS polygon, a new one on every selection.
 * The left end is jittered in em (it sits by the word); the right end runs off-screen.
 */
function jaggedBar(spread: number) {
  const r = (base: number, range: number) => (base + (Math.random() - 0.5) * range).toFixed(2);
  return `polygon(${r(0.2, spread / 40)}em ${r(12, spread)}%, 100% ${r(4, spread)}%, 100% ${r(94, spread)}%, ${r(
    0,
    spread / 40,
  )}em ${r(98, spread)}%)`;
}

/** Sizes the vertical word so it runs exactly from the top to the bottom of the screen. */
function useFitHeight() {
  const ref = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    const box = el?.parentElement;
    if (!el || !box) return;
    const fit = () => {
      el.style.fontSize = "100px";
      const length = el.getBoundingClientRect().height;
      if (length > 0) el.style.fontSize = `${(100 * box.clientHeight) / length}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(box);
    return () => ro.disconnect();
  }, []);
  return ref;
}

export function MainMenu() {
  const sideWord = useFitHeight();
  const [selected, setSelected] = useState(0);
  const links = useRef<(HTMLAnchorElement | null)[]>([]);
  const navigate = useNavigate();
  const { t } = useLang();

  // Persona 5-style plate shapes: regenerated whenever the selection moves
  const shapes = useMemo(
    () => ({ plate: jaggedBar(14), echo: jaggedBar(22) }),
    [selected],
  );

  const focusItem = (i: number) => {
    const next = (i + menu.length) % menu.length;
    setSelected(next);
    links.current[next]?.focus();
  };

  // Arrow keys move the selection, number keys jump straight to a screen.
  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusItem(selected + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      focusItem(selected - 1);
    } else if (/^[1-9]$/.test(e.key) && Number(e.key) <= menu.length) {
      navigate(menu[Number(e.key) - 1].path);
    }
  };

  return (
    <div className="title">
      <span className="title__ghost" aria-hidden="true">
        MAIN
      </span>
      <span ref={sideWord} className="title__wedge-text" aria-hidden="true">
        Portfolio
      </span>

      <LangToggle className="title__lang" />

      {/* Giant name */}
      <section className="title__id" aria-label={t(profile.fullName)}>
        <div className="title__kicker rise" style={{ "--i": 0 } as CSSProperties}>
          <span className="title__surname">{t(profile.lastName)}</span>
          <span className="status is-live">{t(ui.openToWork)}</span>
        </div>
        <h1 className="title__name rise" style={{ "--i": 1 } as CSSProperties}>
          {t(profile.nameA)} {t(profile.nameB)}
        </h1>
        <p className="title__role rise" style={{ "--i": 2 } as CSSProperties}>
          {t(profile.title)}
        </p>
        <p className="title__statement rise" style={{ "--i": 3 } as CSSProperties}>
          {t(profile.statement)}
        </p>



        <div className="title__actions rise" style={{ "--i": 7 } as CSSProperties}>
          <a className="strip strip--ink" href={profile.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a className="strip" href={`mailto:${profile.email}`}>
            Email <span aria-hidden="true">✉</span>
          </a>
        </div>
      </section>

      {/* Command list on the blue panel */}
      <nav className="menu" aria-label={t(ui.mainMenu)} onKeyDown={onKeyDown}>
        <ul className="menu__list">
          {menu.map((item, i) => {
            const isSel = selected === i;
            return (
              <li
                key={item.path}
                className="rise"
                style={
                  {
                    "--i": i + 2,
                    "--o": `${cascade[i % cascade.length]}em`,
                    "--s": sizes[i % sizes.length],
                  } as CSSProperties
                }
              >
                <Link
                  ref={(el) => {
                    links.current[i] = el;
                  }}
                  to={item.path}
                  className={`menu__item ${isSel ? "is-selected" : ""}`}
                  style={
                    isSel
                      ? ({ "--plate": shapes.plate, "--echo": shapes.echo } as CSSProperties)
                      : undefined
                  }
                  onMouseEnter={() => setSelected(i)}
                  onFocus={() => setSelected(i)}
                >
                  <span className="menu__slash" aria-hidden="true" />
                  <span className="menu__label">{t(item.label)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

    </div>
  );
}
