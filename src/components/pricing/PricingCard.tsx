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
    variant?: "active" | "inactive" | "highlight" | "section-title";
    icon: string | ReactNode;
    subFeatures?: { text: string; showBullet: boolean }[];
    beta?: boolean;
    className?: string;
    subFeaturesClassName?: string;
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
      ? `border-[#FFEDD4] bg-white shadow-[0px_-2px_8px_-1px_rgba(23,23,23,0.04),0px_14px_40px_-4px_rgba(23,23,23,0.06)] 
         [background:linear-gradient(135deg,#FFF7ED_0%,#FFF_100%)]
         [background-image:url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23FFF7ED' fill-opacity='0.4'/%3E%3C/svg%3E")]`
      : "border-[#EBEBEB] bg-white";

  return (
    <article
      className={`border w-full p-8 rounded-xl ${cardClasses} ${className}`}
    >
      <div className="w-full flex flex-col">
        <header className="flex w-full items-center gap-4">
          <div className="w-[56px] h-[56px] flex-shrink-0 flex items-center justify-center">
            <img
              src={icon}
              alt={`${title} icon`}
              width={56}
              height={56}
              className="w-[56px] h-[56px] object-scale-down"
            />
          </div>
          <h2 className="text-[24px] text-[#222] font-medium leading-[1.3]">
            {title}
          </h2>
        </header>

        <div
          className={variant === "secondary" ? "flex flex-col h-[100px]" : ""}
        >
          <p className="text-[rgba(109,109,109,1)] text-base font-normal leading-7 mt-4">
            {description}
          </p>
        </div>

        {price && (
          <div className="w-full mt-5">
            <div className="flex w-full items-end">
              <div className="flex gap-1 text-[#222] items-end">
                <span
                  className={`font-medium leading-[1.3] ${
                    variant === "secondary" ? "text-2xl" : "text-5xl"
                  }`}
                >
                  {price}
                </span>
                <span className="text-sm ml-1 font-normal mb-[6px]">
                  {priceSubtext}
                </span>
              </div>
              {minPrice && (
                <div className="text-[#6D6D6D] text-sm font-normal mb-[6px] ml-auto">
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
                <div className="flex flex-row flex-1 gap-2 justify-between">
                  <div className="flex flex-col gap-2 justify-between">
                    <p className="text-[#222] font-semibold self-stretch flex-1 shrink basis-[0%] my-auto">
                      Get 60% off if you purchase by June 30, 2025
                    </p>
                    <ul className="text-[#6D6D6D] text-sm font-normal disc-list">
                      <li className="font-light text-sm">
                        Price locked for 3 years after purchase
                      </li>
                      <li className="font-light text-sm">
                        30-day money-back guarantee
                      </li>
                    </ul>
                  </div>
                  <CountdownTimer targetDate={new Date("2025-06-30")} />
                </div>
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
              <div className={`text-gray-500 text-sm mt-1 ${feature.subFeaturesClassName || ''}`}>
                {feature.subFeatures.map((subFeature, subIndex) => (
                  <div key={subIndex} className="flex items-center">
                    <div className="w-[16px]">
                      {subFeature.showBullet && <span>•</span>}
                    </div>
                    <span>{subFeature.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};
