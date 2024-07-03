import React from 'react'

import  "./SunriseSunset.scss"
import { WeatherDataSchema } from '../../../App/Redux'
   

 const SunriseSunset = ({weatherData}:WeatherDataSchema) => {
  
    const {localtime} = weatherData.location

    const formattedTime = (time: string) => {
    return new Date(time);
  }

  

  const currentTime = formattedTime(localtime);
  
if(weatherData)

  return (
    <div className='Timeset'>
        <div className="card">
 {
Array.from({ length: 13 }, (_, i) => (
i === currentTime.getHours() % 12 ? <span className='number active'> </span> : <span className='number '></span>

))
}
        <div className='sunrise-sunset'>
          <div className='sunRise'>{weatherData.forecast.forecastday[0].astro.sunrise}</div>
<div className='sunset'>{weatherData.forecast.forecastday[0].astro.sunset}</div>
<div className='line'></div>
          </div>
         
</div>
    </div>
  )

  return null
}
export default SunriseSunset