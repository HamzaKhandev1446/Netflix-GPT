import { useEffect } from "react";
import { NOW_PLATING_MOVIES_API } from "../utils/constants";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      NOW_PLATING_MOVIES_API
    );
    const json = await data?.json();
    await dispatch(addNowPlayingMovies({ nowPlayingMovies: json?.results }));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
