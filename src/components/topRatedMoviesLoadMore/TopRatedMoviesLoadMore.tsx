import React, {memo} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../hooks/redux';
import {styles} from './styles';

interface ITopRatedMoviesLoadMore {
  onPress: () => void;
}

const TopRatedMoviesLoadMore = (props: ITopRatedMoviesLoadMore) => {
  const {onPress} = props;
  const isLoading = useAppSelector(
    state => state.movie.topRatedMovies.isLoading,
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Load More</Text>
        {isLoading && (
          <ActivityIndicator
            size={'small'}
            color={'#0000ff'}
            style={styles.loader}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default memo(TopRatedMoviesLoadMore);
