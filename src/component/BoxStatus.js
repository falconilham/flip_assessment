import React from 'react';
import View from './View'
import Text from './Text'
import {COLOR} from '../Style'

export default function BoxStatus({status, ...props}){
    let statusColor = status !== "SUCCESS" ? COLOR.ORANGE : COLOR.GREEN
    return(
        <View style={{...styles.BoxStatus, backgroundColor:statusColor}} {...props}>
           <Text style={styles.textStatus}>{status}</Text>
        </View>
    )
}

let styles = {
    BoxStatus: {color: 'white', padding: '10px 15px', borderRadius: 5, width: 70, display: 'flex', alignItems: 'center', justifyContent: 'center',},
    textStatus: {fontSize: 15, fontWeight: 'bold'}
}