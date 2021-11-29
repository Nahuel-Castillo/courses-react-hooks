import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description:inputValue }, handleInputChange, reset ] = useForm( { description: '' });

    const handleSubmit = e => {
        e.preventDefault();

        if ( inputValue.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: inputValue,
            done: false
        };

        handleAddTodo(newTodo);

        reset();
    }

    return (
        <>
            <h4> Add TODO </h4>
            <hr/>

            <form onSubmit={ handleSubmit }>

                <input 
                    type="text"
                    name="description"
                    placeholder="Learn..."
                    autoComplete="off"
                    className="form-control"
                    onChange={ handleInputChange }
                    value={ inputValue }
                />

                <button
                    type="submit"
                    className="btn btn-outline-success mt-1 btn-block"
                >
                    add
                </button>

            </form>
        </>
    )
}
