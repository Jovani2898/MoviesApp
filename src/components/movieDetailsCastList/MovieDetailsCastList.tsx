import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {IConfiguration} from '../../interfaces/configuration';
import {IMovieCast, IMovieExtended} from '../../interfaces/movie';
import {MovieDetailsCastListItem} from '../movieDetailsCastListItem/movieDetailsCastListItem';
import {styles} from './styles';

interface IMovieDetailsCastList {
  configuration: IConfiguration;
  movie: IMovieExtended;
}

export const MovieDetailsCastList = (props: IMovieDetailsCastList) => {
  const {configuration, movie} = props;

  const [cast, setCast] = useState<IMovieCast[]>([]);

  const {fetchCastByMovieId, getMovieImageUri} = useMovies();

  useEffect(() => {
    //fetchedCast Это уже ссылка вместе с movie.id
    fetchCastByMovieId(movie.id).then((fetchedCast: IMovieCast[]) => {
      const castObject: any = {};
      fetchedCast.forEach(item => {
        castObject[item.id] = {...item, imageLoaded: null};
      });
      setCast(castObject);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={Object.values(cast)}
        horizontal
        renderItem={({item}) => (
          <MovieDetailsCastListItem
            cast={cast}
            configuration={configuration}
            getMovieImageUri={getMovieImageUri}
            item={item}
            setCast={setCast}
          />
        )}
      />
    </View>
  );
};
