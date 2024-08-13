import ComponentWrapper from "../../../shared/ui/ComponentWrapper"
import Title from "../../../shared/ui/Title"
import "./AirQuality.scss"
import Ptext from "../../../shared/ui/Ptext"
import ClassNames from "../../../shared/lib/ClassNames"
import { WeatherDataProps, airQuality } from "../../../App/Redux/Config/StateSchema"


interface AirQualityProps{
    weatherData: WeatherDataProps
}
export const AirQuality = ({weatherData}:AirQualityProps ) => {
    const {air_quality:airQualityData} = weatherData.current

    const calculatedAirQuality = ( airProps:airQuality) => {
      return  Object.values(airProps).reduce((acc:number, airProps)=> ((acc + airProps)), 0)/Object.values(airProps).length
    }

    const visibleAirState = (calculatedAirQuality:number) => {
        if(calculatedAirQuality <= 50){
            return "Хорошее"
        } else if (calculatedAirQuality <=100){
            return "Среднее"
        } 
        return "Плохое"
    }
    const airState = visibleAirState(calculatedAirQuality(airQualityData));
    const airQualityClass = {
        "Хорошее":"good",
        "Среднее": "normal",
        "Плохое": "bad"
    }

    return (
        <div className="AirQuality">
        <ComponentWrapper>
       <Title>
        Состояние воздуха на сегодня
       </Title >
       <div className="airState">
       <div className={ClassNames("state-text", {}, [airQualityClass[airState]])}> 
            {airState}
        </div>
        <p className={ClassNames("value", {}, [airQualityClass[airState]])}>{Math.round(calculatedAirQuality(airQualityData))}</p>
       
       </div>
       <ul className="airQualityProps">
        {
        Object.entries(airQualityData)
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

