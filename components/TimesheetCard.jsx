import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TimesheetCard = () => {
  return (
    <View style={styles.cardBody}>
      <Text style={styles.cardTitle}>
        Timesheet <Text style={styles.textMuted}>11 Mar 2019</Text>
      </Text>

      <View style={styles.punchDet}>
        <Text style={styles.punchTitle}>Punch In at</Text>
        <Text>Wed, 11th Mar 2019 10.00 AM</Text>
      </View>

      <View style={styles.punchInfo}>
        <View style={styles.punchHours}>
          <Text style={styles.hoursText}>3.45 hrs</Text>
        </View>
      </View>

      <View style={styles.punchBtnSection}>
        <TouchableOpacity
          style={styles.punchBtn}
          onPress={() => console.log("Punch Out")}
        >
          <Text style={styles.punchBtnText}>Punch Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statistics}>
        <View style={styles.row}>
          <View style={styles.statsBox}>
            <Text>Break</Text>
            <Text style={styles.statsValue}>1.21 hrs</Text>
          </View>

          <View style={styles.statsBox}>
            <Text>Overtime</Text>
            <Text style={styles.statsValue}>3 hrs</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

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
  textMuted: {
    color: "#999",
  },
  punchDet: {
    marginTop: 8,
  },
  punchTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  punchInfo: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  punchHours: {
    backgroundColor: "#e0e0e0",
    padding: 8,
    borderRadius: 4,
  },
  hoursText: {
    fontWeight: "bold",
  },
  punchBtnSection: {
    marginTop: 16,
  },
  punchBtn: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 4,
  },
  punchBtnText: {
    color: "#fff",
    textAlign: "center",
  },
  statistics: {
    marginTop: 16,
  },
  row: {
    flexDirection: "row",
  },
  statsBox: {
    flex: 1,
    padding: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
  },
  statsValue: {
    fontWeight: "bold",
    marginTop: 8,
  },
});

export default TimesheetCard;
