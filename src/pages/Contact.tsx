import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <div>
      <header className="border-b bg-muted/20">
        <div className="container py-12">
          <Badge variant="gold">Contact</Badge>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Talk to 1133 Academy</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            Tell us your goal and we’ll guide you to the right program or mentorship path.
          </p>
        </div>
      </header>

      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSubmitting(true);
                  // Frontend-only template: wire to backend/email provider later.
                  await new Promise((r) => setTimeout(r, 600));
                  setSubmitting(false);
                  alert("Thanks! Your message form is ready. Next step: connect to your backend.");
                }}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold">First name</label>
                    <Input required placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Last name</label>
                    <Input required placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold">Email</label>
                  <Input required type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm font-semibold">What do you want to learn?</label>
                  <Input placeholder="Web development, cloud, cybersecurity..." />
                </div>
                <div>
                  <label className="text-sm font-semibold">Message</label>
                  <Textarea required placeholder="Share your goal and timeline..." />
                </div>
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? "Sending…" : "Send message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <SectionHeading
                  title="Contact details"
                  subtitle="You can reach us by phone or email."
                />
                <div className="mt-6 grid gap-3">
                  <a className="flex items-center gap-3 rounded-2xl border bg-background p-4 hover:bg-muted/30" href="tel:+18323874791">
                    <div className="h-10 w-10 rounded-2xl bg-primary/10 grid place-items-center"><Phone className="h-5 w-5 text-primary" /></div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-sm text-muted-foreground">+1 832 387 4791</div>
                    </div>
                  </a>
                  <a className="flex items-center gap-3 rounded-2xl border bg-background p-4 hover:bg-muted/30" href="mailto:info@1133academy.us">
                    <div className="h-10 w-10 rounded-2xl bg-primary/10 grid place-items-center"><Mail className="h-5 w-5 text-primary" /></div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">info@1133academy.us</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 rounded-2xl border bg-background p-4">
                    <div className="h-10 w-10 rounded-2xl bg-primary/10 grid place-items-center"><MapPin className="h-5 w-5 text-primary" /></div>
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-sm text-muted-foreground">Remote / Global</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  title="Map"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Eiffel%20Tower%20Paris%20France&output=embed"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
