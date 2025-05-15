import { Icon } from "@/components/ui/icon";
import { Tabs } from "expo-router";
import { CircleUserRound, House, LogIn, Search } from "lucide-react-native";

export default function HomeTabsLayout() {
  const isLogin = false;

  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#232C3F" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Icon as={House} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <Icon as={Search} color={color} />,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          href: !isLogin ? "/login" : null,
          tabBarIcon: ({ color }) => <Icon as={LogIn} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          href: isLogin ? "/profile" : null,
          tabBarIcon: ({ color }) => (
            <Icon as={CircleUserRound} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
