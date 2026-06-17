import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { tools, type Tool } from "./site-data";

export type CartItem = { slug: string; qty: number };
type CartCtx = {
  items: CartItem[];
  count: number;
  subtotal: number;
  detailed: { tool: Tool; qty: number; lineTotal: number }[];
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);
const COOKIE = "dtv_cart";
const SESSION = "dtv_session";

function parsePrice(p: string) {
  const n = Number(p.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function readCookie(name: string) {
  if (typeof document === "undefined") return "";
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2]) : "";
}
function writeCookie(name: string, value: string, days = 30) {
  if (typeof document === "undefined") return;
  const exp = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${exp}; path=/; SameSite=Lax`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // hydrate from cookie + session
  useEffect(() => {
    try {
      const raw = readCookie(COOKIE) || (typeof sessionStorage !== "undefined" ? sessionStorage.getItem(COOKIE) ?? "" : "");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    // ensure session id
    if (typeof sessionStorage !== "undefined" && !sessionStorage.getItem(SESSION)) {
      const sid = "s_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
      sessionStorage.setItem(SESSION, sid);
      writeCookie(SESSION, sid, 30);
    }
  }, []);

  // persist
  useEffect(() => {
    const data = JSON.stringify(items);
    writeCookie(COOKIE, data, 30);
    if (typeof sessionStorage !== "undefined") sessionStorage.setItem(COOKIE, data);
  }, [items]);

  const value = useMemo<CartCtx>(() => {
    const detailed = items
      .map((i) => {
        const tool = tools.find((t) => t.slug === i.slug);
        if (!tool) return null;
        const lineTotal = parsePrice(tool.price) * i.qty;
        return { tool, qty: i.qty, lineTotal };
      })
      .filter(Boolean) as { tool: Tool; qty: number; lineTotal: number }[];
    return {
      items,
      count: items.reduce((a, b) => a + b.qty, 0),
      subtotal: detailed.reduce((a, b) => a + b.lineTotal, 0),
      detailed,
      add: (slug, qty = 1) =>
        setItems((prev) => {
          const ex = prev.find((p) => p.slug === slug);
          if (ex) return prev.map((p) => (p.slug === slug ? { ...p, qty: p.qty + qty } : p));
          return [...prev, { slug, qty }];
        }),
      remove: (slug) => setItems((prev) => prev.filter((p) => p.slug !== slug)),
      setQty: (slug, qty) =>
        setItems((prev) => (qty <= 0 ? prev.filter((p) => p.slug !== slug) : prev.map((p) => (p.slug === slug ? { ...p, qty } : p)))),
      clear: () => setItems([]),
    };
  }, [items]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
