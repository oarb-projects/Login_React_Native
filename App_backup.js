import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
    // <LoginScreen/>
    // <View style={styles.container}>
    //   <Text style={styles.title}>Hello world!</Text>
    //   <Image
    //     source={{ uri: "https://picsum.photos/200/200" }}
    //     style={styles.image}
    //   />
    //   <Image source={image} style={styles.image} />
    //   <TouchableOpacity
    //     style={styles.button}
    //     onPress={() => console.log("Hello world")}
    //   >
    //     <Text style={styles.butonText}>Press Me</Text>
    //   </TouchableOpacity>
    //   <Button
    //     color="#0000"
    //     title="press me2"
    //     onPress={() => Alert.alert("hello")}
    //   />
    // </View>

    // const styles = StyleSheet.create({
    //   container: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignContent: "center",
    //     backgroundColor: "#292929",
    //   },
    //   title: { fontSize: 30, color: "#fff" },
    //   image: { height: 200, width: 200, borderRadius: 100 },
    //   button: { backgroundColor: "deepskyblue", padding: 7, marginTop: 10 },
    //   buttonText: { color: "#fff", fontSize: 20 },
    // });