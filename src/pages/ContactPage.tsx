import type { CSSProperties, ReactNode } from "react";
import { ScreenLayout } from "../components/layout/ScreenLayout";
import { menuItem } from "../data/menu";
import { profile } from "../data/profile";
import { useLang, type Text } from "../i18n/lang";
import { ui } from "../i18n/ui";

type Channel = { label: Text; value: string; href: string; action: Text; icon: ReactNode; external?: boolean };

const channels: Channel[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    action: { en: "Send an email", vi: "Gửi email" },
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
    action: { en: "Call now", vi: "Gọi ngay" },
    icon: <path d="M6.5 3h3l1.8 4.6-2.2 1.5a11.5 11.5 0 0 0 5.8 5.8l1.5-2.2L21 14.5v3a2.5 2.5 0 0 1-2.5 2.5A15.5 15.5 0 0 1 4 5.5 2.5 2.5 0 0 1 6.5 3Z" />,
  },
  {
    label: "GitHub",
    value: profile.github.replace("https://", ""),
    href: profile.github,
    action: { en: "Open profile", vi: "Xem hồ sơ" },
    icon: <path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16" />,
    external: true,
  },
];

/**
 * Contact: three horizontal rows on a deep blue stage, each stepping a little to the right.
 * Everything is visible at once; hovering a row lights it up in white.
 */
export function ContactPage() {
  const { t } = useLang();
  const item = menuItem("/contact");

  return (
    <ScreenLayout title={item.label} tag={item.tag}>
      <ul className="lineup">
        {channels.map((c, i) => (
          <li key={c.href} className="lineup__slot rise" style={{ "--i": i + 2, "--k": i } as CSSProperties}>
            <a
              href={c.href}
              className="lineup__card"
              {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className="lineup__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="lineup__badge" aria-hidden="true">
                <svg viewBox="0 0 24 24">{c.icon}</svg>
              </span>
              <span className="lineup__label">{t(c.label)}</span>
              <span className="lineup__value">{c.value}</span>
              <span className="lineup__action">
                {t(c.action)} <span aria-hidden="true">▸</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </ScreenLayout>
  );
}
