import React, { useRef } from 'react'
import { useForm } from '../../hooks/useForm';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const [ values, handleInputChange ] = useForm(); 
    const { name } = values;

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <div>
            <h2> FocusScreen</h2>

            <input 
                ref= { inputRef }
                name="name"
                className="form-control"
                placeholder="Nombre"
                value={ name }
                onChange={ handleInputChange }
            />

            <button 
                className="btn btn-outline-primary mt-4"
                onClick={ handleClick}
            >
                Focus
            </button>
        </div>
    )
}
