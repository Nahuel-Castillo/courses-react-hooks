import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const Layout = () => {

    const { counter, increment, decrement} = useCounter(1);

    const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter < 1 ? 1 : counter }`);

    const { quote } = !loading && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
        
    }, [quote]);

    return (
        <div>
            <h2> LayoutEffect </h2>
            <hr/>
                        
            <blockquote className="blockquote text-right">
                <p 
                    ref={ pTag }
                    className="mb-3"
                > 
                    { quote } 
                </p>
            </blockquote>
            <hr/>

            <button 
                onClick={ decrement } 
                className="btn btn-primary m-2" 
                disabled={ counter <= 1 }
            >
                Previous quote
            </button> 

            <button 
                onClick={ increment } 
                className="btn btn-primary m-2"
            >
                Next quote
            </button> 
                        
        </div>
    )
}
