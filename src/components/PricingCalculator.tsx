import check from "@/assets/check.svg";
import { Button } from "./ui/button";
import { ChevronRight, InfoIcon } from "lucide-react";
import Calculator from "./Calculator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { UpgradeModal } from "./UpgradeModal";

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
    id: 7,
    feature: "Continuous innovation and visionary roadmap",
  },
];

const PricingCalculator = () => {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  
  const scrollToOptimizeFeatures = () => {
    const optimizeFeaturesSection = document.getElementById("OptimizeFeatures");
    if (optimizeFeaturesSection) {
      optimizeFeaturesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-full flex-col self-stretch lg:flex-row">
      <div className="flex flex-1 flex-col gap-12">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-h2 text-[#222222]">
            Panoramic <span className="text-primary">Optimize</span> Pricing
          </h2>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-5">
          <div className="flex flex-1 items-start justify-start">
            <div className="flex-start flex w-full flex-col overflow-hidden rounded-xl border border-[#FFEDD4]">
              <div className="self-stretc flex flex-col justify-center gap-2 px-6 py-5">
                <div className="flex items-baseline gap-1">
                  <span className="text-h3 text-[#222222]">$5</span>
                  <span className="flex-1 text-lg text-[#222222]">
                    per device/month, per site
                  </span>
                </div>
                <span className="flex items-center gap-1 text-sm text-[#909090]">
                  Minimum quantity applies
                </span>
              </div>
              <div className="relative h-[1px] w-full bg-[#FFEDD4]">
                <div className="absolute left-1/2 top-1/2 flex h-[20px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[100px] border border-[#EBEBEB] bg-[#fffbf8] px-4 pb-1 text-sm text-[#909090]">
                  or
                </div>
              </div>
              <div className="flex items-baseline gap-2 self-stretch px-6 py-5">
                <span className="text-[20px] text-[#222222]">1%</span>
                <span className="flex-1 text-sm text-[#222222]">
                  of your measured consumption
                  <Popover>
                    <PopoverTrigger>
                      <InfoIcon className="ml-2 h-4 w-4 cursor-pointer text-[#6D6D6D]" />
                    </PopoverTrigger>
                    <PopoverContent className="w-[370px]">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <div>
                              <p className="flex items-center gap-2 font-semibold">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F5F5F5] text-sm font-semibold text-[#6D6D6D]">
                                  1
                                </span>
                                Monthly energy consumption
                              </p>
                              <p className="ml-7 text-sm font-light text-[#6D6D6D]">
                                Avg measured usage over past 12 months
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div>
                              <p className="flex gap-2 font-semibold">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F5F5F5] text-sm font-semibold text-[#6D6D6D]">
                                  2
                                </span>
                                1% of consumption applied
                              </p>
                              <p className="ml-7 text-sm font-light text-[#6D6D6D]">
                                Contributes to Optimize plan price
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div>
                              <p className="flex gap-2 font-semibold">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F5F5F5] text-sm font-semibold text-[#6D6D6D]">
                                  3
                                </span>
                                Assigned rate: $0.15 per kWh
                              </p>
                              <p className="ml-7 text-sm font-light text-[#6D6D6D]">
                                Cost = kWh × $0.15
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 rounded-md bg-gray-100 p-3">
                          <p className="font-semibold">Example:</p>
                          <p className="text-sm text-[#6D6D6D]">
                            1% of 34,000 kWh = 340 × $0.15 = $51/month
                          </p>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center border-t border-[#FFEDD4] bg-gradient-to-br from-[#e6f7f5] via-[#fffbf8] to-[#ffebd8] p-12">
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-sm text-[#6D6D6D]">
                    For loyal customer limited time offer:
                  </p>
                  <button 
                    className="flex h-[40px] items-center justify-center gap-2 self-stretch rounded bg-[#FF7110] px-4 text-white"
                    onClick={() => setIsUpgradeModalOpen(true)}
                    data-fs-track="contact-support-button"
                  >
                    Contact your Support Provider
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-end">
            <div className="flex flex-col gap-7">
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
                <Button
                  variant="ghost"
                  className="p-2"
                  data-fs-track="full-feature-list-button"
                  onClick={scrollToOptimizeFeatures}
                >
                  Full Feature List <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
      />
    </div>
  );
};

export default PricingCalculator;
