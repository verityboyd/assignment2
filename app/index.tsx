
import Welcome from "@/src/ui/components/welcome";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionBar from "../src/ui/components/ActionBar/ActionBar";
import NavBar from "../src/ui/components/NavBar/NavBar";
import BodyBattery from "@/src/ui/components/BodyBattery";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView edges={["top"]}>
        <ActionBar />
      </SafeAreaView>

      <View style={{ flex: 1 }} />

      <SafeAreaView edges={["bottom"]}>
        <NavBar />
      </SafeAreaView>
    </View>
    
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Welcome />
      </View>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BodyBattery />
    </SafeAreaView>
  );
}
