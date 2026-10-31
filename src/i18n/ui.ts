// Interface copy in both languages. Content (profile, projects…) lives in src/data.

export const ui = {
  // Shared
  openToWork: { en: "Open to work", vi: "Sẵn sàng đi làm" },
  menu: { en: "Menu", vi: "Menu" },
  sections: { en: "Sections", vi: "Mục" },
  switchLang: { en: "Chuyển sang tiếng Việt", vi: "Switch to English" },
  mainMenu: { en: "Main menu", vi: "Menu chính" },

  // Main menu
  selectedCommand: { en: "Selected command", vi: "Lệnh đang chọn" },
  downloadCv: { en: "Download CV", vi: "Tải CV" },

  // Profile (status screen)
  baseStats: { en: "Base stats", vi: "Chỉ số cơ bản" },
  statsNote: {
    en: "Self-assessed — where I'm strongest today.",
    vi: "Tự đánh giá — thế mạnh hiện tại của tôi.",
  },
  classLabel: { en: "Class", vi: "Lớp" },
  arcanaTitle: { en: "THE DEVELOPER", vi: "LẬP TRÌNH VIÊN" },
  arcanaNote: {
    en: "Arcana 0 — the beginning of the journey: endless potential, ready to learn.",
    vi: "Arcana 0 — khởi đầu hành trình: tiềm năng vô hạn, sẵn sàng học hỏi.",
  },
  records: { en: "Records", vi: "Lý lịch" },
  careerDirection: { en: "Career direction", vi: "Định hướng phát triển" },
  relatedProject: { en: "Related project", vi: "Dự án liên quan" },
  intro: { en: "Introduction", vi: "Giới thiệu" },
  journal: { en: "Journal", vi: "Nhật ký" },
  traits: { en: "Traits", vi: "Đặc tính" },

  // Skills

  // Projects
  openQuest: { en: "Open project", vi: "Mở dự án" },
  inProgress: { en: "In progress", vi: "Đang phát triển" },
  shipped: { en: "Completed", vi: "Đã hoàn thành" },
  status: { en: "Status", vi: "Trạng thái" },
  when: { en: "Period", vi: "Thời gian" },
  type: { en: "Type", vi: "Loại" },
  overview: { en: "Overview", vi: "Tổng quan" },
  whatItDoes: { en: "Features & contributions", vi: "Tính năng & đóng góp" },
  myRole: { en: "My role", vi: "Vai trò" },
  whatIDid: { en: "What I did", vi: "Tôi đã làm gì" },
  keyFeatures: { en: "Key features", vi: "Tính năng nổi bật" },
  problemsSolved: { en: "Problems solved", vi: "Vấn đề đã giải quyết" },
  problem: { en: "Problem", vi: "Vấn đề" },
  solution: { en: "Solution", vi: "Giải pháp" },
  result: { en: "Result", vi: "Kết quả" },
  stackLabel: { en: "Tech stack", vi: "Công nghệ" },
  previous: { en: "Previous", vi: "Trước" },
  next: { en: "Next", vi: "Tiếp" },
  allProjects: { en: "All projects", vi: "Tất cả dự án" },
  more: { en: "more", vi: "nữa" },
  openSlot: { en: "Open slot — your project?", vi: "Còn trống — dự án của bạn?" },

  // Contact
  contactLead: {
    en: "Open to developer roles and collaborations. I usually reply within a day.",
    vi: "Sẵn sàng cho vị trí lập trình viên và các dự án hợp tác. Tôi thường phản hồi trong vòng một ngày.",
  },
  phone: { en: "Phone", vi: "Điện thoại" },
  connect: { en: "Connect on LinkedIn", vi: "Kết nối LinkedIn" },
  basedIn: { en: "Based in", vi: "Hiện ở" },
} as const;
