import React from 'react';
import View from './View'
import {styles} from '../Style'

export default function Button({children, ...props}){
    return(
        <View {...props} style={{...styles.defaultButton, ...props.style}}>
            {children}
        </View>
    )
}