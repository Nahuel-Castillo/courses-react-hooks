import '@testing-library/jest-dom';
import TodoList from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";
import { shallow } from 'enzyme';

describe('Test of <TodoList/>', () => {
   
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={ demoTodos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    );

    test('should show correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should have 2 <TodoListItem/>', () => {
        
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );

        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any( Function) );
    });
});