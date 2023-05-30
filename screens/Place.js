import {
  Text,
  View,
  Pressable,
  TextInput,
  FlatList,
  ImageBackground,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Places } from "./PlaceContext";

const Place = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={{ fontSize: 21, letterSpacing: 1 }}>
            Change Location
          </Text>
        </Pressable>
      ),
    });
  });

  const { selectedCity, setSelectedCity } = useContext(Places);
  const places = [
    {
      id: "0",
      place: "Bangalore",
      image:
        "https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "1",
      place: "Ahmedabad",
      image:
        "https://images.pexels.com/photos/6813041/pexels-photo-6813041.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "2",
      place: "Chennai",
      image:
        "https://images.pexels.com/photos/10070972/pexels-photo-10070972.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "3",
      place: "Delhi - NCR",
      image:
        "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "4",
      place: "Hyderabad",
      image:
        "https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "5",
      place: "Kolkata",
      image:
        "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "6",
      place: "Jaipur",
      image:
        "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "7",
      place: "Lucknow",
      image:
        "https://images.pexels.com/photos/15351642/pexels-photo-15351642.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const selectCity = (city) =>{
    setSelectedCity(city)
    setTimeout(()=>{
        navigation.navigate('Home')
        console.log('press mistake')
    },800)
  }

  return (
    <View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 30,
          borderColor: "#E0E0E0",
          alignItems: "center",
          margin: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <TextInput placeholder="Search for your city" />
        <Ionicons name="search" size={20} color="black" />
      </View>
      <View>
        <Text>Selected location </Text>
        <Text>{selectedCity}</Text>
      </View>

      <FlatList
        data={places}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        renderItem={({ item, index }) => (
                <Pressable onPress={()=> selectCity(item.place)} style={{marginTop:8}}>
                    <ImageBackground
                    imageStyle={{ borderRadius: 7 }}
                    style={{ width: 170, height: 130,opacity:0.9 }}
                    source={{ uri: item.image }}
                    >
                        {selectedCity === item.place && (
                            <View style={{flex:1,marginTop:7, justifyContent:'flex-start',marginLeft:5}} >
                                <Ionicons name="checkmark-circle" size={24} color="black" />
                            </View>
                        )}

                        <View style={{marginBottom:9,flex:1, justifyContent:'flex-end',marginLeft:5}}>
                            <Text style={{fontSize:20,color:'white'}}>{item.place}</Text>
                        </View>

                    </ImageBackground>
                </Pressable>
        )}
      />
    </View>
  );
};

export default Place;

