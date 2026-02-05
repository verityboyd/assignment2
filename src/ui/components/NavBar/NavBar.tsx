import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function NavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.navItem}>
        <Ionicons name="home" size={28} color="#007AFF" />
        <Text style={styles.labelActive}>Home</Text>
      </View>

      <View style={styles.navItem}>
        <Ionicons name="newspaper-outline" size={28} color="gray" />
        <Text style={styles.label}>News Feed</Text>
      </View>

      <View style={styles.navItem}>
        <Ionicons name="heart-circle-outline" size={28} color="gray" />
        <Text style={styles.label}>Menstrual Cycle</Text>
      </View>

      <View style={styles.navItem}>
        <Ionicons name="nutrition-outline" size={28} color="gray" />
        <Text style={styles.label}>Nutrition</Text>
      </View>

      <View style={styles.navItem}>
        <Ionicons name="ellipsis-horizontal-outline" size={28} color="gray" />
        <Text style={styles.label}>More</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  navItem: {
    alignItems: "center",
    gap: 4,
  },
  label: {
    fontSize: 11,
    color: "gray",
  },
  labelActive: {
    fontSize: 11,
    color: "#007AFF",
    fontWeight: "500",
  },
});
