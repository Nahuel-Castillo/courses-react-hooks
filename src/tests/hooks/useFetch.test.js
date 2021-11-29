import { renderHook } from "@testing-library/react-hooks";

import { useFetch } from '../../hooks/useFetch';

describe('useFetch test', () => {

    const url = 'https://www.breakingbadapi.com/api/quotes/1';
    
    test('should return default data', () => {
        
        const { result } = renderHook( () => useFetch( url ) );

        const { data, loading, error } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( error ).toBe( null );

    });

    test('should have next info loading false, error null', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch( url ));

        await waitForNextUpdate( { timeout: 4000});

        const { data, loading, error } = result.current;

        expect( data.length ).toBe( 1 );
        expect( loading ).toBeFalsy();
        expect( error ).toBe( null );

    });

    test('should catch errors', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch( 'https://reqres.in/apid/users?page=2' ));

        await waitForNextUpdate( { timeout: 4000});

        const { data, loading, error } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBeFalsy();
        expect( error ).toBe( 'Can not load data' );

    });

});