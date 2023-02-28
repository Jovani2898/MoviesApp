import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, FlatList, StatusBar} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {IMovie} from '../../interfaces/movie';
import {
  loadMoreTopRatedMovies,
  loadMoreTopRatedMoviesFinished,
  saveTopRatedMovies,
} from '../../redux/actions/movies';
import {TopRatedMoviesListItem} from '../topRatedMoviesListItem/TopRatedMoviesListItem';
import TopRatedMoviesLoadMore from '../topRatedMoviesLoadMore/TopRatedMoviesLoadMore';
import {styles} from './styles';
import {ScrollToTopButton} from '../scrollToTopButton/ScrollToTopButton';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

export const TopRatedMoviesList = memo(() => {
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const dispatch = useAppDispatch();
  const {data: movieList, page} = useAppSelector(
    state => state.movie.topRatedMovies,
  );
  //topRatedMovies: {data: movieList, page} = useAppSelector(state => state.movie);
  const {fetchTopRatedMovies} = useMovies();

  const [showScrollUpButton, setShowScrollUpButton] = useState(false);

  const {height: windowHeight} = Dimensions.get('window');
  const bottomHeight = useBottomTabBarHeight();
  const statusBarHeight = StatusBar?.currentHeight || 0;

  // * add ref to utilize flatList scroll into index method
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    Animated.timing(
      opacityAnimation,
      showScrollUpButton
        ? {toValue: 1, duration: 500, useNativeDriver: true}
        : {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          },
    ).start();
  }, [showScrollUpButton, opacityAnimation]);

  const scrollToTop = useCallback(() => {
    listRef.current?.scrollToIndex({index: 0});
    setShowScrollUpButton(false);
  }, []);

  useEffect(() => {
    fetchTopRatedMovies(page).then(moviesResponse => {
      dispatch(saveTopRatedMovies(moviesResponse));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const loadMore = () => {
    dispatch(loadMoreTopRatedMovies());
    const timeout = setTimeout(() => {
      dispatch(loadMoreTopRatedMoviesFinished());
      clearTimeout(timeout);
    }, 1000);
  };

  return (
    <>
      <FlatList
        ref={listRef}
        data={movieList}
        renderItem={({item}: {item: IMovie}) => (
          <TopRatedMoviesListItem item={item} key={item.id} />
        )}
        style={styles.list}
        ListFooterComponent={() => (
          <TopRatedMoviesLoadMore onPress={loadMore} />
        )}
        // * added auto scroll into active element
        onMomentumScrollEnd={event => {
          // * single element height

          // * offset from top of the list
          const offsetFromListStart = event.nativeEvent.contentOffset.y;
          /*
           * calculating element index: offsetFromListStart / singleElementHeight
           * gives us index of current element which takes most of space,
           * by rounding this sum we see if element is 50% more scrolled
           * then its considered active and we scroll into it
           */

          const singleElementHeight =
            windowHeight - bottomHeight - statusBarHeight;

          const elementIndex = Math.round(
            Math.round(offsetFromListStart) / Math.round(singleElementHeight),
          );

          if (elementIndex + 1 !== page * 20) {
            listRef?.current?.scrollToIndex({index: elementIndex});
          }
          setShowScrollUpButton(elementIndex + 1 >= 2);
        }}
      />

      <Animated.View style={{opacity: opacityAnimation}}>
        <ScrollToTopButton onPress={scrollToTop} />
      </Animated.View>
    </>
  );
});
