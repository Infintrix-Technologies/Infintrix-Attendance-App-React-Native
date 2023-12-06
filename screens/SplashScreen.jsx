import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 2000); // 2 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon.png")} style={styles.logo} />
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100, // Adjust the width of the logo as needed
    height: 100, // Adjust the height of the logo as needed
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SplashScreen;
