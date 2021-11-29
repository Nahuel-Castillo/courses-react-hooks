import React, { useEffect, useReducer } from 'react';

import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';


const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);  

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]);

    const handleToggle = ( todoId ) => {
        //recibe action object
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = ( newTodo ) => {

        dispatch( {
            type: 'add',
            payload: newTodo
        } );
    };

    const handleDelete = ( todoId ) => {
        dispatch( {
            type: 'remove',
            payload: todoId
        } );
    }

    return (
        <div>
            <h2>TodoApp ( { todos.length } )</h2>
            <hr/>

            <div className="row">

                <div className="col-7">
                    <TodoList 
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />

                </div>

                <div className="col-5">
                    <TodoAdd handleAddTodo={ handleAddTodo }/>
                </div>


            </div>

        </div>
    )
}
