import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);
  if(!movies) return ;
  console.log(movies);
  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default Browse;
  