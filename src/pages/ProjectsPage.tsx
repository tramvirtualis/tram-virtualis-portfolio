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
        </aside>
      </div>
    </ScreenLayout>
  );
}
