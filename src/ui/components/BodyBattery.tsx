import { Image, StyleSheet, Text, View } from "react-native";

export default function BodyBattery() {
  return (
    <View>
      <View>
        <Text style={styles.title}>In Focus</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Image
            style={styles.batteryIcon}
            source={require("../../../assets/images/batteryicon.png")}
          />
          <Text style={styles.subtitle}>Body Battery</Text>
        </View>

        <View style={styles.subheaderRow}>
          <Text style={styles.mainScore}>51</Text>

          <View style={styles.scores}>
            <View style={styles.charged}>
              <Text style={styles.scoresNum}>+63</Text>
              <Text style={styles.scoresText}>Charged</Text>
            </View>

            <View style={styles.charged}>
              <Text style={styles.scoresNum}>-32</Text>
              <Text style={styles.scoresText}>Drained</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.graph}
          source={require("../../../assets/images/graph.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#FFFFFF",
    width: 395,
    height: 350,
    borderRadius: 15,
    padding: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  batteryIcon: {
    width: 45,
    height: 45,
  },
  subtitle: {
    marginTop: 15,
    marginLeft: 5,
    fontSize: 15,
  },
  subheaderRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  mainScore: {
    fontSize: 35,
    padding: 10,
  },
  scores: {
    flexDirection: "row",
    marginLeft: 120,
    marginTop: 15,
    gap: 40,
  },
  charged: {
    alignItems: "center",
  },
  scoresNum: {
    fontSize: 20,
  },
  scoresText: {
    fontSize: 15,
    color: "#ABABAB",
  },
  graph: {
    marginTop: 20,
    height: 200,
    width: 385,
  },
});
