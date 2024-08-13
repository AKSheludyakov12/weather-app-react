
import { weatherConditionDay } from '../../../shared/lib/iconSrc/iconSrc'
import Title from "../../../shared/ui/Title";
import { FC } from "react";
import Ptext from "../../../shared/ui/Ptext";
import { WeatherDataProps } from "../../../App/Redux/Config/StateSchema";
import cls from "./HourlyForecast.module.scss"


const formattedTime = (time: string ) => {
  return new Date(time);
}
interface HourlyForecastProps {
  weatherData: WeatherDataProps,
  className?:string
  }

export const HourlyForecast = ({weatherData, className}: HourlyForecastProps) => {

const localtime = weatherData.location.localtime
const {hour} = weatherData.forecast.forecastday[0]
  const visibleHourForecast = []
  const  hourleForecastTommorow = weatherData.forecast?.forecastday[+1]
  const currentTime = formattedTime(localtime);
 const filteredHourForecast = hour.filter((hour) => {
    if(hour && hour.time){

      const forecastTime = formattedTime(hour.time);
      return forecastTime.getHours() >= currentTime.getHours();
    }
    return null
  });

  for (let i = 0; i < filteredHourForecast.length && visibleHourForecast.length < 6; i++) {
    visibleHourForecast.push(filteredHourForecast[i]);
  }
  
  if (filteredHourForecast.length > 0 && formattedTime(visibleHourForecast[visibleHourForecast.length - 1].time).getHours() === 23) {
    const nextDayHours = hourleForecastTommorow?.hour;
    if (nextDayHours) {
      for (let j = 0; j < nextDayHours.length && visibleHourForecast.length < 6; j++) {
        visibleHourForecast.push(nextDayHours[j]);
      }
    }
  }
  


  return (
    <div className={cls.hourly_forecast}>
        <ul >
          {visibleHourForecast.map((mappedHour:{time:string, temp_c:number, condition:{text:string}})=>{
        const time = formattedTime(mappedHour.time)
           return <li> 
           <div className={cls.hourly_time}>

            {time.getHours() < 10 ? `0${time.getHours()}:00` : `${time.getHours()}:00`}
           </div>
           <img src={`https://raw.githubusercontent.com/AKSheludyakov12/weather-app-react/6163e85b9823a72b1d83ab386346b9fc837438d4/public/icon/${weatherConditionDay[mappedHour.condition.text]}`} alt="Weather Icon" />
            <div className={cls.temp}>
                { Math.round(mappedHour.temp_c)}°
           </div>
           </li>
          })}
            
        </ul>

    </div>
  )
}
