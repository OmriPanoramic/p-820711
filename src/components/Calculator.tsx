import { CountdownTimer } from "./pricing/CountdownTimer";
import { Input } from "./ui/input";
import Slider from "./ui/slider-flow";
import { useState } from "react";
import prize from "../assets/prize.svg";

const Calculator = () => {
  const [deviceCount, setDeviceCount] = useState(1);

  // if deviceCount is let the 50, price pre device id $5
  // if deviceCount is 50-100, price pre device id $4
  // if deviceCount is 100-200, price pre device id $3
  // if deviceCount is 200-300, price pre device id $2
  // if deviceCount is more than 300, price pre device id $1

  const pricePerDevice = deviceCount <= 50 ? 5 : deviceCount <= 100 ? 4 : deviceCount <= 200 ? 3 : deviceCount <= 300 ? 2 : 1;
  const totalPrice = deviceCount * pricePerDevice;

  const totalPricePerYear = totalPrice * 12;
  const totalPricePerMonth = totalPrice / 12;
  //  50% off for 3 years
  const yourPricePerYear = totalPricePerYear * 0.5;
  const yourPricePerMonth = yourPricePerYear / 12;

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
      <div className="w-full shrink-0 pt-10">
        <div className="flex w-full shrink-0 bg-[#FFF7ED] px-7 py-5">
          <div className="flex flex-1 items-center gap-4">
            <div className="flex items-center">
              <img src={prize} alt="prize" className="h-10 w-10" />
            </div>
            <div className="flex flex-col gap-0 pb-1">
              <div className="text-lg text-primary">50% off for 3 years!</div>
              <div className="text-sm text-[#222]">
                Decide in the next 12 days and save
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-[#6D6D6D]">This offer expires in</div>
            <div>
              <CountdownTimer targetDate={new Date(2025, 3, 1)} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 shrink-0 flex-col gap-8 px-8 py-9 self-stretch">
        <div className="flex flex-1 shrink-0 justify-between">
          <div className="flex flex-col gap-1">
            <div className="text-lg text-[#222]">Total annual price</div>
            <div className="text-sm text-[#6D6D6D]">${parseFloat(totalPricePerMonth.toString()).toFixed(2)}/month</div>
          </div>
          <div className="flex flex-row items-baseline gap-1">
            <div className="text-h5 text-[#909090]">${totalPricePerYear}</div>
            <div className="text-lg text-[#909090]">/year</div>
          </div>
        </div>
        <div className="flex flex-1 shrink-0 justify-between">
          <div className="flex flex-col gap-1">
            <div className="text-lg text-[#222]">Your price</div>
            <div className="text-sm text-[#6D6D6D]">${parseFloat(yourPricePerMonth.toString()).toFixed(2)}/month</div>
          </div>
          <div className="flex flex-row items-baseline gap-1">
            <div className="text-h3 text-[#222]">${parseFloat(yourPricePerYear.toString()).toFixed(2)}</div>
            <div className="text-lg text-[#222]">/year</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
