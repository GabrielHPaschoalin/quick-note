import React from "react";
import { useState } from "react";

function App() {

  const [membro, setMembro] = useState();

  function handleImputChange(e) {

    const key = e.target.name;

    const newMembro = { ...membro } //Cópia do objeto

    newMembro[key] = e.target.value;

    setMembro(newMembro);
    console.log(newMembro)
  }

  return (
    <div>

      <h1>Novo Membro</h1>

      <input //Campo nome
        type="text"
        placeholder="Nome"
        name="nome"
        onChange={handleImputChange}
      />
      <br />

      <input //Engenharia de controle e automação
        id="ECA"
        type="radio"
        name="curso"
        value="Engenharia de Controle e Automação"
        onChange={handleImputChange}
      />

      <label htmlFor="ECA"> Engenharia de Controle e Automação </label>

      <br />

      <input // Campo Engenharia elétrica
        id="EE"
        type="radio"
        name="curso"
        value="Engenharia Elétrica"
        onChange={handleImputChange}
      />

      <label htmlFor="EE">Engenharia Elétrica</label>

      <br />

      <input //Idade
        type="text"
        placeholder="Idade"
        name="idade"
        onChange={handleImputChange}
      />

      <br />

      <input //Estado
        type="text"
        placeholder="Estado"
        onChange={handleImputChange}

      />

      <input
        id="Diurno"
        type="radio"
        name="turno"
        value="Diurno"
        onChange={handleImputChange}
      />
      <label htmlFor="Diurno"> Diurno </label>

      <input
        id="Noturno"
        type="radio"
        name="turno"
        value="Noturno"
        onChange={handleImputChange}
      />
      <label htmlFor="Noturno"> Noturno </label>

      <br />

      <input //Cidade
        type="text"
        placeholder="Cidade"
        name="cidade"
        onChange={handleImputChange}

      />

    </div>
  );
}

export default App;
