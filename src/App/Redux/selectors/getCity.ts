import { useSelector } from "react-redux";
import { StateSchema } from "../Config/StateSchema";

export const getCity = (state:StateSchema)=> state?.cityData