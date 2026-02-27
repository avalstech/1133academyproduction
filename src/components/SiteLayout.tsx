import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import FloatingActions from "@/components/FloatingActions";

export default function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
