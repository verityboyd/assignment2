import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ActionBar() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={require("../../../../assets/images/profile.png")}
          style={styles.profilePic}
        />

        <Ionicons name="notifications" size={24} color="black" />
      </View>

      <Text style={styles.title}>Home</Text>

      <View style={styles.rightSection}>
        <FontAwesome name="refresh" size={24} color="black" />
        <Image
          source={require("../../../../assets/images/watch.png")}
          style={styles.watch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    flex: 1,
  },

  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    zIndex: 1,
  },

  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    flex: 1,
    justifyContent: "flex-end",
  },

  watch: {
    width: 32,
    height: 32,
  },
});
