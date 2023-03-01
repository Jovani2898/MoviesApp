import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {IConfiguration} from '../../interfaces/configuration';
import {IGenre} from '../../interfaces/genre';
import {
  IMovie,
  IMovieExtended,
  IMovieProductionCompany,
} from '../../interfaces/movie';
import {saveMovieGenres} from '../../redux/actions/movies';
import {Divider} from '../divider/Divider';
import {MovieDetailsBudget} from '../movieDetailsBudget/MovieDetailsBudget';
import {MovieDetailsCastList} from '../movieDetailsCastList/MovieDetailsCastList';
import {MovieDetailsCompanies} from '../movieDetailsCompanies/MovieDetailsCompanies';
import {MovieDetailsOverview} from '../movieDetailsOverview/MovieDetailsOverview';
import {useStyles} from './styles';

interface IMovieDetails {
  movie: IMovie;
}

export const MovieDetails = (props: IMovieDetails) => {
  const styles = useStyles();

  const [movie, setMovie] = useState<IMovieExtended>(
    props.movie as IMovieExtended,
  );

  const [movieCompanies, setMovieCompanies] = useState<any>({});

  const dispatch = useAppDispatch();

  const configuration: IConfiguration = useAppSelector(
    state => state.movie.configuration,
  );

  const genres: IGenre[] = useAppSelector(
    state => state.movie.popularMovies.filter.genres,
  );

  const {getMovieImageUri, fetchMovieGenres, fetchSingleMovie} = useMovies();

  useEffect(() => {
    console.log({movieCompanies});
  }, [movieCompanies]);

  useEffect(() => {
    if (genres.length === 0) {
      fetchMovieGenres().then((movieGenres: IGenre[]) => {
        dispatch(saveMovieGenres(movieGenres));
      });
    }

    //here we connected two interfaces and reached IMovieProductionCompany
    fetchSingleMovie(movie.id).then((fetchedMovie: IMovieExtended) => {
      setMovie({...movie, ...fetchedMovie});
      const companies: any = {};
      fetchedMovie.production_companies.forEach(
        (company: IMovieProductionCompany) => {
          companies[company.id] = {
            ...company,
            isLoaded: null,
          };
        },
      );
      setMovieCompanies(companies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView style={styles.container}>
      <MovieDetailsOverview movie={movie} />
      <Divider style={styles.divider} />
      <MovieDetailsBudget movie={movie} />
      <Divider style={styles.divider} />
      <MovieDetailsCompanies
        configuration={configuration}
        getMovieImageUri={getMovieImageUri}
        movieCompanies={movieCompanies}
        setMovieCompanies={setMovieCompanies}
      />
      <Divider style={styles.divider} />
      <MovieDetailsCastList configuration={configuration} movie={movie} />
    </ScrollView>
  );
};
