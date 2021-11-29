import React, { useMemo, useState } from 'react';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';

export const MemoHook = () => {

    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);

    const Process = ( iterations ) => {

        for ( let i = 0; i < iterations; i++) {
            console.log('Ahí vamos...');
        }
        
        return `iterations ${ iterations } `;
    };

    //enviar funcion con el parametro y array con los objetos (dependencias)
    const memoProcess = useMemo( () => Process( counter ), [ counter ]);

    return (
        <div>
            <h2>MemoHook</h2>
            <h3>Counter: <small> { counter } </small> </h3>
            <hr/>

            <p> { memoProcess } </p>

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary m-4"
                onClick={ () => setShow( !show ) }
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
