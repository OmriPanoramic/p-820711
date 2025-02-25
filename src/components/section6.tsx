
import OptimizePricingTable from "./OptimizePricingTable";
import VisualizePricingTable from "./VisualizePricingTable";
import PricingCalculator from "./PricingCalculator";
import annotation from "@/assets/Sketch-annotation-element-stroke-line-arrow-spiral-down-5.svg"

export function Section6() {
  return (
    <div className="flex flex-col items-center gap-4 pb-20 w-full">
      <div className="flex flex-col items-center gap-4 mb-[60px]">
        <h3 className="text-sm text-primary">Compare your options</h3>
        <h2 className="mb-4 text-h2 text-center leading-[50px]">What upgrading to Optimize really means</h2>
      </div>
      <div className="relative flex flex-col gap-2 justify-center left-0 md:left-20 lg:-left-40">
              <div className="flex  gap-2 items-start">
                <img src={annotation} alt="annotation" />
                <span className="text-lg font-semibold text-[#1195D6] w-[225px]">
                Upgrade your trial version early and save big!
                </span>
              </div>
          </div>
      <div className="relative flex flex-col lg:flex-row ">
        
        <div className="grow  z-[1] mr-0 lg:grow lg:-mr-5 lg:max-w-[760px]">
          
          <OptimizePricingTable />
        </div>
        <div className="sticky top-4 ml-0 flex-1 self-start py-6 lg:ml-3">
          <VisualizePricingTable />
        </div>
      </div>
      <div className="flex flex-col items-center pt-20 w-full">
        <PricingCalculator />
      </div>
    </div>
  );
}
