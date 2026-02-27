import { Route, Routes } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import ServicesPage from "@/pages/Services";
import BlogPage from "@/pages/Blog";
import EventsPage from "@/pages/Events";
import ContactPage from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
