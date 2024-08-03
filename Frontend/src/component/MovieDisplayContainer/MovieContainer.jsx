
import MovieList from "./MovieList"
import { useSelector } from "react-redux"
const MovieContainer = () => {
  const movie = useSelector((state)=>state.movieSlice
)
  return (
    <div>
      <div className="bg-black w-full h-auto ">  
      <div >
      <MovieList title= {"Popular Movies"} movies = {movie.nowPlayingMovie}/>
      <MovieList title= {"Now Playing Movie"} movies = {movie.popular}/>
      <MovieList title= {"Top Rated Movie"} movies = {movie.topRated}/>
      <MovieList title= {"Upcoming Movie"} movies = {movie.upComing}/>
      </div>
      </div>
            
    </div>
  )
}

export default MovieContainer
