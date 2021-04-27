import React from 'react';

function Title(props){

    console.log(props);

    return(

        <div>

            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            {props.children}

        </div>

    );

}

export default Title;