import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import moment from 'moment';

const Dates = ({date,selected,onSelected}) => {
    const day = moment(date).format("ddd");
    console.log(day)
    const dayNumber = moment(date).format("D")
    console.log(dayNumber);
    const fullDate = moment(date).format("YYYY-MM-DD");
    console.log(fullDate)
  return (
    <Pressable onPress={() => onSelected(fullDate)}
      style={[styles.container, selected === fullDate && {backgroundColor:'#FFD700'}]}>
        <Text>{day}</Text>

        {/* the view below gives a space like a magrin between the two texts*/}
        <View style={{height:9}}/>
        <Text>{dayNumber}</Text>
    </Pressable>
    
  )
}

export default Dates

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#E0E0E0',
        borderRadius:10,
        borderColor:'#ddd',
        width:70,
        height:70,
        padding:10,
        marginHorizontal:5,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center'
    }
})