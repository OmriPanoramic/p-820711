
import OptimizePricingTable from "./OptimizePricingTable";
import VisualizePricingTable from "./VisualizePricingTable";
import PricingCalculator from "./PricingCalculator";

export function Section6() {
  return (
    <div className="flex flex-col items-center gap-4 pb-20 w-full">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-sm text-primary">Compare your options</h3>
        <h2 className="mb-4 text-h2 text-center leading-[50px]">What upgrading to Optimize really means</h2>
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
