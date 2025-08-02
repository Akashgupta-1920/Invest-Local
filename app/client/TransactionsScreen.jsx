// app/client/TransactionsScreen.jsx

import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Colors from "../../constant/Colors";

const transactions = [
  { id: "t1", title: "Investment Profit", amount: 2500, date: "2025-08-01" },
  { id: "t2", title: "Withdrawal", amount: -1000, date: "2025-07-25" },
];

export default function TransactionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={{ color: item.amount > 0 ? "green" : "red" }}>
              ₹ {item.amount}
            </Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60 },
  heading: { fontSize: 22, fontFamily: "outfit-bold", marginBottom: 20, color: Colors.PRIME },
  transaction: {
    padding: 15,
    backgroundColor: "#f4f6fc",
    borderRadius: 10,
    marginBottom: 12,
  },
  title: { fontFamily: "outfit-bold", fontSize: 16 },
  date: { fontSize: 12, color: "#888", marginTop: 5 },
});
