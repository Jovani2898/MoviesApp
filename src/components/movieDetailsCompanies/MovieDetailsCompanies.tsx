import React, {Dispatch, SetStateAction} from 'react';
import {Text, View} from 'react-native';
import {IConfiguration} from '../../interfaces/configuration';
import {IMovieProductionCompany} from '../../interfaces/movie';
import {getCompanies} from '../../utils/movieDetails.utils';
import {styles} from './styles';

interface IMovieDetailsCompanies {
  configuration: IConfiguration;
  getMovieImageUri: (obj: any) => string;
  movieCompanies: IMovieProductionCompany[];
  setMovieCompanies: Dispatch<SetStateAction<IMovieProductionCompany[]>>;
}

export const MovieDetailsCompanies = (props: IMovieDetailsCompanies) => {
  const {configuration, getMovieImageUri, movieCompanies, setMovieCompanies} =
    props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Production companies:</Text>
      {getCompanies({
        configuration,
        getMovieImageUri,
        movieCompanies,
        setMovieCompanies,
        styles,
      })}
    </View>
  );
};
