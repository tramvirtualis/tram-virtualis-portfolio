import { useEffect, type CSSProperties, type ReactNode } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { menu } from "../../data/menu";
import { useLang, type Text } from "../../i18n/lang";
import { ui } from "../../i18n/ui";
import { Highlight } from "../ornaments/Ornaments";
import { LangToggle } from "./LangToggle";

type Props = {
  title: Text;
  /** Narrative subtitle under the giant title */
  tag: Text;
  /** Where Esc / the back button goes. Defaults to the main menu. */
  back?: { to: string; label: Text };
  children: ReactNode;
};

/**
 * Frame shared by every content screen: command bar (back, tabs, language),
 * and the giant worn title.
 * Keys: Esc = back, Q / E = previous / next section.
 */
export function ScreenLayout({ title, tag, back = { to: "/", label: ui.menu }, children }: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useLang();
  const tabIndex = menu.findIndex((m) => pathname === m.path || pathname.startsWith(`${m.path}/`));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if ((e.target as HTMLElement).closest("input, textarea, [contenteditable]")) return;

      if (e.key === "Escape") navigate(back.to);
      const key = e.key.toLowerCase();
      if ((key === "q" || key === "e") && tabIndex >= 0) {
        const next = (tabIndex + (key === "e" ? 1 : -1) + menu.length) % menu.length;
        navigate(menu[next].path);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, back.to, tabIndex]);

  // On narrow screens the tab strip scrolls sideways; keep the current tab in view.
  useEffect(() => {
    const strip = document.querySelector<HTMLElement>(".tabs ul");
    const active = strip?.querySelector<HTMLElement>(".is-active");
    if (strip && active) strip.scrollLeft = active.offsetLeft - (strip.clientWidth - active.offsetWidth) / 2;
  }, [pathname]);

  return (
    <div className="screen">
      <header className="topbar">
        <Link to={back.to} className="topbar__back">
          <span className="topbar__arrow" aria-hidden="true" />
          {t(back.label)}
        </Link>

        <nav className="tabs" aria-label={t(ui.sections)}>
          <ul>
            {menu.map((m, i) => (
              <li key={m.path}>
                <NavLink to={m.path} className={({ isActive }) => `tabs__link ${isActive ? "is-active" : ""}`}>
                  <Highlight seed={i + 11} className="tabs__hl" />
                  <span className="tabs__label">{t(m.label)}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="topbar__end">
          <LangToggle />
        </div>
      </header>

      <div className="masthead">
        <h1 className="giant masthead__title rise" style={{ "--i": 0 } as CSSProperties}>
          {t(title)}
        </h1>
        <p className="masthead__tag rise" style={{ "--i": 1 } as CSSProperties}>
          {t(tag)}
        </p>
      </div>

      <div className="board">{children}</div>

    </div>
  );
}
