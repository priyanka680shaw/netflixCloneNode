import { useEffect } from "react";
import {  useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Maincontainer , MovieContainer , SearchMovie } from "./MovieDisplayContainer";
import { ImPodcast } from "react-icons/im";
import {NOW_PLAYING_MOVIE , options , popular , toprated , upcoming} from '../Utils/Constants'
import { setNowPlayingMovie , setPopular , setTopRated , setUpComing , setToggleSearch} from "../redux/Slice/Movie.slice";
import axios from "axios";
import useMoviesApi from "./hooks/UseCoustomHook";
function Browser(){
    const user = useSelector((state)=>state.userReducer?.user)

    const movie = useSelector((state)=>state)
    

    const searctToggle = movie.movieSlice.
    toggleSearch
   // console.log("movieBrowser" , searctToggle)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!user){
            //console.log(user)
            navigate("/login")
        }
        
    } , [])

    //apis calling of movie lists 
    //useMoviesApi(NOW_PLAYING_MOVIE , options , setNowPlayingMovie)
 const nowPlayingMovies = async()=>{
    try{
        const res = await axios.get(NOW_PLAYING_MOVIE , options)
        //console.log("Now playing Movie" , res.data.results)
        const nowPlayingMovieData = res.data.results
        dispatch(setNowPlayingMovie(nowPlayingMovieData))

    }
    catch(err){
        console.log("Error now playing Movie" , err)
    }
 }
 const popularMovies = async()=>{
    try{
        const res = await axios.get(popular, options)
        //console.log("Now playing Movie" , res.data.results)
        const popularMovieData = res.data.results
        dispatch(setPopular(popularMovieData))

    }
    catch(err){
        console.log("Error now playing Movie" , err)
    }
 }
 const upComingMovies = async()=>{
    try{
        const res = await axios.get(upcoming , options)
       // console.log("Now playing Movie" , res.data.results)
        const upcomingMovieData = res.data.results
        dispatch(setUpComing(upcomingMovieData))

    }
    catch(err){
        console.log("Error now playing Movie" , err)
    }
 }
 const topRatedMovie = async()=>{
    try{
        const res = await axios.get(toprated , options)
        //console.log("Now playing Movie" , res.data.results)
        const topRatedMovieData = res.data.results
        dispatch(setTopRated(topRatedMovieData))

    }
    catch(err){
        console.log("Error now playing Movie" , err)
    }
 }

useEffect(()=>{
    nowPlayingMovies() 
             upComingMovies ()
              topRatedMovie ()
              popularMovies ()
} , [])
    return(
        <>
     <div className="w-full "> 

       {
        searctToggle  ? <> 
            <SearchMovie/>
        </> : <>
         <div className="">
            <Maincontainer/>
       </div>
       <div className="bg-red-300 w-full h-auto">
            <MovieContainer/>
       </div>  
        </>
       }

     </div>
        </>
    )
}
export default Browser;