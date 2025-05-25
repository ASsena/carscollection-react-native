import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 16,
  },

  // Cabeçalho com título e barra de pesquisa
  headerContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
    width: '100%',
    maxWidth: 600,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DBE2F0',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 0,  // para alinhar verticalmente no centro
  },

  searchIcon: {
    fontSize: 18,
    marginLeft: 10,
    color: '#999',
  },

  // Estilo dos cards
  card: {
    padding: 16,
    marginVertical: 8,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    maxWidth: 600,
    backgroundColor: "transparent"

  },

  nome: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1C1C1E'
  },

  imagem: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
    resizeMode: 'cover',  // importante
    backgroundColor: '#eee', // pra ver a área da imagem se a url não carregar
  },


  // Botão fixo de cadastro
  registerButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#343E3E',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    elevation: 6,
  },

  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
