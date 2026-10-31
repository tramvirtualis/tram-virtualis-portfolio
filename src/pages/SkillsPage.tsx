import { useState, type CSSProperties } from "react";
import { ScreenLayout } from "../components/layout/ScreenLayout";
import { Highlight, Emblem } from "../components/ornaments/Ornaments";
import { menuItem } from "../data/menu";
import { arsenal, softSkills } from "../data/profile";
import { useLang } from "../i18n/lang";

const slots = ["I", "II", "III", "IV", "V", "VI"];

export function TechStackPage() {
  const { t } = useLang();
  const item = menuItem("/tech-stack");
  const [selected, setSelected] = useState(0);
  const group = arsenal[selected];

  return (
    <ScreenLayout title={item.label} tag={item.tag}>
      {/* Group list on the left, details of the selected group on the right */}
      <div className="equip equip--split">
        <ol className="roster">
          {arsenal.map((g, i) => (
            <li
              key={i}
              tabIndex={0}
              className={`row roster__row roster__row--prose roster__row--pick rise ${selected === i ? "is-selected" : ""}`}
              style={{ "--i": i + 2 } as CSSProperties}
              onMouseEnter={() => setSelected(i)}
              onFocus={() => setSelected(i)}
              onClick={() => setSelected(i)}
              aria-current={selected === i}
            >
              <Highlight seed={i * 7 + 2} className="row__hl" />
              <span className="roster__slot">{slots[i]}</span>
              <div className="roster__body">
                <h2 className="roster__name">{t(g.school)}</h2>
                <ul className="roster__items">
                  {g.tech.map((x) => (
                    <li key={x.name}>{x.name}</li>
                  ))}
                </ul>
              </div>
              <Emblem name={g.glyph} />
            </li>
          ))}
        </ol>

        <aside key={selected} className="stack-detail" aria-live="polite">
          <header className="stack-detail__head">
            <span className="stack-detail__slot">{slots[selected]}</span>
            <h2 className="stack-detail__title">{t(group.school)}</h2>
          </header>
          <p className="stack-detail__summary">{t(group.summary)}</p>
          <dl className="stack-detail__list">
            {group.tech.map((x) => (
              <div key={x.name} className="stack-detail__item">
                <dt>{x.name}</dt>
                <dd>{t(x.note)}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </ScreenLayout>
  );
}

export function SoftSkillsPage() {
  const { t } = useLang();
  const item = menuItem("/soft-skills");

  return (
    <ScreenLayout title={item.label} tag={item.tag}>
      <div className="equip">
        <ol className="roster">
          {softSkills.map((skill, i) => (
            <li key={i} className="row roster__row roster__row--prose rise" style={{ "--i": i + 2 } as CSSProperties}>
              <Highlight seed={i * 7 + 2} className="row__hl" />
              <span className="roster__slot">{slots[i]}</span>
              <div className="roster__body">
                <h2 className="roster__name">{t(skill.name)}</h2>
                <p className="roster__text">{t(skill.text)}</p>
              </div>
              <Emblem name={skill.glyph} />
            </li>
          ))}
        </ol>
      </div>
    </ScreenLayout>
  );
}
