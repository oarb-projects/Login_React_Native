import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Heading from "../components/Heading";
import Input from "../components/Input";
import FilledButton from "../components/FilledButton";
import Error from "../components/Error";
import  {AuthContext}  from "../../contexts/AuthContext";
const LoginScreen = ({ navigation }) => {
  const { login } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <Heading styles={styles.title}>INTRO TEXT FOR THE PLATFORM.</Heading>
      <Error error={""}></Error>
      <Input
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
      />
      <Input style={styles.input} placeholder={"Password"} secureTextEntry />
      <FilledButton
        title={"Login"}
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate("Registration");
        }}
      />
      {/* <FilledButton
        title={"Login"}
        style={styles.loginButton}
        onPress={login}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    fontFamily: "Roboto-Regular",
    fontWeight: "700",
    // backgroundColor: "#292929",
    paddingHorizontal: 20,
  },
  logo: { fontSize: 60, color: "#085761" },
  title2: { marginBottom: 32 },
  image: { height: 200, width: 200, borderRadius: 100 },
  button: { backgroundColor: "deepskyblue", padding: 7, marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 20 },
  input: {
    marginVertical: 20,
  },
  loginButton: {
    marginVertical: 32,
  },
});

export default LoginScreen;
