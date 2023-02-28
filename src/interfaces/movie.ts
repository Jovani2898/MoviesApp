export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

//добавили IMovieExtended к IMovie
export interface IMovieExtended extends IMovie {
  budget: number;
  production_companies: IMovieProductionCompany[];
  production_countrys: IMovieProductionCountry[];
  revenue: number;
  status: string;
}

export interface IMovieProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
  isLoaded: boolean | null;
}

export interface IMovieProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface IMovieCast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
  imageLoaded: boolean | null;
}

export interface IMovieFileProps {
  imagePath: string;
  imageSize: string;
  baseUrl: string;
}
