import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon, TextInput } from "react-native-paper";

const InputComponent = ({ onChangeText, value, label }) => {
  return (
    <View style={{ justifyContent: "center" }}>
      <TextInput
      // right={<TextInput.Icon icon="eye" />}
      // left={()=><Icon icon="eye" />}
        style={{ width: 300 }}
        label={label}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({});
