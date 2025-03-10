
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ className }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds - 1;
        
        if (newSeconds < 0) {
          const newMinutes = prevTime.minutes - 1;
          
          if (newMinutes < 0) {
            const newHours = prevTime.hours - 1;
            
            if (newHours < 0) {
              // Reset to 23:59:59 when it reaches zero
              return { hours: 23, minutes: 59, seconds: 59 };
            }
            
            return { hours: newHours, minutes: 59, seconds: 59 };
          }
          
          return { ...prevTime, minutes: newMinutes, seconds: 59 };
        }
        
        return { ...prevTime, seconds: newSeconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <p className="text-sm font-medium text-gray-600 mb-2">Oferta expira em:</p>
      <div className="flex items-center gap-2">
        <TimeUnit value={formatTime(timeLeft.hours)} label="horas" />
        <span className="text-2xl font-bold text-pink-500">:</span>
        <TimeUnit value={formatTime(timeLeft.minutes)} label="min" />
        <span className="text-2xl font-bold text-pink-500">:</span>
        <TimeUnit value={formatTime(timeLeft.seconds)} label="seg" />
      </div>
    </div>
  );
};

interface TimeUnitProps {
  value: string | number;
  label: string;
}

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 rounded-lg w-14 h-14 flex items-center justify-center">
        <span className="text-2xl font-bold text-pink-600">{value}</span>
      </div>
      <span className="text-xs text-gray-500 mt-1">{label}</span>
    </div>
  );
};

export default CountdownTimer;
