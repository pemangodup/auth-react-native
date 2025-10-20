import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screen/LoginScreen";
import SignupScreen from "./screen/SignupScreen";
import WelcomeScreen from "./screen/WelcomeScreen";
import { COLORS } from "./constants/style";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { useContext } from "react";
import IconButton from "./components/ui/IconButton";

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

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <NativeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: COLORS.primary100 },
      }}
    >
      <NativeStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </NativeStack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  const authenticated = authCtx.isAuthenticated;
  return (
    <NavigationContainer>
      {authenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
