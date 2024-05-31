import cls from "./Forecast.module.scss"
import HourlyForecast from "../../HourlyForecast"
import ForecastByDay from "../../ForecastByDay/ui/ForecastByDay"


const Forecast = () => {
    return ( 
        <div className={cls.forecast}>
            <HourlyForecast />
        </div>
    )
}

 export default Forecast