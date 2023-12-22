// Import from react
import React, { useState } from "react";
// Importd from react native
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import from react native safe area context
import { SafeAreaView } from "react-native-safe-area-context";
// import from react native paper
import { Button } from "react-native-paper";
// import from vector icons
import { FontAwesome5 } from "@expo/vector-icons";
// import from constants
import { SIZES, COLORS } from "../../constants/theme";
import Colors from "../../constants/Colors";
// import from screens
import CompletedTicketsScreen from "../CompletedTicketsScreen";
import PendingTicketsScreen from "../PendingTicketsScreen";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";

const TicketsScreen = ({ navigation }) => {
  // state for darkmode
  const { colors, isDarkMode } = useStateContext();
  // state for tabs
  const [activeTab, setActiveTab] = useState("CompletedTickets");

  // function for rendering screens
  const renderScreen = React.useMemo(() => {
    switch (activeTab) {
      case "CompletedTickets":
        return <CompletedTicketsScreen />;
      case "PendingTickets":
        return <PendingTicketsScreen />;
      default:
        return null;
    }
  }, [activeTab]); // Re-render only when activeTab changes

  // For using styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius * 2,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
    },
    heading: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      marginLeft: SIZES.radius,
      color: colors.textColor,
    },
    back: {
      backgroundColor: COLORS.lightblue,
      padding: SIZES.radius,
      borderRadius: 10,
      color: COLORS.darkBlue,
    },
    tabContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingTop: SIZES.radius * 2,
      paddingBottom: SIZES.radius,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    tab: {
      flex: 1,
    },
  });

  return (
    <SafeAreaView style={styles.grandParent}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <FontAwesome5 name="chevron-left" size={16} color={COLORS.darkBlue} />
        </TouchableOpacity>
        <View>
          <Text style={styles.heading}>Tickets</Text>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <Button
          mode={activeTab === "CompletedTickets" ? "contained" : "text"}
          onPress={() => setActiveTab("CompletedTickets")}
          style={{
            width: "33%",
            backgroundColor:
              activeTab === "CompletedTickets" ? COLORS.darkBlue : "transparent",
          }}
          labelStyle={{
            color:
              activeTab === "CompletedTickets" ? "white" : colors.textColor,
            fontWeight: "bold",
          }}
        >
          Completed
        </Button>

        <Button
          mode={activeTab === "PendingTickets" ? "contained" : "text"}
          onPress={() => setActiveTab("PendingTickets")}
          style={{
            width: "33%",
            backgroundColor:
              activeTab === "PendingTickets" ? COLORS.darkBlue : "transparent",
          }}
          labelStyle={{
            color:
              activeTab === "PendingTickets" ? "white" : colors.textColor,
            fontWeight: "bold",
          }}
        >
          Pending
        </Button>

        <Button
           labelStyle={{
            color:
            activeTab === "PendingTickets" ? "white" : colors.textColor,
          fontWeight: "bold",
           }}
        >
           Completed Tickets
        </Button>
      </View>

      {renderScreen}
    </SafeAreaView>
  );
};

export default TicketsScreen;