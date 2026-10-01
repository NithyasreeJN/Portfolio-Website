import { marqueeTags } from "@/data/content";

export default function Marquee() {
  const row = [...marqueeTags, ...marqueeTags];

  return (
    <div className="overflow-hidden border-b border-border bg-foreground py-3">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="text-xs font-semibold tracking-widest text-background/80"
          >
            {tag} <span className="text-terracotta">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
