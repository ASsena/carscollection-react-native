import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ScrollView, Text } from 'react-native';

export default function FormularioCarro({ navigation, route }) {
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

    const carroData = { nome, modelo, ano: Number(ano), cor, preco: Number(preco), imagem };

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
      <Text>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text>Modelo:</Text>
      <TextInput style={styles.input} value={modelo} onChangeText={setModelo} />

      <Text>Ano:</Text>
      <TextInput style={styles.input} value={ano} onChangeText={setAno} keyboardType="numeric" />

      <Text>Cor:</Text>
      <TextInput style={styles.input} value={cor} onChangeText={setCor} />

      <Text>Preço:</Text>
      <TextInput style={styles.input} value={preco} onChangeText={setPreco} keyboardType="numeric" />

      <Text>URL da Imagem:</Text>
      <TextInput style={styles.input} value={imagem} onChangeText={setImagem} />

      <Button title={carroEdit ? "Atualizar" : "Criar"} onPress={salvarCarro} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  input: {
    borderColor: '#999',
    borderWidth: 1,
    padding: 8,
    marginBottom: 15,
    borderRadius: 5,
  },
});
