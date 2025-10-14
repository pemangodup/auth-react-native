import { View, StyleSheet } from "react-native";

import Input from "../../components/Auth/Input";
import Button from "../ui/Button";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  return (
    <View>
      <Input label="Email Address" keyboardType="email-address" />
      {!isLogin && (
        <Input label="Confirm Email Address" keyboardType="email-address" />
      )}
      <Input label="Password" secure />
      {!isLogin && <Input label="Confirm Password" secure />}

      <View style={styles.buttons}>
        <Button>Login</Button>
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
