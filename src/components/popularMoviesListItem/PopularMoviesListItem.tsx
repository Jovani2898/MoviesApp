import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {IMovie} from '../../interfaces/movie';
import {addFavorite} from '../../redux/actions/favorites';
import {styles} from './styles';

interface IPopularMoviesListItem {
  item: IMovie;
}

export const PopularMoviesListItem = (props: IPopularMoviesListItem) => {
  const {item} = props;
  const {getMovieImageUri} = useMovies();
  const configuration = useAppSelector(state => state.movie.configuration);

  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      key={item.id}
      style={styles.clickable}
      onPress={() => dispatch(addFavorite(item))}>
      <FastImage
        style={styles.image}
        source={{
          uri: getMovieImageUri({
            imagePath: item.poster_path,
            imageSize: configuration?.images.poster_sizes[6],
            baseUrl: configuration?.images.base_url,
          }),
        }}
      />
    </TouchableOpacity>
  );
};

export default memo(PopularMoviesListItem);
