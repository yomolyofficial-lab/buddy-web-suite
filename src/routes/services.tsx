import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { services } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DigitalBuddy" },
      { name: "description", content: "Growth services, SMM panel, courses, affiliate program and more — all in one premium platform." },
      { property: "og:title", content: "Services — DigitalBuddy" },
      { property: "og:description", content: "Everything you need to grow online." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Layout>
      <Section
        eyebrow="What We Offer"
        title="Premium services for"
        highlight="serious creators"
        description="From growth marketing to digital product fulfillment, we cover every step of your journey."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/${s.slug}` as "/tools"}
              className="gradient-border rounded-2xl p-6 hover:-translate-y-1 transition group"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground mb-4 font-display font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-semibold text-lg mb-1">{s.title}</div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 text-xs text-primary inline-flex items-center gap-1">
                Learn more <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
