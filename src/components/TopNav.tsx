import { NavLink, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export default function TopNav() {
  const scrolled = useScrolled(10);
  const [open, setOpen] = useState(false);

  const activeClass = useMemo(
    () =>
      "text-foreground bg-muted/60 dark:bg-muted/30",
    []
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b",
        scrolled ? "bg-background/80 backdrop-blur glass" : "bg-background"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-extrabold">
            11
          </span>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight">1133 Academy</div>
            <div className="text-xs text-muted-foreground -mt-0.5">AI-Personalized Learning</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors",
                  isActive && activeClass
                )
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://1133academy.com/account/index.php"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline" size="sm">Client Area</Button>
          </a>
          <a
            href="https://1133academy.com/account/user-registration.php"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="gold" size="sm" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Register
            </Button>
          </a>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors",
                    isActive && activeClass
                  )
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2 flex gap-2">
              <a
                className="flex-1"
                href="https://1133academy.com/account/index.php"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" className="w-full">Client Area</Button>
              </a>
              <a
                className="flex-1"
                href="https://1133academy.com/account/user-registration.php"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="gold" className="w-full">Register</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
