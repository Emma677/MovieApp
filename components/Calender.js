import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Dates from './Dates'
import { ScrollView } from 'react-native'

const Calender = ({selected, onSelected}) => {
    const [dates,setDates] = useState([])
        const getDates = () =>{
            const myDates = [];
            for(let i = 0; i < 7; i++){
                const date = moment().add(i,'days');
                myDates.push(date);
            }
            setDates(myDates)
        }

        useEffect(()=>{
            getDates()
        },[])
        console.log(dates)
  return (
    <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dates.map((date,index)=>(
                <Dates date={date} key={index} onSelected={onSelected} selected={selected}/>
            ))}
        </ScrollView>
    </View>
  )
}

export default Calender

