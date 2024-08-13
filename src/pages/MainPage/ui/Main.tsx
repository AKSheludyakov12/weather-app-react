import React, {useEffect, useRef, useState } from "react";
import cls from "./Main.module.scss"
import CurrentForecast from "../../../widgets/CuurentForecast";
import SunriseSunset from "../../../widgets/SunriseSunset/ui/SunriseSunset";
import AirQuality from "../../../widgets/AirQuality";
import ClassNames from "../../../shared/lib/ClassNames";
import { useSelector } from "react-redux";
import { StateSchema } from "../../../App/Redux/Config/StateSchema";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../../../App/Redux/slice/WeatherSlice";
import axios from "axios";
import { getLocation } from "../../../shared/lib/GetCity/getCity";
import { Input } from "../../../shared/ui/Input";
import { HourlyForecast } from "../../../widgets/HourlyForecast";
import { WEATHERDATA_CITY_LOCALSTORAGE } from "../../../shared/const/LocalStorage";
import { FormatedTime } from "../../../shared/lib/FormattedTime/FormattedTime";
import { Theme } from "../../../App/Provider/ThemeProvider/lib/ThemeContext";


const MainPage = () => {
  const {weatherData} = useSelector((state:StateSchema)=>state.weatherData)
  const [type, setType] = useState("text")
const dispatch = useDispatch()
const [city, setCity] = useState('')
const [value, setValue] = useState('')
const [isClearVisible, setIsClearVisible] = useState(false)
const [lastUpdate, setLastUpdate] = useState("")

useEffect(()=>{
  const fetchcity =  async () =>{    
    
    const {latitude, longitude} = await getLocation()
    const apiKey = 'd844dd4a-15d4-41dc-ad9a-b3f3523af9d1';
    const {data} = await axios.get(
        `https://catalog.api.2gis.com/3.0/items/geocode?lon=${longitude}&lat=${latitude}&type=adm_div.city&key=${apiKey}`)
        try{
          //@ts-ignore
          dispatch(fetchWeatherData(data.result.items[0].full_name))
          setLastUpdate(FormatedTime(weatherData.location.localtime))
         localStorage.setItem(WEATHERDATA_CITY_LOCALSTORAGE,(data.result.items[0].full_name))
        
         return data
        
      }catch{
         //@ts-ignore
         dispatch(fetchWeatherData(localStorage.getItem(WEATHERDATA_CITY_LOCALSTORAGE)))

      }
    }  
    fetchcity()
},[dispatch, lastUpdate])


console.log(lastUpdate)

const onchangeHandler = ( event: React.ChangeEvent<HTMLInputElement>) =>{
  setCity(event.target.value)
  setValue(event.target.value)
  setIsClearVisible(true)
}
console.log(city)

const submitButton = () => {
  //@ts-ignore
  dispatch(fetchWeatherData(city))
  setCity("")
  setValue("")
  setIsClearVisible(false)
}
console.log(value)
const onClearInput = () => {
  setType('reset')
  setCity('')
  setIsClearVisible(false)
}
  console.log(weatherData.location.name)
  return (
<>
  <div className={ClassNames(" ", {}, [cls.content])}>
 <div className={cls.MainPage}>
 <Input 
 className={cls.input}
  placeholder={`Ваш город: ${weatherData.location.name}`}
  onChange={onchangeHandler}
  isClearVisible={isClearVisible}
  value={city}
  onClearInput={onClearInput}
  type={type}
  submitButton={submitButton}
/>
        
 <CurrentForecast weatherData={weatherData} city={weatherData.location.name}  lastUpdate={lastUpdate}  />
<HourlyForecast weatherData={weatherData}  /> 
<AirQuality weatherData={weatherData}/>
<SunriseSunset  weatherData={weatherData} />

</div>

  </div>
</>

  );

};
export default MainPage;
