import React from "react";
import { useContext } from "react";
import { useState } from "react";

const LanguageContext = React.createContext(true);
const LanguageUpdateContext = React.createContext(() => {});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useUpdateLanguage() {
  return useContext(LanguageUpdateContext);
}

export function LanguageProvider({ children }: { children: JSX.Element }) {
  const [english, setEnglish] = useState(true);

  function toggleLanguage() {
    setEnglish((prevEnglish) => !prevEnglish);
  }

  return (
    <LanguageContext.Provider value={english}>
      <LanguageUpdateContext.Provider value={toggleLanguage}>
        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
}
