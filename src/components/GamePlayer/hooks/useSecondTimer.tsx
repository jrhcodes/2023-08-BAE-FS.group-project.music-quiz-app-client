import { useEffect, useState } from 'react';

const useSecondTimer = (duration: number) => {
  const [endCountDownDate] = useState(new Date().getTime() + duration);

  const [countdown, setCountdown] = useState(duration);



  useEffect(() => {

    const updateCountdown = () => {
      const remaining = endCountDownDate - new Date().getTime();
      setCountdown(remaining);
    }

    if (countdown > 0) {
      setTimeout(() => {
        updateCountdown();
      }, 77);
    }
    else {
      setCountdown(0);
    }

    return;
  }, [countdown, endCountDownDate]);

  return countdown;
};

export default useSecondTimer;
