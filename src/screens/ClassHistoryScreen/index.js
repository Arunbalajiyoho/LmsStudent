import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES, COLORS } from "../../constants/theme";
import { useStateContext } from "../../context/StateContext/StateContext";
import Colors from "../../constants/Colors";

const ClassHistoryScreen = () => {

  const classHistoryData = [
    {
      courseName: "Introduction to Computer Science",
      instructor: "John Doe",
      status: "Completed",
      grade: "A",
    },
    {
      courseName: "Web Development Basics",
      instructor: "Jane Smith",
      status: "Completed",
      grade: "B+",
    },
    // Add more class history items
  ];

  const { colors, isDarkMode } = useStateContext();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? Colors.greenAlpha : colors.background,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius * 2,
    },
    card: {
      backgroundColor: colors.cardBackground,
      borderRadius: SIZES.radius,
      padding: SIZES.padding,
      marginBottom: SIZES.radius,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
      elevation: 2,
    },
    cardText: {
      fontSize: SIZES.body3,
      color: colors.textColor,
      padding: SIZES.base,
    },
    title: {
      fontWeight: "bold",
      marginBottom: SIZES.base,
      fontSize: SIZES.h2,
      color: colors.textColor,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Class History</Text>

      <ScrollView>
        {classHistoryData.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.cardText, { fontWeight: "bold" }]}>{item.courseName}</Text>
              <Text style={styles.cardText}>Instructor: {item.instructor}</Text>
              <Text style={styles.cardText}>Status: {item.status}</Text>
              <Text style={styles.cardText}>Grade: {item.grade}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClassHistoryScreen;