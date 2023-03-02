import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {AuthSignIn} from '../../../components/authSignIn/AuthSignIn';
import {AuthSignUp} from '../../../components/authSignUp/AuthSignUp';
import {Loader} from '../../../components/loader/Loader';
import {useLogin} from '../../../hooks/useLogin';
import {ISignInForm, ISignUpForm} from '../../../interfaces/auth';

export const AuthPage = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const [form, setForm] = useState<ISignInForm | ISignUpForm | null>(null);

  const {
    signIn,
    signUp,
    signInError,
    showLoader,
    setSignInError,
    signUpError,
    setSignUpError,
  } = useLogin();

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
    setSignInError('');
    setSignUpError('');
  };

  /*
onPropertyChange('name', 'jovani2898@gmail.com');
onPropertyChange(birthDate, 'jovani2898@gmail.com');
setForm({...form, email: jovani2898@gmail.com})
setForm({...form, name: value = jovani2898@gmail.com})
*/

  const handleOnPress = async (name: string) => {
    Keyboard.dismiss();
    let response;
    switch (name) {
      case 'signIn':
        response = await signIn(form as ISignInForm);
        console.log({response});
        break;
      case 'signUp':
        response = await signUp(form as ISignUpForm);
        console.log({response});
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
          signUpError={signUpError}
        />
      ) : (
        <AuthSignIn
          form={form as ISignInForm}
          onSignUpPress={switchedView}
          setForm={onPropertyChange}
          onSignIn={handleOnPress}
          signInError={signInError}
        />
      )}
      {showLoader ? <Loader /> : null}
    </>
  );
};
