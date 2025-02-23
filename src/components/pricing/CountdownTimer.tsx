import { useEffect, useState } from "react";
import NumberFormat from "@number-flow/react";
interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  
  return (
    <div className="flex items-center gap-[2px] self-stretch">
      <div className="flex h-[24px] items-center justify-center gap-[2px] rounded-[3px] bg-[rgba(37,31,31,0.05)] px-[5px]">
        <NumberFormat value={timeLeft.days} trend={-1} format={{  minimumIntegerDigits: 2 }} digits={{ 1: { max: 5 } }} />
        <span className="text-[#6D6D6D]">d</span>
      </div>
      <span className="text-[#6D6D6D]">:</span>
      <div className="flex h-[24px] items-center justify-center gap-[2px] rounded-[3px] bg-[rgba(37,31,31,0.05)] px-[5px]">
        <NumberFormat value={timeLeft.hours} trend={-1} format={{  minimumIntegerDigits: 2 }} digits={{ 1: { max: 5 } }} />
        <span className="text-[#6D6D6D]">h</span>
      </div>
      <span className="text-[#6D6D6D]">:</span>
      <div className="flex h-[24px] items-center justify-center gap-[2px] rounded-[3px] bg-[rgba(37,31,31,0.05)] px-[5px]">
        <NumberFormat value={timeLeft.minutes} trend={-1} format={{  minimumIntegerDigits: 2 }} digits={{ 1: { max: 5 } }}/>
        <span className="text-[#6D6D6D]">m</span>
      </div>
      <span className="text-[#6D6D6D]">:</span>
      <div className="flex h-[24px] items-center justify-center gap-[2px] rounded-[3px] bg-[rgba(37,31,31,0.05)] px-[5px]">
        <NumberFormat value={timeLeft.seconds} trend={-1} format={{  minimumIntegerDigits: 2 }} digits={{ 1: { max: 5 } }}  />
        <span className="text-[#6D6D6D]">s</span>
      </div>
    </div>
  );
};
