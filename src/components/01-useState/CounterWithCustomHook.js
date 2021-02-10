import React from 'react';
import './counter.css';
import { useCounter } from '../../hooks/useCounter';

const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter();

    return (
        <>
            <h2>Counter { counter } </h2>
            <hr/>
            <button className='btn btn-primary' onClick={() => increment(10) }> +1 </button>
            <button className='btn btn-primary' onClick={() => decrement(10) }> -1 </button>
            <button className='btn btn-primary' onClick={() => reset() }> Reset </button>
        </>
    )
}

export default CounterWithCustomHook
