import { useEffect, useRef, useState } from "react";
import "./App.css";
import HookExample from "./components/hooks-example";
import DataFetcher from "./components/dataFetcher";
import EffectComparison from "./components/effectComparison";
import UseRefVsUseState from "./components/useRefUseEffectExample";

function App() {

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current && inputRef.current.focus();
  },[]);


  return (
    <div>
      <input
        type="text"
        placeholder="Type Something..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        ref={inputRef}
      />
      <p>
        You typed: <strong>{inputValue}</strong>
      </p>

      <UseRefVsUseState/>
      
    </div>
  );
}

export default App;
