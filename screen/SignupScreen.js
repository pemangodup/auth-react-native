import { useState } from "react";

import { createUser } from "../util/http";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SighnupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    <LoadingOverlay message="Creating user....." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SighnupScreen;
