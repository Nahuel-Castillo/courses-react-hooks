import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h2> AboutScreen </h2>
            <hr/>

            <pre>
                { JSON.stringify(user, null, 3)}
            </pre>

            <button
                className="btn btn-warning"
                onClick={ () => setUser( {} ) }
            >
                Logout
            </button>
        </div>
    )
}
