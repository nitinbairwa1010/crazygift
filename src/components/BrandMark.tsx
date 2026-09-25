import logoAsset from "@/assets/crazygift-logo.jpeg.asset.json";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" aria-label="CrazyGift home" className="group inline-flex items-center">
      <img
        src={logoAsset.url}
        alt="CrazyGift"
        className={compact ? "h-10 w-auto object-contain" : "h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"}
      />
    </a>
  );
}