import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {AuthSignIn} from '../../../components/authSignIn/AuthSignIn';
import {AuthSignUp} from '../../../components/authSignUp/AuthSignUp';
import {Loader} from '../../../components/loader/Loader';
import {useAppDispatch} from '../../../hooks/redux';
import {useLogin} from '../../../hooks/useLogin';
import {ISignInForm, ISignUpForm} from '../../../interfaces/auth';
import {userSignIn, userSignUp} from '../../../redux/actions/user';

export const AuthPage = () => {
  const dispatch = useAppDispatch();
  const {goBack} = useNavigation();
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const [form, setForm] = useState<ISignInForm | ISignUpForm | null>(null);

  const {signIn, signUp} = useLogin();

  const switchedView = () => {
    setShowRegisterForm(!showRegisterForm); //Меняет Sign In на SignUp и наоборот
  };

  //тут мы сохраняем то что вписал юзер в textInput или выбрал в DatePicker-e,
  //   [name]: может быть как email,password, firstname и тд.
  const onPropertyChange = (name: string, value: string | Date) => {
    if (!form) {
      setForm({[name]: value});
      return;
    }
    setForm({...form, [name]: value});
  };

  /* 
onPropertyChange('name', 'jovani2898@gmail.com');
onPropertyChange(birthDate, 'jovani2898@gmail.com');
setForm({...form, email: jovani2898@gmail.com})
setForm({...form, name: value = jovani2898@gmail.com})
*/

  const handleOnPress = async (name: string) => {
    Keyboard.dismiss();
    setShowLoader(true);
    let response;
    switch (name) {
      case 'signIn':
        response = await signIn(form as ISignInForm);
        setShowLoader(false);
        console.log({response});
        if (response.success === true) {
          dispatch(userSignIn(response.user));
          goBack();
        } else {
          console.log('ERROR');
        }
        break;
      case 'signUp':
        response = await signUp(form as ISignUpForm);
        setShowLoader(false);
        console.log({response});
        if (response.success === true) {
          dispatch(userSignUp(response.user));
          goBack();
        } else {
          console.log('ERROR');
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      {showRegisterForm ? (
        <AuthSignUp
          form={form as ISignUpForm}
          onSignInPress={switchedView}
          setForm={onPropertyChange}
          onSignUp={handleOnPress}
        />
      ) : (
        <AuthSignIn
          form={form as ISignInForm}
          onSignUpPress={switchedView}
          setForm={onPropertyChange}
          onSignIn={handleOnPress}
        />
      )}
      {showLoader ? <Loader /> : null}
    </>
  );
};
