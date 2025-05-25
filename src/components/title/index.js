import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Title() {
  return <Text style={styles.title}>Web Cars</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#343E3E',
  },
});
