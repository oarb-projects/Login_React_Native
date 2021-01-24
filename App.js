import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStackNavigator from "./src/navigators/AuthStackNavigator";
import { AuthContext } from "./contexts/AuthContext";
import image from "./assets/diamond_red.jpg";
const apiBase = "https://itsonmeet-backend.herokuapp.com/";
const RootStack = createStackNavigator();
const App = () => {
  const auth = React.useMemo(
    () => ({
      login: () => {
        console.log("login");
      },
      logout: () => {
        console.log("logout");
      },
      register: (email, password) => {
        console.log("register", email, password);
        fetch(apiBase + "signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: email,email: email, password: password }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            // this.user = data;
            // return fetch(apiBase)
            // .then(response => response.json())
            // .then(data => {
            //   this.user = data.userInfo;
            // })
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen name={"AuthStack"} component={AuthStackNavigator} />
          {/* <RootStack.Screen name={"HomeStack"} component={HomeNavigator} /> */}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
