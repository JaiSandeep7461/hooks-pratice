import { useEffect, useRef, useState } from "react";
import "./App.css";
import HookExample from "./components/hooks-example";
import DataFetcher from "./components/dataFetcher";
import EffectComparison from "./components/effectComparison";
import UseRefVsUseState from "./components/useRefUseEffectExample";
import PropDrill from "./components/prop-drill";
import ThemeSwitcher from "./components/theme-switcher";
import Counter from "./components/shopping-cart";
import ShoppingCart from "./components/shopping-cart";

function App() {

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current && inputRef.current.focus();
  },[]);


  return (
    <div>
    {/* <Counter/> */}
    <ShoppingCart/>
    </div>
  );
}

export default App;
