import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

export const Route = createFileRoute("/physical-products")({
  head: () => ({
    meta: [
      { title: "Physical Products — DigitalBuddy" },
      { name: "description", content: "Smart gadgets and creator-grade hardware shipped to your doorstep." },
    ],
  }),
  component: Physical,
});

const products = [
  { name: "Wireless Mic Pro", price: "PKR 8,999", desc: "Studio-grade dual wireless mic for creators." },
  { name: "Ring Light 18\"", price: "PKR 5,499", desc: "Bi-color LED with tripod & phone mount." },
  { name: "Mechanical Keyboard", price: "PKR 11,999", desc: "Hot-swappable RGB, gasket-mount feel." },
  { name: "Webcam 4K", price: "PKR 14,500", desc: "Pro streaming webcam with auto-focus." },
  { name: "Studio Headphones", price: "PKR 9,200", desc: "Closed-back, neutral signature for editing." },
  { name: "Phone Gimbal", price: "PKR 12,800", desc: "3-axis stabilizer for buttery smooth video." },
];

function Physical() {
  return (
    <Layout>
      <Section eyebrow="Physical Products" title="Power your craft with" highlight="smart gear">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p) => (
            <div key={p.name} className="gradient-border rounded-2xl p-6">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-secondary to-surface mb-4 grid place-items-center">
                <Package className="h-10 w-10 text-primary/70" />
              </div>
              <div className="font-semibold">{p.name}</div>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="font-display text-lg font-bold text-gradient-gold">{p.price}</div>
                <Button size="sm" className="bg-primary text-primary-foreground">Buy</Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
