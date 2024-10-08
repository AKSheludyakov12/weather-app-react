

import { FC, useState } from "react";
import cls from "./CurrentForecast.module.scss"
import { HeaderCurrent } from "./HeaderCurrent/HeaderCurrent";
import { FormatedDate } from "../../../shared/lib";
import { WeatherDataProps } from "../../../App/Redux/Config/StateSchema";
import { useSelector } from "react-redux";
import { getIsLoading, getSelectedDay } from "../../../App/Redux";
import Ul from "../../../shared/ui/Ul";
import { Loader } from "../../../shared/ui/Loader";
import { MainWrapper } from "./MainWrapper/MainWrapper";
import { Theme } from "../../../App/Provider/ThemeProvider/lib/ThemeContext";


interface CurrentForecastProps {
weatherData: WeatherDataProps,
city:string, 
lastUpdate?: string
}

const CurrentForecast:FC<CurrentForecastProps> = ({weatherData, city,  lastUpdate}) => {

    const isLoading = useSelector(getIsLoading)
    const { current } = weatherData
    const selectedDay = useSelector(getSelectedDay)
    const {day} =  weatherData.forecast.forecastday[selectedDay]
  
    const windKph = selectedDay > 0 ? day.maxwind_kph : current.wind_kph
    const windKms  = windKph * 1000 / 3600
    const humidity = selectedDay > 0 ? day.avghumidity :current.humidity 
    const chanceOfRain = day.daily_chance_of_rain
  

    if(isLoading){
      return (
        <MainWrapper>
        <Loader classNames={cls.loader_pozition}/>
      </MainWrapper>
      )
    }

      return (
<MainWrapper >
<HeaderCurrent 
        className={cls.header}
        selectedDay={selectedDay} 
        selectedDayText={FormatedDate(weatherData.forecast.forecastday[selectedDay].date)}

        />
       
          <div className={cls.block}>
            <div className={cls.now}>
              {
              selectedDay > 0 ? Math.round(day.avgtemp_c) : Math.round(current.temp_c)} °С 
              </div>
            <div className={cls.max_min}>
              <div className={cls.max}>{Math.round(day.maxtemp_c)}°</div>
              <div className={cls.min}>{Math.round(day.mintemp_c)}°</div>
            </div>
          </div>
          <div className={cls.weather_property}>
            <div className={cls.lastUpdate}>{`Последнее обновление: ${lastUpdate}`}</div>
            <Ul className={cls.list}>
              <li>
                <div className={cls.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g opacity="0.4">
                      <path
                        d="M3.45542 7.66197C3.45542 6.94084 3.93617 6.46009 4.6573 6.46009H5.85917C6.5803 6.46009 7.06105 6.94084 7.06105 7.66197C7.06105 8.3831 6.5803 8.86385 5.85917 8.86385H4.6573C3.93617 8.86385 3.45542 8.3831 3.45542 7.66197ZM4.6573 17.277C4.6573 16.5559 5.13805 16.0751 5.85917 16.0751H7.06105C7.78218 16.0751 8.26293 16.5559 8.26293 17.277C8.26293 17.9981 7.78218 18.4789 7.06105 18.4789H5.85917C5.13805 18.4789 4.6573 17.9981 4.6573 17.277ZM4.6573 20.8826C3.93617 20.8826 3.45542 21.3634 3.45542 22.0845C3.45542 22.8056 3.93617 23.2864 4.6573 23.2864H14.2723C14.9934 23.2864 15.4742 22.8056 15.4742 22.0845C15.4742 21.3634 14.9934 20.8826 14.2723 20.8826H4.6573ZM25.0892 7.66197C25.0892 6.94084 25.57 6.46009 26.2911 6.46009H28.6949C29.416 6.46009 29.8967 6.94084 29.8967 7.66197C29.8967 8.3831 29.416 8.86385 28.6949 8.86385H26.2911C25.57 8.86385 25.0892 8.3831 25.0892 7.66197ZM8.26293 25.6901C7.5418 25.6901 7.06105 26.1709 7.06105 26.892C7.06105 27.6131 7.5418 28.0939 8.26293 28.0939H16.6761C17.3972 28.0939 17.878 27.6131 17.878 26.892C17.878 26.1709 17.3972 25.6901 16.6761 25.6901H8.26293ZM3.45542 13.6714C2.73429 13.6714 2.25354 13.1906 2.25354 12.4695C2.25354 11.7484 2.73429 11.2676 3.45542 11.2676H17.878C19.2 11.2676 20.2817 10.1859 20.2817 8.86385C20.2817 7.54178 19.2 6.46009 17.878 6.46009C17.1568 6.46009 16.5559 6.70047 16.1953 7.18122C15.7146 7.66197 14.9934 7.66197 14.5127 7.18122C14.0319 6.70047 14.0319 5.97934 14.5127 5.49859C15.354 4.65727 16.5559 4.05634 17.878 4.05634C20.5221 4.05634 22.6855 6.21972 22.6855 8.86385C22.6855 11.508 20.5221 13.6714 17.878 13.6714H3.45542ZM26.2911 16.0751C27.0122 16.0751 27.493 15.5944 27.493 14.8732C27.493 14.1521 27.0122 13.6714 26.2911 13.6714C25.9305 13.6714 25.6902 13.7915 25.4498 14.0319C24.969 14.5127 24.2479 14.5127 23.7672 14.0319C23.2864 13.5512 23.2864 12.83 23.7672 12.3493C24.3681 11.6282 25.3296 11.2676 26.2911 11.2676C28.3343 11.2676 29.8967 12.83 29.8967 14.8732C29.8967 16.9164 28.3343 18.4789 26.2911 18.4789H15.4742C14.7531 18.4789 14.2723 17.9981 14.2723 17.277C14.2723 16.5559 14.7531 16.0751 15.4742 16.0751H26.2911ZM25.0892 23.2864H19.0798C18.3587 23.2864 17.878 22.8056 17.878 22.0845C17.878 21.3634 18.3587 20.8826 19.0798 20.8826H25.0892C27.1324 20.8826 28.6949 22.4451 28.6949 24.4883C28.6949 26.5315 27.1324 28.0939 25.0892 28.0939C24.1277 28.0939 23.1662 27.7333 22.5653 27.0122C22.0845 26.5315 22.0845 25.8103 22.5653 25.3296C23.046 24.8488 23.7672 24.8488 24.2479 25.3296C24.4883 25.57 24.7287 25.6901 25.0892 25.6901C25.8103 25.6901 26.2911 25.2094 26.2911 24.4883C26.2911 23.7671 25.8103 23.2864 25.0892 23.2864Z"
                        fill="white"
                        />
                    </g>
                  </svg>
                </div>
                <div className={cls.text}>
                <div className={cls.desc}>Ветер</div>
                <div className={cls.value}>{windKms.toFixed(1)} м/с</div>
                </div>
              </li>
              <span className={cls.delimiter}></span>
              <li>
                <div className={cls.icon}>
                  <img src="./img/rain.svg" alt="" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    >
                    <g opacity="0.4">
                      <path
                        d="M7.27037 25.0844C6.61668 26.4441 7.1893 28.0774 8.54921 28.7295C9.90932 29.3836 11.5416 28.8107 12.1953 27.451C12.849 26.0913 12.1515 21.2352 12.1515 21.2352C12.1515 21.2352 7.92426 23.7247 7.27037 25.0844Z"
                        fill="white"
                        />
                      <path
                        d="M14.5596 25.0844C13.9061 26.4441 14.4785 28.0774 15.8386 28.7295C17.1983 29.3836 18.8308 28.8107 19.4845 27.451C20.1382 26.0913 19.4407 21.2352 19.4407 21.2352C19.4407 21.2352 15.2133 23.7247 14.5596 25.0844Z"
                        fill="white"
                      />
                      <path
                        d="M17.67 18.6483C18.3237 17.2886 17.6262 12.4325 17.6262 12.4325C17.6262 12.4325 13.399 14.922 12.7451 16.2817C12.0914 17.6414 12.664 19.2746 14.0239 19.9267C15.3841 20.5808 17.0163 20.008 17.67 18.6483Z"
                        fill="white"
                        />
                      <path
                        d="M21.9582 19.9267C23.3181 20.5808 24.9504 20.008 25.604 18.6483C26.2577 17.2886 25.5602 12.4325 25.5602 12.4325C25.5602 12.4325 21.333 14.922 20.6792 16.2817C20.0257 17.6414 20.5981 19.2746 21.9582 19.9267Z"
                        fill="white"
                      />
                      <path
                        d="M24.3799 10.5486C25.0338 9.18869 24.3365 4.33317 24.3365 4.33317C24.3365 4.33317 20.1089 6.82148 19.4554 8.18139C18.8017 9.5413 19.374 11.1737 20.7341 11.8274C22.094 12.4801 23.7262 11.9087 24.3799 10.5486Z"
                        fill="white"
                        />
                      <path
                        d="M26.2311 21.2352C26.2311 21.2352 22.0037 23.7247 21.35 25.0844C20.6963 26.4441 21.269 28.0774 22.6287 28.7295C23.9888 29.3836 25.621 28.8107 26.2749 27.451C26.9286 26.0913 26.2311 21.2352 26.2311 21.2352Z"
                        fill="white"
                        />
                    </g>
                  </svg>
                </div>
                <div className={cls.text}>
                <div className={cls.desc}>Влажность</div>
                <div className={cls.value}>{humidity} %</div>
                </div>
              </li>
              <span className={cls.delimiter}></span>
              <li>
                <div className={cls.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <g opacity="0.4">
                      <path
                        d="M25.8454 13.4869C25.8325 13.4869 25.8207 13.4905 25.8079 13.4906C26.0448 12.9427 26.1775 12.3392 26.1775 11.7043C26.1775 9.21472 24.1593 7.19643 21.6697 7.19643C20.7898 7.19643 19.9715 7.45251 19.2777 7.88845C18.3391 5.60734 16.097 3.99996 13.4774 3.99996C10.0133 3.99996 7.20531 6.80796 7.20531 10.272C7.20531 10.5338 7.22651 10.7903 7.25769 11.0436C7.24002 11.0434 7.22297 11.041 7.20531 11.041C4.88288 11.041 3 12.9238 3 15.2464C3 17.5688 4.88288 19.4516 7.20531 19.4516H25.8454C27.4926 19.4516 28.8278 18.1164 28.8278 16.4693C28.8278 14.8221 27.4926 13.4869 25.8454 13.4869Z"
                        fill="white"
                      />
                      <path
                        d="M11.2648 26.7994C10.7582 27.8533 9.49302 28.2971 8.4391 27.7905C7.38519 27.2839 6.94141 26.0188 7.44801 24.9649C7.95477 23.9109 11.2308 21.9825 11.2308 21.9825C11.2308 21.9825 11.7714 25.7455 11.2648 26.7994Z"
                        fill="white"
                        />
                      <path
                        d="M16.5298 26.7994C16.0233 27.8533 14.7582 28.2971 13.7043 27.7905C12.6502 27.2839 12.2066 26.0188 12.7132 24.9649C13.2199 23.9109 16.496 21.9825 16.496 21.9825C16.496 21.9825 17.0365 25.7455 16.5298 26.7994Z"
                        fill="white"
                        />
                      <path
                        d="M21.8693 26.7994C21.3627 27.8533 20.0976 28.2971 19.0437 27.7905C17.9897 27.2839 17.5461 26.0188 18.0526 24.9649C18.5593 23.9109 21.8354 21.9825 21.8354 21.9825C21.8354 21.9825 22.3759 25.7455 21.8693 26.7994Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
                <div className={cls.text}>
    
                <div className={cls.desc}>осадки</div>
                <div className={cls.value}>{chanceOfRain} %</div>
                </div>
              </li>

            </Ul>
          </div>
      </MainWrapper>
      );
    };
    export default CurrentForecast;