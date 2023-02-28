import React from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '../../hooks/redux';
import {styles} from './styles';

export const PopularMovieIsEmpty = () => {
  const title = useAppSelector(state => state.movie.popularMovies.filter.title);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>For title {title} nothing was found</Text>
    </View>
  );
};
