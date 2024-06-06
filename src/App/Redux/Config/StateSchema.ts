export interface StateSchema { 
    cityData:CityScheme
weatherData:WeatherDataSchema
}

export interface CityScheme {
    city?:string
}

type Condition = {
    text: string
}

export type airQuality = {

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
    "date":string
    "day": {
        "maxtemp_c":number,
        "mintemp_c": number,
        "avgtemp_c" : number,
        "avghumidity": number,
        "maxwind_kph":number,
        "daily_chance_of_rain": number,
        "daily_chance_of_snow": number,
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


export interface WeatherDataSchema{
    weatherData:WeatherDataProps
} 

export interface WeatherDataProps {

        location: {
            name: string
            localtime: string
        }
        "current": current,
        "forecast": {
            "forecastday": forecastday[]
        }
}

export interface ThunkConfig<Type> {
    rejectValue:Type
    state: StateSchema

}