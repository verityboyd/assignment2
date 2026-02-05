import BodyBattery from "@/src/ui/components/BodyBattery";
import Welcome from "@/src/ui/components/welcome";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionBar from "../src/ui/components/ActionBar/ActionBar";
import NavBar from "../src/ui/components/NavBar/NavBar";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E2E5E7" }}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <ActionBar />
          <Welcome />
          <BodyBattery />
        </View>
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={styles.button}
            onPress={() => alert("This is an alert")}
          >
            <Text>Alert</Text>
          </Pressable>
        </View>
        <NavBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    height: 50,
    width: 100,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
