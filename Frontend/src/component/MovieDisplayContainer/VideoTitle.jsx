
const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="aspect-video absolute left-7 top-[150px] text-white font-bold pt-[18%] p-12 sm:p-8 lg:w-1/3">
        <h1 className="text-4xl font-extrabold sm:text-3xl">{title}</h1>
        <p className="w-1/2 sm:w-full">{overview}</p>
        <div className="flex mt-8 gap-5">
          {/* Additional elements can go here */}
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
