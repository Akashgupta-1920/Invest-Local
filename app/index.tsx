import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import Colors from "../constant/Colors";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      {/* Wave image with overlay title */}
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/wave.png")}
          style={styles.wave}
          resizeMode="cover"
        />
        <Text style={styles.headerTitle}>InvestTolite</Text>
      </View>

      {/* 2D Styled main image */}
      <View style={styles.imageWrapper}>
        <Image
          source={require("../assets/images/image.png")}
          style={styles.mainImage}
          resizeMode="contain"
        />
      </View>

      {/* Bottom content */}
      <View style={styles.bottomSheet}>
        <Text style={styles.title}>Welcome to InvestTolite</Text>
        <Text style={styles.subtitle}>
          InvestTolite helps you send and receive funds securely, monitor investments, and track your profit & loss
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/SignupScreen")}
        >
          <Text style={[styles.buttonText, { color: Colors.PRIME }]}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/auth/LoginScreen")}
          style={styles.buttonOutline}
        >
          <Text style={[styles.buttonText, { color: Colors.WHITE }]}>
            Already have an Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "relative",
    width: "100%",
    height: 300,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  wave: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  headerTitle: {
    fontSize: 30,
    color: Colors.WHITE,
    fontFamily: "outfit-bold",
    marginTop: 70,
    marginRight:180,
    zIndex: 1,
    textShadowColor: "#000",
    textShadowRadius: 3,
  },
  imageWrapper: {
    alignItems: "center",
    marginTop: -140,
    zIndex: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 40,
  },
  mainImage: {
    width: "100%",
    height: 180,
    borderRadius: 20,
  },
  bottomSheet: {
    padding: 25,
    marginTop: 30,
    backgroundColor: Colors.PRIME,
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    gap: 15,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "outfit-bold",
    marginTop: 10,
  },
  subtitle: {
    color: Colors.WHITE,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "outfit",
    marginTop: 12,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonOutline: {
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.WHITE,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "outfit",
  },
});
