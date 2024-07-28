import React, { useEffect,useState } from 'react'

const Stopwatch=()=>{
const [time,setTime]=useState(0);
const [isRunning,setRunning]=useState(false);
const  startTime=()=>{
    setInterval(()=>{
    setTime(prev =>prev+1)
    },1000)
    setRunning(true)
   
}

    return (
     <div>
    Stopwatch
    <div >
        Time:{time}
    </div>
    <button onClick={startTime}>
    {isRunning ? "Stop" : "Start"}
    </button>
    
    <button>
        End
    </button>
     </div>   
    )
}
export default  Stopwatch
