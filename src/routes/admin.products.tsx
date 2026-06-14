import { createFileRoute } from "@tanstack/react-router";
import { tools } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/products")({
  component: ProductsAdmin,
});

function ProductsAdmin() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Products</h1>
          <p className="text-sm text-muted-foreground">Manage your tool catalog.</p>
        </div>
        <Button className="bg-primary text-primary-foreground"><Plus className="h-4 w-4 mr-1" /> New product</Button>
      </div>
      <div className="gradient-border rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {tools.map((t) => (
              <tr key={t.slug} className="hover:bg-secondary/30">
                <td className="px-4 py-3 font-medium">{t.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{t.category}</td>
                <td className="px-4 py-3">{t.price}</td>
                <td className="px-4 py-3 text-right">
                  <Button size="icon" variant="ghost" className="h-8 w-8"><Pencil className="h-4 w-4" /></Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive"><Trash2 className="h-4 w-4" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
