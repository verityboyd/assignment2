import { Image, StyleSheet, Text, View } from "react-native";

export default function BodyBattery() {
  return (
    <View>
      <View>
        <Text style={styles.title}>In Focus</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.heading}>
          <Image
            style={styles.batteryIcon}
            source={require("../../../assets/images/batteryicon.png")}
          />
          <Text style={styles.subtitle}>Body Battery</Text>

          <View>
            <Text style={styles.mainScore}>51</Text>
          </View>

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
  subtitle: {
    marginTop: 15,
    marginLeft: 5,
    fontSize: 15,
  },
  mainScore: {
    fontSize: 35,
  },
  charged: {
    flexDirection: "column",
    justifyContent: "center",
  },
  scores: {
    marginTop: 50,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },
  scoresNum: {
    fontSize: 20,
  },
  scoresText: {
    fontSize: 15,
    color: "#ABABAB",
  },
  heading: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  card: {
    backgroundColor: "#FFFFFF",
    width: 395,
    height: 355,
    borderRadius: 15,
    padding: 10,
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
  graph: {
    marginTop: 15,
    height: 200,
    width: 385,
  },
});
