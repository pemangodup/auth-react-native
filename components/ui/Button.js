import { StyleSheet, Text, Pressable, View } from "react-native";

import { COLORS } from "../../constants/style";

function Button({ children }) {
  return (
    <Pressable style={styles.button}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    backgroundColor: COLORS.primary500,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
