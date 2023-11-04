import { useEffect, useState } from 'react';

const useSecondTimer = (duration: number) => {
  const [endCountDownDate] = useState(new Date().getTime() + duration);

  const [countdown, setCountdown] = useState(duration);


  useEffect(() => {
    const remaining = endCountDownDate - new Date().getTime();
    if (remaining > 0) {
      setTimeout(() => {
        setCountdown(remaining);
        console.log("beep");
      }, Math.random() * 100 + 50);
    }
    else {
      setCountdown(0);
    }

    return;
  }, [endCountDownDate, countdown]);

  return countdown;
};

export default useSecondTimer;
