import React from 'react';

function App() {

  let numeros = [1,2,3,4,5,6.3,7,8,9];
  
function clicou() { 

  for(let i=0; i < numeros.length; i++){ // como usar um for
    console.log("console.log: "+ i); //No navegador: Inspecioanar elemento->console->debugar
  }

  //Não retorna nada
  numeros.forEach((elemento, index) =>  {console.log("forEach:  "+elemento + ":)" + index)});
  
  //Duplicar o valor sempre que clicar no botão:

  numeros = numeros.map((elemento) => {
    return elemento *2; 
  });

  console.log(numeros);





}

return (
    <div>
      <h1>Hello world</h1>
      <h1>{numeros[4]} </h1>
      <button onClick={() => {clicou()}}>Clique aqui</button>

    </div>
  );
}



export default App;
