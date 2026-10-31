import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ScreenLayout } from "../components/layout/ScreenLayout";
import { ArcanaCard, Highlight } from "../components/ornaments/Ornaments";
import { menuItem } from "../data/menu";
import { attributes, goals, profile, records, timeline, traits } from "../data/profile";
import { useLang } from "../i18n/lang";
import { ui } from "../i18n/ui";

export function AboutPage() {
  const { t } = useLang();
  const item = menuItem("/about");

  return (
    <ScreenLayout title={item.label} tag={item.tag}>
      <div className="statusview">
        {/* Arcana card stands in for a character portrait */}
        <div className="status__art rise" style={{ "--i": 1 } as CSSProperties}>
          <ArcanaCard numeral="0" title={t(ui.arcanaTitle)} />
          <p className="status__arcana-note">{t(ui.arcanaNote)}</p>
        </div>

        <div className="status__main">
          {/* Name plate + level-style headline number */}
          <div className="nameplate rise" style={{ "--i": 2 } as CSSProperties}>
            <span className="nameplate__name">{t(profile.fullName)}</span>
            <span className="nameplate__class">
              {t(ui.classLabel)} · {t(profile.title)}
            </span>
          </div>

          <div className="level rise" style={{ "--i": 3 } as CSSProperties}>
            <span className="level__label">GPA</span>
            <span className="level__value">3.14</span>
            <div className="level__next">
              <span>TOEIC</span>
              <span className="level__bar" style={{ "--v": 825 / 990 } as CSSProperties} />
              <span className="level__num">825</span>
            </div>
          </div>

          {/* Introduction */}
          <section className="panel rise" style={{ "--i": 4 } as CSSProperties}>
            <h2 className="panel__title">{t(ui.intro)}</h2>
            <p className="lead">{t(profile.statement)}</p>
            <p className="body-copy">{t(profile.summary)}</p>
            <ul className="traits">
              {traits.map((tr, i) => (
                <li key={i}>{t(tr)}</li>
              ))}
            </ul>
          </section>

          {/* Base stats */}
          <section className="panel rise" style={{ "--i": 5 } as CSSProperties}>
            <h2 className="panel__title">{t(ui.baseStats)}</h2>
            <ul className="stats">
              {attributes.map((a, i) => (
                <li key={i} className="stat" style={{ "--v": a.value / 100, "--k": i } as CSSProperties}>
                  <span className="stat__name">{t(a.name)}</span>
                  <span className="stat__bar" aria-hidden="true" />
                  <span className="stat__value">{a.value}</span>
                  <span className="stat__note">{t(a.note)}</span>
                </li>
              ))}
            </ul>
            <p className="panel__foot">{t(ui.statsNote)}</p>
          </section>
        </div>
      </div>

      {/* Career direction */}
      <section className="goals rise" style={{ "--i": 6 } as CSSProperties}>
        <h2 className="section-label">{t(ui.careerDirection)}</h2>
        <ol className="goals__list">
          {goals.map((g, i) => (
            <li key={i} className="goal">
              <span className="goal__num">{String(i + 1).padStart(2, "0")}</span>
              <p className="goal__horizon">{t(g.horizon)}</p>
              <h3 className="goal__title">{t(g.title)}</h3>
              <p className="goal__text">{t(g.text)}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="profile-lower">
        <section className="panel rise" style={{ "--i": 7 } as CSSProperties}>
          <h2 className="panel__title">{t(ui.records)}</h2>
          <dl className="records">
            {records.map((r, i) => (
              <div key={i}>
                <dt>{t(r.label)}</dt>
                <dd>{t(r.value)}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="panel rise" style={{ "--i": 8 } as CSSProperties}>
          <h2 className="panel__title">{t(ui.journal)}</h2>
          <ol className="journal">
            {timeline.map((b, i) => (
              <li key={i} className="row">
                <Highlight className="row__hl" />
                <span className="journal__year">{t(b.year)}</span>
                <div>
                  <h3 className="journal__title">{t(b.title)}</h3>
                  <p>{t(b.text)}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="next-links">
            <Link to="/experience" className="strip strip--ink">
              {t(menuItem("/experience").label)} <span aria-hidden="true">▸</span>
            </Link>
            <Link to="/projects" className="strip">
              {t(ui.viewProjects)} <span aria-hidden="true">▸</span>
            </Link>
          </div>
        </section>
      </div>
    </ScreenLayout>
  );
}
