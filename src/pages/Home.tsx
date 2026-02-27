import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, BrainCircuit, Users, PlayCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";

const features = [
  {
    title: "AI-Personalized Learning Paths",
    desc: "Adaptive learning paths that adjust to your goals, pace, and skill gaps.",
    icon: BrainCircuit,
  },
  {
    title: "Expert Tutors & Mentorship",
    desc: "Learn with experienced professionals who guide you to mastery.",
    icon: Users,
  },
  {
    title: "Interactive Sessions",
    desc: "Hands-on practice, real-time feedback, and portfolio-ready projects.",
    icon: GraduationCap,
  },
  {
    title: "Career-Ready Outcomes",
    desc: "Build job-ready skills, projects, and certifications that validate you.",
    icon: ShieldCheck,
  },
];

const testimonials = [
  {
    name: "Joyce",
    quote:
      "The interactive coding exercises and real-time feedback made learning more engaging. I felt progress with every lesson.",
  },
  {
    name: "Betty",
    quote:
      "Joining felt like becoming part of a community. When I got stuck, there was always someone ready to help.",
  },
  {
    name: "Abayomi",
    quote:
      "They created a learning path beyond my expectations. The tutors were knowledgeable and supportive.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute -top-24 right-[-140px] h-[420px] w-[420px] rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-24 left-[-140px] h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" />

        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">AI-Powered Tech Coaching</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Learn faster with an AI-personalized path built for your goals.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              1133 Academy helps students and professionals gain in-demand tech skills through adaptive learning, practical projects, and expert mentorship.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="https://1133academy.com/account/user-registration.php" target="_blank" rel="noreferrer">
                <Button variant="gold" size="lg" className="gap-2">
                  <Sparkles className="h-5 w-5" />
                  Get Started
                </Button>
              </a>
              <Link to="/services">
                <Button variant="outline" size="lg" className="gap-2">
                  Explore Programs <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="ghost" size="lg" className="gap-2">
                  <PlayCircle className="h-5 w-5" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span className="rounded-full border bg-background/60 px-3 py-1">Web Development</span>
              <span className="rounded-full border bg-background/60 px-3 py-1">Mobile Apps</span>
              <span className="rounded-full border bg-background/60 px-3 py-1">Cloud</span>
              <span className="rounded-full border bg-background/60 px-3 py-1">Cybersecurity</span>
              <span className="rounded-full border bg-background/60 px-3 py-1">Data</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-14 md:py-18">
        <SectionHeading
          title="What makes 1133 Academy different"
          subtitle="Personalization is not a buzzword here. Your learning experience adapts based on performance, goals, and feedback."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {features.map((f) => (
            <Card key={f.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex-row items-start gap-4">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>{f.title}</CardTitle>
                  <CardDescription className="mt-1">{f.desc}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="border-y bg-muted/20">
        <div className="container py-14 md:py-18">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <SectionHeading
                title="From skill gaps to real-world projects"
                subtitle="We focus on practical progress. Build portfolio-ready work and receive feedback that gets you to a hireable level."
              />
              <div className="mt-6 flex flex-col gap-3 text-sm">
                <div className="rounded-2xl border bg-background p-4">
                  <div className="font-semibold">AI Skill Diagnosis</div>
                  <div className="text-muted-foreground mt-1">A quick onboarding assessment maps what you know and what you need next.</div>
                </div>
                <div className="rounded-2xl border bg-background p-4">
                  <div className="font-semibold">Adaptive Curriculum</div>
                  <div className="text-muted-foreground mt-1">Lessons adjust in difficulty and sequence as your mastery improves.</div>
                </div>
                <div className="rounded-2xl border bg-background p-4">
                  <div className="font-semibold">Mentorship + Accountability</div>
                  <div className="text-muted-foreground mt-1">Get human guidance when it matters most, without slowing your momentum.</div>
                </div>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-muted-foreground">Sample Learning Path</div>
                <div className="mt-2 text-xl font-extrabold">Fullstack Web Development</div>
                <div className="mt-5 space-y-3">
                  {["HTML/CSS Foundations", "JavaScript Mastery", "React + State", "API + Database", "Deploy on Cloud"].map(
                    (step, idx) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">{step}</div>
                          <div className="text-xs text-muted-foreground">AI adapts the depth based on your performance.</div>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-6">
                  <Link to="/contact">
                    <Button className="w-full" size="lg">Talk to an Advisor</Button>
                  </Link>
                </div>
              </div>
              <div className="h-2 w-full bg-gradient-to-r from-primary via-gold to-primary" />
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-14 md:py-18">
        <SectionHeading
          title="Learners love the experience"
          subtitle="A few words from students who enjoyed personalized guidance and practical learning."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="h-full">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">“{t.quote}”</p>
                <div className="mt-4 font-bold">{t.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-primary text-primary-foreground">
        <div className="container py-14 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-2xl md:text-3xl font-extrabold">Ready to build your next skill?</div>
              <div className="mt-2 text-primary-foreground/80">Start with a learning plan tailored to your goals and schedule.</div>
            </div>
            <div className="flex gap-3">
              <a href="https://1133academy.com/account/user-registration.php" target="_blank" rel="noreferrer">
                <Button variant="gold" size="lg">Register</Button>
              </a>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  View Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
