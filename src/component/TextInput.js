import React from 'react';

export default function TextInput({children, ...props}){
    return(
        <input type="text" {...props}>
            {children}
        </input>
    )
}