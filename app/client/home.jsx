// app/client/HomeScreen.jsx

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constant/Colors";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/images/wave.png")}
        style={styles.wave}
        resizeMode="cover"
      />
      <View style={{ padding: 20, marginTop: -20 }}>
        <Text style={styles.welcome}>Welcome back,</Text>
        <Text style={styles.userName}>Akash 👋</Text>
      </View>
      <View style={styles.headerContainer}>


        <View style={styles.cardPrimary}>
          <Text style={styles.cardTitle}>Total Profit / Loss</Text>
          <Text style={styles.cardAmount}>₹ 25,500</Text>
        </View>

        <Text style={styles.sectionTitle}>Summary</Text>

        <View style={styles.grid}>
          {[
            { label: "Today", amount: 4500 },
            { label: "This Week", amount: -2200 },
            { label: "This Month", amount: 15800 },
            { label: "This Year", amount: 102300 },
          ].map((item, index) => (
            <View key={index} style={styles.cardMini}>
              <Text style={styles.miniLabel}>{item.label}</Text>
              <Text
                style={[
                  styles.miniAmount,
                  { color: item.amount >= 0 ? "#2ecc71" : "#e74c3c" },
                ]}
              >
                ₹ {item.amount}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.downloadButton}>
          <Ionicons
            name="cloud-download-outline"
            size={22}
            color={Colors.WHITE}
          />
          <Text style={styles.downloadText}>Download Full Report</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  headerContainer: {
    marginBottom: 20,
    padding: 20
  },
  wave: {
    width: "100%",
    height: 180,
    borderRadius: 0,
    marginBottom: 15,
  },
  welcome: {
    fontSize: 18,
    fontFamily: "outfit",
    color: "#555",
  },
  userName: {
    fontSize: 26,
    fontFamily: "outfit-bold",
    color: Colors.PRIME,
  },
  cardPrimary: {
    backgroundColor: Colors.PRIME,
    borderRadius: 15,
    padding: 25,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  cardTitle: {
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: "outfit",
  },
  cardAmount: {
    color: Colors.WHITE,
    fontSize: 36,
    fontFamily: "outfit-bold",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "outfit-bold",
    color: Colors.PRIME,
    marginBottom: 15,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardMini: {
    width: "48%",
    backgroundColor: "#f4f6fc",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  miniLabel: {
    fontSize: 14,
    fontFamily: "outfit",
    color: "#333",
  },
  miniAmount: {
    fontSize: 22,
    fontFamily: "outfit-bold",
    marginTop: 4,
  },
  downloadButton: {
    backgroundColor: Colors.PRIME,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 16,
    marginTop: 30,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  downloadText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: "outfit-bold",
  },
});
