import React from 'react';
import { View, StyleSheet } from 'react-native';
import FloatingWritingButton from '../components/FloatingWriteButton';

function CalendarScreen() {
  return (
    <View style={styles.block}>
      <FloatingWritingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default CalendarScreen;
