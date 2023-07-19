import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
// import { Feather } from '@expo/vector-icons';

const TheatreScreen = () => {
  const route = useRoute();
  const { name } = route.params || {};
  const [selectedSeat, setSelectedSeat] = useState([]);

  const [rows, setRows] = useState([
    {
      row: "A",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "B",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "C",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "D",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
  ]);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={{ fontSize: 21, letterSpacing: 1 }}>{name}</Text>
        </Pressable>
      ),
    });
  });

  const handleSeatPress = (row, seat) => {
    const isSelected = selectedSeat.some(
      (selectedSeat) => selectedSeat.row === row && selectedSeat.seat === seat
    );
    // the isSelected checks whether a particular seat has  been selected.
    if (isSelected) {
      setSelectedSeat((prevState) =>
        prevState.filter(
          (selectedSeat) =>
            selectedSeat.row !== row || selectedSeat.seat !== seat
        )
      );
    } else {
      setSelectedSeat((prevState) => [...prevState, { row, seat }]);
    }
    // the if block unchecks a seat that has been selected.
    // so if a seat has been selected and you press the same same seat again if trigerr the if statement
    // the else block check if a seat has been selected.

    // console.log("row", row);
    // console.log("seat", seat);
  };

  // console.log(route.params)

  const pay = () => {
    // const updatedRows = [...rows];
    // selectedSeat.forEach((seat) => {
    //   const rowIndex = updatedRows.findIndex((row) => row.row === seat.row);
    //   console.log("rowIndex", rowIndex);
    //   const seatIndex = updatedRows[rowIndex].seats.findIndex(
    //     (s) => s.seat === seat.seat
    //   );
    //   console.log("seatIndex", seatIndex);
    //   updatedRows[rowIndex].seats[seatIndex].bookingStatus = "disabled";
    // });
    // setRows(updatedRows);
    // setSelectedSeat([]);

    navigation.navigate("Food",{
      mall:route.params.mall,
      seats: result,
      docId: route.params.docId,
      selectedSeat:selectedSeat,
      showtime:route.params.showtime,
      rows:route.params.rows,
      name:route.params.name,
      selectedDate: route.params.selectedDate
    })
  };
  // the pay function checks the row and seat index selected.
  // the stylings can be add to it toblock and prevent any one from selecting that seat

const seatNumbers = selectedSeat.map((seat) => seat.row + seat.seat)
const result = seatNumbers.join(" ")

  const renderSeats = () => {
   return route.params.rows.map((row, rowIndex) => (
       <View
         style={{
           flexDirection: "row",
           alignItems: "center",
           marginBottom: 10,
           left: 5,
         }}
         key={rowIndex}
       >
         <View>
           <Text>{row.row}</Text>
         </View>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           <View style={{ flexDirection: "row" }}>
             {row.seats.map((seat, seatIndex) => (
               <Pressable
                 onPress={() => handleSeatPress(row.row, seat.number)}
                //  for the ui its seat.seat but for the backend its seat.number
                 style={[
                   styles.seat,
                   selectedSeat.some(
                     (selectedSeat) =>
                       selectedSeat.row === row.row &&
                       selectedSeat.seat === seat.number
                   ) && styles.seatSelected,
                   seat.bookingStatus === "disabled" && styles.bookedSeat
                 ]}
                 disabled = {seat.bookingStatus === "disabled"}
                 key={seatIndex}
               >
                 <Text>{seat.number}</Text>
                 {/* <Text>{seat.number}</Text> for the ui its seat.seat */}
                
               </Pressable>
             ))}
           </View>
         </ScrollView>
       </View>
     ));
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          top: 8,
          marginBottom: 10,
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontSize: 19 }}>Screen This way</Text>
        <Text style={{ color: "gray" }}>Classic (240)</Text>
      </View>
      {renderSeats()}

      <View
        style={{
          backgroundColor: "gray",
          flexDirection: "row",
          gap: 20,
          paddingLeft: 90,
          marginTop: 25,
        }}
      >
        <View style={{}}>
          <FontAwesome
            style={{ textAlign: "center" }}
            name="square"
            size={24}
            color="yellow"
          />
          <Text>Selected</Text>
        </View>
        <View style={{}}>
          <FontAwesome
            style={{ textAlign: "center" }}
            name="square"
            size={24}
            color="white"
          />
          <Text>Vacant</Text>
        </View>
        <View style={{}}>
          <FontAwesome
            style={{ textAlign: "center" }}
            name="square"
            size={24}
            color="black"
          />
          <Text>Occupied</Text>
        </View>
      </View>
      <Pressable
        onPress={pay}
        style={{
          backgroundColor: "gray",
          flexDirection: "row",
          marginTop: 200,
          padding: 10,
          justifyContent: "space-between",
        }}
      >
        <Text> 0 seats Selected</Text>
        <Text> Pay 100</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  seat: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius:5,
    padding: 10,
  },
  seatSelected: {
    backgroundColor: "yellow",
    borderColor: "transparent",
  },
  bookedSeat:{
    backgroundColor:"#989898",
    borderColor:'transparent',
    
  }
});

export default TheatreScreen;
