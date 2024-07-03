import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { WeatherDataDefault } from "../../../shared/const/WeatherDataDefault";
import { WeatherDataProps, WeatherDataSchema } from "../Config/StateSchema";

export type WeatherDataSliceState = {
    weatherData: WeatherDataProps,
    isLoading: boolean

};
const initialState: WeatherDataSchema = {
    weatherData: WeatherDataDefault,
    isLoading: false

};
export const fetchWeatherData = createAsyncThunk       
(
    'weather/fetchWeatherData',
    
    async (city) =>{
        try {
                const responce = await axios.get(
                `https://api.weatherapi.com/v1/forecast.json?key=f640eab122354f39be692227232108&days=5&lang=ru&q=${city}&aqi=yes` )
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
   
},
extraReducers: (builder) =>{
builder 

.addCase(fetchWeatherData.pending, (state)=>{
    state.isLoading = true
    console.log("думает")
})
.addCase(fetchWeatherData.fulfilled, (state, action)=> {
    state.weatherData = action.payload
    state.isLoading = false
    console.log("ок")
    console.log(state.weatherData)
    localStorage.setItem("weatherData", JSON.stringify(state.weatherData))

})
.addCase(fetchWeatherData.rejected, (state, action) => {
    state.isLoading = false
    console.log("все хуйня" + action.error.message)
    state.weatherData = state.weatherData
})

}
})

export const { actions: WeatherDataAction} = WeatherDataSlice
export const {  reducer: WeatherDataReducer } =  WeatherDataSlice   
