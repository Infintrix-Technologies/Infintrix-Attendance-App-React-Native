import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // setTimeout(() => {
    // After the fake delay, navigate to the Dashboard screen
    navigation.replace("Dashboard");
    // }, 2000); // 2 seconds delay (adjust as needed)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Login" onPress={handleLogin} />

      {/* Add a "Forgot Password" or "Sign Up" link if needed */}
      {/* <Text style={styles.forgotPassword}>Forgot Password?</Text> */}
      {/* <Text style={styles.signUp} onPress={() => navigation.navigate("SignUp")}>
        Sign Up
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  forgotPassword: {
    color: "blue",
    marginTop: 8,
  },
  signUp: {
    color: "green",
    marginTop: 16,
  },
});

export default LoginScreen;
