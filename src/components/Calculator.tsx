import { Input } from "./ui/input";
import  Slider  from "./ui/slider-flow";
import { useState } from "react";

const Calculator = () => {
  const [deviceCount, setDeviceCount] = useState(1);

  return (
    <div className="flex min-w-full max-w-[624px] flex-col items-start rounded-2xl border border-[#FFEDD4] bg-white shadow-[0px_24px_40px_0px_rgba(104,75,37,0.04),_0px_56px_56px_-32px_rgba(104,75,37,0.06),_0px_32px_40px_-24px_rgba(104,75,37,0.05)]">
      <div className="flex flex-col gap-12 self-stretch px-6 py-10">
        <div className="flex flex-1 items-center justify-between gap-2 self-stretch">
          <div className="text-lg text-[#222222]">Number of devices </div>
          <div>
            <Input
              type="number"
              className="flex h-[44px] flex-1 items-center gap-2 border-[#EBEBEB] px-3 outline-none"
              value={deviceCount}
              onChange={(e) => {
                setDeviceCount(Number(e.target.value));
              }}
            />
          </div>
          
        </div>
        <div>
            <Slider
              className="w-full"
              min={1}
              max={500}
              value={[deviceCount]}
              onValueChange={(value) => {
                setDeviceCount(value[0]);
              }}
            />
          </div>
      </div>
    </div>
  );
};

export default Calculator;
