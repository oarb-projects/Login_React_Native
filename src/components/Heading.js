import React from "react";
import { Text, View, StyleSheet } from "react-native";
const Heading = ({ children, style, ...props }) => {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: { fontSize: 32, color: "#085761", textAlign: "center" },
});
export default Heading;
