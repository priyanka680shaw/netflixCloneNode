import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slice/User.Slice'
import movieSlice from './Slice/Movie.slice'
import searchSlice from "./Slice/Search.Slice"
const reduxStore = configureStore({
    reducer : {
        userReducer , movieSlice , searchSlice
    }
})

export default reduxStore  ;