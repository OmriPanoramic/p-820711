import { CountdownTimer } from "./pricing/CountdownTimer";
import { Input } from "./ui/input";
import Slider from "./ui/slider-flow";
import { useState } from "react";
import prize from "../assets/prize.svg";
import NumberFlow from "@number-flow/react";

const Calculator = () => {
  const [deviceCount, setDeviceCount] = useState(10);

  // Validate and clean input
  //const validatedDeviceCount = Math.max(1, Math.floor(Number(deviceCount) || 0));

  // Pricing tiers with correct boundaries
  const pricePerDevice =
    deviceCount < 50
      ? 5
      : deviceCount < 100
        ? 4
        : deviceCount < 200
          ? 3
          : deviceCount < 300
            ? 2
            : 1;

  // Apply minimum price of $50/month
  const totalPrice = Math.max(50, deviceCount * pricePerDevice);

  const totalPricePerYear = totalPrice * 12;
  const totalPricePerMonth = totalPrice;
  //  50% off for 3 years
  const yourPricePerYear = totalPricePerYear * 0.5;
  const yourPricePerMonth = yourPricePerYear / 12;

  const changeDeviceCount = (value: number) => {
    // device can't be less than 1
    if (value < 1) {
      value = 1;
    }
    setDeviceCount(value);
  };

  return (
    <div className="flex min-w-full max-w-[624px] flex-col items-start overflow-hidden rounded-2xl border border-[#FFEDD4] bg-white shadow-[0px_24px_40px_0px_rgba(104,75,37,0.04),_0px_56px_56px_-32px_rgba(104,75,37,0.06),_0px_32px_40px_-24px_rgba(104,75,37,0.05)]">
      <div className="flex flex-col gap-12 self-stretch px-6 py-10">
        <div className="flex flex-1 flex-col items-start justify-between gap-2 self-stretch sm:flex-row sm:items-center">
          <div className="text-lg text-[#222222]">Number of devices</div>
          <div className="w-full sm:w-auto">
            <Input
              type="number"
              className="flex h-[44px] w-full max-w-full flex-1 items-center gap-2 border-[#EBEBEB] px-3 outline-none sm:w-auto"
              value={deviceCount}
              min={1}
              data-fs-track="device-count-input"
              onChange={(e) => {
                changeDeviceCount(Number(e.target.value));
              }}
            />
          </div>
        </div>
        <div>
          <Slider
            className="w-full"
            min={1}
            max={500}
            data-fs-track="slider"
            value={[deviceCount]}
            onValueChange={(value) => {
              changeDeviceCount(value[0]);
            }}
          />
        </div>
      </div>
      <div className="w-full shrink-0 pt-10">
        <div className="flex w-full shrink-0 flex-col items-center bg-[#FFF7ED] px-7 py-5 md:flex-row md:items-start">
          <div className="flex flex-1 items-center gap-4">
            <div className="flex items-center">
              <img src={prize} alt="prize" className="h-10 w-10" />
            </div>
            <div className="flex flex-col gap-0 pb-1">
              <div className="text-lg text-primary">50% off for 3 years!</div>
              <div className="text-sm text-[#222]">
                Decide in the next{" "}
                {Math.ceil(
                  (new Date("2025-06-29").getTime() - new Date().getTime()) /
                    (1000 * 60 * 60 * 24),
                )}{" "}
                days and save
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-[#6D6D6D]">This offer expires in</div>
            <div>
              <CountdownTimer targetDate={new Date("2025-06-30")} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 shrink-0 flex-col gap-8 self-stretch bg-[#FFFCF9] px-5 py-9 md:px-8">
        <div className="flex flex-1 shrink-0 flex-col justify-between sm:flex-row">
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-lg text-[#222]">
              Total annual price
            </div>
            <div className="flex items-center">
              <div className="relative text-sm text-[#6D6D6D]">
                <div className="absolute left-0 top-[10px] h-[1px] w-full bg-[#909090]" />
                <NumberFlow
                  value={totalPrice}
                  format={{
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 2,
                    currencySign: "standard",
                  }}
                  style={{
                    fontVariantNumeric: "tabular-nums",
                  }}
                />
              </div>
              <div className="text-sm text-[#909090]">/month</div>
            </div>
          </div>
          <div className="flex flex-row items-baseline gap-1">
            <div className="relative text-[18px] text-[#909090] sm:text-h5">
              <div className="absolute left-0 top-[12px] h-[2px] w-full bg-[#909090] sm:top-[20px]" />
              <NumberFlow
                value={totalPricePerYear}
                format={{
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 2,
                  currencySign: "standard",
                }}
                style={{
                  fontVariantNumeric: "tabular-nums",
                }}
              />
            </div>
            <div className="text-lg text-[#909090]">/year</div>
          </div>
        </div>
        <div className="flex flex-1 shrink-0 flex-col items-start justify-between sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1">
            <div className="text-lg text-[#222]">Your price</div>
            <div className="text-sm text-[#6D6D6D]">
              <NumberFlow
                value={yourPricePerMonth}
                format={{
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 2,
                  currencySign: "standard",
                }}
                suffix=" /month"
                style={{
                  fontVariantNumeric: "tabular-nums",
                }}
              />
            </div>
          </div>
          <div className="flex flex-row items-baseline gap-1">
            <div className="text-[20px] font-semibold text-[#222] md:text-h3">
              <NumberFlow
                value={yourPricePerYear}
                format={{
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 2,
                  currencySign: "standard",
                }}
                style={{
                  fontVariantNumeric: "tabular-nums",
                }}
              />
            </div>
            <div className="text-lg text-[#222]">/year</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
