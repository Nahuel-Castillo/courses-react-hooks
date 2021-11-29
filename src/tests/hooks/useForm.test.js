
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('useForm test', () => {
    
    const initialForm = {
        name: 'Nahuel',
        email: 'nahuelcastillo13@gmail.com'
    };

    test('should return a default form', () => {
        
        const { result } = renderHook( () => useForm( initialForm ));

        const [ values, handleInputChange, reset ] = result.current;
        
        expect( values ).toEqual(initialForm) ;
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );

    });

    test('should change form name value', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );

        const [ , handleInputChange ] = result.current;

        act( () => {
            
            handleInputChange( { target: {
                name: 'name',
                value: 'Kaleft'
            }});
        });

        const [ values ] = result.current;

        expect( values ).toEqual( { ...initialForm, name: 'Kaleft' } );
    });

    test('should reset the form with reset()', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );

        const [ , handleInputChange, reset ] = result.current;

        const target = {
            name: 'name',
            value: 'Kaleft'
        };

        act( () => {
            handleInputChange( { target });
            reset();
        });

        const [ values ] = result.current;

        expect( values ).toEqual( initialForm );
    });

});