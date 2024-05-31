
import React, { type FC,  useState, ReactNode, useContext } from 'react'
import { Data, WeatherContext } from '../lib/WeatherContext';
import axios from 'axios';
import { getLocation } from '../../../../pages/MainPage/ui/Main';



export const defaultCity = localStorage.getItem('city') || ""
export const defaultData:Data = {
    "location": {
      "name": defaultCity,
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
            "day": {
            "maxtemp_c": 0,
            "mintemp_c": 0,
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


interface WeatherProviderProps {
    children: ReactNode;
  }





const WeatherProvider: FC<WeatherProviderProps> = ({ children }) => {

    
    const [  weatherData, setWeatherData ] = useState(defaultData)
  const [city, setCity] = useState(defaultCity)
  const getGeolocationData = async () => {
    try {
      //@ts-ignore
        const { latitude, longitude } = await getLocation();
        const apiKey = '6b559ae22eae40049b0e30e0c72efb8c';
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        setCity(data.results[0].components.city)
        
      if(!localStorage.getItem('city')){

        localStorage.setItem("city", data.results[0].components.city)
      }

      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
      console.log(localStorage.getItem('city'))
};

  React.useEffect(() => {
    getGeolocationData()
    axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=f640eab122354f39be692227232108&days=5&lang=ru&q=${city}&aqi=yes`
    )
      .then((arr) => {
        if(arr.data){
            setWeatherData(arr.data);
            console.log(weatherData)
        } else {
            console.error( "Данные о погоде не получены")
        }
      }) 
      .catch((error) => {
        console.error("Ошибка при получении данных о погоде:", error);
    });

  }, [city]);

  return (
      <WeatherContext.Provider value={{weatherData, setWeatherData}}>
          {children}
      </WeatherContext.Provider>
  )
}
export default WeatherProvider
