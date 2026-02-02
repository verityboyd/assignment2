import { Image, StyleSheet, Text, View } from "react-native";

export default function BodyBattery() {
  return (
    <View>
      <View>
        <Text style={styles.title}>In Focus</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.batteryIcon}
          source={require("../../../assets/images/batteryicon.png")}
        />
        <Text>Body Battery</Text>
        <Text style={styles.batteryScore}>51</Text>
        <Text>+63</Text>
        <Text>Charged</Text>
        <Text>-32</Text>
        <Text>Drained</Text>
        <Image source={require("../../../assets/images/graph.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    width: 350,
    height: 250,
    borderRadius: 20,
    padding: 10,
    gap: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    marginBottom: 8,
  },
  batteryIcon: {
    width: 45,
    height: 45,
  },
  batteryScore: {
    fontSize: 30,
  },
  chargedScore: {
    fontSize: 20,
  },
  drainedScore: {
    fontSize: 20,
  },
});
