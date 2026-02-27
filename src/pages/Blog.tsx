import { useMemo, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const longArticle = `In a world where education often takes a one-size-fits-all approach, 1133 Academy challenges the status quo with personalized learning experiences.

Personalization at its core: every learner is unique with distinct learning styles, interests, and aspirations. Instead of forcing standardized curricula, the platform uses technology to create customized learning paths.

Cutting-edge technology for immersive learning: AI, adaptive learning algorithms, and modern learning tools make learning more interactive and engaging.

Bridging the gap between students and tutors: seamless communication and collaboration enable tutors to provide personalized guidance and support.

A global community of learners: learners connect across regions, share ideas, and grow through diverse perspectives.

Preparing students for the future: practical, real-world projects ensure learners are job-ready for the modern workplace.`;

const posts = [
  {
    id: "personalization",
    title: "Transforming Education Through Personalization",
    category: "EdTech",
    excerpt:
      "Education shouldn’t adapt students to a curriculum. The curriculum should adapt to the student.",
    body: longArticle,
  },
  {
    id: "future-of-learning",
    title: "The Future of Learning: AI + Mentorship",
    category: "AI",
    excerpt:
      "AI gets you speed. Mentorship gives you direction. Together, you get outcomes.",
    body:
      "The next generation of learning is hybrid: AI-powered personalization for daily progress, with human mentorship to unlock deeper clarity, accountability, and professional growth.",
  },
  {
    id: "career-ready",
    title: "From Courses to Career Readiness",
    category: "Careers",
    excerpt:
      "Courses are great. What matters is what you can build, explain, and ship.",
    body:
      "Career readiness comes from doing real work: projects, reviews, iteration, and feedback. Build a portfolio that proves competence and grows confidence.",
  },
];

export default function BlogPage() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return posts;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query)
    );
  }, [q]);

  return (
    <div>
      <header className="border-b bg-muted/20">
        <div className="container py-12">
          <Badge variant="gold">Blog</Badge>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Ideas, insights, and updates</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            Explore how personalized learning, mentorship, and practical projects shape modern tech education.
          </p>
          <div className="mt-6 max-w-lg">
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search posts…" />
          </div>
        </div>
      </header>

      <section className="container py-12">
        <SectionHeading title="Latest posts" subtitle="Short reads with practical takeaways." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Card key={p.id} className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <Badge>{p.category}</Badge>
                  <span className="text-xs text-muted-foreground">5 min read</span>
                </div>
                <CardTitle className="mt-2">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">{p.excerpt}</p>

                <details className="rounded-2xl border bg-muted/20 p-4">
                  <summary className="cursor-pointer select-none text-sm font-semibold">
                    Read more
                  </summary>
                  <div className="mt-3 whitespace-pre-line text-sm text-muted-foreground">
                    {p.body}
                  </div>
                </details>

                <a href="https://1133academy.com/account/user-registration.php" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="w-full">Start learning</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 text-sm text-muted-foreground">No posts matched your search.</div>
        ) : null}
      </section>
    </div>
  );
}
