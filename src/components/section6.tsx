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

      <div className="relative flex w-full flex-col gap-5 lg:flex-row">
        <div className="grow lg:max-w-[775px] lg:grow" id="OptimizeFeatures">
          <OptimizePricingTable />
        </div>
        <div className="flex-1 self-start">
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
