import { StyleSheet } from "react-native";
import BottNav from "./navigations/Navigations";
import { PlaceContext } from "./screens/PlaceContext";

export default function App() {
  return (
    <PlaceContext>
      <BottNav />
    </PlaceContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
