import { createContext } from "react";

type Condition = {
    text: string
}

export type airQuality ={

    "co" : number,
    "gb-defra-index" : number,
    "no2": number,
    "o3": number,
    "pm2_5": number,
    "pm10": number,
    "so2": number,
    "us-epa-index": number
}
type current = {
    "air_quality":airQuality,
    "temp_c": number,
    "is_day": number,
     "condition":Condition,
      "wind_kph": number,
      "pressure_mb": number,
      "humidity": number,
      "feelslike_c": number,
      "uv": number,

}
type Hour = {
    "time": string,
    "temp_c": number,
    "condition": Condition, 
}

type forecastday = { 
    "day": {
        "maxtemp_c":number,
        "mintemp_c": number,
        "condition": {
            "text":string
        }
    },
    "astro": {
        "sunrise": string,
            "sunset": string,
    }
    "daily_chance_of_rain": number, 
    hour : Hour[
    ]
}

export interface Data {
    location: {
        name: string
        localtime: string
    }
    "current": current,
    "forecast": {
        "forecastday": forecastday[]
    }
  }

export interface WeatherContextProps {
    weatherData?: Data
    setWeatherData: (data: Data) => void
  }

  export const WeatherContext = createContext<WeatherContextProps>({
    setWeatherData (weatherData) {
    }
  })
  