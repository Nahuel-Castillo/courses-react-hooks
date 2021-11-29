import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {

        //se ejecuta cuando se hace el unmount
        return () => {

        }

    }, []);

    useEffect(() => {
       
    }, [formState]);

    useEffect(() => {
       
    }, [email]);

    const handleInputChange = ( { target:{value} } ) => {
        
        setFormState( { ...formState, name: value } );

    };

    const handleEmailInputChange = ( { target:{value} } ) => {

        setFormState( { ...formState, email: value } );
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                 <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleEmailInputChange }
                />
            </div>

            { (name == 'vegeta' ) && <Message /> }
        </>
    )
}
