import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { menuByPath } from "../../data/menu";
import { profile } from "../../data/profile";
import { useLang } from "../../i18n/lang";
import { Cursor } from "./Cursor";

/**
 * Persistent stage behind every screen: a bright graphic backdrop (white field,
 * electric-blue diagonal, black wedge), the slanted panels that
 * cut across on each route change, and the cursor. Screens render in <Outlet />.
 */
export function Shell() {
  const { pathname } = useLocation();
  const item = menuByPath(pathname);
  const { t } = useLang();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    document.title = item ? `${t(item.label)} · Ngoc Tram` : `Ngoc Tram · ${t(profile.title)}`;
  }, [item, t]);

  return (
    <div className={`stage ${pathname === "/" ? "stage--menu" : "stage--screen"}`}>
      <div className="backdrop" aria-hidden="true">
        <span className="backdrop__field" />
        <span className="backdrop__band" />
        <span className="backdrop__wedge" />
      </div>

      {/* Re-keyed so the cut replays on every navigation */}
      <div key={pathname} className="sweep" aria-hidden="true">
        <span className="sweep__panel sweep__panel--a" />
        <span className="sweep__panel sweep__panel--b" />
        <span className="sweep__panel sweep__panel--c" />
      </div>

      <main key={`m-${pathname}`} className="stage__screen">
        <Outlet />
      </main>

      <Cursor />
    </div>
  );
}
