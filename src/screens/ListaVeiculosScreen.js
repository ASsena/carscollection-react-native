import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { fetchCarros, deletarCarroComConfirmacao } from '../service/carServices';
import CarroCard from '../components/card/CarrosCard';
import styles from '../styles/LitaCarrosStyle';

export default function ListaVeiculos() {
  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  const carregarCarros = async () => {
    setLoading(true);
    const data = await fetchCarros();
    setCarros(data);
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      carregarCarros();
    }, [])
  );

  const carrosFiltrados = carros.filter(carro =>
    carro.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <CarroCard
      carro={item}
      onDetalhes={() => navigation.navigate('Detalhes', { carro: item })}
      onEditar={() => navigation.navigate('Formulario', { carro: item })}
      onDeletar={() => deletarCarroComConfirmacao(item._id, carregarCarros)}
    />
  );

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Carregando carros...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho animado */}

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
           <Text style={[styles.header,  {marginTop: 90, marginBottom: 30}]}>WebCars</Text>
      </TouchableOpacity>
        <View style={[styles.searchContainer,{marginTop: 10}]}>
          <TextInput
            placeholder="Pesquisar"
            placeholderTextColor="#A0A0A0"
            value={searchText}
            onChangeText={setSearchText}
            style={styles.searchInput}
          />
          <Text style={styles.searchIcon}>🔍</Text>
        </View>


      {/* Lista com cards */}
  
      <Animated.FlatList
        data={carrosFiltrados}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}
      />

      {/* Botão de cadastro */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('Formulario')}
      >
        <Text style={styles.registerButtonText}>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

