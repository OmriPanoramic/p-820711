
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { CountdownTimer } from "./CountdownTimer";

export const PricingCalculator = () => {
  const [sites, setSites] = useState([1]);
  const [inputs, setInputs] = useState(10);
  const basePrice = 50;
  const pricePerInput = 5;
  const totalMonthlyPrice = Math.max(basePrice, sites[0] * inputs * pricePerInput);
  const totalAnnualPrice = totalMonthlyPrice * 12;
  const discountedAnnualPrice = totalAnnualPrice * 0.4;

  return <div className="flex flex-col items-center w-full max-w-[1440px] px-20 pb-20 max-md:px-5">
      <div className="flex w-full gap-20 max-md:flex-col">
        <div className="flex-1">
          <h2 className="text-[40px] font-medium leading-[1.3]">
            Calculate your{" "}
            <span className="text-[#FF6B00]">Optimize</span> package
          </h2>

          <div className="mt-6">
            <div className="text-5xl font-medium">$5</div>
            <div className="text-sm text-[#6D6D6D] mt-1">
              per input/month
              <br />
              Min. $50/month
            </div>
          </div>

          <div className="mt-8">
            <div className="text-base font-medium mb-4">Included features:</div>
            <div className="space-y-3">
              {["Advanced optimization tools", "Team collaboration", "Priority support", "Data export included", "Reports included", "Custom dashboards"].map(feature => <div key={feature} className="flex items-center gap-2">
                  <img src="https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209" alt="" className="w-5 h-5" />
                  <span>{feature}</span>
                </div>)}
            </div>
            <a href="#" className="inline-flex items-center text-[#FF6B00] mt-4 hover:underline">
              Full feature list
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col items-start w-full rounded-xl border border-[#FFEDD4] bg-white shadow-[0px_-2px_8px_-1px_rgba(23,23,23,0.04),0px_14px_40px_-4px_rgba(23,23,23,0.06)] p-8">
            <h3 className="text-xl font-medium mb-8">Configure your plan</h3>

            <div className="space-y-8 w-full">
              <div>
                <label className="text-sm mb-2 block">Number of sites</label>
                <Input type="number" value={sites[0]} onChange={e => setSites([Number(e.target.value)])} className="w-32 text-right" min={1} />
                <Slider value={sites} onValueChange={setSites} max={10} min={1} step={1} className="mt-2" />
              </div>

              <div>
                <label className="text-sm mb-2 block">Number of data inputs</label>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Site 1</span>
                    <Input type="number" value={inputs} onChange={e => setInputs(Number(e.target.value))} className="w-32 text-right" min={1} />
                  </div>
                  <button className="flex h-[32px] px-4 pl-3 items-center justify-center gap-[8px] text-[#FF6B00] border-[1.5px] border-[#EBEBEB] rounded">
                    <span className="text-2xl font-light leading-none">+</span>
                    <span>Add site</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mt-8 -mx-8">
              {/* Save strip */}
              <div className="flex h-[64px] px-8 items-center justify-between bg-[#FFF7ED] w-full">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/eefecd56a897a32835976d67c57d09015a18ddd1b5685d7a336048586db07823" alt="" className="w-5 h-5" />
                  <span className="text-[#FF6B00] font-semibold">Save 60% today</span>
                </div>
                <div className="text-sm text-[#464646]">
                  <span>Offer ends in </span>
                  <CountdownTimer targetDate={new Date("2025-06-30")} />
                </div>
              </div>

              {/* Pricing data section */}
              <div className="flex flex-col px-[32px] gap-8 bg-[#FFFCF9] w-full">
                <div>
                  <div className="text-sm text-[#6D6D6D]">Total annual price</div>
                  <div className="flex justify-between items-baseline">
                    <div className="text-sm text-[#6D6D6D]">
                      ${totalMonthlyPrice}/month
                    </div>
                    <div className="text-xl">
                      ${totalAnnualPrice}
                      <span className="text-sm text-[#6D6D6D]">/year</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm">Your price</div>
                  <div className="flex justify-between items-baseline">
                    <div className="text-sm text-[#6D6D6D]">
                      ${totalMonthlyPrice * 0.4}/month
                    </div>
                    <div className="text-3xl font-medium">
                      ${discountedAnnualPrice}
                      <span className="text-sm font-normal text-[#6D6D6D]">
                        /year
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
