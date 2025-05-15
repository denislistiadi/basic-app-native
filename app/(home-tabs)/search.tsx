import { Button, ButtonText } from "@/components/ui/button";

import { Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Search = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Search</Text>
        <Button size="md">
          <Link href="/" withAnchor>
            <ButtonText>Back to Home</ButtonText>
          </Link>
        </Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default Search;
