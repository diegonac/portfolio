import Layout from "./components/Layout";
import Splash from "./components/Splash";
import "./App.css";
import { useState } from "react";

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
