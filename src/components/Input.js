import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
const Input = ({ children, style, ...props }) => {
  return (
    <TextInput {...props} style={[styles.input, style]}>
      {children}
    </TextInput>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    color: "#135861",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical:10,
    borderRadius: 8,
    borderColor:'#135861',
    borderWidth:5,
  },
});
export default Input;
