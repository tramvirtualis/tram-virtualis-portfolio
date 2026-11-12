import type { Text } from "../i18n/lang";

export type MenuItem = {
  path: string;
  num: string;
  label: Text;
  /** Subtitle under the giant screen title */
  tag: Text;
  /** One-line help text shown under the selected menu entry */
  hint: Text;
};

export const menu: MenuItem[] = [
  {
    path: "/about",
    num: "01",
    label: { en: "About", vi: "Giới thiệu" },
    tag: { en: "Who is this developer, and where is she heading?", vi: "Lập trình viên này là ai, và đang hướng tới đâu?" },
    hint: { en: "Intro, education, stats and career direction.", vi: "Giới thiệu, học vấn, chỉ số và định hướng phát triển." },
  },
  {
    path: "/experience",
    num: "02",
    label: { en: "Experience", vi: "Kinh nghiệm" },
    tag: { en: "Where I've worked and what I did there.", vi: "Những nơi tôi đã làm việc và đóng góp." },
    hint: { en: "Internship and work experience.", vi: "Kinh nghiệm thực tập và làm việc." },
  },
  {
    path: "/projects",
    num: "03",
    label: { en: "Projects", vi: "Dự án" },
    tag: {
      en: "Missions taken on, and the one still in progress.",
      vi: "Những nhiệm vụ đã nhận, và nhiệm vụ vẫn đang tiếp diễn.",
    },
    hint: { en: "Featured work: open any project for the full story.", vi: "Dự án tiêu biểu: mở từng dự án để xem chi tiết." },
  },
  {
    path: "/tech-stack",
    num: "04",
    label: { en: "Tech Stack", vi: "Công nghệ" },
    tag: { en: "The arsenal at hand.", vi: "Kho vũ khí trong tay." },
    hint: { en: "Languages, frameworks, databases and tools.", vi: "Ngôn ngữ, framework, cơ sở dữ liệu và công cụ." },
  },
  {
    path: "/soft-skills",
    num: "05",
    label: { en: "Soft Skills", vi: "Kỹ năng mềm" },
    tag: { en: "What I bring to a team beyond the code.", vi: "Những gì tôi mang đến cho đội ngoài dòng code." },
    hint: { en: "Responsibility, teamwork, problem solving and self-learning.", vi: "Trách nhiệm, làm việc nhóm, giải quyết vấn đề và tự học." },
  },
  {
    path: "/contact",
    num: "06",
    label: { en: "Contact", vi: "Liên hệ" },
    tag: { en: "Forge a new bond.", vi: "Kết nối một mối liên kết mới." },
    hint: { en: "Email and phone.", vi: "Email và số điện thoại." },
  },
];

export const menuByPath = (pathname: string) =>
  menu.find((m) => pathname === m.path || pathname.startsWith(`${m.path}/`));

/** Menu entry for a section path (throws if the path isn't in the menu). */
export const menuItem = (path: string) => {
  const item = menuByPath(path);
  if (!item) throw new Error(`No menu entry for ${path}`);
  return item;
};
