import {
  Text,
  View,
  Pressable,
  TextInput,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Distination } from "./Distination";
import { client } from "../moviebooking/sanity";

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

  const { selectedCity, setSelectedCity,setLocationId } = useContext(Distination);
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
  // the places array above was used for the frontend ui.
  const [cities, setCities] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const result = await client.fetch(
        `*[_type == 'location']`
      )
      setCities(result)
    }
    fetchData()
  },[])

  // console.log(cities)

  const selectTown = (city,locationId) => {
    setSelectedCity(city);
    setLocationId(locationId)
    setTimeout(()=>{
      navigation.navigate("Home")
    },800)
  }
  // the city param passed in the selectTown is different from the city in the sanity.
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
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Text>Select location </Text>
        <Text>{selectedCity} </Text>
      </View>
      

      <FlatList
        data={cities}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        renderItem={({ item, index }) => (
                <Pressable key={index} onPress={()=> selectTown(item.city,item._id)}
                // initially it was selectTown(item.place) but in our sanity it is place so we modify it

                style={{marginTop:8}}>
                  <ImageBackground
                    imageStyle={{ borderRadius: 7 }}
                    style={{ width: 170, height: 130,opacity:0.9 }}
                    source={{ uri: item.image }}
                    >
                        {selectedCity === item.city && (
                            <View style={{top:10,right:-10}}>
                              <AntDesign name="checkcircleo" size={24} color="white" />
                            </View>
                          )}
                        <View style={{marginBottom:9,flex:1, justifyContent:'flex-end',marginLeft:5}}>
                            <Text style={{fontSize:20,color:'white'}}>{item.city}</Text>
                        </View>

                    </ImageBackground>
                </Pressable>
        )}
      />
    </View>
  );
};

export default Place;

