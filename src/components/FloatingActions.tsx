import { MessageCircle, Mail } from "lucide-react";

export default function FloatingActions() {
  const whatsappLink = "https://wa.me/18323874791";
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="mailto:info@1133academy.us"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border bg-background shadow-sm hover:bg-muted/40"
        aria-label="Email us"
      >
        <Mail className="h-5 w-5" />
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-navy-deep shadow-sm hover:bg-gold-bright"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
