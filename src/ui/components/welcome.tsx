import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Good Afternoon, Aurora</Text>
      <View style={styles.container}>
        <Ionicons name="sparkles-sharp" size={15} color="gold" />
        <Text>Active Intelligence</Text>
        <Text style={styles.beta}>BETA</Text>
        <Feather name="thumbs-down" size={15} color="black" />
        <Feather name="thumbs-up" size={15} color="black" />
      </View>
      <Text>
        Your Body Battery value at wake-up today was 83, higher than your
        baseline of 46 over the last seven days. You've had a high Body Battery
        value upon waking up for 7 out of the past 7 days. Keep focusing on
        healthy habits to continue supporting your energy levels.
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
    backgroundColor: "lightgrey",
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
    flexWrap: "wrap",
  },
  beta: {
    backgroundColor: "darkgray",
  },
});
