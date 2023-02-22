import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {styles} from './styles';

export const PopularMoviesListItem = ({item}) => {
  const {getMovieImageUri} = useMovies();
  const configuration = useAppSelector(state => state.movie.configuration);

  return (
    <TouchableOpacity key={item.id} style={styles.clickable}>
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
