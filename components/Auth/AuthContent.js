import { StyleSheet, View } from "react-native";

import AuthForm from "./AuthForm";
import FlatButton from "../ui/FlatButton";
import { COLORS } from "../../constants/style";

function AuthContent({ isLogin }) {
  return (
    <View style={styles.authContent}>
      <AuthForm isLogin />
      <View>
        <FlatButton>Create new user</FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
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
});
