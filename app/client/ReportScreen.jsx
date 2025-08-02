import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constant/Colors';

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Download Report</Text>
      <Text>Download your full P&L report in PDF format.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  heading: { fontSize: 22, fontWeight: 'bold', color: Colors.PRIME },
});
