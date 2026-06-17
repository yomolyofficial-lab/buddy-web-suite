import orbitCore from "@/assets/orbit-core.png";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

const icon = (slug: string, color = "FFFFFF") => `https://cdn.simpleicons.org/${slug}/${color}`;

const ring1 = [
  { label: "ChatGPT", logo: icon("openai") },
  { label: "Canva", logo: icon("canva", "00C4CC") },
  { label: "Midjourney", logo: icon("midjourney") },
  { label: "Adobe", logo: icon("adobecreativecloud", "DA1F26") },
  { label: "Office", logo: icon("microsoftoffice", "D83B01") },
  { label: "Figma", logo: icon("figma", "F24E1E") },
];

const ring2 = [
  { label: "Perplexity", logo: icon("perplexity", "20808D") },
  { label: "Claude", logo: icon("anthropic", "D97757") },
  { label: "ElevenLabs", logo: icon("elevenlabs") },
  { label: "Notion", logo: icon("notion") },
  { label: "Grammarly", logo: icon("grammarly", "15C39A") },
  { label: "Cursor", logo: icon("cursor") },
  { label: "Coursera", logo: icon("coursera", "0056D2") },
];

function Orbit({
  size,
  duration,
  reverse,
  items,
}: {
  size: number;
  duration: number;
  reverse?: boolean;
  items: { label: string; logo: string }[];
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 rounded-full border border-primary/15"
      style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((it, i) => {
        const angle = (360 / items.length) * i;
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `rotate(${angle}deg) translateX(${size / 2}px) rotate(-${angle}deg)` }}
          >
            <motion.div
              title={it.label}
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.15 }}
              className="grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-surface border border-border shadow-[var(--shadow-card)] ring-1 ring-white/10 overflow-hidden"
            >
              <img src={it.logo} alt={it.label} className="h-7 w-7 object-contain" loading="lazy" />
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

export function OrbitHero() {
  return (
    <section className="relative overflow-hidden bg-aurora">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary">
            <Shield className="h-3.5 w-3.5" />
            The No.1 Trusted Digital Store Worldwide
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Dominate the digital world{" "}
            <span className="text-gradient-gold">with premium tools</span>.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
            Powerful AI tools, growth services and curated courses — all in one place.
            Built for creators, students, YouTubers and entrepreneurs who refuse to settle for less.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/tools">Explore Our Tools <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-sm">
            <div><span className="font-display text-2xl text-gradient-gold font-bold">12K+</span><div className="text-muted-foreground">Happy users</div></div>
            <div><span className="font-display text-2xl text-gradient-gold font-bold">500+</span><div className="text-muted-foreground">Premium tools</div></div>
            <div><span className="font-display text-2xl text-gradient-gold font-bold">24/7</span><div className="text-muted-foreground">Real support</div></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square w-full max-w-[560px] mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
          <motion.img
            src={orbitCore}
            alt="Digital ToolVerse energy core"
            className="absolute inset-0 m-auto h-2/3 w-2/3 object-contain"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            width={1024}
            height={1024}
          />
          <Orbit size={340} duration={38} items={ring1} />
          <Orbit size={520} duration={55} reverse items={ring2} />
        </motion.div>
      </div>
    </section>
  );
}
