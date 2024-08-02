import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    user : null,
    isLoding  : false
}

const userSlice = createSlice({
    name : "userSlice",
    initialState,
    reducers :{
        setUser : (state , action)=>{
            state.user = action.payload
        },
        setIsLoading  :(state , action)=>{
            state.isLoding = action.payload
        }

    }
})

export const {setUser ,  setIsLoading} = userSlice.actions
export default userSlice.reducer