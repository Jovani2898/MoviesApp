import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IMovieExtended} from '../../interfaces/movie';
import {styles} from './styles';

interface IMovieDetailsBudget {
  movie: IMovieExtended;
}

export const MovieDetailsBudget = (props: IMovieDetailsBudget) => {
  const {movie} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.textWithIcon}>
        Budget: {movie.budget?.toLocaleString()} <Icon name="dollar" />
      </Text>
      <Text style={styles.textWithIcon}>
        Revenue: {movie.revenue?.toLocaleString()} <Icon name="dollar" />
      </Text>
      <Text>Status: {movie.status}</Text>
    </View>
  );
};
