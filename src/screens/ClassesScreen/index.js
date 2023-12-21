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
import UpcomingClassScreen from "../UpcomingClassScreen";
import CompletedClassScreen from "../CompletedClassScreen";
import ClassHistoryScreen from "../ClassHistoryScreen";

// import from context
import { useStateContext } from "../../context/StateContext/StateContext";

const ClassesScreen = ({ navigation }) => {
  // state for darkmode
  const { colors,isDarkMode } = useStateContext();
  // state for tabs
  const [activeTab, setActiveTab] = useState("Upcoming Classes");

  // function for rendering screens
  const renderScreen = () => {
    switch (activeTab) {
      case "Upcoming Classes":
        return <UpcomingClassScreen />;
      case "Completed Classes":
        return <CompletedClassScreen />;
      case "Exam Classes":
        return <ClassHistoryScreen />;
      default:
        return null;
    }
  };

  // For using styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor:colors.background,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius * 2,
      
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      // paddingHorizontal: SIZES.radius,
    },
    heading: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      marginLeft: SIZES.radius,
      color: colors.textColor,
    },
    back: {
      backgroundColor: COLORS.lightblue,
      padding: SIZES.base,
      borderRadius: 10,
      color: COLORS.darkBlue,
    },
    tabContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingTop: SIZES.radius*2,
      paddingBottom:SIZES.radius,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      // backgroundColor: COLORS.lightblue,
      // borderRadius:26,
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
          <Text style={styles.heading}>Your Classes</Text>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <Button
          mode={activeTab === "Upcoming Classes" ? "contained" : "text"}
          onPress={() => setActiveTab("Upcoming Classes")}
          style={{
            width: "33%",
            backgroundColor:
              activeTab === "Upcoming Classes" ? COLORS.darkBlue : "transparent",
          }}
          labelStyle={{
            color: activeTab === "Upcoming Classes" ? "white" : colors.textColor,
            fontWeight: "bold",
          }}
        >
          Upcoming
        </Button>

        <Button
          mode={activeTab === "Completed Classes" ? "contained" : "text"}
          onPress={() => setActiveTab("Completed Classes")}
          style={{
            width: "33%",
            backgroundColor:
              activeTab === "Completed Classes" ? COLORS.darkBlue : "transparent",
          }}
          labelStyle={{
            color: activeTab === "Completed Classes" ? "white" : colors.textColor,
            fontWeight: "bold",
          }}
        >
          Completed
        </Button>

        <Button
          mode={activeTab === "Exam Classes" ? "contained" : "text"}
          onPress={() => setActiveTab("Exam Classes")}
          style={{
            width: "33%",
            backgroundColor:
              activeTab === "Exam Classes" ? COLORS.darkBlue : "transparent",
          }}
          labelStyle={{
            color: activeTab === "Exam Classes" ? "white" : colors.textColor,
            fontWeight: "bold",
          }}
        >
          History
        </Button>
      </View>

      {renderScreen()}
    </SafeAreaView>
  );
};

export default ClassesScreen;
