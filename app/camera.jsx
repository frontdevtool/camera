import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    
  if(permission &&!permission.granted && permission.canAskAgain){
    return requestPermission()
  }
 
  }, [permission])
  
if(!permission?.granted){
    return <ActivityIndicator/>
  }

  return (
    <View style={styles.container}>
    <Text>camera</Text>
    <Stack.Screen options={{headerShown : true}}/>
    <View className='flex-1 justify-center items-center'>

    <CameraView style={{width:'90%' ,height : '50%'}}/>
    </View>

 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 64,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 64,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
