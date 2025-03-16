import { useEffect, useState } from "react";
import "./App.css";
import HookExample from "./components/hooks-example";
import DataFetcher from "./components/dataFetcher";
import EffectComparison from "./components/effectComparison";

function App() {

  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const [toggle,setToggle] = useState(true);

  useEffect(
    () => {
      console.log("Count Changes Done");
    },
    [count]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Type Something..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <p>
        You typed: <strong>{inputValue}</strong>
      </p>
      <p>
        You clicked {count} times{" "}
      </p>
      <button onClick={()=>setCount(count + 1)}>Click me </button>
      {toggle && <HookExample/>}
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
      {/* <DataFetcher/> */}
      <EffectComparison/>
    </div>
  );
}

export default App;
