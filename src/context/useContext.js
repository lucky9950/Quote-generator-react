import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import axios from "axios";

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
  
    const apiURL = "https://api.quotable.io/random";
  
    async function getQuote() {
      try {
        setLoading(true);
        const response = await axios.get(apiURL);
        console.log(response);
        setData(response.data);
        setLoading(false)
      } catch (error) {
        console.error(error);
        setLoading(true)
      }
    }
    
    useEffect(()=> {
      getQuote();
    },[])
    
    return (
        <AppContext.Provider value={{data, loading, getQuote}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider} ;