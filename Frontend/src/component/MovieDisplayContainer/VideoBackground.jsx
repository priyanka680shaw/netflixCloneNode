import VideoTitle from "./VideoTitle"
import { useSelector } from "react-redux"
import {IMG_URL} from "../../Utils/Constants"
import useMovieById from "../hooks/UseMovieById"
import { useEffect } from "react"
const VideoBackground = () => {
  const movie = useSelector((store)=>store.movieSlice)
  const indexNo = (Math.floor(Math.random()*20))
  const movieData = ("movie Video" , movie.nowPlayingMovie[indexNo]
  )
  console.log(movieData
  )
//  useMovieById(movieData?.id)
useEffect(()=>{
  useMovieById(movieData?.id)
} , [])

  const movieTrailerKey = movie.movieTrailer?.key

  //console.log("movieTrailer" , movieTrailer)
  return (
    <>
    <div className=" w-screen h-screen overflow-x-hidden flex justify-center items-center flex-col bg-red-300">
     
        {/* <iframe className="w-screen aspect-video  "
        src={`https://www.youtube.com/embed/${movieTrailerKey}?si=oc1OFyBLpvWq6MuA`} title="YouTube video player"   allowFullScreen allow="autoplay"></iframe> */}
        <img src={`${IMG_URL}/${movieData?.backdrop_path
}`} className="w-screen" />


       
      <VideoTitle title = {movieData?.original_title

} overview
= {movieData?.overview
}/>
    </div>
   
    </>
    
  )
}

export default VideoBackground
