import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovie : [],
    popular  :[],
    topRated  :[],
    upComing  :[],
    toggleSearch : false,
    movieTrailer : null,
    dilougeBox : false
}

const movieSlice = createSlice({
    name  : "MovieSlice" , 
    initialState,
    reducers : {
        setNowPlayingMovie : (state , action)=>{
            state.nowPlayingMovie = action.payload
        },
        setPopular  :(state , action)=>{
            state.popular = action.payload;
        },
        setTopRated  :(state , action)=>{
            state.topRated = action.payload
        },
        setUpComing : (state , action)=>{
            state.upComing = action.payload
        },
        setToggleSearch : (state )=>{
            state.toggleSearch = !state.toggleSearch
        },
        setMovieTrailer  :(state , action)=>{
            state.movieTrailer = action.payload
        },
        setDilougeBox : (state , action)=>{
            state.dilougeBox = action.payload
        }
    }
})

export const {setNowPlayingMovie , setPopular , setTopRated , setUpComing , setToggleSearch , setMovieTrailer , setDilougeBox} = movieSlice.actions
export default movieSlice.reducer