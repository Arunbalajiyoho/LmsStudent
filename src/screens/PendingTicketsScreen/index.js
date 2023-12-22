import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/theme";
import { useStateContext } from "../../context/StateContext/StateContext";

const PendingTicketsScreen = () => {
  const { colors } = useStateContext();
  const pendingTickets = [
    { id: 1, title: "Assignment 2", dueDate: "2023-03-01" },
    { id: 2, title: "Quiz 2", dueDate: "2023-03-15" },
    { id: 3, title: "Group Project", dueDate: "2023-04-05" },
    // Add more pending tickets as needed
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
      backgroundColor: "#FFE3C8", // Use a different color for pending tickets
      borderRadius: 8,
    },
    ticketTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
    },
    dueDate: {
      fontSize: 16,
      color: "#555",
    },

   
  });

  return (
    <SafeAreaView style={styles.container}>
     
      <ScrollView style={styles.scrollView}>
        {pendingTickets.map((ticket) => (
          <TouchableOpacity
            key={ticket.id}
            style={styles.ticketContainer}
            onPress={() => {
              // Handle pending ticket press (navigate to details, etc.)
              console.log("Pending Ticket pressed:", ticket);
            }}
          >
            <Text style={styles.ticketTitle}>{ticket.title}</Text>
            <Text style={styles.dueDate}>
              Due Date: {new Date(ticket.dueDate).toDateString()}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PendingTicketsScreen;
