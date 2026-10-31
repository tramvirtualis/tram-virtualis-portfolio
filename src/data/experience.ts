// Work experience — DRAFT content, to be refined. Newest first.
import type { Text } from "../i18n/lang";

export type Job = {
  id: string;
  company: string;
  role: Text;
  period: Text;
  type: Text;
  summary: Text;
  points: Text[];
  stack: string[];
  /** Optional link to a related project page */
  project?: string;
};

export const jobs: Job[] = [
  {
    id: "dat-viet-group",
    company: "Đất Việt Group",
    role: { en: "Full-stack Developer", vi: "Lập trình viên Full-stack" },
    period: { en: "2026 – present", vi: "2026 – nay" },
    type: { en: "Real estate", vi: "Bất động sản" },
    summary: {
      en: "Building Dat Viet Group's digital real estate platform. I own the entire Project module end to end and designed the platform's main user interfaces.",
      vi: "Phát triển nền tảng bất động sản số của Đất Việt Group. Tôi phụ trách trọn vẹn module Dự án từ back end đến front end và đảm nhiệm thiết kế các giao diện chính của nền tảng.",
    },
    points: [
      {
        en: "Researched the real estate sales process and turned it into requirements, a data model and APIs for the Project module",
        vi: "Nghiên cứu nghiệp vụ bán hàng bất động sản, chuyển thành yêu cầu, mô hình dữ liệu và API cho module Dự án",
      },
      {
        en: "Built the whole module in Spring Boot and React: projects, zones, buildings, floor plans, sales sheets, unit inventory, 360° tours and online reservations",
        vi: "Xây dựng toàn bộ module bằng Spring Boot và React: dự án, phân khu, tòa nhà, mặt bằng, bảng hàng, quỹ căn, tour 360° và giữ chỗ trực tuyến",
      },
      {
        en: "Solved concurrent bookings with Redis distributed locks, automatic hold expiry and a booking lock against fake reservations",
        vi: "Xử lý đặt chỗ đồng thời bằng khóa phân tán Redis, tự động hết hạn giữ chỗ và cơ chế khóa giữ chỗ chống đặt ảo",
      },
      {
        en: "Designed the UI/UX for the platform's main screens",
        vi: "Đảm nhiệm thiết kế UI/UX các giao diện chính của nền tảng",
      },
    ],
    stack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    project: "digital-real-estate",
  },
  {
    id: "hitek",
    company: "Hitek Solution",
    role: { en: "AI Engineer Intern", vi: "Kỹ sư AI (Thực tập)" },
    period: "2025",
    type: { en: "Internship", vi: "Thực tập" },
    summary: {
      en: "Joined the AI team as a Computer Vision intern, owning data preparation and model training for recognition tasks while learning to deploy models as services with FastAPI.",
      vi: "Tham gia đội ngũ AI ở vị trí thực tập sinh Computer Vision, đảm nhận khâu chuẩn bị dữ liệu và huấn luyện mô hình nhận diện, đồng thời tìm hiểu cách triển khai mô hình thành dịch vụ với FastAPI.",
    },
    points: [
      {
        en: "Built and standardized image datasets for training, from collection and cleaning to labeling and train/validation splits",
        vi: "Xây dựng và chuẩn hóa bộ dữ liệu hình ảnh cho huấn luyện, từ thu thập, làm sạch đến gán nhãn và phân chia tập dữ liệu",
      },
      {
        en: "Trained, fine-tuned and evaluated YOLO recognition models, tracking metrics to improve accuracy across training rounds",
        vi: "Huấn luyện, tinh chỉnh và đánh giá mô hình nhận diện YOLO, theo dõi các chỉ số để cải thiện độ chính xác qua từng vòng huấn luyện",
      },
      {
        en: "Learned FastAPI and built APIs that expose model predictions to applications",
        vi: "Tìm hiểu FastAPI và xây dựng API đưa kết quả dự đoán của mô hình vào ứng dụng",
      },
    ],
    stack: ["Python", "YOLO", "Computer Vision", "FastAPI", "Git"],
  },
];
