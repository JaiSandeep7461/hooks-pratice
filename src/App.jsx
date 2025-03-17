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
import Login from "./components/login";

function App() {
  const fancyInputRef = useRef();

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
