import { useState } from "react";
import { Hero } from "./Hero";
import { Historia } from "./Historia";
const actualUrl = window.location.href.slice(-2);
const App = () => {
  const [language, setLanguage] = useState(actualUrl === "en" ? "en" : "es"); // Estado inicial: español
  console.log(actualUrl);
  return (
    <>
      <Hero language={language} setLanguage={setLanguage} />
      <Historia language={language} />
    </>
  );
};

export default App;
