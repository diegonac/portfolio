import Layout from "./components/Layout";
import Splash from "./components/Splash";
import { useState } from "react";

const userLang = navigator.language;

document.documentElement.lang = userLang;

const App = () => {
  const [loading, setLoading] = useState(false);
  if(!loading) {
    setTimeout(() => {
      setLoading(true);
    }, 3000)
    return <Splash />
  }
  return <Layout />
};

export default App;