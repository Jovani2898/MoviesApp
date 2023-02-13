import {ISignInForm, ISignUpForm} from '../interfaces/auth';

export const useLogin = () => {
  const signIn = async (form: ISignInForm) => {
    const response = await fetch(
      'https://us-east-1.aws.data.mongodb-api.com/app/movies-app-jovani-api-tfsfi/endpoint/login',
      {method: 'POST', body: JSON.stringify(form)},
    ).then(res => res.json());
    return response;
  };

  const signUp = async (form: ISignUpForm) => {
    const response = await fetch(
      'https://us-east-1.aws.data.mongodb-api.com/app/movies-app-jovani-api-tfsfi/endpoint/signup',
      {method: 'POST', body: JSON.stringify(form)},
    ).then(res => res.json());
    return response;
  };

  const updateProfile = async (form: ISignUpForm) => {
    const response = await fetch(
      'https://us-east-1.aws.data.mongodb-api.com/app/movies-app-jovani-api-tfsfi/endpoint/profile',
      {method: 'POST', body: JSON.stringify(form)},
    ).then(res => res.json());
    return response;
  };
  return {signIn, signUp, updateProfile};
};
