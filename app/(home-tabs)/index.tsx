import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LogIn } from "lucide-react-native";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <Box className="bg-[#232C3F] py-3 px-2">
            <HStack className="justify-between w-full">
              <Text className="font-bold text-typography-0">App Name</Text>
              <HStack space="md" className="items-center">
                <Icon as={LogIn} color="#ffffff" />
                <Text className="font-bold text-typography-0">Log In</Text>
              </HStack>
            </HStack>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
