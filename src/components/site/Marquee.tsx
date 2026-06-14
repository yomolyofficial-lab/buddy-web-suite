const brands = [
  "ChatGPT -30%", "Canva Pro -55%", "Adobe CC -40%", "Cursor -25%",
  "Envato -60%", "Coursera -50%", "Grammarly -70%", "Notion -45%",
  "Midjourney -35%", "NordVPN -65%", "Office 365 -50%", "QuillBot -60%",
];

export function Marquee() {
  return (
    <div className="border-y border-border/60 bg-surface/40 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {[...brands, ...brands].map((b, i) => (
          <span key={i} className="text-sm font-medium text-muted-foreground">
            <span className="text-primary">●</span> {b}
          </span>
        ))}
      </div>
    </div>
  );
}
