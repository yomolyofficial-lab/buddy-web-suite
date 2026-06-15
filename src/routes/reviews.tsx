import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Digital ToolVerse" },
      { name: "description", content: "Real reviews from 12,000+ Digital ToolVerse customers worldwide." },
    ],
  }),
  component: Reviews,
});

const reviews = Array.from({ length: 9 }).map((_, i) => ({
  name: ["Hamza R.", "Ayesha K.", "Bilal M.", "Sana T.", "Omar S.", "Zara A.", "Imran F.", "Noor H.", "Asad Q."][i],
  role: ["YouTuber", "Designer", "Founder", "Student", "Marketer", "Editor", "Coach", "Creator", "Developer"][i],
  quote: [
    "Activation in 2 minutes. Real deal.",
    "Better support than the official platforms.",
    "Saved me thousands on subscriptions.",
    "Bundles are stupid good value.",
    "Best SMM panel I've used in years.",
    "Quality + speed at the same time? Yes.",
    "Their team actually replies on WhatsApp.",
    "Free giveaways are legit premium stuff.",
    "Renewal was instant, no drama.",
  ][i],
}));

function Reviews() {
  return (
    <Layout>
      <Section eyebrow="Reviews" title="Loved by" highlight="12,000+ creators" description="Real stories, verified purchases.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <div key={i} className="gradient-border rounded-2xl p-6">
              <div className="flex gap-1 mb-3 text-primary">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm">"{r.quote}"</p>
              <div className="mt-4 text-sm font-semibold">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.role}</div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
