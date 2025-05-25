import { StyleSheet } from "react-native";
const detalhesVeiculo = StyleSheet.create({
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
