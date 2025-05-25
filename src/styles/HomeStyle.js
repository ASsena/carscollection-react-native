import { StyleSheet } from 'react-native';

const stylesCardHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 20,
  },

  topo: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  imagem: {
    marginVertical: 30,
    width: 200,
    height: 150,
  },

  textGroup: {
    alignItems: 'center',
    marginBottom: 5,
  },

  carcollections_text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  help_your_text: {
    fontSize: 16,
    color: '#666',
  },

  footer: {
    alignItems: 'center',
    marginBottom: 40,
  },
});

export default stylesCardHome;
