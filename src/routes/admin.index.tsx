import { createFileRoute } from "@tanstack/react-router";
import { tools } from "@/lib/site-data";
import { Users, ShoppingBag, DollarSign, Package } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: Dashboard,
});

const stats = [
  { icon: DollarSign, label: "Revenue (MTD)", value: "PKR 2.4M" },
  { icon: ShoppingBag, label: "Orders", value: "1,284" },
  { icon: Users, label: "Customers", value: "12,490" },
  { icon: Package, label: "Active Tools", value: String(tools.length) },
];

function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">A snapshot of your store today.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="gradient-border rounded-2xl p-5">
            <s.icon className="h-5 w-5 text-primary mb-3" />
            <div className="font-display text-2xl font-bold">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="gradient-border rounded-2xl p-6">
        <div className="font-semibold mb-4">Recent activity</div>
        <ul className="text-sm divide-y divide-border/60">
          {[
            "New order #10284 — ChatGPT Plus",
            "Refund processed — Order #10219",
            "New customer signup — ayesha@example.com",
            "Product updated — Canva Pro",
          ].map((a, i) => (
            <li key={i} className="py-2.5 flex items-center justify-between">
              <span>{a}</span>
              <span className="text-xs text-muted-foreground">{i + 1}h ago</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
