import React, { memo } from 'react';

//memo hace que el componente se vuelva a renderizar solo cuando cambian sus properties
export const Small = memo(( { value } ) => {

    console.log(" llamada ");

    return (
        <small>
            { value }
        </small>
    )
})
