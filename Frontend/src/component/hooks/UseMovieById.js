import axios from 'axios'
import {options} from "../../Utils/Constants"
import { useSelector , useDispatch } from 'react-redux'
import { setMovieTrailer } from '../../redux/Slice/Movie.slice'
const useMovieById = async (movie_id) => {
    const dispatch = useDispatch()
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos` , options)
        console.log("movie video response" , res.data.results[0].type)
        const trailer = res?.data?.results?.filter((items)=>{return items.type === "Trailer"})
        console.log("trailer" , trailer)
        dispatch(setMovieTrailer(trailer.length > 0 ? trailer[0] : res.data.results[0]))
    }
    catch(error){
        console.log("Banner movie video Display" , error)
    }
}


export default useMovieById
