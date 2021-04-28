import React from "react";
import { useState } from "react";

function App() {

    const [nome, setNome] = useState(); //Retorna um vetor com 2 parâmetros
  const [curso, setCurso] = useState();
  const [idade, setIdade] = useState();
  const [Cidade, setCidade] = useState();
  const [Estado, setEstado] = useState();
  const [Turno, setTurno] = useState();

  return (
    <div>

      <h1>Novo Membro</h1>

      <input //Campo nome
        type="text"
        placeholder="Nome"
        onChange={(event) => setNome(event.target.value)}
      />
      <br />

      <input //Engenharia de controle e automação
        id="ECA"
        type="radio"
        name="curso"
        value="Engenharia de Controle e Automação"
        onChange={(e) => setCurso(e.target.value)}
      />

      <label htmlFor="ECA"> Engenharia de Controle e Automação </label>

      <br />

      <input // Campo Engenharia elétrica
        id="EE"
        type="radio"
        name="curso"
        value="Engenharia Elétrica"
        onChange={(e) => setCurso(e.target.value)}
      />

      <label htmlFor="EE">Engenharia Elétrica</label>

      <br />

      <input //Idade
        type="text"
        placeholder="Idade"
        onChange={(event) => setIdade(event.target.value)}
      />

      <br />

      <input //Estado
        type="text"
        placeholder="Estado"
        onChange={(e) => setEstado(e.target.value)}

      />

      <input
        id="Diurno"
        type="radio"
        name="turno"
        value="Diurno"
        onChange={(e) => setTurno(e.target.value)}
      />
      <label htmlFor="Diurno"> Diurno </label>

      <input
        id="Noturno"
        type="radio"
        name="turno"
        value="Noturno"
        onChange={(e) => setTurno(e.target.value)}
      />
      <label htmlFor="Noturno"> Noturno </label>

      <br />

      <input //Cidade
        type="text"
        placeholder="Cidade"
        onChange={(e) => setCidade(e.target.value)}

      />

      <br />

      <p>Nome do membro: {nome}</p>
      <p>Curso do membro:  {curso}</p>
      <p>Turno: {Turno}</p>
      <p>Idade: {idade}</p>
      <p>Cidade - Estado : {Cidade} - {Estado}</p>


    </div>
  );
}

export default App;
