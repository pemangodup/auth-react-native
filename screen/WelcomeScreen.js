import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { welcome } from "../util/http";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState();

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    async function fetchData() {
      const getData = await welcome(token);
      setFetchedMessage(getData.data);
    }
    fetchData();
  }, [token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
