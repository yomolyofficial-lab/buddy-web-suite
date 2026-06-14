import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/orders")({
  component: Orders,
});

const orders = Array.from({ length: 8 }).map((_, i) => ({
  id: `#102${80 + i}`,
  customer: ["Ali", "Sara", "Hamza", "Zara", "Omar", "Noor", "Asad", "Imran"][i] + " K.",
  product: ["ChatGPT Plus", "Canva Pro", "Midjourney", "Adobe CC", "NordVPN", "Office 365", "Cursor", "Notion"][i],
  total: `PKR ${(1000 + i * 750).toLocaleString()}`,
  status: ["Paid", "Pending", "Paid", "Refunded", "Paid", "Paid", "Pending", "Paid"][i],
}));

function Orders() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold">Orders</h1>
      <div className="gradient-border rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left">
            <tr><th className="px-4 py-3">Order</th><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Product</th><th className="px-4 py-3">Total</th><th className="px-4 py-3">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-secondary/30">
                <td className="px-4 py-3 font-medium">{o.id}</td>
                <td className="px-4 py-3">{o.customer}</td>
                <td className="px-4 py-3">{o.product}</td>
                <td className="px-4 py-3">{o.total}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2 py-0.5 text-xs ${
                    o.status === "Paid" ? "bg-emerald-500/15 text-emerald-400"
                    : o.status === "Pending" ? "bg-amber-500/15 text-amber-400"
                    : "bg-rose-500/15 text-rose-400"
                  }`}>{o.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
