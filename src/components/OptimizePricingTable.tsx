import OptimizeIcon from "@/assets/optimize-icon.png";
import prize from "@/assets/prize.svg";
import { CountdownTimer } from "./pricing/CountdownTimer";
import { Button } from "./ui/button";
import check from "@/assets/check.svg";
import deviceCount from "@/assets/deviceCount.png";
import legacyFill from "@/assets/legacy-fill.svg";
import { InfoIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const optimizeFeatures = [
  {
    id: 1,
    feature: "Real-time data readings",
  },
  {
    id: 2,
    feature: "5-year historical data",
  },
  {
    id: 3,
    feature: "Unlimited users",
  },
  {
    id: 4,
    feature: "Energy flows: Map energy sources and consumers",
  },
  {
    id: 5,
    feature: "Manual data export to CSV",
  },
  {
    id: 6,
    feature: "Auto data exports (HTTPS/SFTP)",
  },
  {
    id: 7,
    feature: "Customizable reports for usage, performance and decarbonization",
  },
  {
    id: 8,
    feature: "Mobile application for iOS and Android",
  },
  {
    id: 9,
    feature: "Heatmap: Instant waste identification",
  },
  {
    id: 10,
    feature: "Automated Reports",
  },
  {
    id: 11,
    feature: "Device benchmarking",
  },
];

const newOptimizeFeatures = [
  {
    id: 1,
    feature: "Enhanced, clear user interface with a new, intuitive navigation",
    isNew: true,
    isBeta: false,
    showSoon: false,
  },
  {
    id: 2,
    feature: "Unlimited customizable dashboards",
    isNew: true,
    isBeta: false,
    showSoon: false,
  },
  {
    id: 3,
    feature: "Incident lifecycle management and collaboration",
    isNew: true,
    isBeta: false,
    showSoon: false,
  },
  {
    id: 4,
    feature: "Customizable categories and device types",
    isNew: true,
    isBeta: false,
    showSoon: false,
  },
  {
    id: 5,
    feature: "Schedules: Manage multiple schedules and work shifts",
    isNew: true,
    isBeta: false,
    showSoon: false,
  },
  {
    id: 6,
    feature: "Groups: Create custom groups and apply them to dashboard widgets",
    isNew: true,
    isBeta: false,
    showSoon: false,
  },
  {
    id: 7,
    feature: "Real-time custom alerts",
    isNew: true,
    isBeta: false,
    showSoon: false,
  },
  {
    id: 8,
    feature: "The new Timeview",
    description:
      "Clean and clear interface, multiple tabs with different views, tailored presets library, present and compare any meter, multi-axis support",
    isNew: true,
    isBeta: true,
    showSoon: false,
  },
  {
    id: 9,
    feature: "New automated data export mechanism",
    isNew: true,
    isBeta: false,
    showSoon: false,
  },
  {
    id: 11,
    feature:
      "Unlimited data integrations for sensors & meters (4-20mA, 0-5V, more)",
    isNew: false,
    isBeta: false,
    showSoon: true,
  },
];

const OptimizePricingTable = () => {
  return (
    <div className="relative flex h-full w-full max-w-[775px] flex-col items-start gap-8 overflow-hidden rounded-2xl border border-[#FFEDD4] bg-white shadow-[0px_-2px_8px_-1px_rgba(23,23,23,0.04),0px_14px_40px_-4px_rgba(23,23,23,0.06)]">
      <div className="absolute h-full w-full overflow-hidden opacity-10">
        <div className="absolute left-0 top-[50px] h-[1767px] w-[1767px] shrink-0 rounded-[1767.744px] border border-[#FFD7A8] bg-gradient-to-b from-[rgba(255,144,55,0.56)] to-[rgba(255,247,237,0.20)]" />
        <div className="to-[rgba(255, 144, 55, 0.08)] absolute right-0 top-[-300px] h-[1767px] w-[1767px] shrink-0 rounded-[1767.744px] border border-none bg-gradient-to-b from-[rgba(255,144,55,0.56)]" />
      </div>
      <div className="relative z-10 flex w-full flex-1 flex-col gap-2 px-4 py-10 md:px-8">
        <header className="mt-4 flex w-full items-center gap-4">
          <div className="flex h-[56px] w-[56px] flex-shrink-0 items-center justify-center">
            <img
              src={OptimizeIcon}
              alt={`Optimize icon`}
              width={106}
              height={111}
              className="h-[111px] min-w-[106px] shrink-0"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <h5 className="text-h5 font-medium leading-[1.3] text-[#222]">
              Optimize
            </h5>
            <span className="text-lg font-normal leading-[1.3] text-[#6D6D6D]">
              Optimize energy consumption and reduce costs with advanced tools
            </span>
          </div>
        </header>
        <div className="mt-4 flex flex-col items-baseline gap-4 self-stretch lg:flex-row">
          <div className="text-h2 text-[#222]">$5</div>
          <div className="flex-1 text-lg text-[#222]">per device/month*</div>
        </div>
        <div className="mb-5 flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center text-xs text-[#6D6D6D] md:text-sm">
            Min. $50/month <span className="mx-2">|</span> Find device count{" "}
            <Popover>
              <PopoverTrigger>
                <InfoIcon className="ml-2 h-4 w-4" />
              </PopoverTrigger>
              <PopoverContent className="w-[340px]">
                <div className="flex flex-col items-center gap-4">
                  <div className="text-sm font-bold">
                    You can find the device count in the:
                    <ul className="list-disc text-sm font-normal">
                      <li>Account dashboard - overview KPIs</li>
                      <li>Account dashboard - sites list</li>
                      <li>Site dashboard - in the Summary widget</li>
                    </ul>
                  </div>

                  <div className="w-[300px] overflow-hidden rounded-md">
                    <img src={deviceCount} alt="device count" />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <Button
            data-fs-track="see-full-pricing-button"
            variant="ghost"
            size="sm"
            className="h-5 text-sm"
            onClick={() => {
              const element = document.getElementById("PricingCalculator");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
                const headerOffset = 100; // 16 * 4 = 64px (h-16 class)
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          >
            See full pricing
          </Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-3 rounded-lg border border-[rgba(37,31,31,0.08)] bg-[rgba(37,31,31,0.04)] py-3 pl-3 pr-4 text-base">
          <img
            src={prize}
            className="my-auto aspect-[1] h-[32px] min-w-[32px] shrink-0 self-stretch"
            alt=""
          />
          <div className="flex flex-1 flex-col justify-between gap-2 lg:flex-row">
            <div className="flex flex-col justify-between gap-2">
              <p className="my-auto flex-1 shrink basis-[0%] self-stretch font-semibold text-[#222]">
                Get 50% off if you purchase by June 30, 2025
              </p>
              <ul className="disc-list text-sm font-normal text-[#6D6D6D]">
                <li className="text-sm font-light">
                  Discount secured for 3 years
                </li>
              </ul>
            </div>
            <div className="flex flex-1 items-center justify-center lg:justify-end">
              <CountdownTimer targetDate={new Date("2025-07-31")} />
            </div>
          </div>
        </div>
        <div className="my-5 h-[1px] w-full rounded-lg bg-[#2222221a]" />
        <div className="flex flex-col gap-7">
          {optimizeFeatures.map((feature) => (
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
        </div>
        <div className="my-5 h-[1px] w-full rounded-lg bg-[#2222221a]" />
        <div className="flex flex-col gap-7">
          <span className="text-[16px] font-semibold text-[#222222]">
            New in Optimize
          </span>
          {newOptimizeFeatures.map((feature) => (
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
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <p className="text-lg font-normal leading-[1.3] text-[#222222]">
                    {feature.feature}
                  </p>
                  {feature.isNew && (
                    <span className="flex min-h-[26px] items-center">
                      <span className="flex shrink-0 items-center gap-1 rounded-full bg-[#48b8f021] px-1.5 py-0.5 text-xs font-semibold text-[#1195D6]">
                        <img
                          src={legacyFill}
                          alt="New"
                          className="h-[12px] w-[12px]"
                        />
                        NEW
                      </span>
                    </span>
                  )}
                  {feature.isBeta && (
                    <span className="flex min-h-[26px] items-center">
                      <span className="rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-semibold text-[#464646]">
                        BETA
                      </span>
                    </span>
                  )}
                  {feature.showSoon && (
                    <span className="flex min-h-[26px] items-center">
                      <span className="flex shrink-0 items-center gap-1 rounded-full bg-purple-100 px-1.5 py-0.5 text-xs font-semibold text-[#BE3DD1]">
                        <img
                          src={legacyFill}
                          alt="New"
                          className="h-[12px] w-[12px]"
                          style={{
                            filter:
                              "invert(41%) sepia(74%) saturate(1795%) hue-rotate(256deg) brightness(83%) contrast(96%)",
                          }}
                        />
                        SOON
                      </span>
                    </span>
                  )}
                </div>
                {feature.description && (
                  <p className="text-sm font-normal text-[#909090]">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptimizePricingTable;
