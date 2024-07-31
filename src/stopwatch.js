import React, { useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState({ sec: 0, milli: 0 });
  const [status, setStatus] = useState();
  let timesecond = time.sec;
  let timemillisec = time.milli + 1;
  const [isRunning, setRunning] = useState(false);
  const startTime = (timesecond, timemillisec) => {
    myFun();
    setStatus(setInterval(myFun, 1000));
    setRunning(true);
  };
  const stopTime = () => {
    if (isRunning) {
      clearInterval(status);
      setRunning(false);
    }
  };
  const endTime = () => {
    clearInterval(status);
    setTime({ sec: 0, milli: 0 });
  };

  const myFun = () => {
    if (timemillisec === 60) {
      timemillisec = 0;
      timesecond++;
    }
    timemillisec++;
    return setTime({ sec: timesecond, milli: timemillisec });
  };
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>Time: {formatTime(time)}</div>
      {/* Time:{" " + time.sec + ":" + time.milli.toString().padStart(2, "0")} */}
      <div>
        <button onClick={isRunning ? stopTime : startTime}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={endTime}>Reset</button>
      </div>
    </div>
  );
};
export default Stopwatch;
