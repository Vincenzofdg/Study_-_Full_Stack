import { useEffect } from 'react';

function useTimer(callback, intervalTime) {
  useEffect(() => {
    const interval = setInterval(() => {
      callback();
    }, intervalTime);

    return (() => { // return = componentWillUnmount
      clearInterval(interval);
    });
  }, []);
}

export default useTimer;
