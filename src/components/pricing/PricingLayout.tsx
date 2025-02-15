
import {PricingCard} from "./PricingCard";
import {PricingCalculator} from "./PricingCalculator";

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
            "Advanced presets",
            "Multiple views",
            "Better device comparison and benchmarking",
            "Full support for non-electrical meters",
            "Multi-axis support",
            "Open multiple time-view instances using 'Tabs'",
            "and more...",
        ],
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
        icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/05f3e0c5e6b2601ccd4955eec7a8ecf2d8279cc3232517f49290c22f50450d3d",
        variant: "highlight" as const,
    },
    {
        text: "Customized reports",
        icon: "https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/05f3e0c5e6b2601ccd4955eec7a8ecf2d8279cc3232517f49290c22f50450d3d",
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
                                {text: "Paid add-ons", icon: "", variant: "inactive"},
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
