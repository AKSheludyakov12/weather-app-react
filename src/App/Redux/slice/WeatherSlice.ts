import { PayloadAction, createAsyncThunk, createSlice, isAction } from "@reduxjs/toolkit";
import axios from "axios";
import { WeatherDataDefault } from "../../../shared/const/WeatherDataDefault";
import { StateSchema, WeatherDataProps } from "../Config/StateSchema";
import { fetchCity } from "./CitySlice";
import { promises } from "dns";

export type WeatherDataSliceState = {
    weatherData: WeatherDataProps;
    city: string;
};
const initialState: WeatherDataSliceState = {
    weatherData: WeatherDataDefault,
    city: 'Владивосток'
};
export const fetchWeatherData = createAsyncThunk       
(
    'weather/fetchWeatherData',
    
    async (city) =>{
        try {
          
                const responce = await axios.get(
                `https://api.weatherapi.com/v1/forecast.json?key=f640eab122354f39be692227232108&days=5&lang=ru&q=${city}&aqi=yes` )
                console.log(responce.data)
                return responce.data
         }catch(error) {
            console.log(error)
            throw error
         }
        
    } 
   
)
export const WeatherDataSlice = createSlice ({ 
name: "WeatherData",
initialState,
reducers:{
    setWeatherData: (state, action: PayloadAction<WeatherDataProps>) => {
       state.weatherData =  action.payload
    },
    seCity: (state, action) =>{
        state.city = action.payload
    }
},
extraReducers: (builder) =>{
builder 
.addCase(fetchCity.fulfilled, (state, action:PayloadAction<string>) =>{
    state.city = action.payload

})
.addCase(fetchWeatherData.pending, (state)=>{

    console.log("думает")
})
.addCase(fetchWeatherData.fulfilled, (state, action)=> {
    state.weatherData = action.payload
    console.log("ок")
    console.log(state.weatherData)
    localStorage.setItem("weatherData", JSON.stringify(state.weatherData))

})
.addCase(fetchWeatherData.rejected, (state, action) => {
    console.log("все хуйня" + action.error.message)
})

}
})

export const { actions: WeatherDataAction} = WeatherDataSlice
export const {  reducer: WeatherDataReducer } =  WeatherDataSlice   
