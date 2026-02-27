import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Briefcase, ShieldCheck, Users, ClipboardCheck, GraduationCap } from "lucide-react";

const services = [
  {
    title: "Coaching and Mentorship",
    desc: "Training and mentorship in Programming Fundamentals, Data Structures & Algorithms, Web Development, Mobile App Development, Cybersecurity, and Cloud computing.",
    Icon: GraduationCap,
  },
  {
    title: "Project Management",
    desc: "We execute projects in Software/Web Development, Mobile App Development, Data Analysis, Resource Control, Cybersecurity, and Cloud management.",
    Icon: ClipboardCheck,
  },
  {
    title: "Certification",
    desc: "Industry-recognized certifications to validate skills and accelerate career credibility.",
    Icon: ShieldCheck,
  },
  {
    title: "Career Path",
    desc: "We hire and outsource top talents from our academy and evaluated tech experts.",
    Icon: Briefcase,
  },
  {
    title: "Learning",
    desc: "We reimagine tech education, making it accessible to all regardless of background or circumstances.",
    Icon: BookOpen,
  },
  {
    title: "Mentorship Community",
    desc: "Connect learners with experienced professionals for guidance, support, and industry insights.",
    Icon: Users,
  },
];

export default function ServicesPage() {
  return (
    <div>
      <header className="border-b bg-muted/20">
        <div className="container py-12">
          <Badge variant="gold">Services</Badge>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">What we do</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            We provide high-quality educational experiences that drive student success through mentorship, practical learning, and career pathways.
          </p>
        </div>
      </header>

      <section className="container py-12">
        <SectionHeading
          title="Programs built for outcomes"
          subtitle="Choose a track, follow an AI-personalized path, and get support from experts." 
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, Icon }) => (
            <Card key={title} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex-row items-start gap-4">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>{title}</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </CardHeader>
              <CardContent>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">Talk to us</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t bg-primary text-primary-foreground">
        <div className="container py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-2xl font-extrabold">Need a tailored learning plan?</div>
            <div className="mt-2 text-primary-foreground/80">Tell us your goal and we will recommend a track that fits your timeline.</div>
          </div>
          <Link to="/contact">
            <Button variant="gold" size="lg">Request Consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
