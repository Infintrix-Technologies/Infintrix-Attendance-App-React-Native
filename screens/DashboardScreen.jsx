import React, { useState } from "react";
import { View, ScrollView, Button, StyleSheet } from "react-native";
import TimesheetCard from "../components/TimesheetCard";
import StatisticsCard from "../components/StatisticsCard";
import TodayActivityCard from "../components/TodayActivityCard";

const DashboardScreen = ({ navigation }) => {
  const [checkinTime, setCheckinTime] = useState(null);
  const [checkoutTime, setCheckoutTime] = useState(null);

  const handleCheckin = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    setCheckinTime(formattedTime);
  };

  const handleCheckout = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    setCheckoutTime(formattedTime);
  };
  const handleLogout = () => {
    // Add your logout logic here
    // For simplicity, let's navigate back to the Login screen
    navigation.replace("Login");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button
        title="Logout"
        onPress={handleLogout}
        style={styles.logoutButton}
      />
      {/* <View style={styles.buttonsContainer}> */}
      {/* <Button title="Check-in" onPress={handleCheckin} />
        <Button title="Check-out" onPress={handleCheckout} />
      </View>

      <Text style={styles.sectionTitle}>Attendance for the Month</Text>
      <Text>{`Check-in Time: ${checkinTime || "Not checked in yet"}`}</Text>
      <Text>{`Check-out Time: ${checkoutTime || "Not checked out yet"}`}</Text> */}
      {/* Add additional month-wise attendance information here */}
      <TimesheetCard />
      <TodayActivityCard />
      <StatisticsCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 16,
  },
});

export default DashboardScreen;
