import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import MainContainer from "./MainContainer";
import MovieListContainer from "./MovieListContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header></Header>
      <MainContainer />
      <MovieListContainer />
    </div>
  );
};

export default Browse;
