import { mount } from 'enzyme';
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Test of <AppRouter/>', () => {
    
    const user = {
        id: 124,
        name: 'Nahuel'
    };

    const wrapper = mount(
        <UserContext.Provider value={ user }>
            <AppRouter/>
        </UserContext.Provider>
    );

    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });
});