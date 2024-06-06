import cls from "./Forecast.module.scss"
import HourlyForecast from "../../HourlyForecast"
import { useContext } from "react"
import { weatherConditionDay } from "../../../shared/lib/iconSrc/iconSrc"
import Ul from "../../../shared/ui/Ul"
import { useSelector } from "react-redux"
import { StateSchema } from "../../../App/Redux/Config/StateSchema"


const ForecastByDay = () => {
   const {weatherData} = useSelector((state: StateSchema)=>state.weatherData)
   
    return ( 
        <div>

        <Ul>
            {weatherData.forecast.forecastday.map((forecast)=> {

        
const props = {
    "maxTemp": forecast.day.maxtemp_c,
    "minTemp" : forecast.day.mintemp_c,
    "condition" : forecast.day.condition.text
}
return (<li> 
         
    <img src={`/icon/${weatherConditionDay[props.condition]}`}/>

    <div className='hourly-forecast__temp'>
        { Math.round(props.maxTemp)} °C
   </div>
   </li>)
}
)}
        
        </Ul>
        </div>
    )
}

 export default ForecastByDay