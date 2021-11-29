
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');

describe('Test in <MultipleCustomHooks />', () => {
    
    test('should show correctly', () => {
        
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect( wrapper ).toMatchSnapshot();

    });

    test('should show the info', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Nahuel',
                quote: "Hola mundo"
            }],

            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();
    });

});