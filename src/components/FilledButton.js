import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
const FilledButton = ({ title, style, onPress }) => {
  return (
    //   this overrides style from the outside
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#135861",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    padding: 20,
    borderRadius: 8,
    fontWeight: "500",
    fontSize: 16,
  },
});
export default FilledButton;
