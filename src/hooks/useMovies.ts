export const useMovies = () => {
  const fetchConfiguration = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/configuration?api_key=eaec283d031b691056914c24ed9aa5e6',
    ).then(res => res.json());
    return response;
  };

  const fetchTopRatedMovies = async (page: number) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=eaec283d031b691056914c24ed9aa5e6&page=${page}`,
    )
      .then(res => res.json())
      .then(res => res.results);
    return response;
  };

  const fetchSingleMovie = async (movieId: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=eaec283d031b691056914c24ed9aa5e6`,
    ).then(res => res.json());
    return response;
  };

  const getMovieImageUri = ({
    imagePath,
    imageSize,
    baseUrl,
  }: {
    imagePath: string;
    imageSize: string;
    baseUrl: string;
  }) => {
    return baseUrl + imageSize + imagePath;
  };

  const fetchMovieActors = async (movieId: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=eaec283d031b691056914c24ed9aa5e6`,
    ).then(res => res.json());
    return response;
  };

  const fetchPopularMovies = async (page: number) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=eaec283d031b691056914c24ed9aa5e6&page=${page}`,
    )
      .then(res => res.json())
      .then(res => res.results);
    return response;
  };

  const fetchMovieGenres = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=eaec283d031b691056914c24ed9aa5e6',
    )
      .then(res => res.json())
      .then(res => res.genres)
      .then((res: {id: number; name: string}[]) => {
        // return res.reduce((acc: string[], curr: {id: number; name: string}) => {
        //   acc.push(curr.name);
        //   return acc;
        // }, []);
        return res.map(item => ({title: item.name, value: false}));
      });
    return response;
  };

  return {
    fetchConfiguration,
    fetchTopRatedMovies,
    fetchSingleMovie,
    getMovieImageUri,
    fetchMovieActors,
    fetchPopularMovies,
    fetchMovieGenres,
  };
};
