import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
      <span className="inline-flex items-center text-[#464646]">
      {timeLeft.days}d : {timeLeft.hours.toString().padStart(2, '0')}h : {timeLeft.minutes.toString().padStart(2, '0')}m : {timeLeft.seconds.toString().padStart(2, '0')}s
    </span>
  );
};