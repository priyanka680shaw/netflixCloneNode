import axios from 'axios';
import React, { useState } from 'react';
import { options } from '../../Utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../../redux/Slice/Search.Slice';
import MovieList from './MovieList';

const SearchMovie = () => {
  const searchMovieData = useSelector((store) => store.searchSlice);
  const { movieName, searchedMovie } = searchMovieData;
  
  console.log("searchMovieData", searchMovieData, "movieName", movieName, "movieddata", searchedMovie);

  const [searchMovie, setSearchMovie] = useState("");
  const [searchArea, setSearchArea] = useState(true);
  const dispatch = useDispatch();
  
  //submitHandler Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Search query submitted: ${searchMovie}`);
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}`, options);
      console.log("searec", res);
      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
      setSearchMovie("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-start mt-[100px] items-center h-screen flex-col gap-10 px-4 sm:px-6 md:px-8 lg:px-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            type="text"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Search..."
          />
          <button
            type="submit"
            onClick={() => {
              setSearchArea(false);
            }}
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Search
          </button>
        </div>
      </form>
      {/* Search data is going to display here */}
      {
        searchArea ? (
          <div><h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold shadow-lg text-green-400 text-center'>Search Your Movie Type!</h1></div>
        ) : (
          <div className='w-full h-full'>
            <h1 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold capitalize'>{movieName}</h1>
            <MovieList title={movieName} movies={searchedMovie} className="flex flex-wrap justify-center gap-4 mt-4" />
          </div>
        )
      }
    </div>
  );
};

export default SearchMovie;
