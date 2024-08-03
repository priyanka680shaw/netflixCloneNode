import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import { IMG_URL } from "../../Utils/Constants";
import useMovieById from "../hooks/UseMovieById";
import { useEffect } from "react";

const VideoBackground = () => {
  const movie = useSelector((store) => store.movieSlice);
  const indexNo = Math.floor(Math.random() * 20);
  const movieData = movie.nowPlayingMovie[indexNo];

  useEffect(() => {
    useMovieById(movieData?.id);
  }, [movieData?.id]);

  const movieTrailerKey = movie.movieTrailer?.key;

  return (
    <>
      <div className="w-screen h-[70vh] overflow-hidden flex justify-center items-center flex-col relative">
        {/* Background Image */}
        <img src={`${IMG_URL}/${movieData?.backdrop_path}`} className="w-full h-full object-cover absolute top-0 left-0 z-0" />

        {/* Overlay for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-center z-10"></div>

        {/* Video Title */}
        <VideoTitle 
          title={movieData?.original_title} 
          overview={movieData?.overview} 
        />
      </div>
    </>
  );
};

export default VideoBackground;
