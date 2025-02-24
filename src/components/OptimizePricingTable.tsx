import OptimizeIcon from "@/assets/optimize-icon.png";
import prize from "@/assets/prize.svg";
import { CountdownTimer } from "./pricing/CountdownTimer";
import { Button } from "./ui/button";

const OptimizePricingTable = () => {
  return (
    <div className="relative flex h-full flex-col items-start gap-8 overflow-hidden rounded-2xl border border-[#FFEDD4] bg-white shadow-[0px_-2px_8px_-1px_rgba(23,23,23,0.04),0px_14px_40px_-4px_rgba(23,23,23,0.06)]">
      <div className="absolute h-full w-full overflow-hidden opacity-10">
        <div className="absolute left-0 top-[50px] h-[1767px] w-[1767px] shrink-0 rounded-[1767.744px] border border-[#FFD7A8] bg-gradient-to-b from-[rgba(255,144,55,0.56)] to-[rgba(255,247,237,0.20)]" />
        <div className="to-[rgba(255, 144, 55, 0.08)] absolute right-0 top-[-300px] h-[1767px] w-[1767px] shrink-0 rounded-[1767.744px] border border-none bg-gradient-to-b from-[rgba(255,144,55,0.56)]" />
      </div>
      <div className="relative z-10 flex w-full flex-1 flex-col gap-7 p-10 pb-12">
        <header className="flex w-full items-center gap-4">
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
        <div className="flex flex-row items-baseline gap-4 self-stretch">
          <div className="text-h2 text-[#222]">$5</div>
          <div className="flex-1 text-lg text-[#222]">per device/month*</div>
          <div className="text-lg text-[#6D6D6D]">Min. $50/month</div>
          <Button variant="ghost" className="text-sm">See full pricing</Button>
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
                  Price locked for 3 years after purchase
                </li>
              </ul>
            </div>
            <div className="flex flex-1 items-center justify-center lg:justify-end">
              <CountdownTimer targetDate={new Date("2025-06-30")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizePricingTable;
