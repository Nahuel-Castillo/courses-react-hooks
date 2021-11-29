
import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState(initialState);

    const increment = ( { factor = 1 } ) => {
        setCounter( c => c + factor);
    }

    const decrement = ( { factor = 1 } ) => {
        setCounter( c => c - factor); 
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
