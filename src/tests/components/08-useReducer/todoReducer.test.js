import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Test in todoReducer', () => {
    
    test('should return default state', () => {
        
        const state = todoReducer( demoTodos );

        expect( state ).toEqual( demoTodos );
    });

    test('should add a TODO', () => {
        
        const newTodo = { 
            id: 3,
            desc: 'Learn English',
            done: false
        };

        const state = todoReducer( demoTodos, { 
            type: 'add',
            payload: newTodo
        });

        expect( state ).toEqual( [ ...demoTodos, newTodo ] );
    });

    test('should remove a TODO', () => {
        
        const state = todoReducer(demoTodos, { 
            type: 'remove',
            payload: 1
        });

        expect( state ).toEqual( demoTodos.filter( todo => todo.id != 1));
    });

    test('should toggle TODO', () => {
        
        const state = todoReducer(demoTodos, {
            type: "toggle",
            payload: 1
        });

        expect( state ).toEqual( demoTodos.map( todo => 
            todo.id !== 1 
            ? todo 
            : { 
                ...todo,
                 done: !todo.done
            }
        ));
    });

})
