import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Gift, Lock, Sparkles, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/giveaways")({
  head: () => ({
    meta: [
      { title: "Giveaways — Digital ToolVerse" },
      { name: "description", content: "Unlock premium digital assets worth $100+ for free. New giveaways every week." },
    ],
  }),
  component: Giveaways,
});

function Giveaways() {
  return (
    <Layout>
      <Section eyebrow="Free Access" title="Unlock $100+ in" highlight="digital assets" description="A private collection of premium tools, courses and resources — yours to claim instantly.">
        <div className="grid lg:grid-cols-3 gap-4">
          {[
            { icon: Gift, title: "Premium Templates", desc: "Notion dashboards, Figma kits & landing page packs." },
            { icon: Sparkles, title: "Pro Asset Packs", desc: "Fonts, icons, illustrations & sound libraries." },
            { icon: Lock, title: "Members-Only Drops", desc: "Hidden vault, restocked every Friday." },
          ].map((g, i) => (
            <div key={i} className="gradient-border rounded-2xl p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary mb-3">
                <g.icon className="h-5 w-5" />
              </div>
              <div className="font-semibold text-lg">{g.title}</div>
              <p className="text-sm text-muted-foreground mt-2">{g.desc}</p>
              <Button className="mt-5 bg-primary text-primary-foreground">Claim Now</Button>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" /> 100% safe & secure — no shady redirects.
        </div>
      </Section>
    </Layout>
  );
}
