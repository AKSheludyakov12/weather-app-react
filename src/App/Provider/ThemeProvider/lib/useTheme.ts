import { useContext, useState } from "react"
import { Theme, ThemeContext } from "../lib/ThemeContext"


export const useTheme = (time:string) => {
    const currentHour = new Date(time).getHours()
    const [timeOfDay, setTimeOfDay] = useState("day")
    const { theme, setTheme } =useContext(ThemeContext)
    console.log(currentHour)
    let newTheme = Theme.DARK
    if( currentHour < 17 && currentHour > 6){
        newTheme = Theme.LIGHT
    }
    setTheme?.(newTheme)
    
    return {
        theme
    }
} 
