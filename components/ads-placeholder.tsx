interface AdsPlaceholderProps {
  size?: "banner" | "sidebar" | "inline";
  className?: string;
}

export function AdsPlaceholder({
  size = "banner",
  className = "",
}: AdsPlaceholderProps) {
  const dimensions = {
    banner: "h-24 md:h-28",
    sidebar: "h-64 w-full",
    inline: "h-20",
  };

  return (
    <div
      className={`ad-placeholder ${dimensions[size]} ${className}`}
      aria-label="Advertisement space"
    >
      <span className="text-xs">Ad Space</span>
    </div>
  );
}
