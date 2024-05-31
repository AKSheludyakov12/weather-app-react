import { useContext, useEffect, useState } from "react"
import { WeatherContext } from "../../../../App/Provider/WeatherDataProvider"



enum BackgroundProps {
    DAY = "day",
    NIGHT = "night"
}
interface useBackground {
    Background:BackgroundProps,
    setBackground:(value: BackgroundProps) => void
}

export function UseBackground()  {
   const {weatherData} = useContext(WeatherContext)
    const localtime = new Date(weatherData.location.localtime)
    const [background, setBackground] = useState("night")

    useEffect(() => {
        if (localtime.getHours() > 9 && localtime.getHours() <= 18) {
            setBackground(BackgroundProps.DAY);
        } else {
            setBackground(BackgroundProps.NIGHT);
        }
    }, [localtime.getHours()]);

        
    return {background, setBackground}
    }


export default UseBackground