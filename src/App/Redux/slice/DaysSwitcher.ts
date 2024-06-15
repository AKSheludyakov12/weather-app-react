import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { WeatherDataDefault } from "../../../shared/const/WeatherDataDefault";
import { WeatherDataProps, selectDay } from "../Config/StateSchema";

export type DaysSwitcherSliceState = {
    selectedDay: number
};
const initialState: selectDay = {
    day: 0
};

export const daysSwitcherSlice = createSlice ({ 
name: "daysSwitcherSlice",
initialState,
reducers:{
    setDaysSwitcherNext: (state, action: PayloadAction<number>) => {
       state.day =  state.day + 1
    },
    setDaysSwitcherPrev: (state, action: PayloadAction<number>) =>{
        state.day =  state.day - 1
    }
}

})

export const { actions: daysSwitcherAction} = daysSwitcherSlice
export const {  reducer: daysSwitcherReducer } =  daysSwitcherSlice   
