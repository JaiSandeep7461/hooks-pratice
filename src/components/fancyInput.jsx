import React, { useEffect, useImperativeHandle, useRef, useState } from "react";

const FancyInput = ({ref}) =>{
    const [inputValue,setInputValue] = useState("");
    const inputRef = useRef(null);

    useImperativeHandle(ref,()=> ({
        focus:()=>{
            inputRef.current.focus();
        },
        clear: ()=>{
            inputRef.current.value ="";
        }
    }));

    return (
        <div>
            <input
            type="text"
            placeholder="Type something ....."
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
            ref={inputRef}
             />
             <p>You Typed : <strong>{inputValue}</strong></p>
        </div>
    );
}


export default FancyInput;