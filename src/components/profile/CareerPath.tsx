import { Fragment, type CSSProperties } from "react";
import { careerIntro, goals } from "../../data/profile";
import { useLang } from "../../i18n/lang";
import { ui } from "../../i18n/ui";

/* Career direction for readers outside tech: plain intro, then text and diagrams in turn.
   1. Roadmap bar: the 3 phases, starting now.
   2. Each phase: what and why, a coding vs analysis bar, then dated milestones.
   3. Timeline: every milestone placed on one axis by date, as a summary. */

function Roadmap() {
  const { t } = useLang();
  return (
    <figure className="road" aria-label={t(ui.roadmap)}>
      <figcaption className="road__cap">{t(ui.roadmap)}</figcaption>
      <div className="road__track">
        <span className="road__now">{t(ui.now)}</span>
        {goals.map((g, i) => (
          <div key={i} className={`road__seg road__seg--${i + 1}`} style={{ "--w": g.years } as CSSProperties}>
            <b>{String(i + 1).padStart(2, "0")}</b>
            <span>
              {t(g.short)}
              <small>{t(g.period)}</small>
            </span>
          </div>
        ))}
      </div>
    </figure>
  );
}

// Share of time: coding on the left, analysis on the right
function Split({ analysis }: { analysis: number }) {
  const { t } = useLang();
  return (
    <div className="split">
      <p className="split__label">{t(ui.timeSplit)}</p>
      <div className="split__bar" style={{ "--a": `${analysis}%` } as CSSProperties} role="img" aria-label={`${t(ui.coding)} ${100 - analysis}%, ${t(ui.analysis)} ${analysis}%`}>
        <span className="split__code" />
        <span className="split__ba" />
      </div>
      <div className="split__legend">
        <span><i className="dot dot--code" />{t(ui.coding)} {100 - analysis}%</span>
        <span><i className="dot dot--ba" />{t(ui.analysis)} {analysis}%</span>
      </div>
    </div>
  );
}

/* Timeline: one axis from 2026 to 2034, coloured by phase, every milestone placed at its date.
   Labels take turns on 4 levels (2 above, 2 below the axis) so close milestones do not overlap. On narrow screens it becomes a vertical list. */
const T0 = 2026.6;
const T1 = 2034;
const pos = (year: number) => ((year - T0) / (T1 - T0)) * 100;
const YEARS = Array.from({ length: Math.floor(T1) - Math.ceil(T0) + 1 }, (_, i) => Math.ceil(T0) + i);

function Timeline() {
  const { t } = useLang();
  const points = goals.flatMap((g, phase) => g.steps.map((s) => ({ ...s, phase: phase + 1 })));
  return (
    <figure className="tl" aria-label={t(ui.timeline)}>
      <figcaption className="road__cap">{t(ui.timeline)}</figcaption>
      <div className="tl__chart">
        <div className="tl__axis" aria-hidden="true">
          {goals.map((g, i) => (
            <span key={i} className={`tl__band tl__band--${i + 1}`} style={{ left: `${pos(g.from)}%`, width: `${pos(g.to) - pos(g.from)}%` }} />
          ))}
        </div>
        <ol className="tl__years" aria-hidden="true">
          {YEARS.map((y) => (
            <li key={y} style={{ left: `${pos(y)}%` }}>{y}</li>
          ))}
        </ol>
        <ol className="tl__points">
          {points.map((p, k) => {
            const x = pos(p.at);
            const align = x < 8 ? " tl__m--start" : x > 90 ? " tl__m--end" : "";
            return (
              <li key={k} className={`tl__m tl__m--p${p.phase} tl__m--l${k % 4}${align}`} style={{ left: `${x}%` }}>
                <span className="tl__lbl">
                  <b>{t(p.when)}</b>
                  {t(p.label)}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
      <ul className="tl__legend">
        {goals.map((g, i) => (
          <li key={i}>
            <i className={`tl__band--${i + 1}`} />
            <b>{t(g.short)}</b> {t(g.period)}
          </li>
        ))}
      </ul>
    </figure>
  );
}

export function CareerPath() {
  const { t } = useLang();
  return (
    <div className="career">
      <p className="career__intro">{t(careerIntro)}</p>
      <Roadmap />
      <ol className="phases">
        {goals.map((g, i) => (
          <Fragment key={i}>
            <li className={`phase phase--${i + 1}`}>
              <div className="phase__main">
                <span className="phase__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <p className="phase__period">
                  {t(ui.phase)} {i + 1} · {t(g.period)}
                </p>
                <h3 className="phase__title">{t(g.title)}</h3>
                <p className="phase__text">{t(g.text)}</p>
                <Split analysis={g.analysis} />
              </div>
              <div className="phase__steps">
                <p className="phase__steps-label">{t(ui.milestones)}</p>
                <ol>
                  {g.steps.map((s, k) => (
                    <li key={k}>
                      <span className="phase__when">{t(s.when)}</span>
                      <p>{t(s.what)}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </li>
          </Fragment>
        ))}
      </ol>
      <Timeline />
    </div>
  );
}
