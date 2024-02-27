import { useSelector } from "react-redux";

import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);
  if(!movies) return null;
  const mainMovie = movies[0];

  return (
    <div>
      <VideoTitle mainMovie={mainMovie} />
      <BackgroundVideo mainMovie={mainMovie} />
    </div>
  );
};

export default MainContainer;
