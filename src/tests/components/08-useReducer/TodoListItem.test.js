import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test of <TodoListItem/>', () => {
    
    const todo = demoTodos[0];
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    
    let wrapper = shallow(
        <TodoListItem
            todo={ todo }
            i={ todo.id }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    );
    
    test('should show corretly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should call handleDelete()', () => {
        
        wrapper.find('button').simulate('click');

        expect( handleDelete ).toHaveBeenCalled();
    });

    test('should call handleToggle()', () => {
        
        wrapper.find('p').simulate('click');

        expect( handleToggle ).toHaveBeenCalledWith( todo.id );

    });

    test('should show text correctly', () => {
        
        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( `${todo.id + 1}. ${todo.desc}` );
    });
});