import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Title from '../components/title/index';
import Comecar from '../components/botoes/comecar';
import styles from '../styles/app_style';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Title />
        <Image
          source={require("../../assets/logo.png")}
          style={styles.imagem}
        />

        <View style={styles.textGroup}>
          <Text style={styles.carcollections_text}>Car collections</Text>
          <Text style={styles.help_your_text}>Help with your focus</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Comecar onPress={() => navigation.navigate('ListaVeiculos')} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
