import { useLang } from "../../i18n/lang";
import { ui } from "../../i18n/ui";

/** EN / VI sticker switch. */
export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, toggle, t } = useLang();
  return (
    <button type="button" className={`lang-toggle ${className}`} onClick={toggle} aria-label={t(ui.switchLang)}>
      <span className={lang === "en" ? "is-on" : ""} lang="en">
        EN
      </span>
      <span className={lang === "vi" ? "is-on" : ""} lang="vi">
        VI
      </span>
    </button>
  );
}
