import { Alert } from 'react-native';

export async function fetchCarros() {
  try {
    const response = await fetch('https://web-cars-7wxh.onrender.com/api/cars');
    const json = await response.json();
    return json.data || [];
  } catch (error) {
    console.error('Erro ao buscar carros:', error);
    return [];
  }
}

export function deletarCarroComConfirmacao(id, callback) {
  // Aqui você pode usar Alert para confirmar

  Alert.alert(
    'Confirmação',
    'Deseja realmente deletar este veículo?',
    [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            await fetch(`https://web-cars-7wxh.onrender.com/api/cars/${id}`, {
              method: 'DELETE',
            });
            if (callback) callback();
          } catch (error) {
            console.error('Erro ao deletar carro:', error);
          }
        },
      },
    ],
    { cancelable: false }
  );
}
