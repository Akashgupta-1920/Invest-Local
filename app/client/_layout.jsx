import { Stack, useRouter, usePathname } from "expo-router";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constant/Colors";
import React, { useRef, useEffect } from "react";


export default function ClientLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const scrollRef = useRef();

  const windowWidth = Dimensions.get("window").width;

  const tabs = [
    { name: "InvestScreen", icon: "bar-chart-outline", label: "Invest" },
    { name: "TransactionsScreen", icon: "document-text-outline", label: "Transactions" },
    { name: "home", icon: "home-outline", label: "Home", center: true },
    { name: "WithdrawScreen", icon: "wallet-outline", label: "Withdraw" },
    { name: "ProfileScreen", icon: "person-outline", label: "Profile" },
    { name: "ReportScreen", icon: "person-outline", label: "Report" },

  ];

  useEffect(() => {
    const index = tabs.findIndex((tab) => pathname === `/client/${tab.name}`);
    if (index !== -1 && scrollRef.current) {
      const tabWidth = 80; // approximate width of each tab
      const centerX = (windowWidth - tabWidth) / 2;
      scrollRef.current.scrollTo({
        x: index * tabWidth - centerX,
        animated: true,
      });
    }
  }, [pathname]);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />

      <View style={styles.tabBar}>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            paddingHorizontal: 10,
            minWidth: windowWidth + 60,
            height: 90,
          }}
        >

          {tabs.map((tab, index) => {
            const isFocused = pathname === `/client/${tab.name}`;
            const isCenter = tab.center;

            return (
              <TouchableOpacity
                key={index}
                onPress={() => router.push(`/client/${tab.name}`)}
                style={[
                  styles.tabItem,
                  isCenter && styles.centerTabItem,
                ]}
              >
                <View
                  style={[
                    styles.iconWrapper,
                    isFocused && styles.activeIconWrapper,
                    isCenter && styles.floatingHomeIcon,
                  ]}
                >
                  <Ionicons
                    name={tab.icon}
                    size={isFocused ? 30 : 24} // ⬅️ Increase size when active
                    color={isFocused ? Colors.PRIME : "#999"}
                    style={{ transition: "all 0.3s" }} // works only on web; optional
                  />

                </View>
                {!isCenter && (
                  <Text
                    style={[
                      styles.label,
                      {
                        color: isFocused ? Colors.PRIME : "#aaa",
                        fontWeight: isFocused ? "bold" : "normal",
                        fontSize: isFocused ? 14 : 12,
                      },
                    ]}
                  >
                    {tab.label}
                  </Text>

                )}
                {isCenter && isFocused && (
                  <Text style={styles.homeLabel}>{tab.label}</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingBottom: Platform.OS === "ios" ? 25 : 10,
    elevation: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  centerTabItem: {
    marginHorizontal: 30,
    marginTop: -25,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    justifyContent: "center",
  },
  activeIconWrapper: {
    backgroundColor: "#fff",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  floatingHomeIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#fff",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: "outfit",
  },
  homeLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.PRIME,
    marginTop: 5,
    fontFamily: "outfit-bold",
  },
});
