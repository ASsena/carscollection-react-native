import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/LitaCarrosStyle';

export default function CarroCard({ carro, onDetalhes }) {
  return (
    <TouchableOpacity onPress={onDetalhes} style={styles.card}>
      <Text style={styles.nome}>{carro.nome}</Text>
      <Text style={{fontSize: 12, marginBottom: 10}}>Ver detalhes | Editar</Text>
      {carro.imagem ? (
        <Image
          source={{ uri: carro.imagem }}
          style={styles.imagem}
        />
      ) : (
        <Text style={{ textAlign: 'center', color: 'red' }}>Sem imagem</Text>
      )}
    </TouchableOpacity>
  );
}
