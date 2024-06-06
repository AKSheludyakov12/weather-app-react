import { Reducer, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { cityReducer, citySlaceState, citySlice } from "../slice/CitySlice";
import { StateSchema } from "./StateSchema";
import { WeatherDataReducer } from "../slice/WeatherSlice";


export function createReduxStore(initialState: StateSchema){
const rootReducer: ReducersMapObject<StateSchema>  = {  
    weatherData:WeatherDataReducer,
    cityData: cityReducer
}

return configureStore<StateSchema>({
    reducer: rootReducer, 
    preloadedState: initialState
})
}
