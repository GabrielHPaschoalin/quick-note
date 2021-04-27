import React from "react";

function Membro(props){//props: recebe os parâmetros de um objeto
    
    console.log(props);

    return(

        <div>

            <p>{props.membro.nome}</p>
            <p>{props.membro.curso}</p>
            <p>{props.membro.idade}</p>
            <p>{props.membro.cor}</p>

            <hr/>

        </div>

    );  
   
}

export default Membro;