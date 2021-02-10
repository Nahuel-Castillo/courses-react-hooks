import React from 'react';
// import { renderHook } from '@testing-library/react-hooks';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('HookApp test', () => {
    
    test('Should show HookApp component correctly', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });

});