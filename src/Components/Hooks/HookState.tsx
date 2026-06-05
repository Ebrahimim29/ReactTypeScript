import { useState } from "react";

const HookState = () => {

    const [count, setCount] = useState<number>()

    const Increament = () => {
        setCount(count || 0 + 1);
    }

    return(
        <div className="bg-amber-500 w-[40%] h-[40%] p-5 text-center mb-3">
            <h3 className="bg-red-400 inline-block">UseState:</h3>
            <p>Count:{count}</p>
            <button onClick={Increament} className="bg-sky-50 rounded-2xl p-1">Increase</button>
        </div>
    )
};

export default HookState;