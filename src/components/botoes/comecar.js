import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Comecar({ onPress }) {
  return (
    <TouchableOpacity style={styles.botao_comecar} onPress={onPress}>
      <Text style={styles.texto}>Começar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao_comecar: {
    backgroundColor: '#343E3E',
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
