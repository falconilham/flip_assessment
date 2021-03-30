import React from 'react'
import {useParams, useHistory} from 'react-router-dom'
import{useSelector} from 'react-redux'
import {InboxOutlined} from '@ant-design/icons'

import {View, Text, BoxStatus, Button} from '../component' 
import {styles, COLOR} from '../Style'
import {capitalizeString, convertDate} from '../helper'

export default function DetailPage(){
    let {id} = useParams()
    let history = useHistory()
    let {listData} = useSelector((state) => state);
    let dataTransaction = listData.find((item) => item.id === id)
    let isDataExist = dataTransaction

    if(isDataExist){
        let {status, sender_bank, beneficiary_bank, beneficiary_name, account_number, created_at, unique_code, amount, remark} = dataTransaction
        return(
            <View style={styles.container}>
                <View style={styles.mainBox}>
                    <Text style={styles.title}>Daftar Transaksi</Text>
                    <View style={styles.transactionTitle}>
                        <Text>ID TRANSAKSI: #{id}</Text>
                        <BoxStatus status={status}/>
                    </View>
                    <View style={styles.detailTransaction}>
                        <View style={styles.iconInboxTransaction}>
                            <InboxOutlined style={{fontSize: 50}} twoToneColor={COLOR.ORANGE} />
                        </View>
                        <View>
                            <View style={styles.itemDetailTransaction}>
                                <Text>PENGIRIM</Text>
                                <Text style={{fontSize: 15}}>{sender_bank.length < 5 ? sender_bank.toUpperCase(): capitalizeString(sender_bank)}</Text>
                            </View>
                            <View style={styles.itemDetailTransaction}>
                                <Text>PENERIMA</Text>
                                <Text style={{fontSize: 15}}>{beneficiary_bank.length < 5 ? beneficiary_bank.toUpperCase(): capitalizeString(beneficiary_bank)}</Text>
                                <Text style={{fontSize: 15}}>{account_number}</Text>
                                <Text style={{fontSize: 15}}>{beneficiary_name}</Text>
                            </View>
                            <View style={styles.itemDetailTransaction}>
                                <Text>NOMINAL</Text>
                                <Text style={{fontSize: 15}}>{amount}</Text>
                                <Text style={{fontSize: 15}}>Kode unik: {unique_code}</Text>
                            </View>
                            <View style={styles.itemDetailTransaction}>
                                <Text>CATATAN</Text>
                                <Text style={{fontSize: 15}}>{remark}</Text>
                            </View>
                            <View style={styles.itemDetailTransaction}>
                                <Text>WAKTU DIBUAT</Text>
                                <Text style={{fontSize: 15}}>{convertDate(created_at)}</Text>
                            </View>
                        </View>
                    </View>
                    <Button onClick={() => history.push('/')} style={styles.buttonBackDetail}>Kembali</Button>
                </View>
            )
        </View>
        )
    }else{
        return (
            <View onClick={() => history.push('/')} style={{...styles.container, flexDirection: 'column'}}>
                <Text style={styles.title}>There is no data and you will be redirect to home</Text>
                <Button style={styles.buttonBackDetail}>Kembali</Button>
            </View>
        )
    }
}