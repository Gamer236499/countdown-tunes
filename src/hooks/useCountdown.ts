import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
  isCelebrating: boolean;
}

export function useCountdown(timezoneOffset: number): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
    isCelebrating: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      // Get UTC time
      const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
      
      // Calculate local time in the target timezone
      const localTime = new Date(utcTime + (timezoneOffset * 3600000));
      
      // Create target New Year date in that timezone
      let targetYear = localTime.getFullYear();
      if (localTime.getMonth() === 0 && localTime.getDate() === 1 && localTime.getHours() < 1) {
        // It's already the new year, show celebration for 1 hour
        const msIntoCelebration = localTime.getHours() * 3600000 + localTime.getMinutes() * 60000 + localTime.getSeconds() * 1000;
        if (msIntoCelebration < 3600000) {
          return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            total: 0,
            isCelebrating: true,
          };
        }
        targetYear += 1;
      } else if (localTime.getMonth() === 11) {
        targetYear += 1;
      }
      
      // Target is midnight of January 1st in that timezone
      const newYear = new Date(Date.UTC(targetYear, 0, 1, 0, 0, 0) - (timezoneOffset * 3600000));
      
      const difference = newYear.getTime() - now.getTime();
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          total: 0,
          isCelebrating: true,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        total: difference,
        isCelebrating: false,
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [timezoneOffset]);

  return timeLeft;
}
