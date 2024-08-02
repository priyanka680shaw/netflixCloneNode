import { useDispatch } from "react-redux"
import axios from "axios"

const useMoviesApi = async(api , options , setfunction)=>{
    const dispatch = useDispatch()
    try{
        const res = await axios.get(api , options)
        console.log("Now playing Movie" , res.data.results)
        const nowPlayingMovieData = res.data.results
        dispatch(setfunction(nowPlayingMovieData))

    }
    catch(err){
        console.log("Error now playing Movie" , err)
    }
 }



export default useMoviesApi
