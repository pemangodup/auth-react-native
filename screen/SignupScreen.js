import { useState } from "react";

import { createUser } from "../util/http";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SighnupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert("Authentication failed!", `Could not create user. ${error}`);
    }

    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user....." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SighnupScreen;
