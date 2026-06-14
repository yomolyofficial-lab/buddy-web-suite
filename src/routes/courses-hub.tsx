import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Clock } from "lucide-react";

export const Route = createFileRoute("/courses-hub")({
  head: () => ({
    meta: [
      { title: "Courses Hub — DigitalBuddy" },
      { name: "description", content: "Premium courses across business, design, AI and code. Learn faster, build smarter." },
    ],
  }),
  component: CoursesHub,
});

const courses = [
  { title: "AI Mastery 2026", desc: "Build AI workflows that 10× your output.", price: "PKR 4,999", level: "Intermediate" },
  { title: "Brand Design Pro", desc: "From logo to identity systems clients love.", price: "PKR 3,499", level: "All levels" },
  { title: "YouTube Growth OS", desc: "0 → 100K subs with proven systems.", price: "PKR 5,999", level: "Beginner" },
  { title: "Freelance Blueprint", desc: "Land high-ticket clients in 30 days.", price: "PKR 4,499", level: "Beginner" },
  { title: "SEO Domination", desc: "Rank #1 with modern SEO playbooks.", price: "PKR 3,999", level: "Intermediate" },
  { title: "No-Code SaaS", desc: "Launch a SaaS without writing code.", price: "PKR 6,499", level: "All levels" },
];

function CoursesHub() {
  return (
    <Layout>
      <Section eyebrow="Courses Hub" title="Learn from" highlight="industry pros" description="Curated, premium courses to help you ship faster and earn more.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c, i) => (
            <div key={i} className="gradient-border rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs text-primary mb-3">
                <BookOpen className="h-4 w-4" /> Course
              </div>
              <div className="font-semibold text-lg">{c.title}</div>
              <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
              <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Award className="h-3 w-3" /> Certificate</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {c.level}</span>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="font-display text-lg font-bold text-gradient-gold">{c.price}</div>
                <Button size="sm" className="bg-primary text-primary-foreground">Enroll</Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
