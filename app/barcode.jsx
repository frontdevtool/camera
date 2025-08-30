import { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { ActivityIndicator } from "react-native-paper";

export default function Barcode() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState(null);

  if (!permission) return <ActivityIndicator />;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text className="bg-red-300">نحتاج إذنك لاستخدام الكاميرا</Text>
        <Button title="امنح الإذن" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* معاينة الكاميرا */}
      <CameraView
      
        style={styles.camera}
        facing="back"
        onBarcodeScanned={(barcode) => {
          setScannedData(barcode.data); // نحفظ النص المقروء
        //   console.log('data: ', data);
        }}
        barcodeScannerSettings={{
          // نحدد أنواع الباركود المدعومة (اختياري)
          barcodeTypes: ["qr", "ean13", "code128"],
          
        }}
        
      />

      {/* عرض النتيجة */}
      {scannedData && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>📦 البيانات: {scannedData}</Text>
          <Button title="مسح جديد" onPress={() => setScannedData(null)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  resultBox: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  resultText: { fontSize: 16, textAlign: "center" },
});
