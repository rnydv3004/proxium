'use client'
import React, { useEffect, useState } from 'react';

const AnalogClock: React.FC = () => {
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    updateTime(); // Call it initially to set the clock to the current time

    return () => {
      clearInterval(intervalId); // Clean up the interval
    };
  }, []);

  const updateTime = () => {
    const date = new Date();
    const s = date.getSeconds();
    const m = date.getMinutes();

    setHour(date.getHours());
    setMinute(m);
    setSecond(s);
  };

  const clockStyles: React.CSSProperties = {
    '--dRotate': `${6 * minute}deg`,
  };

  const secondsStyles: React.CSSProperties = {
    '--dRotate': `${6 * second}deg`,
  };

  return (
    <div className="clock" style={clockStyles}>
      {/* Your clock JSX structure */}
    </div>
  );
};

export default AnalogClock;
