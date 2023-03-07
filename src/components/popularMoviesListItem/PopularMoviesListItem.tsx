import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {IMovie} from '../../interfaces/movie';
import {
  DETAILS_SCREEN,
  RootNavigationParamList,
} from '../../navigation/navigation.constants';
import {styles} from './styles';

interface IPopularMoviesListItem {
  item: IMovie;
}

export const PopularMoviesListItem = memo((props: IPopularMoviesListItem) => {
  const {item} = props;
  const {getMovieImageUri} = useMovies();
  const configuration = useAppSelector(state => state.movie.configuration);

  const {navigate} = useNavigation<RootNavigationParamList>();

  const handlePress = () => {
    navigate(DETAILS_SCREEN, {movie: item});
  };

  return (
    <TouchableOpacity style={styles.clickable} onPress={handlePress}>
      <FastImage
        style={styles.image}
        source={{
          uri: getMovieImageUri({
            imagePath: item.poster_path,
            imageSize: configuration?.images.poster_sizes[6],
            baseUrl: configuration?.images.secure_base_url,
          }),
        }}
      />
    </TouchableOpacity>
  );
});
