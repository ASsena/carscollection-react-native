# WebCars - Frontend Mobile

O **WebCars Frontend Mobile** é uma aplicação desenvolvida em **React Native** que consome a WebCars API para exibir, cadastrar e gerenciar informações sobre veículos de forma prática e responsiva. A interface é intuitiva, com navegação entre telas de listagem, detalhes e formulário de cadastro de veículos.

---

## 🔗 Links Importantes

* 🎨 [Protótipo Figma](https://www.figma.com/design/1Ry2LcDN3y7wT4Xv8Uz4rQ/MobileApp--Community-?node-id=35-0&t=it2iRLemUBKvLKDb-1)
* ⚙️ [Backend - WebCars API](https://github.com/nyxpdb/Web-Cars)

---

## 🧰 Tecnologias Utilizadas

* **React Native** – Framework para desenvolvimento de aplicativos móveis multiplataforma
* **Expo** – Ferramenta para simplificar o desenvolvimento e testes
* **React Navigation** – Biblioteca para navegação entre telas
* **Fetch API** – Comunicação HTTP com a WebCars API
* **Styled Components** (ou **StyleSheet**) – Estilização dos componentes
* **JavaScript (ES6+)** – Linguagem base

---

## 🚗 Funcionalidades

O aplicativo permite:

* ✅ Listar todos os veículos cadastrados na API
* ✅ Visualizar os detalhes de um veículo específico
* ✅ Cadastrar um novo veículo
* ✅ Atualizar informações de um veículo
* ✅ Deletar veículos cadastrados
* ✅ Interface mobile responsiva e moderna

---

## 📄 Estrutura de Pastas

```
src/
├── components/
│   ├── botoes/
│   ├── card/
│   └── title/
│       ├── DetalhesVeiculo.js
│       └── ListaCarros.js
├── screens/
│   ├── DetalheveiculoScreen.js
│   ├── Formulario.js
│   ├── HomeScreen.js
│   └── ListaVeiculosScreen.js
├── service/
│   └── carServices.js
├── styles/
│   ├── BotoesStyle.js
│   ├── CarroStyle.js
│   ├── DetalhesVeiculoStyle.js
│   ├── FormularioStyle.js
│   ├── HomeStyle.js
│   └── ListaCarrosStyle.js
assets/
```

---

## 📦 Serviço de Consumo da API

O arquivo `service/carServices.js` centraliza as requisições HTTP para a WebCars API, incluindo operações de listar, buscar por ID, criar, atualizar e deletar veículos.

**Exemplo:**

```javascript
const API_BASE = 'https://web-cars-7wxh.onrender.com/api/cars';

export async function getCars() {
  const response = await fetch(API_BASE);
  return await response.json();
}
```

---

## ▶️ Como Rodar o Projeto

1. **Clone o repositório**

```bash
git clone https://github.com/ASsena/carscollection-react-native
cd carscollection-react-native
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure a URL da API**

No arquivo `service/carServices.js`, configure a constante `API_BASE` com a URL da sua API:

```javascript
const API_BASE = 'https://web-cars-7wxh.onrender.com/api/cars';
```

4. **Execute o projeto**

```bash
npx expo start
```

5. **Testes no emulador ou dispositivo físico**

* Escaneie o QR Code gerado com o aplicativo **Expo Go** no seu celular.
* Ou rode em emuladores Android/iOS.

---

## 🖼️ Telas da Aplicação

* **HomeScreen** – Tela inicial de navegação
* **ListaVeiculosScreen** – Listagem de veículos
* **DetalheveiculoScreen** – Detalhes de um veículo selecionado
* **Formulario** – Cadastro e edição de veículos

---

## ❓ Observações

* O projeto depende da WebCars API em funcionamento.
* O layout é modularizado com componentes reaproveitáveis.
* Os estilos estão organizados na pasta `styles`.

---


## 📢 Sobre

Este projeto foi desenvolvido com foco em **boas práticas de organização, modularização e consumo de APIs** em aplicações mobile com React Native.

---
