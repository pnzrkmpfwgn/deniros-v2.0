import { useState,useContext, createContext } from "react";

const LanguageContext = createContext();
const LanguageUpdateContext = createContext();

export const useLanguage = () =>{
  return useContext(LanguageContext);
}

export const useUpdateLanguage = () =>{
  return useContext(LanguageUpdateContext);
}

const LanguageProvider =( {children} )=>{
    const [language,setLanguage] = useState("tr");
    LanguageProvider.displayName= "language provider";

  const handleClick =()=> {
    if(language !== "en"){
      setLanguage("en");
    }else{
      setLanguage("tr")
    }
  }

  return <LanguageContext.Provider value={language} >
       <LanguageUpdateContext.Provider value={handleClick} >
       {children}
       </LanguageUpdateContext.Provider>
  </LanguageContext.Provider>
}

export default LanguageProvider;