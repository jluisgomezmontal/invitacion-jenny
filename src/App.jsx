import { useState } from "react";
import { Hero } from "./Hero";
import { Historia } from "./Historia";
const App = () => {
  const [language, setLanguage] = useState("es"); // Estado inicial: español

  return (
    <>
      <Hero language={language} setLanguage={setLanguage} />
      <Historia language={language} />
    </>
  );
};

export default App;
