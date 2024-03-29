import { View, Text, SafeAreaView, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MovieCard = ({ item }) => {
    const navigation = useNavigation();
  return (
   <SafeAreaView>
        <Pressable style={{
            flex:1,
            borderRadius: 10,
            backgroundColor:'white',
            marginHorizontal:17,
            marginVertical:10,
            justifyContent:'center',
            alignItems:'center',
            height: Dimensions.get('window').height / 2.5,
            width: (Dimensions.get('window').width - 80) / 2
        }}>

            <Image source={{
                uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`
            }}
             style={{ width:'100%', height:'70%', borderRadius:5,resizeMode:'cover'}}
            />
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text numberOfLines={1} style={{marginTop:6,fontWeight:'400',fontSize:15}}>{item.title}</Text>
                <Text  style={{fontWeight:'400',fontSize:15}}>U·V { item.original_language}</Text>
            </View>

            <Pressable onPress={()=> navigation.navigate("MovieScreen", {
                title:item.title,
                movieId:item._id
            })} style={{backgroundColor:'#ffc40c',padding:5,borderRadius:6,width:100,marginBottom:15,marginTop:5}}>
                <Text style={{fontSize:20,textAlign:'center'}}>Book</Text>
            </Pressable>
        </Pressable>
   </SafeAreaView>
  )
}

export default MovieCard