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

    return (
        <div className="flex flex-col items-center w-full max-w-[1440px] px-20 pb-20 max-md:px-5">
            <div className="flex w-full gap-20 max-md:flex-col">
                <div className="flex-1">
                    <h2 className="text-[40px] font-medium leading-[1.3]">
                        Calculate your{" "}
                        <span className="text-[#FF6B00]">Optimize</span> package
                    </h2>

                    <div className="mt-6">
                        <div className="flex items-baseline gap-1">
        <span className="text-[#222] text-[40px] font-medium leading-[130%] font-jakarta" style={{ fontFeatureSettings: "'calt' off" }}>
            $5
        </span>
                            <span className="text-[#222] text-[14px] font-normal leading-[150%] font-jakarta" style={{ fontFeatureSettings: "'liga' off, 'calt' off" }}>
            per device/month (billed annually)
        </span>
                        </div>
                        <div className="text-[#909090] text-xs font-medium leading-[140%] font-jakarta mt-2">
                            Min. $50/month
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="text-sm font-medium text-[#171717] mb-5">Included features:</div>
                        <div className="space-y-4">
                            {[
                                "Advanced optimization tools",
                                "Team collaboration",
                                "Priority support",
                                "Data export included",
                                "Reports included",
                                "Custom dashboards"
                            ].map(feature => (
                                <div key={feature} className="flex items-center gap-4">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-[100px] border border-[rgba(34,34,34,0.10)]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M6.36689 11.9999L2.56689 8.19994L3.51689 7.24994L6.36689 10.0999L12.4836 3.98328L13.4336 4.93328L6.36689 11.9999Z"
                                                fill="#222222"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-sm leading-5 text-[#171717] font-normal">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <a href="#" className="inline-flex items-center text-[#0073BA] mt-4 text-sm font-medium">
                            Full feature list
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1"
                            >
                                <path
                                    d="M7.5 15L12.5 10L7.5 5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex flex-col items-start w-full rounded-xl border border-[#FFEDD4] bg-white shadow-[0px_-2px_8px_-1px_rgba(23,23,23,0.04),0px_14px_40px_-4px_rgba(23,23,23,0.06)] overflow-hidden">
                        <div className="p-8 w-full">
                            <h3 className="text-base font-semibold text-[#222] mb-8 leading-[150%]">Configure your plan</h3>

                            <div className="space-y-8 w-full">
                                <div>
                                    <label className="text-base text-[#171717] mb-2 block">Number of sites</label>
                                    <div className="flex gap-4 items-center">
                                        <Input
                                            type="number"
                                            value={sites[0]}
                                            onChange={e => setSites([Number(e.target.value)])}
                                            className="flex-1 text-left px-3 h-12 border-[#E5E5E5] rounded-lg"
                                            min={1}
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <Slider
                                            value={sites}
                                            onValueChange={setSites}
                                            max={10}
                                            min={1}
                                            step={1}
                                            className="relative flex items-center select-none touch-none w-full"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-base text-[#171717] mb-2 block">Number of devices</label>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-[#171717]">Site 1</span>
                                            <Input
                                                type="number"
                                                value={inputs}
                                                onChange={e => setInputs(Number(e.target.value))}
                                                className="flex-1 text-left px-3 h-12 border-[#E5E5E5] rounded-lg"
                                                min={1}
                                            />
                                        </div>
                                        <button className="flex h-11 px-4 items-center justify-center gap-2 text-[#0085FF] border border-[#E5E5E5] rounded-lg hover:bg-[#F5F5F5] transition-colors">
                                            <span className="text-2xl font-light leading-none">+</span>
                                            <span>Add site</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="flex h-[64px] justify-between items-center bg-[#FFF7ED] w-full px-8">
                                <div className="flex items-center gap-2">
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/eefecd56a897a32835976d67c57d09015a18ddd1b5685d7a336048586db07823"
                                        alt=""
                                        className="w-5 h-5"
                                    />
                                    <span className="text-[#FF6B00] font-semibold">Save 60% today</span>
                                </div>
                                <div className="text-sm flex items-center gap-1">
                                    <span>Offer ends in </span>
                                    <CountdownTimer targetDate={new Date("2025-06-30T23:59:59")} />
                                </div>
                            </div>

                            <div className="flex flex-col p-8 gap-8 w-full bg-[#FFFCF9]">
                                <div>
                                    <div className="text-[#171717] text-base">Total annual price</div>
                                    <div className="flex justify-between items-baseline mt-1">
                                        <div className="text-[#6D6D6D] text-base">
                                            ${totalMonthlyPrice}/month
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-[#6D6D6D] text-xl line-through">
                                                ${totalAnnualPrice}
                                            </span>
                                            <span className="text-[#6D6D6D] text-sm">/year</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-[#171717] text-base">Your price</div>
                                    <div className="flex justify-between items-baseline mt-1">
                                        <div className="text-[#6D6D6D] text-base">
                                            ${totalMonthlyPrice * 0.4}/month
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-[#171717] text-[32px] font-medium">
                                                ${discountedAnnualPrice}
                                            </span>
                                            <span className="text-[#6D6D6D] text-sm font-normal">/year</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};