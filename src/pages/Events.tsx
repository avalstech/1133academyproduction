import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export default function EventsPage() {
  return (
    <div>
      <header className="border-b bg-muted/20">
        <div className="container py-12">
          <Badge variant="gold">Events</Badge>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Live sessions and recordings</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            Watch highlights, join upcoming sessions, and explore video walkthroughs.
          </p>
        </div>
      </header>

      <section className="container py-12">
        <SectionHeading
          title="Featured video"
          subtitle="Replace this with your real YouTube/Vimeo embed when ready."
        />

        <Card className="mt-8 overflow-hidden">
          <div className="relative aspect-video bg-gradient-to-br from-primary/15 via-muted to-gold/20">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-background/80 border grid place-items-center">
                  <PlayCircle className="h-8 w-8" />
                </div>
                <div className="mt-3 font-bold">1133 Academy Demo</div>
                <div className="text-sm text-muted-foreground">Interactive learning, mentorship, and progress tracking</div>
              </div>
            </div>
          </div>
          <CardContent className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="font-bold">Follow our video to solve your problem</div>
              <div className="text-sm text-muted-foreground">Get a quick walkthrough of how learners start and progress.</div>
            </div>
            <a href="https://www.youtube.com/channel/UC77fQzNcXfVHXftzwoZtn0Q" target="_blank" rel="noreferrer">
              <Button variant="gold">Open YouTube</Button>
            </a>
          </CardContent>
        </Card>

        <div className="mt-10">
          <SectionHeading title="Upcoming" subtitle="You can wire this to your CMS later." />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["Intro to Web Dev", "Cloud Fundamentals", "Career Q&A"].map((t) => (
              <Card key={t}>
                <CardContent className="pt-6">
                  <div className="text-xs text-muted-foreground">Coming soon</div>
                  <div className="mt-1 font-bold">{t}</div>
                  <div className="mt-2 text-sm text-muted-foreground">A short, practical session designed to move you forward.</div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">Notify me</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
