import { ReactNode } from "react";

interface PricingFeatureProps {
  icon: string;
  children: ReactNode;
  variant?: "active" | "inactive" | "highlight";
  className?: string;
}

export const PricingFeature = ({
  icon,
  children,
  variant = "active",
  className = "",
}: PricingFeatureProps) => {
  const getBorderColor = () => {
    switch (variant) {
      case "inactive":
        return "border-[rgba(213,213,213,1)]";
      case "highlight":
        return "border-[rgba(34,34,34,0.1)]";
      default:
        return "border-[rgba(34,34,34,0.1)]";
    }
  };

  const getIconBgColor = () => {
    switch (variant) {
      case "inactive":
        return "bg-white";
      case "highlight":
        return "bg-[rgba(175,224,204,0.2)]";
      default:
        return "";
    }
  };

  return (
    <div className={`flex w-full items-center gap-4 flex-wrap ${className}`}>
      <div
        className={`border self-stretch flex gap-2 w-8 my-auto p-1.5 rounded-[100px] ${getBorderColor()} ${getIconBgColor()}`}
      >
        <img
          loading="lazy"
          src={icon}
          className="aspect-[1] object-contain w-5"
          alt=""
        />
      </div>
      <div className="text-[#222] text-base font-normal self-stretch flex-1 shrink basis-3 my-auto">
        {children}
      </div>
    </div>
  );
};
