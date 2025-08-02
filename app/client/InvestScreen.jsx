// app/client/InvestScreen.jsx

import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Colors from "../../constant/Colors";

const plans = [
  { id: "1", name: "Growth Plan", rate: "12%", duration: "6 months" },
  { id: "2", name: "Secure Plan", rate: "9%", duration: "12 months" },
  { id: "3", name: "Aggressive Plan", rate: "15%", duration: "3 months" },
];

export default function InvestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Available Plans</Text>
      <FlatList
        data={plans}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.details}>Interest: {item.rate}</Text>
            <Text style={styles.details}>Duration: {item.duration}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60 },
  heading: { fontSize: 22, fontFamily: "outfit-bold", marginBottom: 20, color: Colors.PRIME },
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f4f6fc",
    marginBottom: 15,
  },
  title: { fontSize: 18, fontFamily: "outfit-bold" },
  details: { marginTop: 5, fontFamily: "outfit" },
});
