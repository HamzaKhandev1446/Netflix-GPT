import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BackgroundVideo = ({ mainMovie }) => {
  const trailerVideo = useSelector((state) => state?.movies?.trailerVideo);
  const id = mainMovie?.id;
  useMovieTrailer(id);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
