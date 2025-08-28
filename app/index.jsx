import * as React from "react";
import { Pressable, Text, View,StyleSheet} from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import "./global.css";
import { Link } from "expo-router";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import Barcode from "./barcode";
// import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
  
  
  <View className="flex-1 justify-center items-center">
    {/* <Text className="text-3xl"> index</Text> */}

{/* <Link href="/user/image1.png">Image 1</Link>
<Link href="/user/image2.png">Image 2</Link> */}
{/* <Link href="/camera">camera</Link> */}
<Link href="/barcode">Barcode scanner</Link>

  

  </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center", alignItems: "center"
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  }
});

export default index;
