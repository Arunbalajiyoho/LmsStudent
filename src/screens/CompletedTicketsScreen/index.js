import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/theme";
import { useStateContext } from "../../context/StateContext/StateContext";

const CompletedTicketsScreen = () => {

  const { colors } = useStateContext();

  const completedTickets = [
    { id: 1, title: "Assignment 1", completionDate: "2023-01-15" },
    { id: 2, title: "Quiz 1", completionDate: "2023-02-01" },
    { id: 3, title: "Project Submission", completionDate: "2023-02-10" },
    // Add more completed tickets as needed
  ];



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    scrollView: {
      flex: 1,
    },
    ticketContainer: {
      padding: 16,
      marginBottom: 16,
      backgroundColor: "#D3F3ED", // Use a different color for completed tickets
      borderRadius: 8,
    },
    ticketTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
    },
    completionDate: {
      fontSize: 16,
      color: "#555",
    },
   
  });

  return (
    <SafeAreaView style={styles.container}>


      <ScrollView style={styles.scrollView}>
        {completedTickets.map((ticket) => (
          <TouchableOpacity
            key={ticket.id}
            style={styles.ticketContainer}
            onPress={() => {
              // Handle completed ticket press (navigate to details, etc.)
              console.log("Completed Ticket pressed:", ticket);
            }}
          >
            <Text style={styles.ticketTitle}>{ticket.title}</Text>
            <Text style={styles.completionDate}>
              Completed on: {new Date(ticket.completionDate).toDateString()}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};



export default CompletedTicketsScreen;
