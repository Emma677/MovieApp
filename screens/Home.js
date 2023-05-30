import { View, Text,Pressable } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Places } from './PlaceContext';

const Home = () => {
    const navigation = useNavigation();
    const { selectedCity, setSelectedCity } = useContext(Places);
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> <Text>Welcome</Text>,
            headerStyle: {
                backgroundColor:'white',
                shadowOffset:{width:-1,height:1},
                shadowRadius:3
            },
            headerRight:()=>(
                <Pressable style={{flexDirection:'row',marginRight:3, alignItems:'center'}}>
                     <Ionicons name="notifications-outline" size={24} color="black" />
                     <Pressable onPress={()=> navigation.navigate('Place')}>
                     <Ionicons name="location-outline" size={24} color="black" />
                        <Text>{selectedCity}</Text>
                     </Pressable>
                     
                </Pressable>
            )
        })
    })
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home