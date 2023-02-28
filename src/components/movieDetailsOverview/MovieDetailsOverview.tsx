import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {IConfiguration} from '../../interfaces/configuration';
import {IGenre} from '../../interfaces/genre';
import {IMovie} from '../../interfaces/movie';
import {
  getAdultIcon,
  getGenreStringsByIds,
  getRatingStars,
} from '../../utils/movieDetails.utils';
import {styles} from './styles';

interface IMovieDetailsOverview {
  movie: IMovie;
}

export const MovieDetailsOverview = (props: IMovieDetailsOverview) => {
  const {movie} = props;

  const {getMovieImageUri} = useMovies();

  const configuration: IConfiguration = useAppSelector(
    state => state.movie.configuration,
  );

  const genres: IGenre[] = useAppSelector(
    state => state.movie.popularMovies.filter.genres,
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.image}
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
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{movie.overview}</Text>
        <View style={styles.genresContainer}>
          {getGenreStringsByIds(movie.genre_ids, genres, styles)}
        </View>
        <Text>{getRatingStars(movie.vote_average)}</Text>
        <View style={styles.additionalInfoContainer}>
          <Text>Age rating: {getAdultIcon(movie.adult)}</Text>
          <View style={styles.languageContainer}>
            <Icon name="globe" size={14} style={{}} />
            <Text style={styles.language}>
              {movie.original_language.toUpperCase()}
            </Text>
          </View>
          <Text>
            <Icon name="users" /> {movie.vote_count}
          </Text>
        </View>
      </View>
    </View>
  );
};
