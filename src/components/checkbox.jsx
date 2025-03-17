import { useState } from "react";

function ExpensiveCalculationDemo(){
    const [input,setInput] = useState("");
    const [results,setResults] = useState([]);

    //simulate an Expensive calculation
    const runExpensiveCalculation = (value) =>{
        const calculatedResults =[];

        for(let index=0;index<999999999;index++){
                     
        }

        //Simulate heavy work by running many calculations
        for(let i=0;i<20000;i++){
            const result = i * parseInt(value || "0",10);
            if(i%1000 === 0){
                calculatedResults.push(result);
            }
        }

        return calculatedResults;
    }

    const handleInputChange = (e) =>{
        const newValue = e.target.value;
        setInput(newValue);

        //Defer the expensive calculation (low priority)
        const calculatedResults = runExpensiveCalculation(newValue);
        setResults(calculatedResults);
    }

    


}