import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, Image } from "react-native";
import * as FileSystem from "expo-file-system";

export default function ImagePreview() {
  const { name } = useLocalSearchParams();

  const fullUri = (FileSystem.documentDirectory || '') + (name || '');
  console.log('fullUri: ', fullUri);

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "image Screen"+name }} />
      {/* <Text>{fullUri}</Text> */}

      <Image
        source={{ uri: fullUri }}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
}
