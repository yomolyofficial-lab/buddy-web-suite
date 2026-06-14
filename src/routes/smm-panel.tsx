import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, ShieldCheck, RefreshCw } from "lucide-react";

export const Route = createFileRoute("/smm-panel")({
  head: () => ({
    meta: [
      { title: "SMM Panel — DigitalBuddy" },
      { name: "description", content: "Real followers, likes, views and engagement across every major platform. Fast, secure, reliable." },
    ],
  }),
  component: SMM,
});

const platforms = [
  { name: "Instagram", desc: "Followers, likes, story views & more" },
  { name: "YouTube", desc: "Subscribers, views, watch time & likes" },
  { name: "TikTok", desc: "Followers, views, likes & shares" },
  { name: "Facebook", desc: "Page likes, followers & engagement" },
  { name: "X (Twitter)", desc: "Followers, retweets, impressions" },
  { name: "WhatsApp", desc: "Group & channel members" },
];

function SMM() {
  return (
    <Layout>
      <Section eyebrow="SMM Panel" title="Real growth." highlight="Instantly." description="Boost your presence with real engagement — delivered fast, securely and at scale.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Zap, t: "Instant Start", d: "Orders begin within minutes." },
            { icon: ShieldCheck, t: "Safe & Secure", d: "No password ever required." },
            { icon: RefreshCw, t: "Refill Guarantee", d: "30-day refill on every order." },
            { icon: TrendingUp, t: "Real & Active", d: "No bots, 100% real users." },
          ].map((b, i) => (
            <div key={i} className="gradient-border rounded-2xl p-5">
              <b.icon className="h-5 w-5 text-primary mb-2" />
              <div className="font-semibold">{b.t}</div>
              <p className="text-sm text-muted-foreground mt-1">{b.d}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {platforms.map((p) => (
            <div key={p.name} className="gradient-border rounded-2xl p-6 flex items-center justify-between">
              <div>
                <div className="font-semibold text-lg">{p.name}</div>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              </div>
              <Button size="sm" className="bg-primary text-primary-foreground">Order</Button>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
