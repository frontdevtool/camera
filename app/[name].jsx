import { router, Stack, useLocalSearchParams } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";
import * as FileSystem from "expo-file-system";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as MediaLibrary from 'expo-media-library';
export default function ImagePreview() {
   const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const { name } = useLocalSearchParams();

  const fullUri = (FileSystem.documentDirectory || "") + (name || "");

  const onDelete = async () => {
    await FileSystem.deleteAsync(fullUri);

    router.back();
  };

  const onSave = async () => {
  if (permissionResponse.status !== 'granted') {
    await requestPermission();
  }
  const asset = await MediaLibrary.createAssetAsync(fullUri);
  console.log('asset: ', asset);
  router.back();
};

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: "Image",
          headerRight: () => (
            <View style={{ gap: 10, flexDirection: "row" }}>
              <Pressable onPress={onDelete}>
                <MaterialIcons name="delete" size={26} color="crimson" />
              </Pressable>
              <MaterialIcons
          onPress={onSave}
          name="save"
          size={26}
          color="dimgray"
        />
            </View>
          ),
        }}
      />
      {/* <Text>{fullUri}</Text> */}

      <Image
        source={{ uri: fullUri }}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
}
