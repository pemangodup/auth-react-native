import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screen/LoginScreen";
import SignupScreen from "./screen/SignupScreen";
import { COLORS } from "./constants/style";

const NativeStack = createNativeStackNavigator();

function AuthStack() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: COLORS.primary100 },
      }}
    >
      <NativeStack.Screen name="Login" component={LoginScreen} />
      <NativeStack.Screen name="Signup" component={SignupScreen} />
    </NativeStack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </>
  );
}
