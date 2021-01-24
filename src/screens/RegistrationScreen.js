import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Heading from "../components/Heading";
import Input from "../components/Input";
import FilledButton from "../components/FilledButton";
import Error from "../components/Error";
import  {AuthContext}  from "../../contexts/AuthContext";

const RegistrationScreen = ({ navigation }) => {
  const { register } = React.useContext(AuthContext);
  const [email,setEmail]=React.useState('')
  const [password,setPassword]=React.useState('')
  return (
    <View style={styles.container}>
      <Heading styles={styles.title}>Registration</Heading>
      <Error error={""}></Error>
      <Input
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
        value={email}
        onChangeText={setEmail}
      />
      <Input style={styles.input} placeholder={"Password"} secureTextEntry 
       value={password}
       onChangeText={setPassword}/>
      <FilledButton
        title={"Register"}
        style={styles.loginButton}
        onPress={() => {
          register(email,password);
        }}
      />
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
  title: { fontSize: 60, color: "#085761" },
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

export default RegistrationScreen;
