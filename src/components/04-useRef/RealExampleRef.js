import React, { useEffect, useRef, useState } from 'react';
import '../02-useEffect/effects.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h2> RealExampleRef </h2>
            <hr/>

            { show && <MultipleCustomHooks /> }
            <button
                className="btn btn-primary mt-4"
                onClick={ () => { setShow(!show) }}
            >
                Show/Hide Quote
            </button>
        </div>
    )
}
