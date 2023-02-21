import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useAppSelector} from '../../hooks/redux';
import {IMovie} from '../../interfaces/movie';
import {Divider} from '../divider/Divider';
import {FavoritesListItem} from '../favoritesListItem/FavoritesListItem';
import {styles} from './styles';

export const FavoritesList = () => {
  const favorites = useAppSelector(state => state.favorites.data);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <FlatList
      style={styles.list}
      data={favorites}
      scrollEnabled={scrollEnabled}
      renderItem={({item, index}: {item: IMovie; index: number}) => (
        <>
          <Divider style={styles.divider} />
          <FavoritesListItem
            item={item}
            key={item.id}
            setScrollEnabled={setScrollEnabled}
          />
          {index + 1 === favorites.length ? (
            <Divider style={styles.divider} />
          ) : null}
        </>
      )}
    />
  );
};
