"use client";

import { useEffect, useState } from "react";

type CountdownTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
};

function getCountdownTime(targetDate: string): CountdownTime {
  const target = new Date(targetDate).getTime();
  const now = new Date().getTime();
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isFinished: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isFinished: false,
  };
}

export function useCountdown(targetDate: string) {
  const [time, setTime] = useState<CountdownTime>(() =>
    getCountdownTime(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCountdownTime(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return time;
}