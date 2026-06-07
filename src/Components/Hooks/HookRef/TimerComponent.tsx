import { useEffect, useRef, useState } from "react";

const TimerComponent = () => {

    const [time, setTime] = useState(0);

    const timeRef = useRef<number | undefined>(undefined);

    const stop = () => {
        clearTimeout(timeRef.current)
    }

    useEffect(()=>{
        timeRef.current = setInterval(()=>{
            setTime(old => old + 1)
        },1000)
    },[])

    return(
        <div className="bg-gray-400 w-[40%] h-[40%] p-5 text-center m-3">
            {time}
            <button onClick={stop} className="bg-red-500 p-4 m-2">Stop Timer</button>
        </div>
    )
};

export default TimerComponent;