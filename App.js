import { StyleSheet } from "react-native";
import BottNav from "./navigations/Navigations";
import { DistinationContext } from "./screens/Distination";
import { ModalPortal} from "react-native-modals";

export default function App() {
  return (
    <DistinationContext>
      <BottNav />
      <ModalPortal/>
    </DistinationContext>
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
