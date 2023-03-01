import React, {Dispatch, SetStateAction} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Divider} from '../components/divider/Divider';
import {IConfiguration} from '../interfaces/configuration';
import {IGenre} from '../interfaces/genre';
import {IMovieProductionCompany} from '../interfaces/movie';

export const getGenreStringsByIds = (
  genreIds: number[],
  genres: IGenre[],
  styles: any,
) => {
  const genreStrings: any = [];

  genres.forEach((genre, idx) => {
    if (genreIds.includes(genre.id)) {
      genreStrings.push(
        <Text key={`genre-${idx}`} style={styles.genre}>
          {genre?.title}
        </Text>,
      );
    }
  });
  return genreStrings;
};

export const getRatingStars = (rating: number) => {
  const starsJsx: any = [];
  const starsCount = Math.round(rating / 2);

  for (let i = 1; i <= 5; i++) {
    if (i <= starsCount) {
      starsJsx.push(
        <Icon name="star" size={20} color="gold" key={`star-${i}`} />,
      );
    } else {
      starsJsx.push(<Icon name="star-o" size={20} key={`star-${i}`} />);
    }
  }
  return starsJsx;
};

export const getAdultIcon = (adult: boolean) => {
  return adult ? (
    <Icon name="male" size={18} />
  ) : (
    <Icon name="child" size={18} />
  );
};

interface GetCompaniesProps {
  movieCompanies: IMovieProductionCompany[];
  styles: any;
  getMovieImageUri: ({
    imagePath,
    imageSize,
    baseUrl,
  }: {
    imagePath: string;
    imageSize: string;
    baseUrl: string;
  }) => string;
  configuration: IConfiguration;
  setMovieCompanies: Dispatch<SetStateAction<IMovieProductionCompany[]>>;
}

export const getCompanies = ({
  movieCompanies,
  styles,
  getMovieImageUri,
  configuration,
  setMovieCompanies,
}: GetCompaniesProps) =>
  Object.values(movieCompanies)?.map((value: any, idx) => (
    <View key={value.id + idx}>
      {idx === 0 ? <Divider style={styles.divider} /> : null}
      <View style={styles.companyContainer}>
        {movieCompanies[value.id].isLoaded === false && (
          <Icon name="image" size={80} style={styles.defaultImage} />
        )}
        {movieCompanies[value.id].isLoaded === null && (
          <FastImage
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: getMovieImageUri({
                baseUrl: configuration?.images.secure_base_url,
                imagePath: value.logo_path,
                imageSize: configuration?.images.poster_sizes[6],
              }),
            }}
            onError={() => {
              console.log('error');
              setMovieCompanies({
                ...movieCompanies,
                [value.id]: {...movieCompanies[value.id], isLoaded: false},
              });
            }}
          />
        )}
        <View style={styles.descriptionContainer}>
          <Text style={styles.name}>Name: {value.name}</Text>
          <Text style={styles.country}>Country: {value.origin_country}</Text>
        </View>
      </View>
      {idx + 1 !== Object.values(movieCompanies).length ? (
        <Divider style={styles.divider} />
      ) : null}
    </View>
  ));
