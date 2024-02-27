import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BackgroundVideo = ({ mainMovie }) => {
  const trailerVideo = useSelector((state) => state?.movies?.trailerVideo);
  const id = mainMovie?.id;
  useMovieTrailer(id);
  return (
    <div className="absolute top-0 -z-10">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
