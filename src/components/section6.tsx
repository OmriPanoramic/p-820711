import OptimizePricingTable from "./OptimizePricingTable";
import VisualizePricingTable from "./VisualizePricingTable";
import PricingCalculator from "./PricingCalculator";
import annotation from "@/assets/Sketch-annotation-element-stroke-line-arrow-spiral-down-5.svg";

export function Section6() {
  return (
    <div className="flex w-full flex-col items-center gap-4 pb-20">
      <div className="mb-[60px] flex flex-col items-center gap-4">
        <h3 className="text-sm text-primary">Compare your options</h3>
        <h2 className="mb-4 text-center text-h2 leading-[50px]">
          What upgrading to Optimize really means
        </h2>
      </div>
      <div className="relative left-0 flex flex-col justify-center gap-2 md:left-20 lg:-left-40">
        <div className="flex items-start gap-2">
          <img src={annotation} alt="annotation" />
          <span className="w-[225px] text-lg font-semibold text-[#1195D6]">
            Upgrade your trial version early and save big!
          </span>
        </div>
      </div>
      <div className="relative flex w-full flex-col lg:flex-row">
        <div className="z-[1] mr-0 grow lg:-mr-5 lg:max-w-[775px] lg:grow" id="OptimizeFeatures">
          <OptimizePricingTable />
        </div>
        <div className="sticky right-0 top-4 ml-0 flex-1 self-start py-6">
          <VisualizePricingTable />
        </div>
      </div>
      <div
        className="flex w-full flex-col items-center pt-32"
        id="PricingCalculator"
      >
        <PricingCalculator />
      </div>
    </div>
  );
}
