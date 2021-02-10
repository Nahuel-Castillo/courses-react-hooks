import { shallow } from 'enzyme';
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe('Test of <TodoAdd/>', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(<TodoAdd handleAddTodo={ handleAddTodo } />);

    test('should show correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });
   
    test('should not call handleAddTodo()', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit( { preventDefault(){} } );

        expect( handleAddTodo ).not.toHaveBeenCalled();

    });

    test('should call handleAddTodo', () => {
        
        const value = 'hola';

        wrapper.find('input').simulate('change', { target: {
            name:'description',
            value
        }});

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit( { preventDefault(){} } );

        expect( handleAddTodo ).toHaveBeenCalledWith( {
            id: expect.any(Number),
            desc: value,
            done: false
        });
    });
});