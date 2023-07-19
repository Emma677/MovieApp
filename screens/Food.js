import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import ProductCard from '../components/ProductCard';

const Food = () => {
    const navigation = useNavigation();
    const data2 = [
        {
          id: "0",
          name: "Crispy Veg Double Patty + Crispy Veg Double Patty",
          image:
            "https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220314053635821439_262x360jpg",
          description: "Crispy Veg Double Patty + Crispy Veg Double Patty",
          price: 180,
          veg: true,
        },
        {
          id: "1",
          name: "Lit Whopper Jr Veg + Lit Whopper Jr Veg",
          image:
            "https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220314062022014950_262x360jpg",
          description: "Lit Whopper Jr Veg + Lit Whopper Jr Veg",
          price: 238,
          veg: true,
        },
        {
          id: "2",
          name: "Crsipy Chicken Double Patty + Crsipy Chicken Double Patty",
          image:
            "https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220613110553977083_262x360jpg",
          description: "Crsipy Chicken Double Patty + Crsipy Chicken Double Patty",
          price: 258,
          veg: false,
        },
        {
          id: "3",
          name: "Chicken Whopper + Chicken Whopper",
          image:
            "https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220314062201549185_262x360jpg",
          description: "Chicken Whopper + Chicken Whopper",
          price: 398,
          veg: false,
        },
        {
          id: "4",
          name: "2 Crispy Veg Double Patty + 1 King Fries + 1 Veggie Strips",
          image:
            "https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20210510124442700555_262x360jpg",
          description: "2 Crispy Veg Double Patty + 1 King Fries + 1 Veggie Strips",
          price: 348,
          veg: true,
        },
        {
          id: "5",
          name: "2 Lite Whopper Jr Veg + 1 King Fries",
          image:
            "https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20210510124749940592_262x360jpg",
          description: "2 Lite Whopper Jr Veg + 1 King Fries",
          price: 225,
          veg: true,
        },
      ];
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitle:'',
            headerLeft: () => <Text style={{fontWeight:'900',fontSize:18}}>Order Snack</Text>,
            headerRight: () => (
                <Pressable style={{padding:10,backgroundColor:'orange',borderRadius:5}}>
                    <Text style={{color:'white',textAlign:'center'}}>Confirm</Text>
                </Pressable>
            )

        })
    },[])

  return (
    <View>
        <FlatList numColumns={2} data={data2} renderItem={({item,index}) =>(
                <ProductCard item={item} key={index}/>
        )} />
  
    
    </View>
  )
}

export default Food

const styles = StyleSheet.create({})