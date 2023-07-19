import { StyleSheet } from "react-native";
import BottNav from "./navigations/Navigations";
import { DistinationContext } from "./screens/Distination";
import { ModalPortal} from "react-native-modals";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <>
    <Provider store={store}>
      <DistinationContext>
        <BottNav />
        <ModalPortal/>
      </DistinationContext>
    </Provider>
    </>
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
