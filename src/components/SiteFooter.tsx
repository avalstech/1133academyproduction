import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";

const socials = [
  { label: "Facebook", href: "https://web.facebook.com/1133academy", Icon: Facebook },
  { label: "Twitter", href: "https://twitter.com/1133techacademy", Icon: Twitter },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/1133academy/", Icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC77fQzNcXfVHXftzwoZtn0Q", Icon: Youtube },
];

export default function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-extrabold text-lg">1133 Academy</div>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl">
              Personalized, tech-forward learning designed to help students and professionals build transferable skills for the fast-changing global workspace.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <div className="inline-flex items-center gap-2 rounded-xl bg-background px-3 py-2 border">
                <MapPin className="h-4 w-4" />
                <span>Global</span>
              </div>
              <a
                className="inline-flex items-center gap-2 rounded-xl bg-background px-3 py-2 border hover:bg-muted/40"
                href="tel:+18323874791"
              >
                <Phone className="h-4 w-4" />
                <span>+1 832 387 4791</span>
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-xl bg-background px-3 py-2 border hover:bg-muted/40"
                href="mailto:info@1133academy.us"
              >
                <Mail className="h-4 w-4" />
                <span>info@1133academy.us</span>
              </a>
            </div>
          </div>

          <div>
            <div className="font-bold">Explore</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="text-muted-foreground hover:text-foreground" to="/services">Services</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground" to="/about">About</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground" to="/blog">Blog</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground" to="/events">Events</Link></li>
              <li><Link className="text-muted-foreground hover:text-foreground" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-bold">Subscribe</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Get updates on new courses, programs, and announcements.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! Subscription capture will be wired to your backend/email provider.");
              }}
            >
              <input
                className="h-11 flex-1 rounded-xl border bg-background px-4 text-sm"
                placeholder="Enter your email"
                type="email"
                required
              />
              <button
                className="h-11 rounded-xl bg-primary text-primary-foreground px-4 text-sm font-semibold"
                type="submit"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background hover:bg-muted/40"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} 1133 Academy. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-foreground" href="#">Privacy</a>
            <a className="hover:text-foreground" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
