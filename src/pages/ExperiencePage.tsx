import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ScreenLayout } from "../components/layout/ScreenLayout";
import { jobs } from "../data/experience";
import { menuItem } from "../data/menu";
import { useLang } from "../i18n/lang";
import { ui } from "../i18n/ui";

export function ExperiencePage() {
  const { t } = useLang();
  const item = menuItem("/experience");

  return (
    <ScreenLayout title={item.label} tag={item.tag}>
      <ol className="jobs">
        {jobs.map((job, i) => (
          <li key={job.id} className="job rise" style={{ "--i": i + 2 } as CSSProperties}>
            {/* Left: index, company, role */}
            <header className="job__head">
              <span className="job__num">{String(i + 1).padStart(2, "0")}</span>
              <p className="job__type">{t(job.type)}</p>
              <h2 className="job__company">{job.company}</h2>
              <p className="job__role">{t(job.role)}</p>
              <p className="job__period">{t(job.period)}</p>
            </header>

            {/* Right: what I did */}
            <div className="job__body">
              <p className="lead">{t(job.summary)}</p>
              <ul className="job__points">
                {job.points.map((pt, k) => (
                  <li key={k}>{t(pt)}</li>
                ))}
              </ul>
              <ul className="tags" aria-label={t(ui.stackLabel)}>
                {job.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              {job.project && (
                <Link to={`/projects/${job.project}`} className="strip strip--ink job__link">
                  {t(ui.relatedProject)} <span aria-hidden="true">▸</span>
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </ScreenLayout>
  );
}
