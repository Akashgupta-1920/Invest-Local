import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { loginUser } from "../../services/api";
import Colors from "../../constant/Colors";
import jwt_decode from "jwt-decode";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { token } = await loginUser({ email, password });
      const payload = jwt_decode(token);
      const role = payload.role;

      if (role === "admin") router.replace("/admin/Dashboard");
      else router.replace("/client/Dashboard");
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Login Failed", error?.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/wave.png")}
            style={styles.waveImage}
            resizeMode="cover"
          />

          <Image
            source={require("../../assets/images/signin.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.formContainer}>
            <Text style={styles.heading}>Welcome Back</Text>
            <Text style={styles.subHeading}>Login to your account</Text>

            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />

            <View style={styles.buttonContainer}>
              <Button title="Login" onPress={handleLogin} color={Colors.PRIME} />
            </View>

            <TouchableOpacity onPress={() => router.push("/auth/SignupScreen")}>
              <Text style={styles.signupText}>
                Don't have an account? <Text style={styles.link}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  waveImage: {
    width: "100%",
    height: 200,
  },
  logo: {
    width: 180,
    height: 180,
    marginTop: -40,
    marginBottom:40,
  },
  formContainer: {
    backgroundColor: Colors.GRAY,
    borderRadius: 24,
    padding: 24,
    width: "90%",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#222",
  },
  subHeading: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.PRIME,
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 10,
    marginBottom: 16,
  },
  signupText: {
    marginTop: 10,
    color: "#333",
  },
  link: {
    color: Colors.PRIME,
    fontWeight: "600",
  },
});
