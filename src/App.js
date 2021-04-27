import { prettyDOM } from '@testing-library/dom';
import React from 'react';
import Membro from './Membro';

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

      <h1>Membros</h1>
      
      <Membro membro = {Gabriel}/>
      <Membro membro = {Bruna}/>
      <Membro membro = {Gustavo}/>
      
    </div>
    );
}

export default App;
