import BodyBattery from "@/src/ui/components/BodyBattery";
import Welcome from "@/src/ui/components/welcome";
import { View } from "react-native";
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

        <NavBar />
      </View>
    </SafeAreaView>
  );
}
