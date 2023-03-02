import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';
import {ISignInForm, ISignUpForm} from '../interfaces/auth';
import {userSignIn, userSignUp} from '../redux/actions/user';
import {useAppDispatch} from './redux';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const {goBack} = useNavigation();

  const [signInError, setSignInError] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const signIn = async (form: ISignInForm) => {
    setShowLoader(true);
    const response = await fetch(
      'https://us-east-1.aws.data.mongodb-api.com/app/movies-app-jovani-api-tfsfi/endpoint/login',
      {method: 'POST', body: JSON.stringify(form)},
    ).then(res => res.json());
    setShowLoader(false);
    if (response.success === true) {
      dispatch(userSignIn(response.user));
      goBack();
    } else {
      setSignInError('User with given email or password not found');
    }

    return response;
  };

  const signUp = async (form: ISignUpForm) => {
    setShowLoader(true);
    const response = await fetch(
      'https://us-east-1.aws.data.mongodb-api.com/app/movies-app-jovani-api-tfsfi/endpoint/signup',
      {method: 'POST', body: JSON.stringify(form)},
    ).then(res => res.json());
    setShowLoader(false);
    if (response.success === true) {
      dispatch(userSignUp(response.user));
      goBack();
    } else {
      setSignUpError('all values must be provided');
    }
    return response;
  };

  const updateProfile = async (form: ISignUpForm) => {
    console.log(JSON.stringify(form));
    const response = await fetch(
      'https://us-east-1.aws.data.mongodb-api.com/app/movies-app-jovani-api-tfsfi/endpoint/profile',
      {method: 'PUT', body: JSON.stringify(form)},
    ).then(res => res.json());
    if (response.success === true) {
      Alert.alert('Changes Saved successfully');
    }
    return response;
  };

  return {
    signIn,
    signUp,
    updateProfile,
    signInError,
    signUpError,
    setSignInError,
    setSignUpError,
    showLoader,
  };
};
