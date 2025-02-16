"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    thumbClassName?: string;
    renderThumb?: () => React.ReactNode;
  }
>(({ className, thumbClassName, renderThumb, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-[#F5F5F5]">
      <SliderPrimitive.Range className="absolute h-full bg-[#0073BA]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="relative w-6 h-6 focus:outline-none">
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -translate-x-1/2 -translate-y-1/2"
      >
        <g filter="url(#filter0_d_57_7005)">
          <circle cx="36" cy="32" r="12" fill="white"/>
          <circle cx="36" cy="32" r="11.5" stroke="#D5D5D5"/>
        </g>
        <defs>
          <filter id="filter0_d_57_7005" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="12"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.25098 0 0 0 0.12 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_57_7005"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_57_7005" result="shape"/>
          </filter>
        </defs>
      </svg>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
