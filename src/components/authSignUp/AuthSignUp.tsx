import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ISignUpForm} from '../../interfaces/auth';
import {Button} from '../button/Button';
import {DatePicker} from '../datePicker/DatePicker';
import {TextInput} from '../textInput/TextInput';

interface IAuthSignUp {
  onSignInPress: () => void;
  form: ISignUpForm | null;
  setForm: (name: string, value: string | Date) => void;
  onSignUp: (name: string) => void;
}

export const AuthSignUp = (props: IAuthSignUp) => {
  const {onSignInPress, form, setForm, onSignUp} = props;
  const {setOptions} = useNavigation();

  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    setOptions({title: 'Sign up'});
  }, [setOptions]);

  const triggerDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDatePick = (date: Date) => {
    setForm('birthDate', date);
    setShowDatePicker(false);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your email"
        value={form?.email || ''}
        onChange={({nativeEvent: {text}}) => {
          setForm('email', text);
        }}
      />
      <TextInput
        placeholder="Enter your password"
        value={form?.password || ''}
        onChange={({nativeEvent: {text}}) => {
          setForm('password', text);
        }}
      />
      <TextInput
        placeholder="Enter your firstName"
        value={form?.firstName || ''}
        onChange={({nativeEvent: {text}}) => {
          setForm('firstName', text);
        }}
      />
      <TextInput
        placeholder="Enter your lastName"
        value={form?.lastName || ''}
        onChange={({nativeEvent: {text}}) => {
          setForm('lastName', text);
        }}
      />
      <DatePicker
        date={form?.birtDate || null}
        mode="date"
        modal
        onPress={triggerDatePicker}
        onConfirm={handleDatePick}
        onCancel={triggerDatePicker}
        isOpen={showDatePicker}
      />
      <TextInput
        placeholder="About me "
        value={form?.aboutMe || ''}
        onChange={({nativeEvent: {text}}) => {
          setForm('aboutMe', text);
        }}
        multiline
        numberOfLines={4}
      />
      <Button
        text="Sign Up"
        onPress={() => {
          onSignUp('signUp');
        }}
      />
      <Text>Already have an account?</Text>
      <TouchableOpacity onPress={onSignInPress}>
        <Text>Sign In here!</Text>
      </TouchableOpacity>
    </View>
  );
};
