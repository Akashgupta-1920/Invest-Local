import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // ✅ Disable headers on all pages
      }}
    />
  );
}
