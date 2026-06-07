import { useEffect, useRef } from "react";

const SearchComponent = () => {

    // const inputRef = useRef<HTMLInputElement>(null)
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(()=>{
        // inputRef?.current?.focus()
        inputRef.current.focus()
    },[])

    return(
        <div className="bg-emerald-400 w-[40%] h-[40%] p-5 text-center m-3">
             <h3 className="bg-emerald-800 inline-block p-2 mr-2">UseRef</h3>
             <input  className="bg-emerald-100" type="text" ref={inputRef}/>
        </div>
    )
};

export default SearchComponent;