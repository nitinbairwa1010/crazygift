import { Sparkles } from "lucide-react";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" aria-label="CrazyGift home" className="group inline-flex items-center gap-2.5">
      <span className="grid size-9 place-items-center border border-primary/60 bg-primary/10 text-primary transition-transform group-hover:rotate-6">
        <Sparkles className="size-4" aria-hidden="true" />
      </span>
      <span>
        <span className="block font-display text-2xl font-bold leading-none text-secondary-foreground">Crazy<span className="text-primary">Gift</span></span>
        {!compact && <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">Diwali Special Gifts</span>}
      </span>
    </a>
  );
}