import { Text, Image, Pressable, View, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const ProductCard = ({ item }) => {
  const Cart = useSelector((state) => state.cart.cart)
    console.log(Cart)
  return (
    <Pressable
      style={{
        flex: 1,
        backgroundColor: "white",
        margin: 5,
        borderRadius: 8,
        flexDirection: "column",
        padding:10
      }}
    >
      <Image
        style={{ height: 150, width: "100%", borderRadius: 5,resizeMode:'cover',marginBottom:12 }}
        source={{ uri: item.image }}
      />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Text style={{ margin: 5 }}>{item.name}</Text>

        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700" }}>{item.price}</Text>
          <Pressable
            onPress={()=>AddItemToCart(item)}
            // the item prop is got from the prop passed in the ProductCard function/
            style={{
              backgroundColor: "orange",
              borderRadius: 7,
              paddingHorizontal: 9,
              paddingVertical: 4,
              marginBottom: 5,
            }}
          >
            <Text style={{fontSize:16}}>Add</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;
