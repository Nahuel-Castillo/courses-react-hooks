import React from 'react';
import { shallow } from 'enzyme';

import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('Test in <RealExampleRef/>', () => {
    
    test('should show correctly', () => {
        
        const wrapper = shallow(<RealExampleRef />);
        
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('should show <MultipleCustomHooks/>', () => {
        
        const wrapper = shallow(<RealExampleRef />);

        wrapper.find('button').simulate('click');

        const mch = wrapper.find('MultipleCustomHooks');

        expect( mch.exists() ).toBe( true );
    });
});