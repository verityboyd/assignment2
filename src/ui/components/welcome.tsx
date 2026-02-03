import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Good afternoon, Aurora</Text>
      <View style={styles.container}>
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
            style={[styles.icon, styles.thumbUp]}
          />
          <Feather
            name="thumbs-down"
            size={14}
            color="black"
            style={[styles.icon, styles.thumbDown]}
          />
        </View>
      </View>
      <Text>
        Your Body Battery value at wake-up today was 83, higher than your
        baseline of 46 over the last seven days. You&apos;ve had a high Body
        Battery value upon waking up for 7 out of the past 7 days. Keep focusing
        on healthy habits to continue supporting your energy levels.
        <Text style={{ color: "dodgerblue" }}>
          View your 7-day Body Battery
        </Text>
      </Text>
      <Text style={{ color: "dodgerblue" }}>Show less</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F6F6F6",
    width: 350,
    height: 300,
    padding: 10,
    gap: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  thumbs: {
    width: 30,
    height: 30,
    position: "relative",
  },
  icon: {
    position: "absolute",
  },
  thumbUp: {
    top: 0,
    right: 7,
    zIndex: 2,
    backgroundColor: "#F6F6F6",
  },
  thumbDown: {
    top: 7,
    right: 0,
    zIndex: 1,
  },
  betaText: {
    backgroundColor: "#E3E3E3",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8,
  },
  text: {
    marginRight: 5,
  },
});
