import type { Text } from "../i18n/lang";

export type ProjectLink = { label: Text; href: string };

/** A problem the project had to solve, how it was solved, and what came out of it. */
export type Challenge = {
  problem: Text;
  solution: Text;
  result: Text;
};

export type Project = {
  id: string;
  num: string;
  live: boolean;
  year: Text;
  title: Text;
  kicker: Text;
  description: Text;
  /** My role on the project */
  role: Text;
  /** What I personally built / did */
  contributions: Text[];
  /** Problems solved: problem → solution → result */
  challenges: Challenge[];
  /** Notable features of the product as a whole */
  highlights: Text[];
  stack: string[];
  links: ProjectLink[];
  poster: "estate" | "cinema";
};

export const projects: Project[] = [
  {
    id: "digital-real-estate",
    num: "01",
    live: true,
    year: { en: "Since 2026", vi: "Từ 2026 đến nay" },
    title: { en: "Digital Real Estate", vi: "Bất động sản số" },
    kicker: { en: "Real estate platform · Đất Việt Group", vi: "Nền tảng bất động sản · Đất Việt Group" },
    description: {
      en: "A full-stack real estate platform for Dat Viet Group, covering project showcases, unit booking, recruitment, community and an admin console. I built the entire Project module end to end, from researching the sales process and designing the database to the APIs and the user interface, and designed the platform's main UI.",
      vi: "Nền tảng bất động sản full-stack cho Đất Việt Group, gồm giới thiệu dự án, giữ chỗ căn hộ, tuyển dụng, cộng đồng và trang quản trị. Tôi xây dựng trọn vẹn module Dự án, từ nghiên cứu nghiệp vụ bán hàng, thiết kế cơ sở dữ liệu, phát triển API cho đến giao diện, đồng thời đảm nhiệm thiết kế các giao diện chính của nền tảng.",
    },
    role: {
      en: "Built the entire Project module (back end and front end) and led the platform's main UI/UX design",
      vi: "Xây dựng toàn bộ module Dự án (back end và front end), thiết kế UI/UX các giao diện chính",
    },
    contributions: [
      {
        en: "Researched how real estate projects are actually sold (zones, buildings, unit inventory, sales sheets, sales policies and the reservation process) and turned it into requirements and a data model for the Project module.",
        vi: "Nghiên cứu nghiệp vụ bán hàng bất động sản (phân khu, tòa nhà, quỹ căn, bảng hàng, chính sách bán hàng và quy trình giữ chỗ), chuyển thành yêu cầu và mô hình dữ liệu cho module Dự án.",
      },
      {
        en: "Designed the UI/UX for the platform's main screens, including every screen of the Project module: project listing and detail, floor plans, sales sheets, unit inventory, 360° tours and the project admin pages.",
        vi: "Đảm nhiệm thiết kế UI/UX các giao diện chính của nền tảng, trong đó có toàn bộ màn hình của module Dự án: danh sách và chi tiết dự án, mặt bằng, bảng hàng, quỹ căn, tour 360° và trang quản trị dự án.",
      },
      {
        en: "Designed the database and built the APIs for two project types: low-rise (zone → unit) and high-rise (zone → building → floor and axis → unit).",
        vi: "Thiết kế cơ sở dữ liệu và xây dựng API cho hai mô hình dự án: thấp tầng (phân khu → căn) và cao tầng (phân khu → tòa nhà → tầng, trục → căn).",
      },
      {
        en: "Built the full reservation flow: a 30-minute hold awaiting confirmation, admin confirm, complete or reject, automatic expiry, plus real-time and email notifications to the project's admins and directors.",
        vi: "Xây dựng luồng booking giữ chỗ hoàn chỉnh: giữ căn 30 phút chờ xác nhận, admin xác nhận, hoàn tất hoặc từ chối, tự động hết hạn, kèm thông báo realtime và email cho admin, giám đốc dự án.",
      },
      {
        en: "Developed the floor plan and sales sheet tools: upload the developer's PDF, tile it for smooth Google Maps style zooming, pin each unit by coordinates and colour pins by status and fund type.",
        vi: "Phát triển công cụ mặt bằng và bảng hàng: tải file PDF của chủ đầu tư, cắt lát ảnh để phóng to mượt như Google Maps, ghim từng căn theo tọa độ và tô màu theo trạng thái, loại quỹ.",
      },
      {
        en: "Built the 360° tour manager with scenes and hotspots, along with the location, construction progress, documents, videos, sales policy, Q&A and unit comparison sections.",
        vi: "Xây dựng trình quản lý tour 360° với các cảnh và điểm tương tác (hotspot), cùng các mục vị trí, tiến độ thi công, tài liệu, video, chính sách bán hàng, hỏi đáp và so sánh căn.",
      },
    ],
    challenges: [
      {
        problem: {
          en: "Several customers could try to reserve the same unit at the same moment, risking a unit being held twice.",
          vi: "Nhiều khách có thể bấm giữ cùng một căn trong cùng một thời điểm, dễ dẫn đến một căn bị giữ hai lần.",
        },
        solution: {
          en: "A Redis distributed lock per unit so concurrent requests queue up, a re-check of the unit's status inside the lock, and a PostgreSQL unique index allowing only one active booking per unit as the final safeguard.",
          vi: "Khóa phân tán Redis trên từng căn để các request đồng thời xếp hàng, kiểm tra lại trạng thái căn bên trong khóa, và unique index trong PostgreSQL chỉ cho phép một booking đang giữ trên mỗi căn làm lớp bảo vệ cuối cùng.",
        },
        result: {
          en: "Each unit has exactly one active booking, even when many people book at once.",
          vi: "Mỗi căn chỉ có đúng một booking đang giữ, kể cả khi nhiều người đặt cùng lúc.",
        },
      },
      {
        problem: {
          en: "Low-rise and high-rise projects are structured very differently: low-rise units are sold within zones, while high-rise units have to be managed by building, floor and axis.",
          vi: "Dự án thấp tầng và cao tầng có cấu trúc rất khác nhau: thấp tầng bán theo từng căn trong phân khu, còn cao tầng phải quản lý theo tòa nhà, tầng và trục căn.",
        },
        solution: {
          en: "One shared data model for both: low-rise goes zone → unit, high-rise goes zone → building → unit with floor, axis and bedrooms. On the floor plan, low-rise projects pin each unit, while high-rise projects pin buildings that open that building's sales sheet.",
          vi: "Thiết kế một mô hình dữ liệu dùng chung cho cả hai: thấp tầng đi theo phân khu → căn, cao tầng đi theo phân khu → tòa nhà → căn (có tầng, trục, số phòng ngủ). Trên mặt bằng, dự án thấp tầng ghim từng căn, còn dự án cao tầng ghim tòa nhà và bấm vào để mở bảng hàng của tòa đó.",
        },
        result: {
          en: "A single module serves both project types, and the UI shows only the sections each one needs, such as Buildings and Sales sheets for high-rise projects.",
          vi: "Một module phục vụ được cả hai loại dự án, giao diện tự hiển thị đúng các mục cần thiết, ví dụ tab Tòa nhà và Bảng hàng chỉ xuất hiện ở dự án cao tầng.",
        },
      },
      {
        problem: {
          en: "A 360° tour needs many linked scenes and information points, which is hard to keep up to date by hand as a project changes.",
          vi: "Tour 360° cần nhiều cảnh nối với nhau cùng các điểm thông tin, rất khó cập nhật thủ công mỗi khi dự án thay đổi.",
        },
        solution: {
          en: "A tour manager in the admin console: upload 360° photos, create scenes, place hotspots that jump to another scene or open an info popup, keep the tour as a draft and publish it only when it's ready.",
          vi: "Xây dựng trình quản lý tour trong trang quản trị: tải ảnh 360°, tạo cảnh, đặt điểm tương tác để chuyển cảnh hoặc mở thông tin, lưu nháp và chỉ xuất bản khi đã hoàn chỉnh.",
        },
        result: {
          en: "Admins build and update each project's tour themselves without touching code, and customers only ever see finished tours.",
          vi: "Admin tự dựng và cập nhật tour cho từng dự án mà không cần chỉnh code, khách hàng chỉ thấy những tour đã hoàn thiện.",
        },
      },
      {
        problem: {
          en: "Developers' sales sheets came as large PDF files that were hard to view on the web and couldn't show each unit's status.",
          vi: "Bảng hàng của chủ đầu tư chỉ là file PDF lớn, khó xem trên web và không thể hiện được trạng thái từng căn.",
        },
        solution: {
          en: "Convert the PDF into tiles at several zoom levels, pin units with percentage coordinates so they stay aligned at any size, and colour each pin by status and fund type (exclusive, hidden and cross, bonus).",
          vi: "Chuyển PDF thành ảnh cắt lát nhiều mức phóng to, ghim căn bằng tọa độ phần trăm để không bị lệch khi đổi kích thước, màu ghim thể hiện trạng thái và loại quỹ (độc quyền, ẩn và chéo, thưởng).",
        },
        result: {
          en: "Customers and sales staff browse the sales sheet visually and can open a unit and reserve it in one click.",
          vi: "Khách hàng và đội sale xem bảng hàng trực quan, bấm vào căn để xem chi tiết và giữ chỗ ngay.",
        },
      },
    ],
    highlights: [
      {
        en: "Visual project showcases with floor plans, sales sheets, unit inventory and 360° virtual tours",
        vi: "Giới thiệu dự án trực quan với mặt bằng, bảng hàng, quỹ căn và tour ảo 360°",
      },
      {
        en: "Online unit reservations, booking history and favourite projects",
        vi: "Giữ chỗ căn hộ trực tuyến, theo dõi lịch sử booking và lưu dự án yêu thích",
      },
      {
        en: "Recruitment portal with job listings, an in-app CV builder, applications and employer pages",
        vi: "Cổng tuyển dụng với tin tuyển dụng, công cụ tạo CV, nộp hồ sơ và trang nhà tuyển dụng",
      },
      {
        en: "Community feed, news and events",
        vi: "Mạng cộng đồng, tin tức và sự kiện",
      },
      {
        en: "Knowledge base with an AI chatbot that answers questions from company documents",
        vi: "Kho kiến thức kèm chatbot AI trả lời câu hỏi từ tài liệu của công ty",
      },
      {
        en: "Real-time and email notifications",
        vi: "Thông báo realtime và qua email",
      },
      {
        en: "Central admin console with a statistics dashboard and audit logs",
        vi: "Trang quản trị tập trung với dashboard thống kê và nhật ký hệ thống",
      },
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",
      "Three.js",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Redis",
      "Firebase",
      "Docker",
      "Nginx",
    ],
    links: [],
    poster: "estate",
  },
  {
    id: "cinesmart",
    num: "02",
    live: false,
    year: "2026",
    title: "Cinesmart",
    kicker: { en: "Movie ticket booking", vi: "Đặt vé xem phim" },
    description: {
      en: "An online cinema booking platform with ticketing, online payment, promotions, an AI support chatbot, a 360° seat-view preview and full cinema management behind a modern, friendly interface.",
      vi: "Nền tảng đặt vé xem phim trực tuyến với đặt vé, thanh toán online, khuyến mãi, chatbot AI hỗ trợ khách hàng, xem trước ghế bằng ảnh 360° và quản lý rạp, trên giao diện hiện đại, thân thiện.",
    },
    role: { en: "Full-stack Developer · team project", vi: "Lập trình viên Full-stack · dự án nhóm" },
    // From the CV's "Key Contributions"
    contributions: [
      {
        en: "Built and integrated the AI assistant on n8n, with chat persistence and secured agent tool APIs",
        vi: "Xây dựng và tích hợp trợ lý AI trên n8n, có lưu lịch sử chat và bảo mật API công cụ cho agent",
      },
      {
        en: "Implemented the core booking and payment flow, from movie and showtime selection through checkout, with ZaloPay order creation, payment callbacks and ticket / QR display",
        vi: "Hiện thực luồng đặt vé và thanh toán cốt lõi, từ chọn phim, suất chiếu đến thanh toán, tạo đơn ZaloPay, xử lý callback và hiển thị vé / QR",
      },
      {
        en: "Delivered real-time seat selection with WebSocket",
        vi: "Xây dựng chức năng chọn ghế thời gian thực bằng WebSocket",
      },
      {
        en: "Developed loyalty and promotions: Silver / Gold / Platinum tiers, tier-scoped vouchers and voucher redemption at checkout",
        vi: "Phát triển hạng thành viên và khuyến mãi: Silver / Gold / Platinum, voucher theo hạng và áp dụng voucher khi thanh toán",
      },
      {
        en: "Enhanced the customer experience: movie recommendations, multi-cinema schedules, food combos, reviews and favorites",
        vi: "Nâng cao trải nghiệm khách hàng: gợi ý phim, lịch chiếu nhiều rạp, combo bắp nước, đánh giá và yêu thích",
      },
      {
        en: "Supported admin and manager workflows: analytics dashboards, CRUD for movies, showtimes, cinemas and pricing, banners and data export",
        vi: "Hỗ trợ nghiệp vụ admin và quản lý: dashboard thống kê, CRUD phim, suất chiếu, rạp và giá vé, banner, xuất dữ liệu",
      },
    ],
    challenges: [
      {
        problem: {
          en: "Scheduling showtimes by hand across many cinemas and halls was slow and error-prone, and two showtimes could overlap in the same hall.",
          vi: "Xếp lịch chiếu thủ công cho nhiều rạp, nhiều phòng rất mất thời gian và dễ sai sót, hai suất chiếu có thể bị chồng giờ nhau trong cùng một phòng.",
        },
        solution: {
          en: "A visual scheduling board: each hall is laid out on a timeline and showtimes are cards that managers drag and drop into place. On every drop, the system works out the end time from the movie's runtime plus cleaning time, checks it against the other showtimes in that hall and flags any overlap straight away.",
          vi: "Trực quan hóa việc xếp lịch bằng bảng lịch theo từng phòng chiếu, mỗi suất chiếu là một thẻ có thể kéo thả vào khung giờ mong muốn. Mỗi lần thả thẻ, hệ thống tự tính giờ kết thúc theo thời lượng phim cộng thời gian dọn phòng, kiểm tra với các suất khác trong cùng phòng và báo ngay nếu bị trùng.",
        },
        result: {
          en: "Managers see the whole day's schedule at a glance and arrange showtimes faster and more accurately, with no more clashes.",
          vi: "Quản lý nhìn được toàn bộ lịch trong ngày, sắp xếp suất chiếu nhanh và chính xác hơn, lịch chiếu không còn bị trùng.",
        },
      },
      {
        problem: {
          en: "Customers couldn't tell what the view from a seat would be like before buying a ticket.",
          vi: "Khách hàng khó hình dung góc nhìn từ chỗ ngồi của mình trước khi mua vé.",
        },
        solution: {
          en: "Modelled the cinema hall in Blender, rendered 360° views and displayed them with Marzipano right in the seat selection step.",
          vi: "Dựng mô hình phòng chiếu bằng Blender, xuất ảnh 360° và hiển thị bằng Marzipano ngay ở bước chọn ghế.",
        },
        result: {
          en: "Customers preview the view before choosing a seat, making the booking experience stand out from typical ticketing sites.",
          vi: "Khách xem trước góc nhìn trước khi chọn ghế, giúp trải nghiệm đặt vé khác biệt so với các trang bán vé thông thường.",
        },
      },
      {
        problem: {
          en: "Customers kept asking the same questions about showtimes, prices and bookings.",
          vi: "Khách hàng liên tục hỏi những câu giống nhau về lịch chiếu, giá vé và đặt vé.",
        },
        solution: {
          en: "An n8n AI assistant with chat history and secured tool APIs it can call to look up real data.",
          vi: "Trợ lý AI trên n8n có lưu lịch sử chat và các API công cụ được bảo mật để tra cứu dữ liệu thật.",
        },
        result: {
          en: "Common questions answered instantly, 24/7, without exposing internal APIs.",
          vi: "Câu hỏi thường gặp được trả lời ngay, 24/7, mà không để lộ API nội bộ.",
        },
      },
    ],
    highlights: [
      {
        en: "Online booking, ZaloPay payment and QR tickets",
        vi: "Đặt vé online, thanh toán ZaloPay và vé QR",
      },
      {
        en: "360° seat-view preview built with Marzipano and Blender",
        vi: "Xem trước góc nhìn từ ghế bằng ảnh 360° (Marzipano, Blender)",
      },
      {
        en: "Loyalty tiers, vouchers, recommendations and food combos",
        vi: "Hạng thành viên, voucher, gợi ý phim và combo bắp nước",
      },
      {
        en: "Admin & manager dashboards with analytics and data export",
        vi: "Dashboard admin và quản lý với thống kê và xuất dữ liệu",
      },
    ],
    stack: [
      "ReactJS",
      "Tailwind CSS",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "WebSocket",
      "n8n",
      "Marzipano",
      "Blender",
      "Vercel",
      "Railway",
    ],
    links: [],
    poster: "cinema",
  },
];
