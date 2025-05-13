/* eslint-disable react/prop-types */
import { Contador } from "./Contador";
import { Idioma } from "./Idioma";

export const Hero = ({ setLanguage, language }) => {
  return (
    <div className="hero">
      <Contador language={language} />
      <Idioma language={language} setLanguage={setLanguage} />
    </div>
  );
};
