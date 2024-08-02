import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
  return (
    <div className="w-full h-auto">
      <h1 className="text-3xl py-4 px-2 font-bold text-white">{title}</h1>
      <div className="flex py-4 overflow-x-scroll no-scrollbar cursor-pointer overflow-y-hidden">
        <div className="bg-gray-900 flex items-center">
          {
            movies.map((movieData, index) => {
              return (
                <MovieCard key={index} backdrop_path ={movieData.backdrop_path}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList
