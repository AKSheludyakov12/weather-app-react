import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { rejects } from "assert";
import { useSelector } from "react-redux";

const city = "Хабаровск"
export const fetchWeatherData = createAsyncThunk       
(
    'weather/fetchWeatherData',
    
    async ( ) =>{
        try {
                const responce = await axios.get(
                `https://api.weatherapi.com/v1/forecast.json?key=f640eab122354f39be692227232108&days=5&lang=ru&q=${city}&aqi=yes` )
                return responce
         }catch(e) {
            console.log(e)
            return ('error')
         }
        
    } 
   
)