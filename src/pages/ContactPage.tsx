import type { CSSProperties, ReactNode } from "react";
import { ScreenLayout } from "../components/layout/ScreenLayout";
import { menuItem } from "../data/menu";
import { profile } from "../data/profile";
import { useLang, type Text } from "../i18n/lang";
import { ui } from "../i18n/ui";

type Channel = { label: Text; value: string; href: string; icon: ReactNode; external?: boolean };

const channels: Channel[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="M3.5 6.5 12 13l8.5-6.5" />
      </>
    ),
  },
  {
    label: ui.phone,
    value: profile.phone,
    href: `tel:${profile.phone}`,
    icon: <path d="M6.5 3h3l1.8 4.6-2.2 1.5a11.5 11.5 0 0 0 5.8 5.8l1.5-2.2L21 14.5v3a2.5 2.5 0 0 1-2.5 2.5A15.5 15.5 0 0 1 4 5.5 2.5 2.5 0 0 1 6.5 3Z" />,
  },
  {
    label: "GitHub",
    value: profile.github.replace("https://", ""),
    href: profile.github,
    icon: <path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16" />,
    external: true,
  },
];

/**
 * Contact, styled after the stacked party panels of the P3R pause screen:
 * every channel is its own slanted card with a round badge, all visible at once.
 */
export function ContactPage() {
  const { t } = useLang();
  const item = menuItem("/contact");

  return (
    <ScreenLayout title={item.label} tag={item.tag}>
      <div className="pact">
        <section className="pact__info">
          <p className="lead pact__lead rise" style={{ "--i": 2 } as CSSProperties}>
            {t(ui.contactLead)}
          </p>
          <p className="pact__where rise" style={{ "--i": 3 } as CSSProperties}>
            <span>{t(ui.basedIn)}</span> {t(profile.location)}
          </p>
        </section>

        <ul className="party">
          {channels.map((c, i) => (
            <li key={c.href} className="party__slot rise" style={{ "--i": i + 3, "--k": i } as CSSProperties}>
              <a
                href={c.href}
                className="party__card"
                {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span className="party__badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24">{c.icon}</svg>
                </span>
                <span className="party__body">
                  <span className="party__label">{t(c.label)}</span>
                  <span className="party__value">{c.value}</span>
                </span>
                <span className="party__go" aria-hidden="true">
                  ▸
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </ScreenLayout>
  );
}
