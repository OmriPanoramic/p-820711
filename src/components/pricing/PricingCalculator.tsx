import { Input } from "@/components/ui/input";
import Slider from "@/components/ui/slider-flow";
import clsx from "clsx";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { CountdownTimer } from "./CountdownTimer";
import NumberFlow from "@number-flow/react";

const PRICING_CONFIG = {
  BASE_PRICE: 50,
  PRICE_PER_INPUT: 5,
  ANNUAL_DISCOUNT: 0.4, // 60% off
  INCLUDED_FEATURES: [
    "Advanced optimization tools",
    "Team collaboration",
    "Priority support",
    "Data export included",
    "Reports included",
    "Custom dashboards",
  ],
} as const;

export const PricingCalculator = () => {
  const [sites, setSites] = useState([1]);
  const [inputs, setInputs] = useState<number[]>([10]);

  const handleInputChange = (index: number, value: number) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const totalMonthlyPrice = Math.max(
    PRICING_CONFIG.BASE_PRICE,
    inputs.reduce((sum, input) => sum + input, 0) *
      PRICING_CONFIG.PRICE_PER_INPUT
  );
  const totalAnnualPrice = totalMonthlyPrice * 12;
  const discountedAnnualPrice =
    totalAnnualPrice * PRICING_CONFIG.ANNUAL_DISCOUNT;
  const discountedMonthlyPrice =
    totalMonthlyPrice * PRICING_CONFIG.ANNUAL_DISCOUNT;

  const endDate = new Date("2025-06-30T23:59:59");
  const today = new Date();
  const daysRemaining = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="flex flex-col items-center w-full max-w-[1440px] px-4 sm:px-6 lg:px-20 pb-10 sm:pb-20">
      <div className="flex w-full gap-8 lg:gap-20 flex-col lg:flex-row">
        <PricingFeatures />
        <PricingConfigurator
          sites={sites}
          setSites={setSites}
          inputs={inputs}
          setInputs={setInputs}
          totalMonthlyPrice={totalMonthlyPrice}
          totalAnnualPrice={totalAnnualPrice}
          discountedMonthlyPrice={discountedMonthlyPrice}
          discountedAnnualPrice={discountedAnnualPrice}
        />
      </div>
    </div>
  );
};

const PricingFeatures = () => (
  <div className="flex-1">
    <h2 className="text-[32px] lg:text-[40px] font-medium leading-[1.3]">
      Calculate your <span className="text-[#FF6B00]">Optimize</span> package
    </h2>

    <div className="mt-6">
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span
            className="text-[#222] text-[40px] font-medium leading-[130%] font-jakarta"
            style={{ fontFeatureSettings: "'calt' off" }}
          >
            ${PRICING_CONFIG.PRICE_PER_INPUT}
          </span>
          <span
            className="text-[#222] text-[14px] font-normal leading-[150%] ml-1"
            style={{ fontFeatureSettings: "'liga' off, 'calt' off" }}
          >
            per device/month (billed annually)
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[#909090] text-xs font-normal leading-[140%] mt-1">
            Min. ${PRICING_CONFIG.BASE_PRICE}/month
          </span>
          <Tooltip>
            <TooltipTrigger>
              <svg
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#909090] mt-1"
              >
                <path
                  d="M6 1C3.2385 1 1 3.2385 1 6C1 8.7615 3.2385 11 6 11C8.7615 11 11 8.7615 11 6C11 3.2385 8.7615 1 6 1ZM6.6 8.5H5.4V5.5H6.6V8.5ZM6.6 4.5H5.4V3.5H6.6V4.5Z"
                  fill="currentColor"
                />
              </svg>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="max-w-[280px]">
              For multi-sites, where some or all sites are billed together (same
              renewal date) the min $50/month is on the combined sites (not per
              site)
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>

    <FeatureList features={PRICING_CONFIG.INCLUDED_FEATURES} />
  </div>
);

interface PricingConfiguratorProps {
  sites: number[];
  setSites: (sites: number[]) => void;
  inputs: number[];
  setInputs: (inputs: number[]) => void;
  totalMonthlyPrice: number;
  totalAnnualPrice: number;
  discountedMonthlyPrice: number;
  discountedAnnualPrice: number;
}

const PricingConfigurator = ({
  sites,
  setSites,
  inputs,
  setInputs,
  totalMonthlyPrice,
  totalAnnualPrice,
  discountedMonthlyPrice,
  discountedAnnualPrice,
}: PricingConfiguratorProps) => (
  <div className="flex flex-col items-start w-full rounded-xl border max-w-[665px] min-w-[480px] border-[#FFEDD4] bg-white shadow-[0px_24px_40px_0px_rgba(104,75,37,0.04),0px_56px_56px_-32px_rgba(104,75,37,0.06),0px_32px_40px_-24px_rgba(104,75,37,0.05)] overflow-hidden">
    <ConfigurationSection
      sites={sites}
      setSites={setSites}
      inputs={inputs}
      setInputs={setInputs}
    />
    <PricingSummary
      totalMonthlyPrice={totalMonthlyPrice}
      totalAnnualPrice={totalAnnualPrice}
      discountedMonthlyPrice={discountedMonthlyPrice}
      discountedAnnualPrice={discountedAnnualPrice}
    />
  </div>
);

const FeatureList = ({ features }: { features: readonly string[] }) => (
  <div className="mt-8">
    <div className="text-sm font-medium text-[#171717] mb-5">
      Included features:
    </div>
    <div className="space-y-4">
      {features.map((feature) => (
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
    <a
      href="#"
      className="inline-flex items-center text-[#0073BA] mt-4 text-sm font-medium"
    >
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
);

interface ConfigurationSectionProps {
  sites: number[];
  setSites: (sites: number[]) => void;
  inputs: number[];
  setInputs: (inputs: number[]) => void;
}

const ConfigurationSection = ({
  sites,
  setSites,
  inputs,
  setInputs,
}: ConfigurationSectionProps) => {
  const handleAddSite = () => {
    if (sites.length >= 10) return; // Prevent adding more than 10 sites
    setSites([...sites, 1]);
    setInputs([...inputs, 10]);
  };

  const handleRemoveSite = (index: number) => {
    const newSites = sites.filter((_, i) => i !== index);
    const newInputs = inputs.filter((_, i) => i !== index);
    setSites(newSites);
    setInputs(newInputs);
  };

  const handleInputChange = (index: number, value: number) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const isMultiSite = sites.length <= 10;

  return (
    <div className="flex flex-col w-full">
      <h3 className="text-[16px] font-semibold text-[#222] font-jakarta leading-[150%] p-4 sm:p-8">
        Configure your plan
      </h3>

      <div className="flex flex-col px-4 sm:px-8 gap-8 sm:gap-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-4 sm:gap-0">
          <label className="text-base text-[#171717]">Number of sites</label>
          <Input
            type="number"
            value={sites.length}
            onChange={(e) => {
              const count = Math.max(1, Number(e.target.value));
              setSites(Array(count).fill(1));
              if (count > 10) {
                setInputs([inputs[0] || 10]);
              } else {
                setInputs(Array(count).fill(10));
              }
            }}
            className="w-full sm:w-[180px] h-[40px] text-center px-8 border-[#E5E5E5] rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            min={1}
          />
        </div>
        <div className="flex items-center">
          <Slider
            className="w-full"
            min={1}
            max={100}
            value={[sites.length]}
            onValueChange={(value) => {
              setSites(Array(value[0]).fill(1));
              if (value[0] > 10) {
                setInputs([inputs[0] || 10]);
              } else {
                setInputs(Array(value[0]).fill(10));
              }
            }}
          />
        </div>
      </div>

      <div className="flex flex-col px-4 sm:px-8 pb-4 mt-[32px] sm:pb-8 gap-6">
        <label className="text-base text-[#171717]">
          Number of data inputs
        </label>
        <div className="flex flex-col gap-6 w-full">
          {isMultiSite ? (
            sites.map((_, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center w-full gap-4 sm:gap-0"
              >
                <span className="text-[#171717] sm:mr-auto">
                  Site {index + 1}
                </span>
                <div className="flex items-center w-full sm:w-auto">
                  <Input
                    type="number"
                    value={inputs[index]}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        Math.max(1, Number(e.target.value))
                      )
                    }
                    className="w-full sm:w-[180px] h-[40px] text-center px-8 border-[#E5E5E5] rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    min={1}
                  />
                  {sites.length > 1 && (
                    <button
                      onClick={() => handleRemoveSite(index)}
                      className="text-[#6D6D6D] hover:text-[#222] transition-colors ml-4"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 5L5 15M5 5L15 15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center w-full gap-4 sm:gap-0">
              <span className="text-[#171717] sm:mr-auto">
                Total number of devices
              </span>
              <Input
                type="number"
                value={inputs[0]}
                onChange={(e) =>
                  setInputs([Math.max(1, Number(e.target.value))])
                }
                className="w-full sm:w-[180px] h-[40px] text-right px-3 border-[#E5E5E5] rounded-lg"
                min={1}
              />
            </div>
          )}
          {isMultiSite && sites.length < 10 && (
            <button
              onClick={handleAddSite}
              className="flex h-[40px] px-[16px] pl-[12px] items-center justify-center gap-[8px] text-[#0073BA] border-[1.5px] border-[#EBEBEB] rounded-[4px] hover:bg-[#F5F5F5] transition-colors self-start"
            >
              <span className="text-[#0073BA] text-2xl font-light leading-none translate-y-[-2px] inline-flex">
                +
              </span>
              <span
                className="text-[#0073BA] text-[14px] font-semibold leading-[150%] font-jakarta"
                style={{ fontFeatureSettings: "'liga' off, 'calt' off" }}
              >
                Add site
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

interface PricingSummaryProps {
  totalMonthlyPrice: number;
  totalAnnualPrice: number;
  discountedMonthlyPrice: number;
  discountedAnnualPrice: number;
}

const PricingSummary = ({
  totalMonthlyPrice,
  totalAnnualPrice,
  discountedMonthlyPrice,
  discountedAnnualPrice,
}: PricingSummaryProps) => {
  const endDate = new Date("2025-06-30T23:59:59");
  const today = new Date();
  const daysRemaining = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="w-full">
      <div className="flex flex-col bg-[#FFF7ED] w-full px-8 py-4">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/eefecd56a897a32835976d67c57d09015a18ddd1b5685d7a336048586db07823"
            alt=""
            className="w-6 h-6"
          />
          <div className="flex flex-col">
            <span className="text-[#FF6B00] text-lg font-semibold">Save 60% today</span>
            <span className="text-[#222222] text-sm">
              Decide in the next {daysRemaining} days and save!
            </span>
          </div>
          <div className="ml-auto">
            <CountdownTimer targetDate={endDate} />
          </div>
        </div>
      </div>

      <div className="flex flex-col p-8 gap-8 w-full bg-[#FFFCF9]">
        <div>
          <div className="text-[#171717] text-base">Total annual price</div>
          <div className="flex justify-between items-baseline mt-1">
            <div className="text-[#6D6D6D] text-base relative">
              <NumberFlow
                value={totalMonthlyPrice}
                suffix="/month"
                className="line-through"
              />
              <div className="absolute inset-0 w-full h-[1px] top-1/2 -translate-y-1/2 bg-[#6D6D6D]" />
            </div>
            <div className="flex items-center gap-1 relative">
              <span className="text-[#6D6D6D] text-xl">
                <NumberFlow value={totalAnnualPrice} />
              </span>
              <span className="text-[#6D6D6D] text-sm">/year</span>
              <div className="absolute inset-0 w-full h-[1px] top-1/2 -translate-y-1/2 bg-[#6D6D6D]" />
            </div>
          </div>
        </div>

        <div>
          <div className="text-[#171717] text-base">Your price</div>
          <div className="flex justify-between items-baseline mt-1">
            <div className="text-[#6D6D6D] text-base">
              <NumberFlow value={discountedMonthlyPrice} />
              /month
            </div>
            <div className="flex items-baseline gap-1 ">
              <span className="text-[#171717] text-[32px] font-medium">
                <NumberFlow value={discountedAnnualPrice} />
              </span>
              <span className="text-[#6D6D6D] text-sm font-normal">/year</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
