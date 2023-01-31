type BackdropSizesType = ['w300', 'w780', 'w1280', 'original'];
type LogoSizesType = ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'];
type PosterSizesType = [
  'w92',
  'w154',
  'w185',
  'w342',
  'w500',
  'w780',
  'original',
];
type ProfileSizesType = ['w45', 'w185', 'h632', 'original'];
type StillSizesType = ['w92', 'w185', 'w300', 'original'];

export interface IConfiguration {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: BackdropSizesType;
    logo_sizes: LogoSizesType;
    poster_sizes: PosterSizesType;
    profile_sizes: ProfileSizesType;
    still_sizes: StillSizesType;
  };
  change_keys: string[];
}
