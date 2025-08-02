// app/client/WithdrawScreen.jsx

import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import Colors from "../../constant/Colors";

export default function WithdrawScreen() {
  const [amount, setAmount] = useState("");

  const handleWithdraw = () => {
    Alert.alert("Request Submitted", `You requested to withdraw ₹${amount}`);
    setAmount("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Withdraw Funds</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="Enter amount"
        style={styles.input}
      />
      <Button title="Submit Request" onPress={handleWithdraw} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60 },
  heading: { fontSize: 22, fontFamily: "outfit-bold", marginBottom: 20, color: Colors.PRIME },
  input: {
    borderWidth: 1,
    borderColor: Colors.PRIME,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontFamily: "outfit",
  },
});
