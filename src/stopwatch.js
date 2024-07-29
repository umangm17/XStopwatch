import React, { useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState({ sec: 0, milli: 0 });
  const [status, setStatus] = useState();
  let timesecond = time.sec;
  let timemillisec = time.milli;
  const [isRunning, setRunning] = useState(false);
  const startTime = (timesecond, timemillisec) => {
    myFun();
    setStatus(setInterval(myFun, 10));
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
    if (timemillisec === 100) {
      timemillisec = 0;
      timesecond++;
    }
    timemillisec++;
    return setTime({ sec: timesecond, milli: timemillisec });
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>Time:{time.sec + ":" + time.milli.toString().padStart(2, "0")}</div>
      <button onClick={isRunning ? stopTime : startTime}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={endTime}>Reset</button>
    </div>
  );
};
export default Stopwatch;
