import { Link } from "@tanstack/react-router";
import { Orbit, Instagram, Youtube, Twitter, MessageCircle, Phone, Mail } from "lucide-react";
import { nav, contact, brand } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
              <Orbit className="h-4 w-4" />
            </span>
            {brand.nameLeft}<span className="text-gradient-gold"> {brand.nameRight}</span>
          </Link>
          <p className="max-w-md text-sm text-muted-foreground">
            Premium tools, smart services and real growth — handpicked for
            creators, students and entrepreneurs who want to go beyond limits.
          </p>
          <div className="space-y-2 text-sm pt-2">
            <a href={`tel:${contact.phoneTel}`} className="flex items-center gap-2 text-foreground hover:text-primary transition">
              <Phone className="h-4 w-4 text-primary" /> {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition">
              <Mail className="h-4 w-4 text-primary" /> {contact.email}
            </a>
          </div>
          <div className="flex gap-2 pt-2">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Youtube, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: MessageCircle, href: contact.whatsapp },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition">
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
            <li><a href={contact.whatsapp} className="hover:text-foreground">Contact via WhatsApp</a></li>
            <li><a href="#" className="hover:text-foreground">Terms</a></li>
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><Link to="/admin" className="hover:text-foreground">Admin</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {brand.name} — Premium tools for ambitious creators.
      </div>
    </footer>
  );
}
