import { WeatherDataSchema } from "../../App/Redux";
import { WeatherDataProps } from "../../App/Redux/Config/StateSchema";

export const WeatherDataDefault :WeatherDataProps = JSON.parse(localStorage.getItem("weatherData")) || {
        "location": {
          "name": '',
            "localtime": '2024-03-27 19:44'
        },
        "current": {
          "air_quality":{
            "co" : 0,
        "gb-defra-index" : 0,
        "no2": 0,
        "o3": 0,
        "pm2_5": 0,
        "pm10": 0,
        "so2": 0,
        "us-epa-index": 0
          },
            "temp_c": 0,
        "is_day": 0,
         "condition":{
            text: "Облачно"
         },
          "wind_kph": 0,
          "pressure_mb": 0,
          "humidity": 0,
          "feelslike_c": 0,
          "uv": 0},
          "forecast": {
            "forecastday":  [{
              "date": '',
                "day": {
                "maxtemp_c": 0,
                "mintemp_c": 0,
                "avghumidity": 0,
                "daily_chance_of_rain": 0,
                "daily_chance_of_snow": 0,
                "maxwind_kph":0,
                "avgtemp_c" : 0,
                "condition": {
                  "text":"Ясно"
              }
            },
            "astro": {
                "sunrise": "0: 00",
                    "sunset": "0: 00",
            }, 
            "daily_chance_of_rain": 0, 
            hour : [{
                "time": '00:00',
        "temp_c": 0,
        "condition": {
            text: "Облачно"
        }, 
            }]}]
        }
        }

