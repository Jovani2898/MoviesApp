import {StyleSheet} from 'react-native';

interface IStyles {
  windowHeight: number;
  bottomTabHeight: number;
  statusBarHeight: number;
}

export const useStyles = ({
  windowHeight,
  bottomTabHeight,
  statusBarHeight,
}: IStyles) =>
  StyleSheet.create({
    item: {},
    title: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      color: 'white',
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
      textAlign: 'center',
      fontSize: 24,
      fontWeight: '700',
      paddingVertical: 6,
      paddingHorizontal: 8,
    },
    image: {
      height: windowHeight - bottomTabHeight - statusBarHeight,
    },
  });
