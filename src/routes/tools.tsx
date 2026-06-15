import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { ToolCard } from "@/components/site/ToolCard";
import { tools } from "@/lib/site-data";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Premium AI Tools — Digital ToolVerse" },
      { name: "description", content: "Browse 500+ premium AI tools at the best prices — ChatGPT, Canva Pro, Adobe CC, Midjourney, Perplexity, ElevenLabs and more." },
      { property: "og:title", content: "Premium AI Tools — Digital ToolVerse" },
      { property: "og:description", content: "Premium AI tools at unbeatable prices." },
    ],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  const cats = ["All", ...Array.from(new Set(tools.map((t) => t.category)))];
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = tools.filter(
    (t) =>
      (cat === "All" || t.category === cat) &&
      (t.name.toLowerCase().includes(q.toLowerCase()) ||
        t.tagline.toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <Layout>
      <Section
        eyebrow="All Tools"
        title="Every premium tool"
        highlight="in one place"
        description="Handpicked, verified, and priced for creators who want more without paying more."
      >
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Input
            placeholder="Search tools..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="bg-surface border-border"
          />
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <Button
                key={c}
                variant={cat === c ? "default" : "outline"}
                size="sm"
                onClick={() => setCat(c)}
                className={cat === c ? "bg-primary text-primary-foreground" : "border-border"}
              >
                {c}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((t) => <ToolCard key={t.slug} tool={t} />)}
        </div>
        {filtered.length === 0 && (
          <div className="text-center text-muted-foreground py-16">No tools match your filters. <Link to="/tools" className="text-primary">Reset</Link></div>
        )}
      </Section>
    </Layout>
  );
}
