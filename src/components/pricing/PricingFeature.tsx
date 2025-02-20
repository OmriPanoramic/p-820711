import { ReactNode } from "react";

interface PricingFeatureProps {
  icon: string | ReactNode;
  children: ReactNode;
  variant?: "active" | "inactive" | "highlight" | "section-title";
  className?: string;
}

export const PricingFeature = ({
  icon,
  children,
  variant = "active",
  className = "",
}: PricingFeatureProps) => {
  if (variant === "section-title") {
    return <div className={`text-[#222] ${className}`}>{children}</div>;
  }

  const getBorderColor = () => {
    switch (variant) {
      case "inactive":
        return "border-[rgba(213,213,213,1)]";
      case "highlight":
        return "border-transparent";
      default:
        return "border-[rgba(34,34,34,0.1)]";
    }
  };

  return (
    <div className={`flex w-full items-center gap-4 ${className}`}>
      <div
        className={`my-auto flex w-8 gap-2 self-stretch ${typeof icon !== "string" ? "" : `rounded-[100px] border p-1.5 ${getBorderColor()}`}`}
      >
        {typeof icon === "string" ? (
          <img
            loading="lazy"
            src={icon}
            className="aspect-[1] w-5 object-contain"
            alt=""
          />
        ) : (
          icon
        )}
      </div>
      <div className="my-auto flex-1 shrink basis-0 self-stretch text-base font-normal text-[#222]">
        {children}
      </div>
    </div>
  );
};
