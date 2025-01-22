import { useState } from "react";
import { Hero } from "./Hero";
import { Historia } from "./Historia";
import { Unance } from "./Unance";
import { Itinerario } from "./Itinerario";
import { Recuerdos } from "./Recuerdos";
import { Hospedaje } from "./Hospedaje";
import { Final } from "./Final";
const actualUrl = window.location.href.slice(-2);
const App = () => {
  const [language, setLanguage] = useState(actualUrl === "en" ? "en" : "es"); // Estado inicial: español
  console.log(actualUrl);
  return (
    <>
      <Hero language={language} setLanguage={setLanguage} />
      <Historia language={language} />
      <Unance language={language} />
      <Itinerario language={language} />
      <Recuerdos language={language} />
      <Hospedaje language={language} />
      <Final language={language} />
    </>
  );
};

export default App;
