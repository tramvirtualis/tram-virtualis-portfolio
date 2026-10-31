// Personal details — sourced from NguyenThiNgocTram_FresherCV.pdf.
// Edit here; every screen reads from this file. { en, vi } = shown per language.
import type { Text } from "../i18n/lang";

export const profile = {
  // Name split for the big title lettering
  lastName: { en: "Nguyen Thi", vi: "Nguyễn Thị" } as Text,
  nameA: { en: "Ngoc", vi: "Ngọc" } as Text,
  nameB: { en: "Tram", vi: "Trâm" } as Text,
  fullName: { en: "Nguyen Thi Ngoc Tram", vi: "Nguyễn Thị Ngọc Trâm" } as Text,
  title: { en: "Full-stack Developer", vi: "Lập trình viên Full-stack" } as Text,
  rank: "Fresher" as Text,
  statement: {
    en: "I build web applications end to end — from Spring Boot services and secure REST APIs to React interfaces people enjoy using. I learn fast, lean on AI tools wisely, and care about the details between the layers.",
    vi: "Tôi xây dựng ứng dụng web trọn vẹn — từ service Spring Boot, REST API bảo mật đến giao diện React mà người dùng thích sử dụng. Tôi học nhanh, dùng công cụ AI có chọn lọc và chăm chút từng chi tiết giữa các tầng.",
  } as Text,
  summary: {
    en: "Software Engineering graduate with a solid foundation in OOP, APIs and the software development process, shipping projects with Java, Spring Boot and ReactJS.",
    vi: "Sinh viên chuyên ngành Công nghệ Phần mềm đã hoàn thành chương trình Cử nhân CNTT, nền tảng vững về OOP, API và quy trình phát triển phần mềm, đã thực hiện dự án với Java, Spring Boot và ReactJS.",
  } as Text,
  location: { en: "Thu Duc, Ho Chi Minh City", vi: "Thủ Đức, TP. Hồ Chí Minh" } as Text,
  email: "ngoctramngff4@gmail.com",
  phone: "0398117422",
  github: "https://github.com/tramvirtualis",
  // TODO: replace with your LinkedIn profile URL.
  linkedin: "https://www.linkedin.com/",
  cv: "/NguyenThiNgocTram_FresherCV.pdf",
};

export const records: { label: Text; value: Text }[] = [
  { label: { en: "Based in", vi: "Nơi ở" }, value: profile.location },
  {
    label: { en: "School", vi: "Trường" },
    value: { en: "HCMC University of Technology and Engineering", vi: "ĐH Công nghệ Kỹ thuật TP.HCM (HCM-UTE)" },
  },
  {
    label: { en: "Major", vi: "Chuyên ngành" },
    value: { en: "Software Engineering · 2022–2026", vi: "Công nghệ Phần mềm · 2022–2026" },
  },
  { label: "GPA", value: "3.14 / 4.0" },
  {
    label: { en: "English", vi: "Ngoại ngữ" },
    value: { en: "TOEIC L&R 825 / 990", vi: "Tiếng Anh — TOEIC L&R 825 / 990" },
  },
];

// Stat bars are a self-assessment; tune the values freely (0–100).
export const attributes: { name: Text; note: Text; value: number }[] = [
  { name: "Backend", note: "Java · Spring Boot · REST", value: 84 },
  { name: "Frontend", note: "React · TypeScript · Tailwind", value: 80 },
  { name: { en: "Data", vi: "Dữ liệu" }, note: "MySQL · PostgreSQL · Redis", value: 70 },
  { name: { en: "Delivery", vi: "Triển khai" }, note: "Docker · Git · CI deploys", value: 66 },
  {
    name: { en: "Adaptability", vi: "Thích nghi" },
    note: { en: "AI tooling · new stacks", vi: "Công cụ AI · công nghệ mới" },
    value: 90,
  },
];

export type ArsenalGroup = {
  school: Text;
  glyph: "quill" | "shield" | "key" | "vault" | "gear";
  /** One line shown at the top of the detail panel */
  summary: Text;
  /** Each technology with what I use it for */
  tech: Tech[];
};

export type Tech = { name: string; note: Text };

export const arsenal: ArsenalGroup[] = [
  {
    school: { en: "Languages", vi: "Ngôn ngữ" },
    glyph: "quill",
    summary: { en: "The languages I use every day across the back end and front end.", vi: "Những ngôn ngữ tôi dùng hằng ngày cho cả back end lẫn front end." },
    tech: [
      { name: "Java", note: { en: "My main back-end language, used with Spring Boot in Cinesmart and the Digital Real Estate platform.", vi: "Ngôn ngữ chính phía back end, dùng cùng Spring Boot trong Cinesmart và nền tảng Bất động sản số." } },
      { name: "JavaScript", note: { en: "The foundation of every web interface and React project I build.", vi: "Nền tảng cho mọi giao diện web và các dự án React tôi xây dựng." } },
      { name: "TypeScript", note: { en: "Used for the Digital Real Estate front end and this portfolio, making the code safer and easier to maintain.", vi: "Dùng cho front end của Bất động sản số và chính trang portfolio này, giúp code an toàn và dễ bảo trì hơn." } },
    ],
  },
  {
    school: "Frontend",
    glyph: "shield",
    summary: { en: "My main strength. I built the main user interfaces in my projects.", vi: "Thế mạnh chính của tôi, tôi đảm nhiệm các giao diện chính trong các dự án." },
    tech: [
      { name: "ReactJS", note: { en: "Built the interfaces of Cinesmart and Digital Real Estate, from customer pages to admin consoles.", vi: "Xây dựng giao diện cho Cinesmart và Bất động sản số, từ trang khách hàng đến trang quản trị." } },
      { name: "Tailwind CSS", note: { en: "Fast, consistent and responsive layouts across screen sizes.", vi: "Dựng giao diện nhanh, đồng nhất và responsive trên nhiều kích thước màn hình." } },
      { name: "HTML / CSS", note: { en: "Solid grasp of layout, responsive design and motion effects.", vi: "Nắm chắc bố cục, responsive và các hiệu ứng chuyển động." } },
      { name: "Redux Toolkit", note: { en: "Managing shared state such as the login session and data used across screens.", vi: "Quản lý state dùng chung như phiên đăng nhập và dữ liệu dùng giữa nhiều màn hình." } },
    ],
  },
  {
    school: "Backend",
    glyph: "key",
    summary: { en: "Building APIs and the business logic behind them.", vi: "Xây dựng API và nghiệp vụ phía server." },
    tech: [
      { name: "Spring Boot", note: { en: "REST APIs and business logic for the Project module and the Cinesmart booking system.", vi: "REST API và nghiệp vụ cho module Dự án và hệ thống đặt vé Cinesmart." } },
      { name: "Spring Security", note: { en: "JWT authentication and role-based access control.", vi: "Xác thực JWT và phân quyền theo vai trò." } },
      { name: "RESTful APIs", note: { en: "Clear API design with pagination, filtering and consistent error handling.", vi: "Thiết kế API rõ ràng, có phân trang, bộ lọc và xử lý lỗi thống nhất." } },
      { name: "Node.js", note: { en: "Small server-side APIs and scripts in JavaScript.", vi: "Viết API và script nhỏ phía server bằng JavaScript." } },
      { name: "WebSocket", note: { en: "Real-time features that keep data in sync instantly.", vi: "Xây dựng các tính năng thời gian thực, đồng bộ dữ liệu tức thì." } },
    ],
  },
  {
    school: { en: "Data", vi: "Dữ liệu" },
    glyph: "vault",
    summary: { en: "Storing data reliably and keeping it consistent.", vi: "Lưu trữ dữ liệu ổn định và đảm bảo tính nhất quán." },
    tech: [
      { name: "MySQL", note: { en: "Cinesmart's database: movies, showtimes, orders and vouchers.", vi: "Cơ sở dữ liệu của Cinesmart: phim, suất chiếu, đơn hàng và voucher." } },
      { name: "PostgreSQL", note: { en: "Digital Real Estate's database, with a unique index guaranteeing one active booking per unit.", vi: "Cơ sở dữ liệu của Bất động sản số, dùng unique index để đảm bảo mỗi căn chỉ có một booking đang giữ." } },
      { name: "SQL Server", note: { en: "Designing tables, writing queries, views and stored procedures.", vi: "Thiết kế bảng, viết truy vấn, view và stored procedure." } },
    ],
  },
  {
    school: { en: "Tools", vi: "Công cụ" },
    glyph: "gear",
    summary: { en: "The tools I rely on to work with a team and ship.", vi: "Những công cụ tôi dùng để làm việc nhóm và đưa sản phẩm vào vận hành." },
    tech: [
      { name: "Git", note: { en: "Team workflow with branches, pull requests and code review.", vi: "Làm việc nhóm theo nhánh, pull request và review code." } },
      { name: "Docker", note: { en: "Packaging and running apps the same way in every environment.", vi: "Đóng gói và chạy ứng dụng nhất quán giữa các môi trường." } },
      { name: "Postman", note: { en: "Testing APIs and sharing them with the team.", vi: "Kiểm thử API và chia sẻ với đội ngũ." } },
      { name: "Jira", note: { en: "Tracking work in sprints.", vi: "Theo dõi công việc theo sprint." } },
      { name: "n8n", note: { en: "Built the AI customer-support chatbot in Cinesmart.", vi: "Dựng chatbot AI hỗ trợ khách hàng trong Cinesmart." } },
    ],
  },
  {
    school: "AI & Computer Vision",
    glyph: "key",
    summary: { en: "Experience from my internship at Hitek Solution.", vi: "Kinh nghiệm từ đợt thực tập tại Hitek Solution." },
    tech: [
      { name: "Python", note: { en: "Processing datasets and training models.", vi: "Xử lý dataset và huấn luyện mô hình." } },
      { name: "YOLO", note: { en: "Training and evaluating object recognition models.", vi: "Huấn luyện và đánh giá mô hình nhận diện đối tượng." } },
      { name: "FastAPI", note: { en: "APIs that bring model predictions into applications.", vi: "Xây dựng API đưa kết quả dự đoán của mô hình vào ứng dụng." } },
    ],
  },
];

/** Soft skills, each written as a short paragraph. Edit to match your own experience. */
export type SoftSkill = { name: Text; glyph: ArsenalGroup["glyph"]; text: Text };

export const softSkills: SoftSkill[] = [
  {
    name: { en: "Responsibility", vi: "Tinh thần trách nhiệm" },
    glyph: "shield",
    text: {
      en: "I deliver my part on time and take ownership of the quality of what I build, down to the small details users rarely notice.",
      vi: "Tôi luôn hoàn thành phần việc được giao đúng hạn và chịu trách nhiệm với chất lượng sản phẩm mình làm ra, kể cả những chi tiết nhỏ mà người dùng ít khi để ý.",
    },
  },
  {
    name: { en: "Teamwork", vi: "Làm việc nhóm" },
    glyph: "quill",
    text: {
      en: "I work well with teammates, keep everyone updated on my progress and step in to help when someone needs it. When opinions differ, I listen and talk things through openly so the team can land on the best direction.",
      vi: "Tôi phối hợp tốt với các thành viên, chủ động cập nhật tiến độ và sẵn sàng hỗ trợ khi đồng đội cần. Khi có ý kiến khác nhau, tôi lắng nghe và trao đổi thẳng thắn để cả nhóm cùng đi đến hướng tốt nhất.",
    },
  },
  {
    name: { en: "Problem solving", vi: "Giải quyết vấn đề" },
    glyph: "key",
    text: {
      en: "Before building anything, I take time to understand the requirements so I solve the right problem. Faced with a big issue, I break it into smaller steps and close each one out properly.",
      vi: "Trước khi bắt tay vào làm, tôi dành thời gian tìm hiểu kỹ yêu cầu để hiểu đúng điều người dùng cần. Gặp vấn đề lớn, tôi chia nhỏ thành từng bước và xử lý dứt điểm từng phần.",
    },
  },
  {
    name: { en: "Self-learning", vi: "Tự học" },
    glyph: "gear",
    text: {
      en: "I pick up new technologies quickly and use AI tools to learn and work more efficiently, while always double-checking the results myself.",
      vi: "Tôi tiếp cận công nghệ mới khá nhanh và biết tận dụng công cụ AI để học và làm việc hiệu quả hơn, nhưng vẫn luôn tự kiểm chứng lại kết quả.",
    },
  },
  {
    name: { en: "English", vi: "Tiếng Anh" },
    glyph: "vault",
    text: {
      en: "I read English technical documentation comfortably and research problems in English without difficulty.",
      vi: "Tôi đọc hiểu tài liệu kỹ thuật tiếng Anh tốt và tra cứu, tìm hiểu vấn đề bằng tiếng Anh một cách thoải mái.",
    },
  },
];

export const traits: Text[] = [
  { en: "Object-oriented design", vi: "Thiết kế hướng đối tượng" },
  { en: "API-first thinking", vi: "Tư duy API-first" },
  { en: "AI-assisted workflow", vi: "Làm việc cùng AI" },
  { en: "Quick to adapt", vi: "Thích nghi nhanh" },
];

export const timeline: { year: Text; title: Text; text: Text }[] = [
  {
    year: "2022",
    title: { en: "Started IT at HCM-UTE", vi: "Bắt đầu học CNTT tại HCM-UTE" },
    text: {
      en: "Began Information Technology at HCMC University of Technology and Engineering, focusing on Software Engineering.",
      vi: "Theo học ngành Công nghệ Thông tin tại ĐH Công nghệ Kỹ thuật TP.HCM, chuyên ngành Công nghệ Phần mềm.",
    },
  },
  {
    year: "2026",
    title: { en: "Completed my university program", vi: "Hoàn thành chương trình đại học" },
    text: {
      en: "Completed the Bachelor of Information Technology program at HCM-UTE, majoring in Software Engineering.",
      vi: "Hoàn thành chương trình Cử nhân Công nghệ Thông tin tại HCM-UTE, chuyên ngành Công nghệ Phần mềm.",
    },
  },
  {
    year: { en: "Now", vi: "Nay" },
    title: { en: "IT Intern at Dat Viet Group", vi: "Thực tập sinh IT tại Đất Việt Group" },
    text: {
      en: "Contributing to the company's digital real estate platform.",
      vi: "Tham gia phát triển nền tảng bất động sản số của công ty.",
    },
  },
];

// Career direction: from a front-end focused full-stack developer to a Business Analyst.
export const goals: { horizon: Text; title: Text; text: Text }[] = [
  {
    horizon: { en: "Short term · 0–1 yr", vi: "Ngắn hạn · 0–1 năm" },
    title: { en: "Full-stack developer, front-end focused", vi: "Full-stack Developer thiên về Frontend" },
    text: {
      en: "Keep working full-stack with a clear focus on the front end: deepen React and TypeScript, improve UI quality, performance and testing. Alongside that, learn Figma properly to sketch wireframes and prototypes before coding, and get involved early in clarifying requirements with the team and stakeholders.",
      vi: "Tiếp tục làm full-stack nhưng tập trung chuyên sâu Frontend: nâng cao React, TypeScript, chất lượng giao diện, hiệu năng và kiểm thử. Song song đó, học bài bản Figma để tự phác thảo wireframe, prototype trước khi code, đồng thời chủ động tham gia làm rõ yêu cầu cùng đội ngũ và các bên liên quan.",
    },
  },
  {
    horizon: { en: "Mid term · 1–3 yrs", vi: "Trung hạn · 1–3 năm" },
    title: { en: "Building Business Analyst skills", vi: "Trau dồi kỹ năng Business Analyst" },
    text: {
      en: "Study business analysis systematically: eliciting and analysing requirements, writing user stories, acceptance criteria and specification documents, and modelling processes with BPMN and UML. Use Figma wireframes and prototypes to agree on requirements early, while keeping my technical skills current (APIs, databases, SQL) so I can work closely with developers. Take on a combined developer and BA role in projects.",
      vi: "Học bài bản phân tích nghiệp vụ: thu thập và phân tích yêu cầu, viết user story, tiêu chí nghiệm thu và tài liệu đặc tả, mô hình hóa quy trình bằng BPMN và UML. Dùng Figma để dựng wireframe, prototype giúp thống nhất yêu cầu ngay từ đầu, đồng thời duy trì và cập nhật kiến thức kỹ thuật (API, cơ sở dữ liệu, SQL) để phối hợp hiệu quả với đội phát triển. Từng bước đảm nhận vai trò vừa phát triển vừa phân tích nghiệp vụ trong dự án.",
    },
  },
  {
    horizon: { en: "Long term · 3–5 yrs", vi: "Dài hạn · 3–5 năm" },
    title: { en: "A tech-savvy Business Analyst", vi: "Business Analyst am hiểu kỹ thuật" },
    text: {
      en: "Work as a full-time Business Analyst, bridging clients and the tech team with a solid technical and UI/UX background. Use data to propose solutions and help shape the product, growing towards Senior BA and Product Owner roles.",
      vi: "Chính thức đảm nhận vai trò Business Analyst, làm cầu nối giữa khách hàng và đội kỹ thuật với lợi thế nền tảng kỹ thuật và UI/UX vững. Dùng dữ liệu để đề xuất giải pháp, góp phần định hướng sản phẩm và hướng tới vị trí Senior BA, Product Owner.",
    },
  },
];
