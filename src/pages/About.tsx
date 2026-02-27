import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Target, Lightbulb, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      <header className="border-b bg-muted/20">
        <div className="container py-12">
          <Badge variant="gold">About</Badge>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Overview of 1133 Academy</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            1133 Academy is a tech coaching platform that connects learners with expert tutors while delivering personalized learning experiences tailored to each learner’s goals.
          </p>
        </div>
      </header>

      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <SectionHeading
            title="Mission"
            subtitle="Revolutionize the educational landscape with a dynamic and accessible platform that helps learners achieve their objectives." 
          />
          <div className="grid gap-4">
            <Card>
              <CardHeader className="flex-row items-start gap-4">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Personalization</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">Learning paths adapt to your pace and skill gaps.</p>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="flex-row items-start gap-4">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Mentorship</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">A seamless bridge between students and tutors for real guidance.</p>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/20">
        <div className="container py-12">
          <SectionHeading
            title="Future vision"
            subtitle="We aim to refine and expand our services, leveraging technology to create a more immersive and effective learning experience." 
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-gold/20 flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-navy" />
                  </div>
                  <div className="font-bold">Innovation</div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Continuous improvements using modern EdTech and AI to personalize learning at scale.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-gold/20 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-navy" />
                  </div>
                  <div className="font-bold">Global impact</div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Becoming a global leader in education technology with accessible learning experiences for all.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-gold/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-navy" />
                  </div>
                  <div className="font-bold">Community</div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  A supportive community of learners and tutors built around accountability and outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <SectionHeading
          title="Values"
          subtitle="We are committed to high-quality learning experiences that drive student success." 
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { t: "Accessibility", d: "Make learning accessible irrespective of background or location." },
            { t: "Fairness", d: "Fair compensation for tutors and fair pricing for students." },
            { t: "Innovation", d: "Use technology to continuously improve learning outcomes." },
            { t: "Community", d: "A supportive environment that fosters growth and collaboration." },
          ].map((v) => (
            <Card key={v.t}>
              <CardHeader>
                <CardTitle>{v.t}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{v.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
