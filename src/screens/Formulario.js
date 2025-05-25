import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert, ScrollView, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/FormularioStyle';
export default function Formulario({ navigation, route }) {
  const carroEdit = route.params?.carro;

  const [nome, setNome] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    if (carroEdit) {
      setNome(carroEdit.nome);
      setModelo(carroEdit.modelo);
      setAno(String(carroEdit.ano));
      setCor(carroEdit.cor);
      setPreco(String(carroEdit.preco));
      setImagem(carroEdit.imagem || '');
    }
  }, [carroEdit]);

  const salvarCarro = async () => {
    if (!nome || !modelo || !ano || !cor || !preco) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const carroData = {
      nome,
      modelo,
      ano: Number(ano),
      cor,
      preco: Number(preco),
      imagem,
    };

    try {
      const url = carroEdit
        ? `https://web-cars-7wxh.onrender.com/api/cars/${carroEdit._id}`
        : 'https://web-cars-7wxh.onrender.com/api/cars';
      const method = carroEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(carroData),
      });
      const json = await response.json();

      if (json.success) {
        Alert.alert('Sucesso', carroEdit ? 'Veículo atualizado' : 'Veículo criado');
        navigation.goBack();
      } else {
        Alert.alert('Erro', 'Falha ao salvar veículo');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha na requisição');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="#7C8AA8" barStyle="light-content" />

      {/* Cabeçalho com botão de voltar e título */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>WebCars</Text>
        <View style={{ width: 24 }} /> {/* Espaço para balancear layout */}
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>
            {carroEdit ? 'Editar Carro' : 'Cadastrar Carro'}
          </Text>
        </View>

        <View style={styles.cardContent}>
          <TextInput
            style={styles.input}
            placeholder="Url da imagem"
            placeholderTextColor={"#ADB5BD"}
            value={imagem}
            onChangeText={setImagem}
          />
          <TextInput
            style={styles.input}
            placeholder="Marca"
            placeholderTextColor={"#ADB5BD"}
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="Modelo"
            placeholderTextColor={"#ADB5BD"}
            value={modelo}
            onChangeText={setModelo}
          />
          <TextInput
            style={styles.input}
            placeholder="Ano"
            placeholderTextColor={"#ADB5BD"}
            value={ano}
            onChangeText={setAno}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Cor"
            placeholderTextColor={"#ADB5BD"}
            value={cor}
            onChangeText={setCor}
          />
          <TextInput
            style={styles.input}
            placeholder="Preço"
            placeholderTextColor={"#ADB5BD"}
            value={preco}
            onChangeText={setPreco}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.button} onPress={salvarCarro}>
            <Text style={styles.buttonText}>
              {carroEdit ? 'Salvar Alterações' : 'Cadastrar na coleção'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}


