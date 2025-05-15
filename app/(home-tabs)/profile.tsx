import { Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button, ButtonText } from "@/components/ui/button";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Profile</Text>
        <Button size="md">
          <Link href="/" withAnchor>
            <ButtonText>Back to Home</ButtonText>
          </Link>
        </Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
