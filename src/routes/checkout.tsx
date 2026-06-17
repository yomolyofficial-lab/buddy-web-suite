import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle2, CreditCard, Lock, Wallet, Phone, ShieldCheck } from "lucide-react";
import { contact } from "@/lib/site-data";
import { motion } from "framer-motion";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Digital ToolVerse" },
      { name: "description", content: "Securely complete your order. Cash on delivery, JazzCash, EasyPaisa and bank transfer supported." },
    ],
  }),
  component: CheckoutPage,
});

type Method = "jazzcash" | "easypaisa" | "bank" | "cod";

function CheckoutPage() {
  const { detailed, subtotal, count, clear } = useCart();
  const [method, setMethod] = useState<Method>("jazzcash");
  const [placed, setPlaced] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const order = {
      id: "DTV-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
      method,
      customer: Object.fromEntries(form.entries()),
      items: detailed.map((d) => ({ slug: d.tool.slug, name: d.tool.name, qty: d.qty, line: d.lineTotal })),
      total: subtotal,
      placedAt: new Date().toISOString(),
    };
    try {
      const list = JSON.parse(localStorage.getItem("dtv_orders") || "[]");
      list.unshift(order);
      localStorage.setItem("dtv_orders", JSON.stringify(list));
    } catch {}
    setPlaced(order.id);
    clear();
  };

  if (placed) {
    return (
      <Layout>
        <Section eyebrow="Confirmed" title="Thank you for your" highlight="order">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl gradient-border p-10 text-center max-w-xl mx-auto">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-primary mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-display text-3xl font-bold">Order placed!</h3>
            <p className="text-muted-foreground mt-2">Your order <span className="font-mono text-primary">{placed}</span> has been received. We'll contact you on WhatsApp shortly.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild className="bg-primary text-primary-foreground"><Link to="/">Back home</Link></Button>
              <Button asChild variant="outline" className="border-primary/40"><a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp Support</a></Button>
            </div>
          </motion.div>
        </Section>
      </Layout>
    );
  }

  if (count === 0) {
    return (
      <Layout>
        <Section eyebrow="Checkout" title="Your cart is" highlight="empty">
          <div className="text-center py-10">
            <Button asChild className="bg-primary text-primary-foreground"><Link to="/tools">Browse Tools</Link></Button>
          </div>
        </Section>
      </Layout>
    );
  }

  const methods: { id: Method; label: string; icon: typeof CreditCard; note: string }[] = [
    { id: "jazzcash", label: "JazzCash", icon: Wallet, note: "Mobile wallet" },
    { id: "easypaisa", label: "EasyPaisa", icon: Wallet, note: "Mobile wallet" },
    { id: "bank", label: "Bank Transfer", icon: CreditCard, note: "IBFT / Raast" },
    { id: "cod", label: "Cash on Delivery", icon: Phone, note: "Physical products only" },
  ];

  return (
    <Layout>
      <Section eyebrow="Checkout" title="Secure" highlight="checkout" description="Your details are encrypted and stored only for fulfilment.">
        <form onSubmit={onSubmit} className="grid lg:grid-cols-[1fr_380px] gap-6">
          <div className="space-y-6">
            <div className="rounded-2xl gradient-border p-6 space-y-4">
              <h4 className="font-display text-lg font-bold">Contact details</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="name">Full name</Label><Input id="name" name="name" required placeholder="Ali Khan" className="mt-1" /></div>
                <div><Label htmlFor="phone">WhatsApp number</Label><Input id="phone" name="phone" required placeholder="03xx-xxxxxxx" className="mt-1" /></div>
                <div className="sm:col-span-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required placeholder="you@email.com" className="mt-1" /></div>
                <div className="sm:col-span-2"><Label htmlFor="notes">Order notes (optional)</Label><Textarea id="notes" name="notes" rows={3} placeholder="Any specific account email, duration, etc." className="mt-1" /></div>
              </div>
            </div>

            <div className="rounded-2xl gradient-border p-6 space-y-4">
              <h4 className="font-display text-lg font-bold">Payment method</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {methods.map((m) => {
                  const active = method === m.id;
                  return (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setMethod(m.id)}
                      className={`text-left rounded-xl border p-4 transition ${active ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`grid h-10 w-10 place-items-center rounded-lg ${active ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>
                          <m.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold">{m.label}</div>
                          <div className="text-xs text-muted-foreground">{m.note}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5"><Lock className="h-3 w-3" /> Encrypted in transit. We never store card data.</p>
            </div>
          </div>

          <aside className="rounded-2xl gradient-border p-6 h-fit space-y-4 sticky top-24">
            <h4 className="font-display text-lg font-bold">Your order</h4>
            <div className="space-y-2 max-h-64 overflow-auto pr-1">
              {detailed.map((d) => (
                <div key={d.tool.slug} className="flex items-center justify-between text-sm">
                  <span className="truncate pr-2">{d.tool.name} <span className="text-muted-foreground">×{d.qty}</span></span>
                  <span className="text-muted-foreground">PKR {d.lineTotal.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border/60 pt-3 flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-display text-xl font-bold text-gradient-gold">PKR {subtotal.toLocaleString()}</span>
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <ShieldCheck className="mr-1 h-4 w-4" /> Place order
            </Button>
            <p className="text-[11px] text-muted-foreground text-center">By placing your order you agree to our terms & privacy policy.</p>
          </aside>
        </form>
      </Section>
    </Layout>
  );
}
