import { prettyDOM } from '@testing-library/dom';
import React from 'react';
import Membro from './Membro ( Aula 8)';
import Title from './Title - Aula 8';

const Gabriel = {
  nome: "Gabriel Henrique",
  idade: 18,
  curso: "ECA",
  cor: "azul",
}
const Bruna = {
  nome: "Bruna Eduarda",
  idade: 19,
  curso: "contabilidade",
  cor: "preto",
}
const Gustavo = {
  nome: "Gustavo Henrique",
  idade: 18,
  curso: "Cinema",
  cor: "preto",
}

function App() {

  return (
    <div>
      <Title title = "Membros" subtitle = "Esses são os membros">
      <Membro membro = {Gabriel}/>
      <Membro membro = {Bruna}/>
      <Membro membro = {Gustavo}/>
      </Title>
    </div>
    );
}

export default App;
