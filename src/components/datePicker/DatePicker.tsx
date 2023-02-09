import React from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import RNDatePicker from 'react-native-date-picker';
import {Divider} from '../divider/Divider';
import {styles} from './styles';

interface IDatePicker {
  date: Date | null;
  mode: 'date' | 'datetime' | 'time';
  style?: StyleProp<ViewStyle>;
  modal?: boolean;
  isOpen?: boolean;
  onPress?: () => void;
  onConfirm?: (date: Date) => void;
  onCancel?: () => void;
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
  } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.label}>
          {date
            ? date.toLocaleDateString('en-US')
            : 'Press to select your birth Date'}
        </Text>
      </TouchableOpacity>
      {modal ? null : <Divider />}
      <RNDatePicker
        date={date || new Date()}
        modal={modal}
        mode={mode}
        open={isOpen}
        onConfirm={onConfirm}
        onCancel={onCancel}
        style={[styles.datePicker, providedStyle]}
      />
    </View>
  );
};
