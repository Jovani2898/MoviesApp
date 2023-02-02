export interface IUser {
  loggedIn: boolean;
  data: {
    email: string;
    password: string;
    name: string;
    surname: string;
    birthDate: Date;
    aboutMe: string;
  } | null;
}
