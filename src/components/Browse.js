import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import MainContainer from "./MainContainer";
import MovieListContainer from "./MovieListContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <Header></Header>
      <MainContainer />
      <div className="ml-auto">
        <MovieListContainer />
      </div>
    </div>
  );
};

export default Browse;
