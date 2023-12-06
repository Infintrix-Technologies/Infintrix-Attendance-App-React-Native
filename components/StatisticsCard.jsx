import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StatisticsCard = () => {
  return (
    <View style={styles.cardBody}>
      <Text style={styles.cardTitle}>Statistics</Text>

      <View style={styles.statsList}>
        <View style={styles.statsInfo}>
          <Text>
            Today{" "}
            <Text style={styles.strongText}>
              3.45 <Text style={styles.smallText}>/ 8 hrs</Text>
            </Text>
          </Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: "31%" }]} />
          </View>
        </View>

        <View style={styles.statsInfo}>
          <Text>
            This Week{" "}
            <Text style={styles.strongText}>
              28 <Text style={styles.smallText}>/ 40 hrs</Text>
            </Text>
          </Text>
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBar,
                { width: "31%", backgroundColor: "#FFD700" },
              ]}
            />
          </View>
        </View>

        <View style={styles.statsInfo}>
          <Text>
            This Month{" "}
            <Text style={styles.strongText}>
              90 <Text style={styles.smallText}>/ 160 hrs</Text>
            </Text>
          </Text>
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBar,
                { width: "62%", backgroundColor: "#008000" },
              ]}
            />
          </View>
        </View>

        <View style={styles.statsInfo}>
          <Text>
            Remaining{" "}
            <Text style={styles.strongText}>
              90 <Text style={styles.smallText}>/ 160 hrs</Text>
            </Text>
          </Text>
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBar,
                { width: "62%", backgroundColor: "#FF0000" },
              ]}
            />
          </View>
        </View>

        <View style={styles.statsInfo}>
          <Text>
            Overtime <Text style={styles.strongText}>4</Text>
          </Text>
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBar,
                { width: "22%", backgroundColor: "#0000FF" },
              ]}
            />
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
  statsList: {
    marginTop: 8,
  },
  statsInfo: {
    marginBottom: 16,
  },
  strongText: {
    fontWeight: "bold",
  },
  smallText: {
    fontSize: 12,
  },
  progressBarContainer: {
    marginTop: 8,
    height: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
  },
  progressBar: {
    height: "100%",
    borderRadius: 4,
  },
});

export default StatisticsCard;
