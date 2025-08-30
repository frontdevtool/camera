import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="camera" options={{ title: "camera" }} />
        {/* <Stack.Screen name="[name]" options={{ title: "image Screen" }} /> */}
      </Stack>
    </>
  );
}
