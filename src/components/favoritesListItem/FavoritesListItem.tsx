import {useNavigation} from '@react-navigation/native';
import React, {Dispatch, SetStateAction, useCallback} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {IMovie} from '../../interfaces/movie';
import {styles} from './styles';

interface IFavoritesListItem {
  item: IMovie;
  setScrollEnabled: Dispatch<SetStateAction<boolean>>;
}

export const FavoritesListItem = (props: IFavoritesListItem) => {
  const {item, setScrollEnabled} = props;

  const {navigate} = useNavigation();

  const {getMovieImageUri} = useMovies();

  const configuration = useAppSelector(state => state.movie.configuration);

  const handleRedirect = useCallback(() => {
    navigate('details', {movie: item});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleRedirect} style={styles.imageButton}>
        <FastImage
          style={styles.image}
          source={{
            uri: getMovieImageUri({
              baseUrl: configuration?.images.base_url,
              imageSize: configuration?.images.poster_sizes[6],
              imagePath: item.poster_path,
            }),
          }}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <ScrollView
          style={styles.overviewScroll}
          onTouchStart={() => {
            setScrollEnabled(false);
          }}
          onTouchCancel={() => {
            setScrollEnabled(true);
          }}>
          <Text style={styles.overview}>{item.overview}</Text>
        </ScrollView>
      </View>
    </View>
  );
};
