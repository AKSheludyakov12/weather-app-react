import { Reducer, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { WeatherDataReducer } from "../slice/WeatherSlice";
import { daysSwitcherReducer } from "../slice/DaysSwitcher";


export function createReduxStore(initialState: StateSchema){
const rootReducer: ReducersMapObject<StateSchema>  = {  
    weatherData:WeatherDataReducer,
    getSelectedDay: daysSwitcherReducer
}

return configureStore<StateSchema>({
    reducer: rootReducer, 
    preloadedState: initialState
})
}
