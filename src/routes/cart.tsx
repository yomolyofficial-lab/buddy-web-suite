import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Digital ToolVerse" },
      { name: "description", content: "Review the digital tools and services in your cart and continue to checkout." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { detailed, subtotal, setQty, remove, count, clear } = useCart();

  return (
    <Layout>
      <Section eyebrow="Your Cart" title="Review your" highlight="order" description="Saved across visits using secure cookies & session storage.">
        {count === 0 ? (
          <div className="rounded-2xl gradient-border p-10 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary mb-4">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-bold">Your cart is empty</h3>
            <p className="text-muted-foreground mt-2">Add a few tools and they'll be saved here automatically.</p>
            <Button asChild className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/tools">Browse Tools <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_360px] gap-6">
            <div className="space-y-3">
              {detailed.map(({ tool, qty, lineTotal }) => (
                <div key={tool.slug} className="rounded-2xl gradient-border p-4 flex items-center gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-surface border border-border overflow-hidden">
                    {tool.logo ? <img src={tool.logo} alt="" className="h-8 w-8 object-contain" /> : <span className="font-display text-xl text-primary">{tool.name[0]}</span>}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold truncate">{tool.name}</div>
                    <div className="text-xs text-muted-foreground">{tool.category} · {tool.price}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button size="icon" variant="ghost" className="h-8 w-8 border border-border" onClick={() => setQty(tool.slug, qty - 1)}>
                      <Minus className="h-3 w-3" />
                    </Button>
                    <div className="w-8 text-center text-sm">{qty}</div>
                    <Button size="icon" variant="ghost" className="h-8 w-8 border border-border" onClick={() => setQty(tool.slug, qty + 1)}>
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="w-24 text-right font-display font-bold text-gradient-gold">PKR {lineTotal.toLocaleString()}</div>
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={() => remove(tool.slug)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <div className="flex justify-between pt-2">
                <Button variant="ghost" onClick={clear} className="text-muted-foreground hover:text-destructive">Clear cart</Button>
                <Button asChild variant="outline" className="border-primary/40"><Link to="/tools">Continue shopping</Link></Button>
              </div>
            </div>

            <aside className="rounded-2xl gradient-border p-6 h-fit space-y-4 sticky top-24">
              <h4 className="font-display text-xl font-bold">Order Summary</h4>
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Items</span><span>{count}</span></div>
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span>PKR {subtotal.toLocaleString()}</span></div>
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Delivery</span><span className="text-primary">Instant</span></div>
              <div className="border-t border-border/60 pt-3 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-display text-xl font-bold text-gradient-gold">PKR {subtotal.toLocaleString()}</span>
              </div>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/checkout">Proceed to Checkout <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </aside>
          </div>
        )}
      </Section>
    </Layout>
  );
}
