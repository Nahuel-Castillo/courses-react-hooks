import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    const { user } = useContext(UserContext);

    return (
        <div>
            <h2> HomeScreen </h2>
            <hr/>

            <pre>
                { JSON.stringify( user, null, 3) }
            </pre>
        </div>
    )
}
