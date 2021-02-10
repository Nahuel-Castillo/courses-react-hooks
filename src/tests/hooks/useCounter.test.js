
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Test in useCounter', () => {
    
    test('should return default values', () => {
        
        const { result } = renderHook( () => useCounter() );

        const { counter, increment, decrement } = result.current;
        
        expect( counter ).toBe( 10 );
        expect( typeof increment ).toBe( 'function' );
        expect( typeof decrement ).toBe( 'function' );
        
    });

    test('should init useCounter with value 100', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;
        
        expect( counter ).toBe( 100 );

    });

    test('should increment counter by 1 when call increment() ', () => {
        const initValue = 10;

        const { result } = renderHook( () => useCounter( initValue ) );
        
        act(() => {
            result.current.increment({});
        });
        
        expect( result.current.counter ).toBe( initValue + 1 );

    });

    test('should decrement counter by 1 when call decrement()', () => {

        const initValue = 10;

        const { result } = renderHook( () => useCounter( initValue ) );
        
        act(() => {
            result.current.decrement({});
        });
        
        expect( result.current.counter ).toBe( initValue - 1);

    });

    test('should reset counter when call reset()', () => {

        const initValue = 10;
        const { result } = renderHook( () => useCounter( initValue ));

        const { increment, reset } = result.current;

        act(() => {
            increment({});
            increment({});
            reset();
        });

        expect( result.current.counter ).toBe( initValue );

    });
});