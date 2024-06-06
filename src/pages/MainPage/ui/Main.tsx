import React, { FC, useCallback, useContext, useEffect, useState } from "react";
import cls from "./Main.module.scss"
import CurrentForecast from "../../../widgets/CuurentForecast";
import SunriseSunset from "../../../widgets/SunriseSunset/ui/SunriseSunset";
import AirQuality from "../../../widgets/AirQuality";
import HourlyForecast from "../../../widgets/HourlyForecast";
import ClassNames from "../../../shared/lib/ClassNames";
import { selectTheme } from "../../../shared/lib/Theme/Theme";
import { useSelector } from "react-redux";
import { StateSchema } from "../../../App/Redux/Config/StateSchema";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../../../App/Redux/slice/WeatherSlice";
import { getCity } from "../../../App/Redux";
import axios from "axios";
import { getLocation } from "../../../shared/lib/GetCity/getCity";
import { error } from "console";
import { Agent } from "http";
import { userInfo } from "os";





const MainPage = () => {

  const {weatherData} = useSelector((state:StateSchema)=>state.weatherData)
  console.log(weatherData)
const dispatch = useDispatch()
const city = useSelector((state:StateSchema)=>state.cityData.city)

useEffect(()=>{
  const fetchcity =  async () =>{    
    const {latitude, longitude} = await getLocation()
    const apiKey = 'd844dd4a-15d4-41dc-ad9a-b3f3523af9d1';
    const {data} = await axios.get(
        `https://catalog.api.2gis.com/3.0/items/geocode?lon=${longitude}&lat=${latitude}&type=adm_div.city&key=${apiKey}`)
       console.log(data.result.items[0].full_name) 
       //@ts-ignore
       dispatch(fetchWeatherData(data.result.items[0].full_name))
    return data
    }  
    fetchcity()
},[dispatch])




const activeTheme = selectTheme(weatherData.location.localtime)
  return (
<>
 <div className={cls[activeTheme]}> </div>  
  <div className={ClassNames(activeTheme, {}, [cls.content])}>
 <div className={cls.MainPage}>
<CurrentForecast weatherData={weatherData} city={weatherData.location.name} activeTheme={activeTheme}  />
<SunriseSunset  weatherData={weatherData} />
<AirQuality weatherData={weatherData}/>
<HourlyForecast weatherData={weatherData}  />

</div>

  </div>
</>

  );

};
export default MainPage;
