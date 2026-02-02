import { View } from "react-native";
import ActionBar from "../src/ui/components/ActionBar/ActionBar";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActionBar />
    </View>
  );
}
