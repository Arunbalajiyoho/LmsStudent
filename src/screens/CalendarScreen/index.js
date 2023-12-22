import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Calendar } from "react-native-calendars";
import { COLORS, SIZES } from "../../constants/theme";


const CalendarScreen = () => {
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
      padding: SIZES.padding,
    },
    header: {
      marginBottom: SIZES.padding,
    },
    heading: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      color: COLORS.textColor,
    },
  });

 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Calendar</Text>
      </View>
      <Calendar
        // Customize the calendar as needed
        theme={{
          textSectionTitleColor: COLORS.darkBlue,
          selectedDayBackgroundColor: COLORS.darkBlue,
          selectedDayTextColor: COLORS.white,
          todayTextColor: COLORS.darkBlue,
          dayTextColor: COLORS.textColor,
          textDisabledColor: COLORS.gray,
          arrowColor: COLORS.darkBlue,
        }}
      />
    </SafeAreaView>
  );
};



export default CalendarScreen; 