import React from 'react'
import { createContext } from 'react'

export const Appcontext = createContext()
const Darkmode = ({children}) => {
        const darktheme = {
            dark: {
              color: "white",
              backgroundColor: "#0f1624"
            },
            light: {
              color: "black",
              backgroundColor: "#edf2f8"
            }
          };
          
  return <Appcontext.Provider value={{darktheme}}>{children}</Appcontext.Provider>
}

export default Darkmode;