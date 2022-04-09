import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={style.timingButton}>
        <RoundedButton size={75} title="5" onPress={() => onChangeTime(5)} />
      </View>
      <View style={style.timingButton}>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={style.timingButton}>
        <RoundedButton size={75} title="25" onPress={() => onChangeTime(25)} />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
