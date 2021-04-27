import React from 'react';

function App() {
  
  let numero = 0;


  function clicou(dividir) { //Função para exibir alerta
    numero++;   
  
    let dividido = 0;

    if(dividir === true){
      dividido = numero/2;
    }

    alert(numero);
    alert(dividido);
  }

return (
    <div>
      <h1>Hello world</h1>
      <button onClick={() => {clicou(false)}}>+1</button>
      <button onClick={() => {clicou(true)}}>+1 e divide</button>

    </div>
  );
}



export default App;
