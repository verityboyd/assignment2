import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Good afternoon, Aurora</Text>

      <View style={styles.headerRow}>
        <View style={styles.leftSection}>
          <Ionicons name="sparkles-sharp" size={18} color="gold" />
          <Text style={styles.text}>Active Intelligence</Text>
          <Text style={styles.betaText}>BETA</Text>
        </View>

        <View style={styles.thumbs}>
          <Feather
            name="thumbs-up"
            size={14}
            color="black"
            style={[styles.icon, styles.thumbsUp]}
          />
          <Feather
            name="thumbs-down"
            size={14}
            color="black"
            style={[styles.icon, styles.thumbsDown]}
          />
        </View>
      </View>

      <Text style={styles.body}>
        Your Body Battery value at wake-up today was 83, higher than your
        baseline of 46 over the last seven days. You&apos;ve had a high Body
        Battery value upon waking up for 7 out of the past 7 days. Keep focusing
        on healthy habits to continue supporting your energy levels.
        <Text style={styles.linkText}> View your 7-day Body Battery</Text>
      </Text>
      <Text style={styles.showLess}>Show less</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E2E5E7",
    width: 412,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 7,
    fontSize: 14,
    color: "333",
  },
  betaText: {
    backgroundColor: "#D1D5D8",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8,
    fontSize: 10,
    fontWeight: "400",
  },
  thumbs: {
    width: 30,
    height: 30,
    position: "relative",
  },
  icon: {
    position: "absolute",
  },
  thumbsUp: {
    top: 0,
    right: 7,
    zIndex: 2,
    backgroundColor: "#E2E5E7",
  },
  thumbsDown: {
    top: 7,
    right: 0,
    zIndex: 1,
  },
  body: {
    fontSize: 13,
    color: "333",
  },
  linkText: {
    color: "#1470CE",
  },
  showLess: {
    color: "#1470CE",
    marginTop: 10,
  },
});
