import {filterMoviesByRating} from '../utils/movie.utils';
import {IMovie} from '../interfaces/movie';
import {Promise} from 'es6-promise';
import {IMovieSearchFilter} from '../interfaces/movieSearchFIlter';

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

  const fetchSingleMovie = async (movieId: number) => {
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
        // return res.reduce((acc: {title: string, value: boolean}[], curr: {id: number; name: string}) => {
        //   acc.push({title: curr.name, value: false});
        //   return acc;
        // }, []);
        return res.map(item => ({title: item.name, value: false, id: item.id}));
      });
    return response;
  };

  const searchMovies = async (filter: IMovieSearchFilter) => {
    let searchResults: IMovie[] = [];
    let page = 1;
    let totalPages = 0;
    const firstResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=eaec283d031b691056914c24ed9aa5e6&query=${filter.title}&year=${filter.year}`,
    ).then(res => res.json());

    totalPages = firstResponse.total_pages;
    searchResults.push(...filterMoviesByRating(firstResponse.results, filter));

    const promises = [];

    for (let i = page + 1; i <= totalPages; i++) {
      promises.push(
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=eaec283d031b691056914c24ed9aa5e6&query=${filter.title}&year=${filter.year}&page=${page}`,
        )
          .then(res => res.json())
          .then(res => filterMoviesByRating(res.results, filter)),
      );
      page = page + 1;
    }
    return Promise.all(promises).then(resolve => {
      resolve.forEach(pageResults => {
        searchResults.push(...pageResults);
      });

      if (filter.genreIsSelected) {
        const finalResult: any = [];
        for (let i = 0; i < searchResults.length; i++) {
          const element = searchResults[i];
          if (
            filter.genres
              .filter(activeFilter => activeFilter.value)
              .some(r => element.genre_ids.includes(r.id))
          ) {
            finalResult.push(element);
          }
        }
        return finalResult;
      } else {
        return searchResults;
      }
    });
  };

  const fetchCastByMovieId = async (movieId: number) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=eaec283d031b691056914c24ed9aa5e6`,
    )
      .then(res => res.json())
      .then(res => res.cast);
    return response;
  };

  return {
    fetchCastByMovieId,
    fetchConfiguration,
    fetchTopRatedMovies,
    fetchSingleMovie,
    getMovieImageUri,
    fetchMovieActors,
    fetchPopularMovies,
    fetchMovieGenres,
    searchMovies,
  };
};
