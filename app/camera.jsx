import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { router, Stack } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import  path  from "path";
import * as FileSystem from "expo-file-system";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function App() {
  const [facing, setFacing] = useState("back");
  const [picture, setPicture] = useState();
  const [permission, requestPermission] = useCameraPermissions();
  const camera = useRef(null);
  // useEffect(() => {
    if (permission && !permission.granted && permission.canAskAgain) {
      return requestPermission();
    }
  // }, [permission]);

  if (!permission?.granted) {
    return <ActivityIndicator />;
  }

  const switchCamera = () => {
    setFacing((cur) => (cur == "back" ? "front" : "back"));
  };
  const takePicture = async () => {
    console.log('takePicture: ');
   const pic = await camera.current.takePictureAsync();
    setPicture(pic);
    console.log('pic : ', pic);
  };
  const saveFile = async (uri) => {
    console.log('saveFile: ');
  const filename = path.parse(uri).base;
  console.log('filename: ', filename);
  
  await FileSystem.copyAsync({
  from: uri,
  to: FileSystem.documentDirectory + filename,
});
// console.log('addres: ', addres);
setPicture(null);

  router.push('/');
};

  if (picture) {
    return (
      <View className="flex-1">
        <Image source={{ uri: picture.uri, width: "100%", height: "100%" }} />
        <SafeAreaView edges={['bottom']} style={{ padding: 10 }} className="absolute bottom-0 border w-full">
          <View className="border">
            <Button color={'red'} title="Save" onPress={() => saveFile(picture.uri)} />
          </View>
        </SafeAreaView>
        <MaterialIcons
          onPress={() => {
            setPicture(null);
          }}
          name="close"
          size={35}
          color="white"
          style={{ position: "absolute", top: 50, left: 20 }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView edges={["bottom"]} className="flex-1">
      <CameraView
        style={{ width: "100%", height: "100%" }}
        facing={facing}
        ref={camera}
      />
        <View className="p-5 border-white border-2 flex-row justify-between items-center absolute w-full bottom-14">
          <TouchableOpacity onPress={switchCamera}>
            <MaterialIcons
              className=" "
              name="flip-camera-android"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture}>
            <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          {/* <MaterialIcons className=" " name="flip-camera-android" size={24} color="red" /> */}
        </View>
      {/* </CameraView> */}
      <AntDesign
        className="absolute top-10 left-1 z-10"
        name="closecircleo"
        size={24}
        color="white"
        onPress={() => router.back()}
      />
    </SafeAreaView>
  );
}
