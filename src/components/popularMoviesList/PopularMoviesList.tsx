import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {IMovie} from '../../interfaces/movie';
import {savePopularMovies} from '../../redux/actions/movies';
import {styles} from './styles';

interface IPopularMoviesLIst {
  enableScroll: boolean;
}

export const PopularMoviesLIst = (props: IPopularMoviesLIst) => {
  const {enableScroll} = props;

  const [page] = useState(1);

  const {fetchPopularMovies, getMovieImageUri} = useMovies();

  const dispatch = useAppDispatch();

  const PopularMovies = useAppSelector(state => state.movie.popularMovies.data);

  const configuration = useAppSelector(state => state.movie.configuration);

  useEffect(() => {
    fetchPopularMovies(page).then(movieResponse => {
      dispatch(savePopularMovies(movieResponse));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <FlatList
      data={PopularMovies}
      renderItem={({item}: {item: IMovie}) => (
        <TouchableOpacity key={item.id} style={styles.clickable}>
          <FastImage
            style={styles.image}
            source={{
              uri: getMovieImageUri({
                imagePath: item.poster_path,
                imageSize: configuration.images.poster_sizes[6],
                baseUrl: configuration.image.base_url,
              }),
            }}
          />
        </TouchableOpacity>
      )}
      numColumns={3}
      scrollEnabled={enableScroll}
    />
  );
};
