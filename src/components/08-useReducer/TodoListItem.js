
import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ( { todo, i, handleDelete, handleToggle } ) => {
    return (
        <li
            className="list-group-item"
        >
            <p
                className={`${todo.done && 'complete'}`}
                onClick={ () => handleToggle(todo.id) }
            >
                {i + 1}. {todo.desc}
            </p>

            <button
                className="btn btn-danger"
                onClick={() => handleDelete(todo.id)}
            >
                Remove
            </button>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}