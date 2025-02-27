import VisualizeIcon from "@/assets/visualize-icon.png";
import check from "@/assets/check.svg";
import plus from "@/assets/plus.svg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { InfoIcon } from "lucide-react";

const visualizeFeatures = [
  {
    id: 1,
    feature: "Real-time data readings",
  },
  {
    id: 2,
    feature: "Timeview: basic one view setup",
  },
  {
    id: 3,
    feature: "1 year historical data",
  },
  {
    id: 4,
    feature: "Unlimited users",
  },
  {
    id: 5,
    feature: "1 pre-defined dashboard",
  },
  {
    id: 6,
    feature: "Energy flow application",
  },
  {
    id: 7,
    feature: "Manual data export to CSV of individual sites",
  },
  {
    id: 8,
    feature: "Deployment tool",
  },
];

const paidAddOns = [
  {
    id: 1,
    feature: "Auto data exports (HTTPS/FTP)",
    info: "$1/device per month",
  },
  {
    id: 2,
    feature: "Customized reports",
    info: "$50/report per month regardless of its frequency",
  },
];

function VisualizePricingTable() {
  return (
    <div className="flex w-full flex-col items-start gap-8 rounded-2xl border border-[#EBEBEB] bg-white px-4 py-10 md:px-10">
      <div className="flex flex-col gap-8">
        <header className="flex w-full items-center gap-4">
          <div className="flex h-[56px] w-[56px] flex-shrink-0 items-center justify-center">
            <img
              src={VisualizeIcon}
              alt={`Visualize icon`}
              width={56}
              height={56}
              className="h-[56px] min-w-[56px] shrink-0"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <h5 className="text-h5 font-medium leading-[1.3] text-[#222]">
              Visualize
            </h5>
            <span className="text-lg font-normal leading-[1.3] text-[#6D6D6D]">
              Visualize your data with basic monitoring tools
            </span>
          </div>
        </header>
        <div className="h-8 text-h5 text-[#222]">Free</div>
        <div className="my-1 h-[1px] w-full rounded-lg bg-[#2222221a]" />
        <div className="flex flex-col gap-7">
          {visualizeFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-[16px] self-stretch"
            >
              <div className="flex min-h-[26px] min-w-[26px] items-center justify-center rounded-full border border-[#2222221a]">
                <img
                  src={check}
                  alt="Check"
                  className="h-[18px] w-[18px] text-[#222222]"
                />
              </div>
              <p className="text-lg font-normal leading-[1.3] text-[#222222]">
                {feature.feature}
              </p>
            </div>
          ))}
        </div>
        <div className="my-1 h-[1px] w-full rounded-lg bg-[#2222221a]" />
        <div className="flex flex-col gap-7">
          <span className="text-[16px] font-semibold text-[#222222]">
            Paid add-ons
          </span>
          {paidAddOns.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-[16px] self-stretch"
            >
              <div className="flex min-h-[26px] min-w-[26px] items-center justify-center rounded-full bg-[#afe0cc33]">
                <img
                  src={plus}
                  alt="plus"
                  className="h-[18px] w-[18px] text-[#3C9076]"
                />
              </div>
              <p className="text-lg font-normal leading-[1.3] text-[#222222] flex items-center">
                {feature.feature}{" "}
                <HoverCard>
                  <HoverCardTrigger>
                    <InfoIcon className="ml-2 h-4 w-4 cursor-pointer" />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="text-sm">{feature.info}</div>
                  </HoverCardContent>
                </HoverCard>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VisualizePricingTable;
