
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
    return (
      <div className={`text-[#222] ${className}`}>
        {children}
      </div>
    );
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
      <div className={`self-stretch flex gap-2 w-8 my-auto ${typeof icon !== 'string' ? '' : `border p-1.5 rounded-[100px] ${getBorderColor()}`}`}>
        {typeof icon === 'string' ? (
          <img
            loading="lazy"
            src={icon}
            className="aspect-[1] object-contain w-5"
            alt=""
          />
        ) : icon}
      </div>
      <div className="text-[#222] text-base font-normal self-stretch flex-1 shrink basis-0 my-auto">
        {children}
      </div>
    </div>
  );
};
