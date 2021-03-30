import React, {useEffect, useState} from 'react'
import {View, Text, Select, Option, TextInput, BoxStatus} from '../component'
import {styles, COLOR} from '../Style'

import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import {capitalizeString, compareString, toCurrency, convertDate} from '../helper'
import axios from 'axios'

const API = process.env.REACT_APP_API

const BoxItem = ({id, amount, status, sender_bank, beneficiary_bank, completed_at, beneficiary_name, history, isHover}) => {
    let checkStatus = status !== "SUCCESS" ? {boxShadow: `-4px 0px ${COLOR.ORANGE}`} : {boxShadow: `-4px 0px ${COLOR.GREEN}`}
    let boxItem = {...styles.boxItem, ...checkStatus}
    // console.log({completed_at})
    return (
        <View 
            onClick={() => history.push(`/detailpage/${id}`)} 
            style={isHover ? {...boxItem, opacity: 0.5} : boxItem} 
            key={id}
        >
            <View>
                <View style={styles.boxTextBank}>
                    <Text>{sender_bank.length < 5 ? sender_bank.toUpperCase(): sender_bank}</Text>
                    <Text>{ `=>` }</Text>
                    <Text>{beneficiary_bank.length < 5 ? beneficiary_bank.toUpperCase(): capitalizeString(beneficiary_bank)}</Text>
                </View>
                <View style={styles.boxTextBank}>
                    <Text>{beneficiary_name.toUpperCase()}</Text>
                </View>
                <View>
                    <Text>{toCurrency(amount)} </Text>
                    <Text style={{fontWeight: 'bolder', fontSize: 50}}>.</Text>
                    <Text> {convertDate(completed_at)}</Text>
                </View>
            </View>
            <View>
                <BoxStatus status={status}/>
            </View>
        </View>
    )
}


const initialValue = {
    name: '',
    sort: ''
}

export default function ListTransaction(){
    let history = useHistory()
    let dispatch = useDispatch()
    let {listData} = useSelector((state) => state);
    let [isLoading, setIsLoading] = useState(false);
    let [filteredData, setFilterData] = useState([])
    let [value, setValue] = useState(initialValue)
    let [isHover, setIsHover] = useState()
    
    useEffect(() => {
        setIsLoading(true)
        axios.get(API).then((res) => {
            let data =  Object.values(res.data)
            dispatch({
                type: 'GET_DATA',
                payload: data
            })
            setFilterData(data)
            setIsLoading(false)
        })
    },[dispatch])

    useEffect(() => {
        let filter = listData.filter(({beneficiary_name, beneficiary_bank, sender_bank}) => {
            return beneficiary_name.toLowerCase().includes(value.name.toLowerCase()) ||
            beneficiary_bank.toLowerCase().includes(value.name.toLowerCase()) ||
            sender_bank.toLowerCase().includes(value.name.toLowerCase())
        })
        setFilterData(filter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value.name])

    let sorting = (value) => {
        let dataHandler = [...filteredData]
        if(value === 'descending'){
            dataHandler = dataHandler.sort((a,b) => compareString(b.beneficiary_name.toLowerCase(), a.beneficiary_name.toLowerCase()))
        }else if(value === 'newest'){
            dataHandler= dataHandler.sort((a,b) => new Date(a.created_at) - new Date(b.created_at))
        }else if(value === 'oldest'){
             dataHandler = dataHandler.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
        }else{
            dataHandler = dataHandler.sort((a,b) => compareString(a.beneficiary_name.toLowerCase(), b.beneficiary_name.toLowerCase()))
        }
        setFilterData(dataHandler)
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainBox}>
                <Text style={styles.title}>Daftar Transaksi</Text>
                <Text style={styles.greet}>Hallo Kak!</Text>
                <View style={styles.greetBox}>
                    <Text>Kamu telah melakukan transaksi sebesar </Text>
                    <Text style={styles.money}>Rp5.000.000 </Text>
                    <Text>sejak menggunakan Flip.</Text>
                </View>
                <View style={styles.containerInput}>
                    <TextInput  
                        value={value.name} 
                        onChange={(e) => setValue({...value, name: e.target.value})}
                        style={styles.inputText}
                        placeholder="Cari nama atau bank"
                    />
                    <Select 
                        onChange={(e) => {
                            sorting(e.target.value)
                            setValue({
                                ...value,
                                sort: e.target.value
                            })
                        }}
                        style={styles.inputText}
                    >
                        <Option value="ascending">Nama A-Z</Option>
                        <Option value="descending">Nama Z-A</Option>
                        <Option value="newest">Tanggal Terbaru</Option>
                        <Option value="oldest">Tanggal Terlama</Option>
                    </Select>
                </View>
                <View style={styles.containerBoxItem}>
                    {isLoading ? <Text>...Loading</Text> : 
                        ( ((value.z  || value.sort) ?  filteredData : listData) || []).map((item) => (
                            <View style={{}} key={item.id} onMouseEnter={() => setIsHover(item.id)} onMouseLeave={() => setIsHover()}>
                                <BoxItem key={item.id} {...item} history={history} isHover={item.id === isHover}/>
                            </View>
                        ))}
                </View>
            </View>
        </View>
    )
}