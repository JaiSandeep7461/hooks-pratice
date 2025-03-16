import { useEffect, useRef, useState } from "react";
import "./App.css";
import HookExample from "./components/hooks-example";
import DataFetcher from "./components/dataFetcher";
import EffectComparison from "./components/effectComparison";
import UseRefVsUseState from "./components/useRefUseEffectExample";
import PropDrill from "./components/prop-drill";
import ThemeSwitcher from "./components/theme-switcher";

function App() {

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current && inputRef.current.focus();
  },[]);


  return (
    <div>
    <ThemeSwitcher />
    <br/>
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

      <PropDrill state={inputValue}/>
      
    </div>
  );
}

export default App;
