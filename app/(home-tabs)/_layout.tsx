import { Stack } from "expo-router";

export default function HomeTabsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="search" />
    </Stack>
  );
}
