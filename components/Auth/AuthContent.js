import { View, StyleSheet } from "react-native";

import { COLORS } from "../../constants/style";
import Input from "../../components/Auth/Input";
import Button from "../ui/Button";

function AuthContent() {
  return (
    <View style={styles.container}>
      <Input label="Email" />
      <Input label="Password" />
      <View style={styles.buttons}>
        <Button>Login</Button>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    marginHorizontal: 32,
    borderRadius: 8,
    padding: 16,
    backgroundColor: COLORS.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 12,
  },
});
