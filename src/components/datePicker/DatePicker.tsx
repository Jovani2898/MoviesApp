import React from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import RNDatePicker from 'react-native-date-picker';
import {Divider} from '../divider/Divider';
import {styles} from './styles';

interface IDatePicker {
  date: Date | number | null;
  mode: 'date' | 'datetime' | 'time';
  style?: StyleProp<ViewStyle>;
  modal?: boolean;
  isOpen?: boolean;
  onPress?: () => void;
  onConfirm?: (date: Date) => void;
  onCancel?: () => void;
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export const DatePicker = (props: IDatePicker) => {
  const {
    date,
    mode,
    style: providedStyle,
    modal,
    isOpen,
    onPress,
    onConfirm,
    onCancel,
    title,
    containerStyle,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.label}>
          {date
            ? date instanceof Date
              ? date?.toLocaleDateString('en-US')
              : date
            : title}
        </Text>
      </TouchableOpacity>
      {modal ? null : <Divider />}
      <RNDatePicker
        date={
          date ? (date instanceof Date ? date : new Date(date, 0)) : new Date()
        }
        modal={modal}
        androidVariant="iosClone"
        mode={mode}
        open={isOpen}
        onConfirm={onConfirm}
        onCancel={onCancel}
        style={[styles.datePicker, providedStyle]}
      />
    </View>
  );
};
