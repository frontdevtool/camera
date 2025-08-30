import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import * as FileSystem from "expo-file-system";

import "./global.css";
import { Link } from "expo-router";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import Barcode from "./barcode";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    if (!FileSystem.documentDirectory) {
      return;
    }
    const files = await FileSystem.readDirectoryAsync(
      FileSystem.documentDirectory
    );
    console.log("files: ", files);
    console.log("files length: ", files.length);
    // setImages(files)
    setImages(
      files.map((file) => ({
        name: file,
        uri: FileSystem.documentDirectory + file,
      }))
    );

  };
  console.log("==> out", JSON.stringify(images, null, 2));

  return (
    <View className=" ">
      <FlatList
      scrollEnabled
  data={images}
  numColumns={3}
  contentContainerStyle={{ gap: 1 }}
  columnWrapperStyle={{ gap: 1 }}
  refreshing={false}
  onRefresh={loadFiles}
  renderItem={({ item }) => (
    <Link href={`/${item.name}`} asChild className="border  ">
      <Pressable
        style={{
          flex: 1,
          maxWidth: '33.3%',
        }}
      >
        <Image source={{ uri: item.uri }} style={styles.image} />
      </Pressable>
    </Link>
  )}
/>
      <Link href="/camera">camera</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  image: {
  aspectRatio: 3 / 4,
  borderRadius: 1,
  
},
});

export default index;
