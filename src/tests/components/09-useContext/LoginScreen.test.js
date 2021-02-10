import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Test of LoginScreen', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={ setUser }>

            <LoginScreen/>

        </UserContext.Provider>
    );

    test('should show correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    // test('should call setUser with require arguments', () => {
       
    //     wrapper.find('button').simulate('click');

    //     // expect( setUser ).toHaveBeenCalledWith( {
    //     //     id: 12344,
    //     //     name: 'Nahuel'
    //     // } );
        
    // });
});