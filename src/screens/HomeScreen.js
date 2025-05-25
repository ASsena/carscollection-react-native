import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from 'react-native';
import Title from '../components/title';
import Comecar from '../components/botoes/comecar';
import stylesCardHome from '../styles/HomeStyle';

export default function HomeScreen({ navigation }) {
  return (
    <View style={stylesCardHome.container}>
      <View style={stylesCardHome.topo}>
        <Title />
        <Image
          source={require('../../assets/logo.png')}
          style={stylesCardHome.imagem}
          resizeMode="contain"
        />

        <View style={stylesCardHome.textGroup}>
          <Text style={stylesCardHome.carcollections_text}>Car collections</Text>
          <Text style={stylesCardHome.help_your_text}>Help with your focus</Text>
        </View>
      </View>

      <View style={stylesCardHome.footer}>
        <Comecar onPress={() => navigation.navigate('ListaVeiculos')} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
