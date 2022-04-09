import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {colors} from '../utils/colors';
import {spacing, fontSize} from '../utils/sizes';

export const CustomLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This app is created by Behnam Shahriari inspired by Pomodoro Technique{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.sm,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})