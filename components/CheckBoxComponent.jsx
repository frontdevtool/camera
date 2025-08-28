import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Checkbox } from "react-native-paper";

const CheckBoxComponent = ({ disabled, onPress, checked, label }) => {
  return (
    <View style={{ width: 300 }}>
      <Checkbox.Item
        disabled={disabled}
        label={label}
        labelStyle={{ textDecorationLine: checked ? "line-through" : "" }}
        uncheckedColor="red"
        color="green"
        status={checked ? "checked" : "unchecked"}
        onPress={onPress}
      />
    </View>
  );
};

export default CheckBoxComponent;

const styles = StyleSheet.create({});
