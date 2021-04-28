import React from "react";
import { useState } from "react";

function App() {

  const [ingredientes, setIngredientes] = useState([]);

  function handleInputChange(e) {

    const value = e.target.value;
    const newIngredientes = [...ingredientes];
    const index = ingredientes.indexOf(value)

    //Verificar se já existe o valor, retornando -1 se não existir
    if (index === -1) 
      newIngredientes.push(value); // Inserir um valor
    else  // Ingrediente já existe
      newIngredientes.splice(index, 1); // Deletar elementos dentro de um vetor
    setIngredientes(newIngredientes);

  }

  return (
    <div>

      <h1>Ingredientes da pizza</h1>

      <input
        id="Pepperoni"
        type="checkbox"
        value="Pepperoni"
        onChange={handleInputChange}
      />
      <label htmlFor="Pepperoni">Pepperoni</label> <br />

      <input
        id="Queijo"
        type="checkbox"
        value="Queijo"
        onChange={handleInputChange}
      />
      <label htmlFor="Queijo">Queijo</label> <br />

      <input
        id="Frango"
        type="checkbox"
        value="Frango"
        onChange={handleInputChange}
      />
      <label htmlFor="Frango">Frango</label> <br />

      <input
        id="Catupiry"
        type="checkbox"
        value="Catupiry"
        onChange={handleInputChange}
      />
      <label htmlFor="Catupiry">Catupiry</label> <br />

      <input
        id="Molho de tomate"
        type="checkbox"
        value="Molho de tomate"
        onChange={handleInputChange}
      />
      <label htmlFor="Molho de tomate">Molho de tomate</label> <br />

      <br />

      <h2>Selecionados:</h2>
      <p>{ingredientes.join(" || ")}</p>


    </div>
  );
}

export default App;
