// import React, { useState } from "react";

// const Stopwatch = () => {
//   const [time, setTime] = useState({ sec: 0, milli: 0 });
//   const [status, setStatus] = useState();
//   let timesecond = time.sec;
//   let timemillisec = time.milli + 1;
//   const [isRunning, setRunning] = useState(false);
//   const startTime = (timesecond, timemillisec) => {
//     myFun();
//     setStatus(setInterval(myFun, 1000));
//     setRunning(true);
//   };
//   const stopTime = () => {
//     if (isRunning) {
//       clearInterval(status);
//       setRunning(false);
//     }
//   };
//   const endTime = () => {
//     clearInterval(status);
//     setTime({ sec: 0, milli: 0 });
//   };

//   const myFun = () => {
//     if (timemillisec === 60) {
//       timemillisec = 0;
//       timesecond++;
//     }
//     timemillisec++;
//     return setTime({ sec: timesecond, milli: timemillisec });
//   };

//   return (
//     <div>
//       <h1>Stopwatch</h1>
//       <div>
//         Time:{" " + time.sec + ":" + time.milli.toString().padStart(2, "0")}
//       </div>

//       <div>
//         <button onClick={isRunning ? stopTime : startTime}>
//           {isRunning ? "Stop" : "Start"}
//         </button>
//         <button onClick={endTime}>Reset</button>
//       </div>
//     </div>
//   );
// };
// export default Stopwatch;

// my code suuggestion
import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Store time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTime = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTime = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetTime = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>Time: {formatTime(time)}</div>
      <div>
        <button onClick={isRunning ? stopTime : startTime}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={resetTime}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
