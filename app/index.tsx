import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionBar from "../src/ui/components/ActionBar/ActionBar";
import NavBar from "../src/ui/components/NavBar/NavBar";

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
  );
}
