import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LogIn } from "lucide-react";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <Box
            className={`flex flex-row justify-between py-4 px-2 items-center bg-[#232C3F]`}
          >
            <Text className="font-bold text-typography-0">App Name</Text>
            <HStack space="md" className="items-center">
              <Icon as={LogIn} color="#ffffff" />
              <Text className="font-bold text-typography-0">Log In</Text>
            </HStack>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
