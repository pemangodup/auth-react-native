import { StyleSheet, View, Text, TextInput } from "react-native";

import { COLORS } from "../../constants/style";

function Input({ label }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: "white",
    marginBottom: 4,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: COLORS.primary100,
    borderRadius: 4,
    fontSize: 16,
  },
});
