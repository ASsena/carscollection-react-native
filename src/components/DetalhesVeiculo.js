import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { deletarCarro } from '../service/carServices';

export function useDetalhesVeiculo(carro) {
  const navigation = useNavigation();

  const excluirCarro = () => {
    Alert.alert(
      'Excluir veículo',
      'Tem certeza que deseja excluir este veículo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              await deletarCarro(carro._id); // usa a função limpa
              navigation.goBack();
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível excluir o veículo.');
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const carrosselItens = [
    { title: 'Modelo', value: carro?.modelo },
    { title: 'Cor', value: carro?.cor },
    { title: 'Ano', value: carro?.ano },
    { title: 'Preço', value: `R$ ${carro?.preco}` },
  ];

  const descricao = carro?.descricao || 'Descrição não disponível';

  return {
    excluirCarro,
    carrosselItens,
    descricao,
  };
}
