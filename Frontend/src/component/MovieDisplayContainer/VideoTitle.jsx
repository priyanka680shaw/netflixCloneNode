
const VideoTitle = ({title , overview
}) => {
  return (
    <>
        <div className=" aspect-video absolute left-7 top-[150px] text-white font-bold pt[18%] p-12">
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <p className="w-1/2">{overview}</p>
            <div className="flex mt-8 gap-5">
             
            </div>
        </div>
    </>
  )
}

export default VideoTitle
