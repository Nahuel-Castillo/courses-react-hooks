
import React, { useState } from 'react';
import './counter.css';


const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20 
    });

    const {counter1, counter2} = counter;

    return (
        <div>
            <h2>Counter1 { counter1 } </h2>
            <h2>Counter2 { counter2 } </h2>
            <hr/>

            <button 
                className='btn btn-primary'
                onClick={ () => {
                    setCounter({ 
                        ...counter,
                        counter1: counter1+1
                     })}} 
            >
                +1
            </button>
            <button 
                className='btn btn-primary'
                onClick={ () => {
                    setCounter({ ...counter, counter2: counter2 + 1 });
                }} 
            >
                +1
            </button>
        </div>
    )
}

export default CounterApp
