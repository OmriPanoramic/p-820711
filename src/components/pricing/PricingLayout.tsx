import {PricingCard} from "./PricingCard";
import {PricingCalculator} from "./PricingCalculator";

const PlusIcon = () => (
  <div className="w-8 h-8 rounded-full bg-[#F2FCE2] flex items-center justify-center">
    <div className="w-[18px] h-[18px] flex items-center justify-center leading-none">
      <span className="text-[#6D6D6D] text-lg translate-y-[-1px]">+</span>
    </div>
  </div>
);

const optimizeFeatures = [
    {
        text: "Real-time data readings",
        icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
    },
    {
        text: "Energy over time",
        icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
    },
    {
        text: "5-year historical data",
        icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
    },
    {
        text: "Unlimited users",
        icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
    },
    {
        text: "Unlimited customizable dashboards",
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
        text: "Auto data exports (HTTPS/FTP)",
        icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
    },
    {
        text: "Customized reports",
        icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/aee02f786175f73269924ea5986d4a4f1ba8cf1583827e54d4eccfe46315e209",
    },
    {
        text: "Events & Alerts tagging and annotations",
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
            { text: "Full support for non-electrical meters", showBullet: true },
            { text: "Multi-axis support", showBullet: true },
            { text: "Open multiple time-view instances using 'Tabs'", showBullet: true },
            { text: "and more...", showBullet: false },
        ],
        subFeaturesClassName: "pl-[24px]"
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
        text: "Energy over time - limited basic view",
        icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/5b10347c479ee733405ce46a25c05587ba7090ab9905f0df0eb4c3f1b39759fe",
        variant: "inactive" as const,
    },
    {
        text: "1 year historical data",
        icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/5b10347c479ee733405ce46a25c05587ba7090ab9905f0df0eb4c3f1b39759fe",
        variant: "inactive" as const,
    },
    {
        text: "Unlimited users",
        icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/5b10347c479ee733405ce46a25c05587ba7090ab9905f0df0eb4c3f1b39759fe",
        variant: "inactive" as const,
    },
    {
        text: "1 pre-defined dashboard",
        icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/5b10347c479ee733405ce46a25c05587ba7090ab9905f0df0eb4c3f1b39759fe",
        variant: "inactive" as const,
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
        <div className="flex flex-col items-center px-[70px] py-[110px] max-md:px-5">
            <div className="w-full max-w-[1440px]">
                <h2 className="text-center text-[28px] font-medium text-[#222] mb-12">
                    Two ways to manage energy
                </h2>

                <div className="flex justify-center gap-6 max-md:flex-col">
                    <div className="w-[734px] max-w-full">
                        <PricingCard
                            title="Optimize"
                            description="Ideal for professionals and for anyone who wants to track, manage, and gain insights into their energy usage"
                            icon="optimize"
                            price="$5"
                            priceSubtext="per device/month (billed annually)"
                            minPrice="Min. $50/month"
                            features={optimizeFeatures}
                            className="bg-[#FFF7ED]"
                        />
                    </div>
                    <div className="w-[516px] max-w-full">
                        <PricingCard
                            title="Visualize"
                            description="Suitable for small, basic businesses for simple daily electricity consumption tracking"
                            icon="visualize"
                            price="Free"
                            features={[
                                ...visualizeFeatures,
                                {
                                    text: "",
                                    icon: "",
                                    variant: "section-title" as const,
                                    className: "h-[1px] bg-[#EBEBEB] w-full mt-8"
                                },
                                {
                                    text: "Paid add-ons",
                                    icon: "",
                                    variant: "section-title" as const,
                                    className: "text-[#222] text-base font-[600] leading-[150%] font-jakarta mt-6 mb-6",
                                    style: { fontFeatureSettings: "'liga' off, 'calt' off" }
                                },
                                {
                                    text: "",
                                    icon: "",
                                    variant: "section-title" as const,
                                    className: "h-[1px] bg-[#EBEBEB] w-full"
                                },
                                ...visualizeAddons,
                            ]}
                            variant="secondary"
                            className="border border-[#EBEBEB]"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-[180px] w-full">
                <PricingCalculator/>
            </div>
        </div>
    );
};
