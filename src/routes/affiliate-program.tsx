import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, TrendingUp, Wallet } from "lucide-react";

export const Route = createFileRoute("/affiliate-program")({
  head: () => ({
    meta: [
      { title: "Affiliate Program — Digital ToolVerse" },
      { name: "description", content: "Earn up to 40% recurring commission on every referral. Join the Digital ToolVerse affiliate program." },
    ],
  }),
  component: Affiliate,
});

function Affiliate() {
  return (
    <Layout>
      <Section eyebrow="Affiliate Program" title="Earn up to" highlight="40% recurring" description="Promote Digital ToolVerse, refer creators and earn lifetime commissions on every sale.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: DollarSign, k: "40%", v: "Per sale commission" },
            { icon: Wallet, k: "Weekly", v: "Payouts to your wallet" },
            { icon: Users, k: "12K+", v: "Active customer base" },
            { icon: TrendingUp, k: "Lifetime", v: "Recurring earnings" },
          ].map((s, i) => (
            <div key={i} className="gradient-border rounded-2xl p-6">
              <s.icon className="h-5 w-5 text-primary mb-3" />
              <div className="font-display text-2xl font-bold text-gradient-gold">{s.k}</div>
              <div className="text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 gradient-border rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="font-display text-3xl font-bold">Ready to start earning?</h3>
          <p className="mt-2 text-muted-foreground max-w-lg mx-auto">Get your unique link, share it anywhere, and watch the commissions roll in.</p>
          <Button size="lg" className="mt-6 bg-primary text-primary-foreground">Join the Program</Button>
        </div>
      </Section>
    </Layout>
  );
}
