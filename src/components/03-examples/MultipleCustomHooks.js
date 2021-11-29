import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement} = useCounter(1);

    const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter < 1 ? 1 : counter }`);

    const { author, quote } = !loading && data[0];

    return (
        <div>
            <h2> BrekingBad Quotes </h2>
            <hr/>

            { 
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                : 
                    (
                        <>
                            <blockquote className="blockquote text-right">
                                <p className="mb-3"> { quote } </p>
                                <footer className="blockquote-footer"> { author }  </footer>
                            </blockquote>
                            <hr/>

                            <button 
                                onClick={ decrement } 
                                className="btn btn-primary m-2" 
                                disabled={ counter <= 1 }
                            >
                                Previous quote
                            </button> 

                            <button onClick={ increment } className="btn btn-primary m-2">
                                Next quote
                            </button> 
                        </>
                    ) 
            }
        </div>
    )
}
