import React, {useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import{useSelector} from 'react-redux'

import {View, Text, BoxStatus} from '../component' 
import {styles} from '../Style'

export default function DetailPage(){
    let {id} = useParams()
    let history = useHistory()
    let {listData} = useSelector((state) => state);
    let isDataExist = listData.length > 0
    console.log(isDataExist)
    useEffect(() => {
        if(isDataExist === false){
            setInterval(() => {
                history.push('/')
            },2000)
            
        }
    },[isDataExist, history])

    let dataTransaction = listData.find((item) => item.id === id)
    console.log({dataTransaction})
    let {status, sender_bank, beneficiary_bank, beneficiary_name, account_number, created_at, unique_code, amount, remark} = dataTransaction
    return (
        <View style={styles.container}>
            {dataTransaction ? (
                <View style={styles.mainBox}>
                    <Text style={styles.title}>Daftar Transaksi</Text>
                    <View style={styles.transactionTitle}>
                        <Text>ID TRANSAKSI: #{id}</Text>
                        <BoxStatus status={status}/>
                    </View>
                    <View>
                        <View style={{display: 'flex', flexDirection: 'column', marginBottom : 10}}>
                            <Text>PENGIRIM</Text>
                            <Text>{sender_bank}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'column', marginBottom : 10}}>
                            <Text>PENERIMA</Text>
                            <Text>{beneficiary_bank}</Text>
                            <Text>{account_number}</Text>
                            <Text>{beneficiary_name}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'column', marginBottom : 10}}>
                            <Text>NOMINAL</Text>
                            <Text>{amount}</Text>
                            <Text>{unique_code}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'column', marginBottom : 10}}>
                            <Text>CATATAN</Text>
                            <Text>{remark}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'column', marginBottom : 10}}>
                            <Text>WAKTU DIBUAT</Text>
                            <Text>{created_at}</Text>
                        </View>
                    </View>
                </View>
            ): <Text style={styles.title}>There is no data and you will be redirect to home</Text>}
            
        </View>
    )
}