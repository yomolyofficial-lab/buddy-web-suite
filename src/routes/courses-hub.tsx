import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Clock, ShoppingBag, Package, LineChart, Sparkles, Brain, Megaphone, Palette, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/courses-hub")({
  head: () => ({
    meta: [
      { title: "Courses Hub — Digital ToolVerse" },
      { name: "description", content: "Premium courses: Shopify, Amazon, Trading, AI Prompt Engineering, design, AI and code. Learn faster, earn more." },
    ],
  }),
  component: CoursesHub,
});

type Course = {
  title: string;
  desc: string;
  price: string;
  level: string;
  icon: LucideIcon;
  tag?: string;
};

const courses: Course[] = [
  { title: "Shopify Mastery", desc: "Launch & scale a profitable Shopify store from zero.", price: "PKR 5,499", level: "Beginner → Pro", icon: ShoppingBag, tag: "New" },
  { title: "Amazon FBA Course", desc: "Source, list and rank winning products on Amazon.", price: "PKR 6,999", level: "All levels", icon: Package, tag: "New" },
  { title: "Trading Pro", desc: "Crypto & forex trading with risk-managed setups.", price: "PKR 7,499", level: "Beginner → Advanced", icon: LineChart, tag: "Hot" },
  { title: "AI Prompt Engineering", desc: "Master prompts for ChatGPT, Claude, Midjourney & more.", price: "PKR 3,999", level: "All levels", icon: Sparkles, tag: "New" },
  { title: "AI Mastery 2026", desc: "Build AI workflows that 10× your output.", price: "PKR 4,999", level: "Intermediate", icon: Brain },
  { title: "Brand Design Pro", desc: "From logo to identity systems clients love.", price: "PKR 3,499", level: "All levels", icon: Palette },
  { title: "YouTube Growth OS", desc: "0 → 100K subs with proven systems.", price: "PKR 5,999", level: "Beginner", icon: Megaphone },
  { title: "Freelance Blueprint", desc: "Land high-ticket clients in 30 days.", price: "PKR 4,499", level: "Beginner", icon: Award },
  { title: "No-Code SaaS", desc: "Launch a SaaS without writing code.", price: "PKR 6,499", level: "All levels", icon: Code2 },
];

function CoursesHub() {
  return (
    <Layout>
      <Section eyebrow="Courses Hub" title="Learn from" highlight="industry pros" description="Curated, premium courses to help you ship faster and earn more.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="relative gradient-border rounded-2xl p-6">
                {c.tag && (
                  <span className="absolute right-4 top-4 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    {c.tag}
                  </span>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="inline-flex items-center gap-1 text-xs text-primary">
                    <BookOpen className="h-3.5 w-3.5" /> Course
                  </div>
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
            );
          })}
        </div>
      </Section>
    </Layout>
  );
}
