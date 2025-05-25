import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';

export default function ListaVeiculos({ navigation }) {
  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCarros = async () => {
    try {
      const response = await fetch('https://web-cars-7wxh.onrender.com/api/cars');
      const json = await response.json();
      if (json.success) {
        setCarros(json.data);
      } else {
        alert('Erro ao buscar veículos');
      }
    } catch (error) {
      alert('Erro na requisição: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCarros();

    const unsubscribe = navigation.addListener('focus', () => {
      fetchCarros();
    });

    return unsubscribe; // Remove o listener ao desmontar
  }, [navigation]);

  const deletarCarro = (id) => {
    const confirmarDelecao = async () => {
      try {
        const response = await fetch(`https://web-cars-7wxh.onrender.com/api/cars/${id}`, {
          method: 'DELETE',
        });
        const json = await response.json();
        if (json.success) {
          alert('Veículo deletado com sucesso!');
          fetchCarros();
        } else {
          alert('Erro ao deletar veículo.');
        }
      } catch (error) {
        alert('Erro ao deletar veículo: ' + error.message);
      }
    };

    if (Platform.OS === 'web') {
      const confirmar = window.confirm('Deseja realmente deletar este veículo?');
      if (confirmar) confirmarDelecao();
    } else {
      Alert.alert(
        'Confirmação',
        'Deseja realmente deletar este veículo?',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Deletar', style: 'destructive', onPress: confirmarDelecao }
        ]
      );
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detalhes', { carro: item })}
      >
        <Text style={styles.nome}>{item.nome}</Text>
        <Text>Modelo: {item.modelo}</Text>
        <Text>Ano: {item.ano}</Text>
        <Text>Cor: {item.cor}</Text>
        <Text>Preço: R$ {item.preco}</Text>
        {item.imagem ? (
          <Image source={{ uri: item.imagem }} style={styles.imagem} resizeMode="contain" />
        ) : null}
      </TouchableOpacity>

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={[styles.botao, styles.botaoEditar]}
          onPress={() => navigation.navigate('Formulario', { carro: item })}
        >
          <Text style={styles.botaoTexto}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, styles.botaoDeletar]}
          onPress={() => deletarCarro(item._id)}
        >
          <Text style={styles.botaoTexto}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Carregando carros...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={carros}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 10 }}
      />

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={() => navigation.navigate('Formulario')}
      >
        <Text style={styles.botaoTexto}>+ Adicionar Veículo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    marginBottom: 12,
    padding: 15,
    borderRadius: 8,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  imagem: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
  botoesContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  botao: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  botaoEditar: {
    backgroundColor: '#4CAF50',
  },
  botaoDeletar: {
    backgroundColor: '#f44336',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoAdicionar: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    margin: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
});
