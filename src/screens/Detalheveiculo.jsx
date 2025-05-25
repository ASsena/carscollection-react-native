import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export default function DetalhesVeiculo({ route }) {
  const { carro } = route.params || {};

  if (!carro) {
    return (
      <View style={styles.container}>
        <Text style={styles.nome}>Carro não encontrado</Text>
      </View>
    );
  }

  const carrosselItens = [
    { title: 'Modelo', value: carro.modelo },
    { title: 'Cor', value: carro.cor },
    { title: 'Ano', value: carro.ano },
    { title: 'Preço', value: `R$ ${carro.preco}` },
  ];

  const descricao = carro.descricao || 'Descrição não disponível';

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
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
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />

      <View style={styles.descricaoContainer}>
        <Text style={styles.descricaoTitulo}>Descrição</Text>
        <Text style={styles.descricaoTexto}>{descricao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  nome: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  imagem: { width: '100%', height: 250, marginBottom: 20 },
  slide: {
    backgroundColor: '#eee',
    borderRadius: 8,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    width: screenWidth * 0.7,
  },
  slideTitle: { fontSize: 18, fontWeight: 'bold' },
  slideValue: { fontSize: 16, marginTop: 8 },
  descricaoContainer: { marginTop: 30, paddingHorizontal: 10 },
  descricaoTitulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  descricaoTexto: { fontSize: 16, color: '#555' },
});
