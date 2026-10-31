import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ScreenLayout } from "../components/layout/ScreenLayout";
import { Highlight } from "../components/ornaments/Ornaments";
import { ProjectPoster } from "../components/ornaments/ProjectPoster";
import { menuItem } from "../data/menu";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import { useLang } from "../i18n/lang";
import { ui } from "../i18n/ui";

export function ProjectsPage() {
  const { t } = useLang();
  const item = menuItem("/projects");
  const [selected, setSelected] = useState(0);
  const p = projects[selected];

  return (
    <ScreenLayout title={item.label} tag={item.tag}>
      <div className="quests">
        {/* Party-list style roster */}
        <ol className="quests__list">
          {projects.map((q, i) => (
            <li key={q.id} className="rise" style={{ "--i": i + 2 } as CSSProperties}>
              <Link
                to={`/projects/${q.id}`}
                className={`row quest ${selected === i ? "is-selected" : ""}`}
                onMouseEnter={() => setSelected(i)}
                onFocus={() => setSelected(i)}
              >
                <Highlight seed={i * 5 + 17} className="row__hl" />
                <span className="quest__num">{q.num}</span>
                <span className="quest__main">
                  <span className="quest__title">{t(q.title)}</span>
                  <span className="quest__kicker">{t(q.kicker)}</span>
                </span>
                <span className="quest__meta">
                  <span className={`status ${q.live ? "is-live" : ""}`}>{t(q.live ? ui.inProgress : ui.shipped)}</span>
                  <span className="quest__year">{t(q.year)}</span>
                </span>
                <span className="quest__go" aria-hidden="true">
                  ▸
                </span>
              </Link>
            </li>
          ))}
          <li className="rise" style={{ "--i": projects.length + 2 } as CSSProperties}>
            <a href={`mailto:${profile.email}`} className="row quest quest--empty">
              <span className="quest__num">··</span>
              <span className="quest__main">
                <span className="quest__kicker">{t(ui.openSlot)}</span>
              </span>
            </a>
          </li>
        </ol>

        {/* Preview of the selected project */}
        <aside key={p.id} className="quests__preview">
          <div className="preview__poster">
            <Highlight seed={selected + 51} className="preview__hl" />
            <ProjectPoster kind={p.poster} />
          </div>
          <div className="panel preview__text">
            <h2 className="preview__title">{t(p.title)}</h2>
            <p className="role-line">
              <span className="role-line__label">{t(ui.myRole)}</span>
              {t(p.role)}
            </p>
            <p className="body-copy">{t(p.description)}</p>
            <h3 className="mini-label">{t(ui.whatIDid)}</h3>
            <ul className="feature-bullets">
              {p.contributions.slice(0, 2).map((c, i) => (
                <li key={i}>{t(c)}</li>
              ))}
            </ul>
            <p className="preview__stack">
              {p.stack.slice(0, 6).join(" · ")}
              {p.stack.length > 6 && ` · +${p.stack.length - 6} ${t(ui.more)}`}
            </p>
            <Link to={`/projects/${p.id}`} className="strip strip--light">
              {t(ui.openQuest)} <span aria-hidden="true">▸</span>
            </Link>
          </div>
        </aside>
      </div>
    </ScreenLayout>
  );
}
