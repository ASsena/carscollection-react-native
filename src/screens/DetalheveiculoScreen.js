import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from '../styles/DetalhesVeiculoStyle';
import { useDetalhesVeiculo } from '../components/DetalhesVeiculo';

const { width: screenWidth } = Dimensions.get('window');

export default function DetalhesVeiculo({ route }) {
  const { carro } = route.params || {};
  const { excluirCarro, carrosselItens, descricao } = useDetalhesVeiculo(carro);

  if (!carro) {
    return (
      <View style={styles.container}>
        <Text style={styles.nome}>Carro não encontrado</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { width: screenWidth * 0.7 }]}>
      <Text style={styles.slideTitle}>{item.title}</Text>
      <Text style={styles.slideValue}>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{carro.nome}</Text>
      {carro.imagem && (
        <Image source={{ uri: carro.imagem }} style={styles.imagem} resizeMode="contain" />
      )}

      <FlatList
        data={carrosselItens}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item) => item.title}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.descricaoContainer}>
        <Text style={styles.descricaoTitulo}>Descrição</Text>
        <Text style={styles.descricaoTexto}>{descricao}</Text>
      </View>

      <TouchableOpacity style={styles.botaoExcluir} onPress={excluirCarro}>
        <Text style={styles.textoBotaoExcluir}>Excluir veículo</Text>
      </TouchableOpacity>
    </View>
  );
}
