import React, {Dispatch, SetStateAction} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IConfiguration} from '../../interfaces/configuration';
import {IMovieCast, IMovieFileProps} from '../../interfaces/movie';
import {styles} from './styles';

interface IMovieDetailsCastListItem {
  item: IMovieCast;
  cast: any;
  getMovieImageUri: (props: IMovieFileProps) => string;
  configuration: IConfiguration;
  setCast: Dispatch<SetStateAction<any>>;
}

export const MovieDetailsCastListItem = (props: IMovieDetailsCastListItem) => {
  const {item, cast, getMovieImageUri, configuration, setCast} = props;

  return (
    <View key={item.id} style={styles.container}>
      {cast[item.id].imageLoaded === false ? (
        <Icon name="user-o" size={60} />
      ) : null}
      {cast[item.id].imageLoaded === null ? (
        <FastImage
          source={{
            uri: getMovieImageUri({
              baseUrl: configuration.images.base_url,
              imagePath: item.profile_path,
              imageSize: configuration.images.poster_sizes[6],
            }),
          }}
          onError={() => {
            setCast({
              ...cast,
              [item.id]: {...cast[item.id], imageLoaded: false},
            });
          }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : null}
      <View style={styles.descriptionContainer}>
        <Text style={styles.name}>Name: {item.name}</Text>
        <Text style={styles.character} numberOfLines={3}>
          Character:{'\n'} {item.character}
        </Text>
        <Text style={styles.gender}>
          Gender: {''}
          {item.gender === 2 ? (
            <Icon name="male" size={18} />
          ) : (
            <Icon name="female" size={18} />
          )}
        </Text>
        <Text style={styles.proficiency}>
          Proficiency: {item.known_for_department}
        </Text>
      </View>
    </View>
  );
};
