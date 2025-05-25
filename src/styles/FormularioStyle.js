import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#7C8AA8',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '100%',
    maxWidth: 320,
    overflow: 'hidden',
    elevation: 4,
    marginTop: 20
  },
  cardHeader: {
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  cardTitle: {
    color: '#6C6C6C',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContent: {
    backgroundColor: '#F4F5F7',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop:40,
    paddingBottom: 40
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
    height: 45
  },
  button: {
    backgroundColor: '#343E3E',
    paddingVertical: 10,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 20,
    
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;