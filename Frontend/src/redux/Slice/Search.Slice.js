import { createSlice } from "@reduxjs/toolkit";
//import { searchMovie } from "../../Utils/Constants";
const initialState = {
    movieName  : null,
    searchedMovie : [],
    isIoadder : false
}

const searchSlice = createSlice({
    name  :"SearchSlice",
    initialState,
    reducers  : {
        setSearchMovieDetails : (state , action)=>{

            const {searchMovie , movies}  = action.payload;
            state.movieName = searchMovie ,
            state.searchedMovie = movies

        }
    }
})

export const {setSearchMovieDetails} = searchSlice.actions
export default searchSlice.reducer