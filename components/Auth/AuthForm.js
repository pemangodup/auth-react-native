import { View, StyleSheet } from "react-native";
import { useState } from "react";

import Input from "../../components/Auth/Input";
import Button from "../ui/Button";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  function updateInputHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;

      case "password":
        setEnteredPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      password: enteredPassword,
    });
  }

  return (
    <View>
      <Input
        label="Email Address"
        keyboardType="email-address"
        onUpdateValue={updateInputHandler.bind(this, "email")}
      />
      {!isLogin && (
        <Input label="Confirm Email Address" keyboardType="email-address" />
      )}
      <Input
        label="Password"
        secure
        onUpdateValue={updateInputHandler.bind(this, "password")}
      />
      {!isLogin && <Input label="Confirm Password" secure />}

      <View style={styles.buttons}>
        <Button onPress={submitHandler}>Login</Button>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
