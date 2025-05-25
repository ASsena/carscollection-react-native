import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import Formulario from './src/screens/Formulario';
import ListaVeiculos from './src/screens/ListaVeiculosScreen';
import DetalhesVeiculo from './src/screens/DetalheveiculoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListaVeiculos" component={ListaVeiculos} />
        <Stack.Screen name="Formulario" component={Formulario} />
        <Stack.Screen name="Detalhes" component={DetalhesVeiculo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
