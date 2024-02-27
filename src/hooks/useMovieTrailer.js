import { useEffect } from "react";
import { GET_MOVIE_TRAILER } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setTrailerVideo } from "../store/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  console.log(movieId);
  const getTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      GET_MOVIE_TRAILER
    );
    const json = await data?.json();
    const filteredTrailer = json?.results?.find(
      (video) => video?.name === "Trailer"
    );
    dispatch(setTrailerVideo(filteredTrailer));
  };
  useEffect(() => {
    getTrailer();
  }, []);
};

export default useMovieTrailer;
