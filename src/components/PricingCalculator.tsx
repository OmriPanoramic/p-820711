import check from "@/assets/check.svg";
import { Button } from "./ui/button";
import {ChevronRight } from "lucide-react";
import Calculator from "./Calculator";


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
  return (
    <div className="flex w-full flex-col self-stretch lg:flex-row">
      <div className="flex flex-1 flex-col gap-12">
        <h2 className="text-h2 text-[#222222]">
          Calculate your<span className="text-primary"> Optimize </span> savings
        </h2>

        <div className="flex-start border-[#EBEBEB flex max-w-[460px] flex-col rounded-md border">
          <div className="flex flex-col justify-center gap-2 self-stretch px-6 py-5">
            <div className="flex items-baseline gap-1">
              <span className="text-h3 text-[#222222]">$5</span>
              <span className="flex-1 text-lg text-[#222222]">
                per device/month (billed anually)
              </span>
            </div>
            <span className="text-sm text-[#909090]">Min. $50/month</span>
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
            <span className="text-sm text-[#909090]">Ask your partner</span>
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
              <p className="text-sm font-normal text-[#222222]">
                {feature.feature}
              </p>
            </div>
          ))}
          <div>
          <Button variant="ghost" className="p-2" data-fs-track="full-feature-list-button">Full Feature List <ChevronRight className="w-4 h-4" /></Button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-end">
        <Calculator />
      </div>
    </div>
  );
};

export default PricingCalculator;
