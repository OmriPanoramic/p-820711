import check from "@/assets/check.svg";
import { Button } from "./ui/button";
import {ChevronRight, InfoIcon } from "lucide-react";
import Calculator from "./Calculator";
import { Info } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";


const features = [
  {
    id: 1,
    feature: "Enhanced user experience",
  },
  {
    id: 2,
    feature: "Improved performance and security",
  },
  {
    id: 3,
    feature: "Smarter energy intelligence",
  },
  {
    id: 4,
    feature: "Empowered team performance",
  },
  {
    id: 5,
    feature: "End-to-end personalization",
  },
  {
    id: 6,
    feature: "Superior support",
  },
  {
    id: 7,
    feature: "Continuous innovation and visionary roadmap",
  },
];

const PricingCalculator = () => {

  const scrollToOptimizeFeatures = () => {
    const optimizeFeaturesSection = document.getElementById("OptimizeFeatures");
    if (optimizeFeaturesSection) {
      optimizeFeaturesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-full flex-col self-stretch lg:flex-row">
      <div className="flex flex-1 flex-col gap-12">
        <div>
        <span className="text-sm text-[#909090]">Special offer for Panoramic Optimize trial customers</span>
        <h2 className="text-h2 text-[#222222] max-w-[460px]">
          Calculate your<span className="text-primary"> Optimize </span> savings
        </h2></div>

        <div className="flex-start border-[#EBEBEB flex max-w-[460px] flex-col rounded-md border">
          <div className="flex flex-col justify-center gap-2 self-stretch px-6 py-5">
            <div className="flex items-baseline gap-1">
              <span className="text-h3 text-[#222222]">$5</span>
              <span className="flex-1 text-lg text-[#222222]">
                per device/month (billed anually)
              </span>
            </div>
            <span className="text-sm text-[#909090] flex items-center gap-1">Min. $50/month <HoverCard>
              <HoverCardTrigger>
                <InfoIcon className="ml-2 h-4 w-4 cursor-pointer" />
              </HoverCardTrigger>
              <HoverCardContent className="w-[340px]">
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-semibold">Pricing tiers:</h3>
                  <div className="w-full">
                    <div className="grid grid-cols-2 bg-gray-100 p-2">
                      <div className="font-medium text-xs  text-[#6D6D6D]">No. of devices</div>
                      <div className="font-medium text-xs text-[#6D6D6D]">Price per device</div>
                    </div>
                    <div className="grid grid-cols-2 border-b p-2">
                      <div className="text-xs text-[#222]">1 - 49</div>
                      <div className="text-xs text-[#222]">$5</div>
                    </div>
                    <div className="grid grid-cols-2 border-b p-2">
                      <div className="text-xs text-[#222]">50 - 99</div>
                      <div className="text-xs text-[#222]">$4</div>
                    </div>
                    <div className="grid grid-cols-2 border-b p-2">
                      <div className="text-xs text-[#222]">100 - 199</div>
                      <div className="text-xs text-[#222]">$3</div>
                    </div>
                    <div className="grid grid-cols-2 border-b p-2">
                      <div className="text-xs text-[#222]">200 - 299</div>
                      <div className="text-xs text-[#222]">$2</div>
                    </div>
                    <div className="grid grid-cols-2 border-b p-2">
                      <div className="text-xs text-[#222]">300+</div>
                      <div className="text-xs text-[#222]">$1</div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-md mt-2">
                    <p className="font-semibold">Multi-site accounts:</p>
                    <p className="text-sm">When sites are billed together, the $50/month minimum applies to the combined total, not to each site individually</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard></span>
          </div>
          <div className="relative h-[1px] w-full bg-[#EBEBEB]">
            <div className="absolute left-1/2 top-1/2 flex h-[20px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[100px] border border-[#EBEBEB] bg-[#fffbf8] px-4 pb-1 text-sm text-[#909090]">
              or
            </div>
          </div>
          <div className="flex gap-2 self-stretch px-6 py-5 items-baseline">
            <span className="text-[20px] text-[#222222]">1%</span>
            <span className="text-sm text-[#222222] flex-1">
              of your measured consumption
            </span>
            <span className="text-sm text-[#909090]">ask your partner</span>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <span className="text-[16px] font-semibold text-[#222222]">
          Enjoy:
          </span>
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-[16px] self-stretch"
            >
              <div className="flex min-h-[26px] min-w-[26px] items-center justify-center rounded-full border border-[#2222221a]">
                <img
                  src={check}
                  alt="Check"
                  className="h-[18px] w-[18px] text-[#222222]"
                />
              </div>
              <p className="text-lg font-normal text-[#222222]">
                {feature.feature}
              </p>
            </div>
          ))}
          <div>
          <Button variant="ghost" className="p-2" data-fs-track="full-feature-list-button" onClick={scrollToOptimizeFeatures}>Full Feature List <ChevronRight className="w-4 h-4" /></Button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-end mt-20 md:mt-0">
        <Calculator />
      </div>
    </div>
  );
};

export default PricingCalculator;
