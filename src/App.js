import React from 'react';

function App() {

  const endereco = { //Isso é um objeto
    
    rua: "Caio Martins",
    numero: 610
  }

  const pessoa = { // Isso é um objeto

    key: "value", // Todo objeto possui uma key e um value:

    nome: "Gabriel",
    idade: 18,
    altura: 1.85,
    endereco: endereco,
    notasFaculdade : [10,2,{materia: "calculo", nota:2},10,2],

  }


  function clicou() { 

    let key = Object.keys(pessoa); 

    //console.log ( pessoa[key]);//Acessar pessoa na posição nome.
  
    key.forEach((element)=> { 

      console.log(pessoa[element]);

    });

    //Formas de alterar o valor da variável:
    //1º - estática
    pessoa.idade = 19; //Atribuir de forma dinâmica
    //2º  - dinâmica
    key = "idade";
    pessoa[key] = 19;

    //Criar uma nova categoria no objeto
    pessoa.comidaFavorita = "Macarrão";
    
    //Deletar um campo:
    delete pessoa.nome;
    console.log(pessoa);


  }

  return (
    <div>

      <h1>Hello {pessoa.nome} ! Feliz {pessoa.idade} anos!</h1>
      <button onClick={() => {clicou()}}>Clique aqui</button>

    </div>
    );
  }

export default App;
