import {useAppSelector} from '../../hooks/redux';
import {IMovie} from '../../interfaces/movie';
import {IConfiguration} from '../../interfaces/configuration';
import {useMovies} from '../../hooks/useMovies';
import FastImage from 'react-native-fast-image';
import {Text, Dimensions, StatusBar, TouchableOpacity} from 'react-native';
import {useStyles} from './styles';
import React, {useMemo} from 'react';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

interface ITopRatedMoviesListItem {
  item: IMovie;
}

export const TopRatedMoviesListItem = (props: ITopRatedMoviesListItem) => {
  const {item} = props;
  const configuration: IConfiguration = useAppSelector(
    state => state.movie.configuration,
  );
  const {getMovieImageUri} = useMovies();

  const {height: windowHeight} = useMemo(() => Dimensions.get('window'), []);
  const bottomTabHeight = useBottomTabBarHeight();
  const statusBarHeight = useMemo(() => StatusBar.currentHeight || 0, []);

  const styles = useStyles({
    bottomTabHeight,
    statusBarHeight,
    windowHeight,
  });

  return (
    <TouchableOpacity key={item.id} style={styles.item}>
      <FastImage //fast images have a useMemo inside
        style={styles.image}
        key={item.id}
        resizeMode="cover"
        source={{
          uri: getMovieImageUri({
            imagePath: item.poster_path,
            imageSize: configuration?.images.poster_sizes[6],
            baseUrl: configuration?.images.base_url,
          }),
        }}
      />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};
