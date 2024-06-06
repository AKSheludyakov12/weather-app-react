import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLocation } from "../../../shared/lib/GetCity/getCity";
import axios from "axios";
import { useSelector } from "react-redux";

export type citySlaceState = {
    city:string
}
const initialState:citySlaceState = {
    city: ""
}


export const fetchCity = createAsyncThunk<string>(
    'city/fetchCity',
    
    async () =>{    
        const {latitude, longitude} = await getLocation()
        const apiKey = 'd844dd4a-15d4-41dc-ad9a-b3f3523af9d1';
        const {data} = await axios.get(
            `https://catalog.api.2gis.com/3.0/items/geocode?lon=${longitude}&lat=${longitude}&type=adm_div.city&key=${apiKey}`)
           console.log(data)
        return data
    }
)
export const citySlice = createSlice ({ 
name: "city",
initialState,
reducers:{
    setCity: (state:citySlaceState, action: PayloadAction<string>) => {
        state.city = action.payload
    }
},
extraReducers: (builder) =>{
builder 
.addCase(fetchCity.pending, (state)=>{
    state.city = ''
})
.addCase(fetchCity.fulfilled, (state, action)=> {
    state.city = action.payload

})
.addCase(fetchCity.rejected, (state, action) => {
    state.city = "Хабаровск"
    console.log("все хуйня")
})
}
})

export const { actions: cityAction} = citySlice
export const {  reducer: cityReducer } =  citySlice
