import type { CSSProperties } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ScreenLayout } from "../components/layout/ScreenLayout";
import { Highlight } from "../components/ornaments/Ornaments";
import { ProjectPoster } from "../components/ornaments/ProjectPoster";
import { menuItem } from "../data/menu";
import { projects } from "../data/projects";
import { useLang } from "../i18n/lang";
import { ui } from "../i18n/ui";

export function ProjectDetailPage() {
  const { id } = useParams();
  const { t } = useLang();
  const index = projects.findIndex((p) => p.id === id);
  if (index < 0) return <Navigate to="/projects" replace />;

  const p = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <ScreenLayout
      title={p.title}
      tag={p.kicker}
      back={{ to: "/projects", label: menuItem("/projects").label }}
    >
      <article className="detail">
        <aside
          className="detail__aside rise"
          style={{ "--i": 2 } as CSSProperties}
        >
          <div className="preview__poster">
            <Highlight seed={index + 61} className="preview__hl" />
            <ProjectPoster kind={p.poster} />
          </div>
          <dl className="panel records">
            <div>
              <dt>{t(ui.status)}</dt>
              <dd>
                <span className={`status ${p.live ? "is-live" : ""}`}>
                  {t(p.live ? ui.inProgress : ui.shipped)}
                </span>
              </dd>
            </div>
            <div>
              <dt>{t(ui.when)}</dt>
              <dd>{t(p.year)}</dd>
            </div>
            <div>
              <dt>{t(ui.type)}</dt>
              <dd>{t(p.kicker)}</dd>
            </div>
          </dl>
          {p.links.length > 0 && (
            <div className="detail__links">
              {p.links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`strip ${i === 0 ? "strip--light" : ""}`}
                >
                  {t(l.label)} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
        </aside>

        <div className="detail__main">
          <section className="panel rise" style={{ "--i": 3 } as CSSProperties}>
            <h2 className="panel__title">{t(ui.overview)}</h2>
            <p className="lead">{t(p.description)}</p>
            <p className="role-line">
              <span className="role-line__label">{t(ui.myRole)}</span>
              {t(p.role)}
            </p>
          </section>

          {/* What I personally did */}
          <section className="panel rise" style={{ "--i": 4 } as CSSProperties}>
            <h2 className="panel__title">{t(ui.whatIDid)}</h2>
            <ol className="features">
              {p.contributions.map((c, i) => (
                <li key={i} className="row">
                  <Highlight className="row__hl" />
                  <span className="features__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p>{t(c)}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="panel rise" style={{ "--i": 5 } as CSSProperties}>
            <h2 className="panel__title">{t(ui.keyFeatures)}</h2>
            <ul className="feature-bullets">
              {p.highlights.map((h, i) => (
                <li key={i}>{t(h)}</li>
              ))}
            </ul>
            <h3 className="mini-label">{t(ui.stackLabel)}</h3>
            <ul className="tags" aria-label={t(ui.stackLabel)}>
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      {/* Problems solved: problem → solution → result */}
      <section
        className="challenges rise"
        style={{ "--i": 6 } as CSSProperties}
      >
        <h2 className="section-label">{t(ui.problemsSolved)}</h2>
        <ol className="challenges__list">
          {p.challenges.map((c, i) => (
            <li key={i} className="challenge">
              <span className="challenge__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="challenge__step challenge__step--problem">
                <span className="challenge__tag">{t(ui.problem)}</span>
                <p>{t(c.problem)}</p>
              </div>
              <div className="challenge__step">
                <span className="challenge__tag">{t(ui.solution)}</span>
                <p>{t(c.solution)}</p>
              </div>
              <div className="challenge__step challenge__step--result">
                <span className="challenge__tag">{t(ui.result)}</span>
                <p>{t(c.result)}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <nav
        className="pager rise"
        style={{ "--i": 6 } as CSSProperties}
        aria-label={t(menuItem("/projects").label)}
      >
        {prev ? (
          <Link to={`/projects/${prev.id}`} className="pager__link">
            <small>◂ {t(ui.previous)}</small>
            {t(prev.title)}
          </Link>
        ) : (
          <span />
        )}
        <Link to="/projects" className="strip">
          {t(ui.allProjects)}
        </Link>
        {next ? (
          <Link
            to={`/projects/${next.id}`}
            className="pager__link pager__link--next"
          >
            <small>{t(ui.next)} ▸</small>
            {t(next.title)}
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </ScreenLayout>
  );
}
