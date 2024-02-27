
const VideoTitle = ({mainMovie}) => {
  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">{mainMovie?.original_title}</h2>
      <p className="text-gray-600">{mainMovie?.overview}</p>
    </div>
  );
};

export default VideoTitle;
