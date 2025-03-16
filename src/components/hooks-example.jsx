import React, { useEffect, useState } from "react";

const HookExample = () =>{

    useEffect(()=>{
        console.log("rerendered");
        return ()=>{
            console.log("unmounted");
        };
    },[]);

    return (
        <div><h1>Hook Example</h1></div>
    )
}

/* function Timer(){
    const [seconds,setSeconds] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds((prevSeconds) => prevSeconds+1);
        },1000);
        //clean up function: Clear interval before unmounted or re-run
        return () =>{
            clearInterval(interval);
            console.log("Interval cleared");
        }
    },[]);

    return <p>Seconds elapsed:  {seconds}</p>
} */
export default HookExample