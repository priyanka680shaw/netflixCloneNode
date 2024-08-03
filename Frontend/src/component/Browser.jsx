import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Maincontainer, MovieContainer, SearchMovie } from "./MovieDisplayContainer";
import { NOW_PLAYING_MOVIE, options, popular, toprated, upcoming } from '../Utils/Constants';
import { setNowPlayingMovie, setPopular, setTopRated, setUpComing, setToggleSearch } from "../redux/Slice/Movie.slice";
import axios from "axios";
import useMoviesApi from "./hooks/UseCoustomHook";

function Browser() {
    const user = useSelector((state) => state.userReducer?.user);
    const movie = useSelector((state) => state);
    const searchToggle = movie.movieSlice.toggleSearch;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    const nowPlayingMovies = async () => {
        try {
            const res = await axios.get(NOW_PLAYING_MOVIE, options);
            const nowPlayingMovieData = res.data.results;
            dispatch(setNowPlayingMovie(nowPlayingMovieData));
        } catch (err) {
            console.log("Error now playing Movie", err);
        }
    };

    const popularMovies = async () => {
        try {
            const res = await axios.get(popular, options);
            const popularMovieData = res.data.results;
            dispatch(setPopular(popularMovieData));
        } catch (err) {
            console.log("Error now playing Movie", err);
        }
    };

    const upComingMovies = async () => {
        try {
            const res = await axios.get(upcoming, options);
            const upcomingMovieData = res.data.results;
            dispatch(setUpComing(upcomingMovieData));
        } catch (err) {
            console.log("Error now playing Movie", err);
        }
    };

    const topRatedMovie = async () => {
        try {
            const res = await axios.get(toprated, options);
            const topRatedMovieData = res.data.results;
            dispatch(setTopRated(topRatedMovieData));
        } catch (err) {
            console.log("Error now playing Movie", err);
        }
    };

    useEffect(() => {
        nowPlayingMovies();
        upComingMovies();
        topRatedMovie();
        popularMovies();
    }, []);

    return (
        <>
            <div className="w-full min-h-screen flex flex-col">
                {searchToggle ? (
                    <SearchMovie />
                ) : (
                    <>
                        <div className="flex-grow bg-gray-100">
                            <Maincontainer />
                        </div>
                        <div className=" w-full flex-grow">
                            <MovieContainer />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Browser;
