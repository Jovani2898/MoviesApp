import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useLogin} from '../../hooks/useLogin';
import {ISignUpForm} from '../../interfaces/auth';
import {userLogOut, userUpdateProfile} from '../../redux/actions/user';
import {Button} from '../button/Button';
import {DatePicker} from '../datePicker/DatePicker';
import {Loader} from '../loader/Loader';
import {TextInput} from '../textInput/TextInput';
import {styles} from './styles';

export const Profile = () => {
  const dispatch = useAppDispatch();
  const {setOptions} = useNavigation();
  const user = useAppSelector<ISignUpForm>(state => state.user.data);
  const [form, setForm] = useState(Object.assign(user, {}));
  const [showLoader, setShowLoader] = useState(false);

  const {updateProfile} = useLogin();

  const [showDatePicker, setShowDatePicker] = useState(false);

  const triggerDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDatePick = (date: Date) => {
    setForm({...form, birthDate: date}); //переписываем Date
    setShowDatePicker(false);
  };

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

  //В form уже сохранена информация об юзере при регистрации
  const handleSave = async () => {
    setShowLoader(true);
    const response = await updateProfile(form); //тут фетч сначала возьмёт всё что написал юзер в форму переведёт в стринг а после спарсит
    setShowLoader(false);

    if (response?.success === true) {
      // success === loggedIn from state
      dispatch(userUpdateProfile(response.user)); //we saved form in response.user
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          defaultValue={form?.email}
          disabled
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={form?.password}
          onChange={({nativeEvent: {text}}) => {
            console.log({text});
            setForm({...form, password: text});
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="First Name"
          value={form?.firstName}
          onChange={({nativeEvent: {text}}) => {
            setForm({...form, firstName: text});
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={form?.email}
          onChange={({nativeEvent: {text}}) => {
            setForm({...form, lastName: text});
          }}
          style={styles.input}
        />
        <DatePicker
          date={new Date(form?.birthDate) || null}
          mode="date"
          modal
          onPress={triggerDatePicker}
          isOpen={showDatePicker}
          onConfirm={handleDatePick}
          onCancel={triggerDatePicker}
        />
        <TextInput
          placeholder="About Me"
          value={form?.aboutMe || ''}
          onChange={({nativeEvent: {text}}) => {
            setForm({...form, aboutMe: text});
          }}
          style={[styles.input, styles.textArea]}
        />
        <Button
          text="Save Changes"
          onPress={handleSave}
          style={styles.button}
        />
      </View>
      {showLoader ? <Loader /> : null}
    </>
  );
};
