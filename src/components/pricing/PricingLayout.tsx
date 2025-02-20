import { PricingCard } from "./PricingCard";
import { PricingCalculator } from "./PricingCalculator";
import { motion } from "motion/react";
import Opt from "@/img/Opt.png";
import Vis from "@/img/Vis.png";

const PlusIcon = () => (
  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F2FCE2]">
    <div className="flex h-[18px] w-[18px] items-center justify-center leading-none">
      <span className="translate-y-[-1px] text-lg text-[#6D6D6D]">+</span>
    </div>
  </div>
);

const optimizeFeatures = [
  {
    text: "Real-time data readings",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
  },
  {
    text: "Unlimited users",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
  },
  {
    text: "Time-view PRO",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/0d40ab35d1d5f21d0d59c96d9ac96abecb187574f20f95510aa8b6610d0984cc",
    beta: true,
    subFeatures: [
      { text: "Advanced presets", showBullet: true },
      { text: "Multiple views", showBullet: true },
      { text: "Better device comparison and benchmarking", showBullet: true },
      {
        text: "Full support for non-electrical meters of ALL kinds",
        showBullet: true,
      },
      { text: "Multi-axis support", showBullet: true },
      {
        text: "Open multiple time-view instances using 'Tabs'",
        showBullet: true,
      },
      { text: "and more...", showBullet: false },
    ],
    subFeaturesClassName: "pl-[48px]",
  },
  {
    text: "Mobile Time-view",
    beta: true,
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/0d40ab35d1d5f21d0d59c96d9ac96abecb187574f20f95510aa8b6610d0984cc",
  },
  {
    text: "Unlimited customizable dashboards",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
  },
  {
    text: "Events & Alerts tagging and annotations",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
  },
  {
    text: "Unlimited Custom Device Categories & types",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/0d40ab35d1d5f21d0d59c96d9ac96abecb187574f20f95510aa8b6610d0984cc",
  },
  {
    text: "Brand new 'Groups' application",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
  },
  {
    text: "5-year historical data",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
  },
  {
    text: "Energy flow application",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
  },
  {
    text: "Manual data export of individual site to CSV",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
  },
  {
    text: "Customized reports",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
  },
  {
    text: "New platform infrastructure & user interface",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/0d40ab35d1d5f21d0d59c96d9ac96abecb187574f20f95510aa8b6610d0984cc",
  },
  {
    text: "Auto data exports - included at no additional cost",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/0d40ab35d1d5f21d0d59c96d9ac96abecb187574f20f95510aa8b6610d0984cc",
  },
  {
    text: "Auto reporting - Included at no additional cost",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/0d40ab35d1d5f21d0d59c96d9ac96abecb187574f20f95510aa8b6610d0984cc",
  },
];

const visualizeFeatures = [
  {
    text: "Real-time data readings",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/5b10347c479ee733405ce46a25c05587ba7090ab9905f0df0eb4c3f1b39759fe",
    variant: "inactive" as const,
  },
  {
    text: "Unlimited users",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/5b10347c479ee733405ce46a25c05587ba7090ab9905f0df0eb4c3f1b39759fe",
    variant: "inactive" as const,
  },
  {
    text: "Energy over time - limited view",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/5b10347c479ee733405ce46a25c05587ba7090ab9905f0df0eb4c3f1b39759fe",
    variant: "inactive" as const,
    subFeatures: [
      {
        text: "Basic view of current, power and voltage for Panoramic sensors only. Limited to up to 4 devices at a time",
        showBullet: false,
      },
    ],
    subFeaturesClassName: "pl-[40px]",
  },
  {
    text: "1 year historical data",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/5b10347c479ee733405ce46a25c05587ba7090ab9905f0df0eb4c3f1b39759fe",
    variant: "inactive" as const,
  },
  {
    text: "1 pre-defined dashboard",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/5b10347c479ee733405ce46a25c05587ba7090ab9905f0df0eb4c3f1b39759fe",
    variant: "inactive" as const,
    subFeatures: [{ text: "Not editable", showBullet: false }],
    subFeaturesClassName: "pl-[32px]",
  },
  {
    text: "Energy flow application",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/5b10347c479ee733405ce46a25c05587ba7090ab9905f0df0eb4c3f1b39759fe",
    variant: "inactive" as const,
  },
  {
    text: "Manual data export of individual site to CSV",
    icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/5b10347c479ee733405ce46a25c05587ba7090ab9905f0df0eb4c3f1b39759fe",
    variant: "inactive" as const,
  },
];

const visualizeAddons = [
  {
    text: "Auto data exports (HTTPS/FTP)",
    icon: <PlusIcon />,
    variant: "highlight" as const,
  },
  {
    text: "Customized reports",
    icon: <PlusIcon />,
    variant: "highlight" as const,
  },
];

export const PricingLayout = () => {
  return (
    <div className="flex w-full flex-col items-center px-4">
      <div className="w-full max-w-[1200px]">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <span className="mb-3 block text-lg text-[#FF6B2C]">
            Compare Your Options
          </span>
          <h1 className="text-center text-[48px] font-medium leading-[72px] tracking-[-0.72px] text-[#222]">
            What Upgrading Really Means
          </h1>
        </div>

        <div className="flex justify-center gap-6 max-md:flex-col">
          <div className="w-[734px] max-w-full">
            <PricingCard
              title="Optimize"
              description="Optimize your energy consumption and reduce your costs with our advanced optimization tools"
              icon={Opt}
              price="$5"
              priceSubtext="per device/month"
              minPrice="Min. $50/mo"
              variant="primary"
              features={optimizeFeatures}
            />
          </div>
          <div className="w-[516px] max-w-full">
            <PricingCard
              title="Visualize"
              description="Visualize your data in a way that makes sense to you"
              icon={Vis}
              price="Free"
              variant="secondary"
              features={visualizeFeatures}
            />
          </div>
        </div>
      </div>
      <div className="mt-[180px] flex w-full justify-center">
        <PricingCalculator />
      </div>
    </div>
  );
};
