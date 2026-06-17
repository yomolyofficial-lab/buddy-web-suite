import type { Tool } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/lib/cart";
import { useState } from "react";

export function ToolCard({ tool }: { tool: Tool }) {
  const { add, items } = useCart();
  const inCart = items.some((i) => i.slug === tool.slug);
  const [pulse, setPulse] = useState(false);
  const initial = tool.name.charAt(0);

  const onAdd = () => {
    add(tool.slug, 1);
    setPulse(true);
    setTimeout(() => setPulse(false), 600);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl gradient-border p-5 hover:shadow-[var(--shadow-glow)]"
    >
      {tool.badge && (
        <span className="absolute right-3 top-3 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
          {tool.badge}
        </span>
      )}
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface border border-border overflow-hidden">
          {tool.logo ? (
            <img src={tool.logo} alt={`${tool.name} logo`} loading="lazy" className="h-7 w-7 object-contain" />
          ) : (
            <span className="font-display text-xl font-bold text-primary">{initial}</span>
          )}
        </div>
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">{tool.category}</div>
          <div className="font-semibold truncate">{tool.name}</div>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground line-clamp-2 min-h-10">{tool.tagline}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="font-display text-lg font-bold text-gradient-gold">{tool.price}</div>
        <div className="flex gap-1">
          <motion.div animate={pulse ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.4 }}>
            <Button
              size="icon"
              variant="ghost"
              onClick={onAdd}
              aria-label={inCart ? "Added to cart" : "Add to cart"}
              className={`h-9 w-9 rounded-lg border ${inCart ? "border-primary/60 text-primary" : "border-border"}`}
            >
              {inCart ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </Button>
          </motion.div>
          <Button size="sm" onClick={onAdd} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
            Buy <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
