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
import FancyInput from "./components/fancyInput";

function App() {

  const fancyInputRef = useRef();

 
  return (
    <div>
      {/* <Counter/> */}
      {/* <ShoppingCart/> */}
      <FancyInput ref={fancyInputRef}/>
      <button onClick={()=> fancyInputRef.current.focus()}>Focus</button>
      <button onClick={()=> fancyInputRef.current.clear()}>Clear</button>
    </div>
  );
}

export default App;
