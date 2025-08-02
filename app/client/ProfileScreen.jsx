import React from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import Colors from "../../constant/Colors";

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    Alert.alert("Confirm Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: async () => {
          try {
            await AsyncStorage.removeItem("token");
            router.replace("/auth/LoginScreen"); // 👈 Redirect to login page
          } catch (err) {
            console.error("Logout failed", err);
          }
        },
        style: "destructive",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Profile</Text>
      <Text style={styles.info}>Name: Akash Gupta</Text>
      <Text style={styles.info}>Email: guptaakash1511@gmail.com</Text>
      <View style={styles.logoutButton}>
        <Button title="Logout" onPress={handleLogout} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60 },
  heading: { fontSize: 22, fontFamily: "outfit-bold", marginBottom: 20, color: Colors.PRIME },
  info: { fontSize: 16, marginBottom: 10, fontFamily: "outfit" },
  logoutButton: { marginTop: 20 },
});
