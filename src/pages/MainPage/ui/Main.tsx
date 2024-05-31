import React, { FC, useCallback, useContext } from "react";
import {WeatherContext } from "../../../App/Provider/WeatherDataProvider";
import cls from "./Main.module.scss"
import CurrentForecast from "../../../widgets/CuurentForecast";
import SunriseSunset from "../../../widgets/SunriseSunset/ui/SunriseSunset";
import UseBackground from "../../../shared/ui/background/ui/Background";
import AirQuality from "../../../widgets/AirQuality";
import Forecast from "../../../widgets/Forecast";
import { defaultCity } from "../../../App/Provider/WeatherDataProvider/ui/WeatherProvider";



export const getLocation = () => {
  return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              position => {
                  const latitude = position.coords.latitude;
                  const longitude = position.coords.longitude;
                  resolve({ latitude, longitude });
              },
              error => {
                  console.error(error);
                  reject(error);
              }
          );
      } else {
          reject(new Error('Геолокация недоступна'));
      }
  });
};


const MainPage = () => {

  

  const {weatherData} = useContext(WeatherContext)
  const {background} = UseBackground()

  return (
  <div className={cls.background_image}> 
    <div className={cls.background}> </div>
<div className={cls.MainPage}> 
  <CurrentForecast weatherData={weatherData} city={defaultCity}background={background} />
  <SunriseSunset  weatherData={weatherData}/>
  <AirQuality weatherData={weatherData}/>
  <Forecast />

</div>

</div>

  );

};
export default MainPage;
