import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {IConfiguration} from '../../interfaces/configuration';
import {IGenre} from '../../interfaces/genre';
import {IMovie} from '../../interfaces/movie';
import {saveMovieGenres} from '../../redux/actions/movies';
import {Divider} from '../divider/Divider';
import {styles} from './styles';

interface IMovieDetails {
  movie: IMovie;
}

export const MovieDetails = (props: IMovieDetails) => {
  const {movie} = props;

  const dispatch = useAppDispatch();

  const configuration: IConfiguration = useAppSelector(
    state => state.movie.configuration,
  );

  const genres: IGenre[] = useAppSelector(
    state => state.movie.popularMovies.filter.genres,
  );

  const {getMovieImageUri, fetchMovieGenres} = useMovies();

  useEffect(() => {
    if (genres.length === 0) {
      fetchMovieGenres().then((movieGenres: IGenre[]) => {
        dispatch(saveMovieGenres(movieGenres));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGenreStringsByIds = (genreIds: number[]) => {
    const genreStrings: any = [];

    genres.forEach(genre => {
      if (genreIds.includes(genre.id)) {
        genreStrings.push(
          <Text
            style={[
              genreStrings.length === 0 ? null : styles.m18,
              styles.genre,
            ]}>
            {genre.title}
          </Text>,
        );
      }
    });
    return genreStrings;
  };

  const getRatingStars = (rating: number) => {
    const starsJsx: any = [];
    const starsCount = Math.round(rating / 2);

    for (let i = 1; i <= 5; i++) {
      if (i <= starsCount) {
        starsJsx.push(<Icon name="star" size={20} color="gold" />);
      } else {
        starsJsx.push(<Icon name="star-o" size={20} />);
      }
    }
    return starsJsx;
  };

  const getAdultIcon = (adult: boolean) => {
    return adult ? (
      <Icon name="male" size={18} />
    ) : (
      <Icon name="child" size={18} />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.segment}>
        <View style={styles.posterContainer}>
          <Image
            style={styles.posterImage}
            source={{
              uri: getMovieImageUri({
                imagePath: movie.poster_path,
                imageSize: configuration.images.poster_sizes[6],
                baseUrl: configuration.images.base_url,
              }),
            }}
          />
          <Text style={styles.releaseDate}>{movie.release_date}</Text>
        </View>
        <View style={styles.overviewContainer}>
          <Text style={styles.overview}>{movie.overview}</Text>
          <View style={styles.genresContainer}>
            {getGenreStringsByIds(movie.genre_ids)}
          </View>
          <Text>{getRatingStars(movie.vote_average)}</Text>
          <View style={styles.subInfoContainer}>
            <Text>Age rating: {getAdultIcon(movie.adult)}</Text>
            <View style={styles.originalLanguageContainer}>
              <Icon name="globe" size={14} style={{}} />
              <Text style={styles.originalLanguage}>
                {movie.original_language.toUpperCase()}
              </Text>
            </View>
            <Text>
              <Icon name="users" /> {movie.vote_count}
            </Text>
          </View>
        </View>
      </View>
      <Divider style={styles.divider} />
    </View>
  );
};
