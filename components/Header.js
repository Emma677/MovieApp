import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={{ marginBottom: 55 }}>
      <ImageBackground
        style={{ height: 200, resizeMode: "contain" }}
        source={require("../assets/pic11.jpg")}
      >
        <Pressable
          style={{
            backgroundColor: "white",
            height: 90,
            top: 150,
            marginLeft: "auto",
            marginRight: "auto",
            width: "90%",
            borderRadius: 10,
            padding:10
          }}
        >
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View>
                <Text style={{color:'gray'}}>Releasing day 32</Text>
                <Text style={{fontSize:17,fontWeight:'600'}}>Custody</Text>
                <Text style={{color:'gray'}}>Action</Text>
            </View>

            <View style={{backgroundColor:'#ffc40c',padding:5,borderRadius:6}}>
                <Text style={{fontSize:20}}>Book</Text>
            </View>

          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Header;
