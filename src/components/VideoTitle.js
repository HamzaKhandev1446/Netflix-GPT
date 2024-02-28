const VideoTitle = ({ mainMovie }) => {
  return (
    <div className="p-8 pt-40 md:w-1/2 max-lg:w-1/3 flex flex-col justify-start font-bold">
      <h2 className="text-4xl  text-white mb-2">{mainMovie?.original_title}</h2>
      <p className="text-white">{mainMovie?.overview}</p>
      <div className="flex items-center">
        <p className="p-4 bg-red-700 text-white rounded-lg"> Top 10</p>
        <p className="text-white p-4">#1 in Movies Today</p>
      </div>

      <div className="pt-10">
        <button className="bg-gray-50 text-black p-4 rounded-sm"> ▶ Play</button>
        <button className="bg-gray-700 text-white p-4 rounded-sm ml-3">
          More Info ⓘ
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
