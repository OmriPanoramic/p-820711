import { ReactNode } from "react";
import { PricingFeature } from "./PricingFeature";
import { BetaTag } from "../ui/beta-tag";
import { CountdownTimer } from "./CountdownTimer";

interface PricingCardProps {
  title: string;
  description: string;
  icon: string;
  price?: string;
  priceSubtext?: string;
  minPrice?: string;
  features: Array<{
    text: string;
    variant?: "active" | "inactive" | "highlight";
    icon: string;
    subFeatures?: string[];
    beta?: boolean;
  }>;
  variant?: "primary" | "secondary";
  className?: string;
}

export const PricingCard = ({
  title,
  description,
  icon,
  price,
  priceSubtext,
  minPrice,
  features,
  variant = "primary",
  className = "",
}: PricingCardProps) => {
  const cardClasses =
    variant === "primary"
      ? "border-[rgba(255,237,212,1)] shadow-[0px_-2px_8px_-1px_rgba(23,23,23,0.04)]"
      : "border-[rgba(235,235,235,1)]";

  return (
    <article
      className={`bg-white border w-full p-8 rounded-xl ${cardClasses} ${className}`}
    >
      <div className="w-full">
        <header className="flex w-full items-center gap-4 text-2xl text-[rgba(34,34,34,1)] font-medium whitespace-nowrap leading-[1.3]">
          <img
            loading="lazy"
            src={icon}
            className="aspect-[1] object-contain w-14 self-stretch shrink-0 my-auto rounded-[10px]"
            alt={`${title} icon`}
          />
          <h2 className="self-stretch flex-1 shrink basis-[0%] my-auto">
            {title}
          </h2>
        </header>

        <p className="text-[rgba(109,109,109,1)] text-base font-normal leading-7 mt-4">
          {description}
        </p>

        {price && (
          <div className="w-full mt-5">
            <div className="flex w-full gap-2 flex-wrap">
              <div className="flex min-w-60 gap-1 text-[#222] flex-wrap flex-1 shrink basis-[0%]">
                <span className="text-5xl font-medium leading-[1.3]">
                  {price}
                </span>
                <span className="text-sm font-normal flex-1 shrink basis-[0%]">
                  {priceSubtext}
                </span>
              </div>
              {minPrice && (
                <div className="text-[#6D6D6D] text-sm font-normal">
                  {minPrice}
                </div>
              )}
            </div>

            {variant === "primary" && (
              <div className="bg-[rgba(37,31,31,0.04)] border flex min-h-12 w-full items-center gap-3 text-base flex-wrap mt-4 pl-3 pr-4 py-3 rounded-lg border-[rgba(37,31,31,0.08)]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/eefecd56a897a32835976d67c57d09015a18ddd1b5685d7a336048586db07823"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <p className="text-[#222] font-semibold self-stretch flex-1 shrink basis-[0%] my-auto">
                  Get 60% off if you purchase by June 30, 2025
                </p>
                <CountdownTimer targetDate={new Date("2025-06-30")} />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-[rgba(34,34,34,0.1)] flex min-h-px w-full mt-8" />

      <div className="w-full mt-8 pb-2">
        {features.map((feature, index) => (
          <div key={index} className={index > 0 ? "mt-5" : ""}>
            <PricingFeature icon={feature.icon} variant={feature.variant}>
              <div className="flex items-center gap-2">
                <span>{feature.text}</span>
                {feature.beta && <BetaTag />}
              </div>
            </PricingFeature>
            {feature.subFeatures && (
              <div className="w-full gap-4 text-base text-[#909090] font-normal leading-6 mt-1 pl-10">
                {feature.subFeatures.map((subFeature, subIndex) => (
                  <div key={subIndex}>{subFeature}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};
