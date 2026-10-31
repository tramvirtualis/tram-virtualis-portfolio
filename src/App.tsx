import { Navigate, Route, Routes } from "react-router-dom";
import { Shell } from "./components/layout/Shell";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { MainMenu } from "./pages/MainMenu";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SoftSkillsPage, TechStackPage } from "./pages/SkillsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<MainMenu />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectDetailPage />} />
        <Route path="tech-stack" element={<TechStackPage />} />
        <Route path="soft-skills" element={<SoftSkillsPage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* old links keep working */}
        <Route path="profile" element={<Navigate to="/about" replace />} />
        <Route path="skills" element={<Navigate to="/tech-stack" replace />} />
        <Route path="projects/dvg-real-estate" element={<Navigate to="/projects/digital-real-estate" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
