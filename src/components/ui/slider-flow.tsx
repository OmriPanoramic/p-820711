import NumberFlow, { continuous } from "@number-flow/react";
import * as RadixSlider from "@radix-ui/react-slider";
import clsx from "clsx/lite";

export default function Slider({
  value,
  className,
  ...props
}: RadixSlider.SliderProps) {
  // Get the current value from the slider
  const currentValue = value?.[0] ?? 0;

  return (
    <div>
      <RadixSlider.Root
        {...props}
        value={value}
        className={clsx(
          className,
          "relative flex h-5 w-full touch-none select-none items-center",
        )}
      >
        <RadixSlider.Track className="relative h-[10px] grow rounded-full bg-[#EBEBEB] dark:bg-zinc-800">
          <RadixSlider.Range className="absolute h-full rounded-full bg-primary dark:bg-white" />
        </RadixSlider.Track>
        <RadixSlider.Thumb
          className="relative block h-5 w-5 rounded-[1rem] border border-[#EBEBEB] bg-white shadow-md"
          aria-label="Volume"
        >
          {value?.[0] != null && (
            <NumberFlow
              locales="en-US"
              willChange
              value={value[0]}
              isolate
              plugins={[continuous]}
              opacityTiming={{
                duration: 250,
                easing: "ease-out",
              }}
              transformTiming={{
                easing: `linear(0, 0.0033 0.8%, 0.0263 2.39%, 0.0896 4.77%, 0.4676 15.12%, 0.5688, 0.6553, 0.7274, 0.7862, 0.8336 31.04%, 0.8793, 0.9132 38.99%, 0.9421 43.77%, 0.9642 49.34%, 0.9796 55.71%, 0.9893 62.87%, 0.9952 71.62%, 0.9983 82.76%, 0.9996 99.47%)`,
                duration: 500,
              }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-lg font-light"
            />
          )}
        </RadixSlider.Thumb>
      </RadixSlider.Root>
      <div className="relative h-12 w-full">
        <div className="absolute w-full">
          <div className="relative w-full">
            <div style={{ left: '0%' }} className="absolute -translate-x-1/2 flex flex-col items-center">
              <span className="text-[11px] text-[#909090]">1</span>
              <span className={clsx(
                "text-[11px]",
                currentValue >= 1 ? "text-primary" : "text-[#222222]"
              )}>$5</span>
            </div>
            <div style={{ left: '10%' }} className="absolute -translate-x-1/2 flex flex-col items-center">
              <span className="text-[11px] text-[#909090]">50</span>
              <span className={clsx(
                "text-[11px]",
                currentValue >= 50 ? "text-primary" : "text-[#222222]"
              )}>$4</span>
            </div>
            <div style={{ left: '20%' }} className="absolute -translate-x-1/2 flex flex-col items-center">
              <span className="text-[11px] text-[#909090]">100</span>
              <span className={clsx(
                "text-[11px]",
                currentValue >= 100 ? "text-primary" : "text-[#222222]"
              )}>$3</span>
            </div>
            <div style={{ left: '40%' }} className="absolute -translate-x-1/2 flex flex-col items-center">
              <span className="text-[11px] text-[#909090]">200</span>
              <span className={clsx(
                "text-[11px]",
                currentValue >= 200 ? "text-primary" : "text-[#222222]"
              )}>$2</span>
            </div>
            <div style={{ left: '60%' }} className="absolute -translate-x-1/2 flex flex-col items-center">
              <span className="text-[11px] text-[#909090]">300</span>
              <span className={clsx(
                "text-[11px]",
                currentValue >= 300 ? "text-primary" : "text-[#222222]"
              )}>$1</span>
            </div>
            <div style={{ left: '100%' }} className="absolute -translate-x-1/2 flex flex-col items-center">
              <span className="text-[11px] text-[#909090]">500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
