import { FC } from "react"
import { Data, WeatherContextProps, airQuality } from "../../../App/Provider/WeatherDataProvider/lib/WeatherContext"
import ComponentWrapper from "../../../shared/ui/ComponentWrapper"
import Title from "../../../shared/ui/Title"
import "./AirQuality.scss"
import Ptext from "../../../shared/ui/Ptext"
import ClassNames from "../../../shared/lib/ClassNames"
const AirQuality = ({weatherData} ) => {
    const {air_quality:airProps} = weatherData.current

    const calculatedAirQuality = ( airProps:{string:number}) => {
      return  Object.values(airProps).reduce((acc, airProps)=> ((acc + airProps)), 0)/Object.values(airProps).length
    }
    const visibleAirState = (calculatedAirQuality) => {
        if(calculatedAirQuality <= 50){
            return "Хорошее"
        } else if (calculatedAirQuality <=100){
            return "Среднее"
        } 
        return "Плохое"
    }
    const airState = visibleAirState(calculatedAirQuality(airProps));
    const airQualityClass = {
        "Хорошее":"good",
        "Среднее": "normal",
        "Плохое": "bad"
    }

    console.log(Object.entries(airProps))
    return (
        <div className="AirQuality">
        <ComponentWrapper>
       <Title>
        Состояние воздуха 
       </Title >
       <div className={ClassNames("state-text", {}, [airQualityClass[airState]])}> 
            {airState}
        </div>
        <p className={ClassNames("value", {}, [airQualityClass[airState]])}>{Math.round(calculatedAirQuality(airProps))}</p>
       <ul className="airQualityProps">
        {
        Object.entries(airProps)
        .filter(([item, value]) => item !=='us-epa-index' && item !=='gb-defra-index')
        .map((airProps:[string, number])=>{
            const [item, value] = airProps
            return(
                <li className="airQualityPropsItem">  
                    <p className="airQuality-value">
                        {value}
                    </p>
                    <p className="airQuality-item">
                        {item}
                    </p>
                </li>
            )
        })}
       </ul>
        </ComponentWrapper>
            </div>
    )

}


export default AirQuality