// Personal details, sourced from NguyenThiNgocTram_FresherCV.pdf.
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
    en: "I build web applications end to end, from Spring Boot services and secure REST APIs to React interfaces people enjoy using. I learn fast, lean on AI tools wisely, and care about the details between the layers.",
    vi: "Tôi xây dựng ứng dụng web trọn vẹn, từ service Spring Boot, REST API bảo mật đến giao diện React mà người dùng thích sử dụng. Tôi học nhanh, dùng công cụ AI có chọn lọc và chăm chút từng chi tiết giữa các tầng.",
  } as Text,
  summary: {
    en: "Software Engineering graduate with a solid foundation in OOP, APIs and the software development process, shipping projects with Java, Spring Boot and ReactJS.",
    vi: "Sinh viên chuyên ngành Công nghệ Phần mềm đã hoàn thành chương trình Cử nhân CNTT, nền tảng vững về OOP, API và quy trình phát triển phần mềm, đã thực hiện dự án với Java, Spring Boot và ReactJS.",
  } as Text,
  location: { en: "Thu Duc, Ho Chi Minh City", vi: "Thủ Đức, TP. Hồ Chí Minh" } as Text,
  email: "ngoctramngff4@gmail.com",
  phone: "0398117422",
  // TODO: replace with your LinkedIn profile URL.
  linkedin: "https://www.linkedin.com/",
  cv: "/NguyenThiNgocTram_FresherCV.pdf",
};

export const records: { label: Text; value: Text }[] = [
  { label: { en: "Date of birth", vi: "Ngày sinh" }, value: { en: "2 July 2004", vi: "02/07/2004" } },
  { label: { en: "Based in", vi: "Nơi ở" }, value: profile.location },
  {
    label: { en: "School", vi: "Trường" },
    value: { en: "HCMC University of Technology and Engineering", vi: "ĐH Công nghệ Kỹ thuật TP.HCM (HCM-UTE)" },
  },
  {
    label: { en: "Major", vi: "Chuyên ngành" },
    value: { en: "Software Engineering · 2022 to 2026", vi: "Công nghệ Phần mềm · 2022 đến 2026" },
  },
  { label: "GPA", value: "3.14 / 4.0" },
  {
    label: { en: "English", vi: "Ngoại ngữ" },
    value: { en: "TOEIC L&R 825 / 990", vi: "Tiếng Anh: TOEIC L&R 825 / 990" },
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

// Career direction, written for readers outside tech: from web developer to Business Analyst (BA).
// `analysis` = rough share of my time spent on analysis instead of coding; `years` sizes the roadmap bar.
export const careerIntro: Text = {
  en: "Right now I build websites, focusing on the interface, the user experience and understanding the business behind each feature. My goal is to become a Senior Business Analyst (BA) with strong technical skills: the person who talks with clients, turns what they need into clear requirements and makes sure the team builds exactly that. Because I can still read code, query data and check APIs myself, I can answer technical questions on the spot and catch problems before they reach the developers.",
  vi: "Hiện tại tôi là lập trình viên website, tập trung vào giao diện, trải nghiệm người dùng và tìm hiểu nghiệp vụ đằng sau mỗi tính năng. Mục tiêu của tôi là trở thành Senior Business Analyst (BA) vững về kỹ thuật: người trao đổi với khách hàng, biến nhu cầu của họ thành yêu cầu rõ ràng và đảm bảo đội làm ra đúng như vậy. Nhờ vẫn đọc được code, tự truy vấn dữ liệu và kiểm tra API, tôi có thể trả lời ngay các câu hỏi kỹ thuật và phát hiện vấn đề trước khi chuyển cho đội lập trình.",
};

// at = position on the timeline diagram (decimal year), label = short text shown on it
export type GoalStep = { at: number; label: Text; when: Text; what: Text };
export type Goal = { period: Text; years: number; from: number; to: number; short: Text; title: Text; text: Text; analysis: number; steps: GoalStep[] };

export const goals: Goal[] = [
  {
    period: { en: "Late 2026 to 2027", vi: "Cuối 2026 đến hết 2027" },
    from: 2026.8,
    to: 2028,
    years: 1,
    short: { en: "Developer", vi: "Lập trình" },
    title: { en: "Level up my programming skills", vi: "Nâng cao kỹ năng lập trình" },
    text: {
      en: "Get stronger as a developer: write solid, maintainable code, learn how to design the architecture of a system, and learn to run applications on the cloud, meaning servers rented over the internet that can grow with the number of users.",
      vi: "Tập trung nâng cao tay nghề lập trình: viết code chắc chắn, dễ bảo trì, học cách thiết kế kiến trúc hệ thống và vận hành ứng dụng trên nền tảng đám mây (cloud), tức máy chủ thuê qua Internet có thể mở rộng theo số lượng người dùng.",
    },
    analysis: 10,
    steps: [
      { at: 2026.9, label: { en: "Finish the real estate site", vi: "Hoàn thiện web bất động sản" }, when: { en: "Late 2026", vi: "Cuối 2026" }, what: { en: "Complete the real estate website at Dat Viet Group and get it ready for real users.", vi: "Hoàn thiện website bất động sản tại Đất Việt Group, sẵn sàng đưa vào sử dụng thực tế." } },
      { at: 2027.25, label: { en: "Code quality, system architecture", vi: "Lập trình, kiến trúc hệ thống" }, when: { en: "First half of 2027", vi: "Nửa đầu 2027" }, what: { en: "Sharpen my coding and study system architecture: how to split a piece of software into well organised parts so it stays easy to extend and maintain as it grows.", vi: "Nâng cao kỹ năng lập trình và học thiết kế kiến trúc hệ thống, tức cách chia và sắp xếp các phần của một phần mềm sao cho dễ mở rộng, dễ bảo trì khi hệ thống ngày càng lớn." } },
      { at: 2027.75, label: { en: "Cloud computing", vi: "Điện toán đám mây (cloud)" }, when: { en: "Second half of 2027", vi: "Nửa cuối 2027" }, what: { en: "Learn and practise cloud computing: putting a website online, backing up data automatically and scaling up when traffic rises.", vi: "Học và thực hành điện toán đám mây: đưa website lên máy chủ trên Internet, tự động sao lưu dữ liệu và mở rộng khi lượng truy cập tăng cao." } },
    ],
  },
  {
    period: { en: "2028 to 2029", vi: "2028 đến 2029" },
    from: 2028,
    to: 2030,
    years: 2,
    short: { en: "Developer + BA", vi: "Lập trình + BA" },
    title: { en: "Code and learn to be a BA", vi: "Vừa lập trình vừa học làm BA" },
    text: {
      en: "Keep coding, but spend more time finding out what clients need and writing it down clearly for the team.",
      vi: "Vẫn lập trình, nhưng dành nhiều thời gian hơn để tìm hiểu khách hàng cần gì và ghi lại thật rõ cho cả đội.",
    },
    analysis: 45,
    steps: [
      { at: 2028.25, label: { en: "Study BA", vi: "Học BA" }, when: { en: "First half of 2028", vi: "Nửa đầu 2028" }, what: { en: "Study Business Analysis (BA) systematically: how to gather requirements from clients, ask the right questions and turn what they need into a clear list of features.", vi: "Học BA một cách bài bản: cách thu thập yêu cầu từ khách hàng, đặt đúng câu hỏi và biến nhu cầu của họ thành danh sách tính năng rõ ràng." } },
      { at: 2028.75, label: { en: "Write feature specs", vi: "Viết mô tả tính năng" }, when: { en: "Second half of 2028", vi: "Nửa cuối 2028" }, what: { en: "Write feature descriptions myself: what it does, who uses it and when it counts as done.", vi: "Tự viết mô tả cho từng tính năng: làm gì, ai dùng và thế nào là đạt." } },
      { at: 2029.25, label: { en: "Process diagrams, first analysis", vi: "Vẽ quy trình, phân tích 1 phần dự án" }, when: { en: "First half of 2029", vi: "Nửa đầu 2029" }, what: { en: "Draw diagrams of how the work flows and handle the analysis for a small part of a project.", vi: "Vẽ sơ đồ quy trình làm việc và phụ trách phân tích cho một phần nhỏ của dự án." } },
      { at: 2029.75, label: { en: "International BA certificate", vi: "Chứng chỉ BA quốc tế" }, when: { en: "Second half of 2029", vi: "Nửa cuối 2029" }, what: { en: "Earn an international BA certificate to confirm my skills against a recognised standard and get ready to take on the BA role officially.", vi: "Lấy chứng chỉ BA quốc tế để khẳng định năng lực theo chuẩn được công nhận và sẵn sàng chính thức đảm nhận vai trò BA." } },
    ],
  },
  {
    period: { en: "2030 to 2033", vi: "2030 đến 2033" },
    from: 2030,
    to: 2034,
    years: 2,
    short: { en: "Senior BA", vi: "Senior BA" },
    title: { en: "Senior BA with a technical edge", vi: "Senior BA vững kỹ thuật" },
    text: {
      en: "Lead the analysis for whole projects: the go-between who helps clients and developers understand each other. Coding skills stay part of the job, for checking data, reading APIs and spotting technical risks early.",
      vi: "Phụ trách phân tích cho cả dự án, là người đứng giữa giúp khách hàng và đội lập trình hiểu đúng ý nhau. Kỹ năng lập trình vẫn là một phần công việc: tự kiểm tra dữ liệu, đọc API và phát hiện sớm rủi ro kỹ thuật.",
    },
    analysis: 75,
    steps: [
      { at: 2030.5, label: { en: "Full-time BA", vi: "BA chính thức" }, when: "2030", what: { en: "Work as a full-time BA. Write SQL to pull data myself and read API docs to describe features precisely for developers.", vi: "Làm BA chính thức. Tự viết SQL để lấy số liệu và đọc tài liệu API để mô tả tính năng thật chính xác cho đội lập trình." } },
      { at: 2032, label: { en: "Lead whole projects", vi: "Phụ trách trọn dự án" }, when: { en: "2031 to 2032", vi: "2031 đến 2032" }, what: { en: "Lead the analysis of a whole project, from the first client meeting to final acceptance, then take on larger projects with more stakeholders.", vi: "Phụ trách phân tích cho trọn một dự án, từ buổi gặp khách đầu tiên đến khi nghiệm thu, sau đó nhận các dự án lớn hơn với nhiều bên liên quan hơn." } },
      { at: 2033.5, label: { en: "Senior BA", vi: "Senior BA" }, when: "2033", what: { en: "Reach Senior BA: review the technical side of designs with developers and guide newer BAs.", vi: "Đạt vị trí Senior BA: cùng đội lập trình xem xét phương án kỹ thuật và hướng dẫn các BA mới vào nghề." } },
    ],
  },
];
