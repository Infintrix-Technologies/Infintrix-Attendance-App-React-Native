import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TodayActivityCard = () => {
  return (
    <View style={styles.cardBody}>
      <Text style={styles.cardTitle}>Today Activity</Text>

      <View style={styles.activityList}>
        {renderActivityItem("Punch In at", "10.00 AM")}
        {renderActivityItem("Punch Out at", "11.00 AM")}
        {renderActivityItem("Punch In at", "11.15 AM")}
        {renderActivityItem("Punch Out at", "1.30 PM")}
        {renderActivityItem("Punch In at", "2.00 PM")}
        {renderActivityItem("Punch Out at", "7.30 PM")}
      </View>
    </View>
  );
};

const renderActivityItem = (action, time) => (
  <View style={styles.activityItem} key={time}>
    <Text>{action}</Text>
    <Text style={styles.activityTime}>
      <Text style={styles.clockIcon}>⏰</Text> {time}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  cardBody: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    margin: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  activityList: {
    marginTop: 8,
  },
  activityItem: {
    marginBottom: 16,
  },
  activityTime: {
    marginTop: 4,
  },
  clockIcon: {
    fontSize: 14, // Add your desired font size
    color: "blue", // Add your desired color
  },
});

export default TodayActivityCard;
