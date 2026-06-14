import { Link } from "@tanstack/react-router";
import { Sparkles, Instagram, Youtube, Twitter, MessageCircle } from "lucide-react";
import { nav } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            Digital<span className="text-gradient-gold">Buddy</span>
          </Link>
          <p className="max-w-md text-sm text-muted-foreground">
            Premium tools, smart services and real growth — handpicked for
            creators, students and entrepreneurs who want to go beyond limits.
          </p>
          <div className="flex gap-2 pt-2">
            {[Instagram, Youtube, Twitter, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Explore</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-foreground">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/physical-products" className="hover:text-foreground">Physical Products</Link></li>
            <li><a href="#" className="hover:text-foreground">Contact</a></li>
            <li><a href="#" className="hover:text-foreground">Terms</a></li>
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><Link to="/admin" className="hover:text-foreground">Admin</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DigitalBuddy — Premium tools for ambitious creators.
      </div>
    </footer>
  );
}
