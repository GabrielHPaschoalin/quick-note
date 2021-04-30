import React, { useEffect, useState } from "react";

function Selecionados({ selecionados }) {

    const [ingredientes, setIngredientes] = useState(selecionados);

    const [showWarning, setShowWarning] = useState(false);
    useEffect(() => {
        const newIngredientes = [];

        for (let i = 0; i < selecionados.length && i < 3; i++) {
            const element = selecionados[i];
            newIngredientes.push(element);
        }

        setIngredientes(newIngredientes);

        setShowWarning(selecionados.length >= 3); // Indica se é false ou true


    }, [selecionados]) // O vetor é o que será monitorado

    return (
        <div>
            <h3>Selecionados:</h3>
            <ul>
                {ingredientes.map((ingrediente, index)=>{
                    return(
                        <li key = {index}>{ingrediente}</li>
                    );
                })}

            </ul>
            {showWarning && <h4>Número máximo de ingredientes atingido</h4>}
        </div>
    );
    //{showWarning && <h4>Número máximo de ingredientes atingido</h4>}:
    // Se showWarning for verdadeiro, exibe a mensagem
    // <ul> - lista
}

export default Selecionados;