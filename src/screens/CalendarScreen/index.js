import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Agenda, Calendar } from "react-native-calendars";
import { COLORS, SIZES } from "../../constants/theme";

 const CalendarScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(""); // State to keep track of selected date


  const styles = StyleSheet.create({

    container: {

      flex: 1,
      backgroundColor: COLORS.background,
      paddingHorizontal: SIZES.padding,
      paddingVertical: SIZES.radius,
      justifyContent:"center",

    },
    header: {
       
      marginBottom: SIZES.padding,

    },
    heading: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      color: COLORS.textColor,
    },
    subheading: {
      fontSize: SIZES.body3,
      color: COLORS.gray,
    },

    agenda: {
      marginTop: SIZES.radius,
    },

    dayContainer: {
      backgroundColor: COLORS.cardBackground,
      padding: SIZES.radius,
      borderRadius: SIZES.radius,
      marginBottom: SIZES.base,
    },
    dayText: {
      fontSize: SIZES.body2,
      color: COLORS.textColor,
    },
  });

  // Placeholder data for demonstration
  const events = {
    "2023-12-20": [{ name: "Assignment Due", time: "09:00 AM", description: "Submit project report" }],
    "2023-12-25": [{ name: "Holiday", time: "All day", description: "Christmas break" }],
    //   Add more Events 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Academic Calendar</Text>
        <Text style={styles.subheading}>
          Keep track of important academic dates and events
        </Text>
      </View>      
   
      <Calendar                
        theme={{  
          textSectionTitleColor: COLORS.darkBlue,
          selectedDayBackgroundColor: COLORS.darkBlue,
          selectedDayTextColor: COLORS.white,
          todayTextColor: COLORS.darkBlue,
          dayTextColor: COLORS.textColor,
          textDisabledColor: COLORS.gray,
          arrowColor: COLORS.darkBlue,
        }}
        onDayPress={(day)  => setSelectedDate(day.dateString)} 
      />
 
      {selectedDate ? (
        <Agenda
          style={styles.agenda}
          items={events} // Replace with your data source
          selected={selectedDate}
          renderItem={(item) => (
            <TouchableOpacity
              style={styles.dayContainer}
              onPress={() => console.log("Event clicked:", item)}
            >
              <Text style={styles.dayText}>{item.name}</Text>
              <Text style={styles.dayText}>{item.time}</Text>
              <Text style={styles.dayText}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />         
      ) : null}   
           


    </SafeAreaView>
  );
};

export default CalendarScreen;
