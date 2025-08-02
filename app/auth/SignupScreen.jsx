import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { signupUser } from "../../services/api";
import { useRouter } from "expo-router";
import Colors from "../../constant/Colors";

export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const adminSecret = "admin@1234"; // 🛡️ secret password to become admin
    const role = password === adminSecret ? "admin" : "client";

    try {
      const res = await signupUser({ name, email, password, role });
      Alert.alert("Success", "Signup complete.");

      // ✅ Redirect based on role
      if (role === "admin") {
        router.replace("/admin/Dashboard");
      } else {
        router.replace("/client/home");
      }
    } catch (error) {
      console.error("Signup error:", error?.response?.data);
      Alert.alert("Signup Error", error?.response?.data?.message || "Something went wrong");
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
            source={require("../../assets/images/signup.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.formContainer}>
            <Text style={styles.heading}>Create Account</Text>
            <Text style={styles.subHeading}>Sign up to get started</Text>

            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
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
              <Button title="Sign Up" onPress={handleSignup} color={Colors.PRIME} />
            </View>

            <TouchableOpacity onPress={() => router.push("/auth/LoginScreen")}>
              <Text style={styles.loginText}>
                Already have an account? <Text style={styles.link}>Login</Text>
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
    width: 240,
    height: 240,
    marginTop: -40,
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
  loginText: {
    marginTop: 10,
    color: "#333",
  },
  link: {
    color: Colors.PRIME,
    fontWeight: "600",
  },
});
