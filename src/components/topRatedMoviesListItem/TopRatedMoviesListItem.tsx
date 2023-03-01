import {useAppSelector} from '../../hooks/redux';
import {IMovie} from '../../interfaces/movie';
import {IConfiguration} from '../../interfaces/configuration';
import {useMovies} from '../../hooks/useMovies';
import FastImage from 'react-native-fast-image';
import {
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useStyles} from './styles';
import React, {memo, useMemo} from 'react';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

interface ITopRatedMoviesListItem {
  item: IMovie;
}

export const TopRatedMoviesListItem = memo((props: ITopRatedMoviesListItem) => {
  const {item} = props;
  const configuration: IConfiguration = useAppSelector(
    state => state.movie.configuration,
  );
  const {getMovieImageUri} = useMovies();
  const IOS_SAFE_HEIGHT = useSafeAreaFrame().height;
  const windowHeight =
    Platform.OS === 'android'
      ? Dimensions.get('window').height
      : IOS_SAFE_HEIGHT;

  const bottomTabHeight = useBottomTabBarHeight();
  const statusBarHeight = useMemo(() => StatusBar.currentHeight || 0, []);
  const styles = useStyles({
    bottomTabHeight,
    statusBarHeight,
    windowHeight,
  });

  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      key={item.id}
      style={styles.item}
      onPress={() => {
        navigate('details', {movie: item});
      }}>
      <FastImage //fast images have a useMemo inside
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: getMovieImageUri({
            imagePath: item.poster_path,
            imageSize: configuration?.images.poster_sizes[6],
            baseUrl: configuration?.images.secure_base_url,
          }),
        }}
      />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
});
