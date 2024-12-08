import { createContext, useState, useContext } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(true)

    const themeToggle = () => {
        setIsDark(!isDark)
    }

   const bgChange = isDark? "bg-[#020F1F]": "bg-[#E4E6E5]";
   const textChange = isDark? "text-[white]" : "text-[black]";
   const uniqueColor = isDark? "#00ffff" : "blue";
   const blackToWhite = isDark? "black" : "white";
   const NavlinkColor = isDark? "!text-[cyan]" : "!text-[blue]";

    return(
        <>
            <ThemeContext.Provider value={{isDark, NavlinkColor , themeToggle, bgChange, textChange, uniqueColor, blackToWhite}}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}
export const useTheme= () => useContext(ThemeContext)

export default ThemeProvider;