import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppDispatch} from '../../hooks/redux';
import {userLogOut} from '../../redux/actions/user';
import {styles} from './styles';

export const Profile = () => {
  const dispatch = useAppDispatch();
  const {setOptions} = useNavigation();

  const handleLogOut = () => {
    dispatch(userLogOut());
    setOptions({
      headerShown: false,
      headerRight: () => null,
    });
  };

  useEffect(() => {
    setOptions({
      headerShown: true,
      headerRight: () => (
        <View style={styles.header}>
          <Icon name="sign-out" size={24} onPress={handleLogOut} />
        </View>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Text> Profile Page</Text>;
};
