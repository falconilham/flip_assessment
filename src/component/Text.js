import React from 'react';

export default function Text({children, ...props}){
    return(
        <span {...props} style={{...props.style, fontFamily: 'Lato, sans-serif'}}>
            {children}
        </span>
    )
}