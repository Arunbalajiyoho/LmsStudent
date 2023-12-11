import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { SIZES, COLORS } from "../../constants/theme";
import UpcomingExamScreen from "../UpcomingExamScreen";
import CompletedExamScreen from "../CompletedExamScreen";
import ExamHistoryScreen from "../ExamHistoryScreen";
import { useStateContext } from "../../context/StateContext/StateContext";
import Colors from "../../constants/Colors";

const ExamsScreen = ({ navigation }) => {
  const { colors } = useStateContext();
  const [activeTab, setActiveTab] = useState("Upcoming Exams");

  const renderScreen = () => {
    switch (activeTab) {
      case "Upcoming Exams":
        return <UpcomingExamScreen />;
      case "Completed Exams":
        return <CompletedExamScreen />;
      case "Exam History":
        return <ExamHistoryScreen />;
      default:
        return null;
    }
  };

  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: Colors.primaryAlpha,
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
      color: COLORS.textColor,
    },
    back: {
      backgroundColor: COLORS.lightblue,
      padding: SIZES.radius,
      borderRadius: 10,
      color: COLORS.lightblue,
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
          <Text style={styles.heading}>Your Exams</Text>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <Button
          mode={activeTab === "Upcoming Exams" ? "contained" : "text"}
          onPress={() => setActiveTab("Upcoming Exams")}
          style={{
            width: "33%",
            backgroundColor:
              activeTab === "Upcoming Exams" ? COLORS.darkBlue : "transparent",
          }}
          labelStyle={{
            color: activeTab === "Upcoming Exams" ? "white" : colors.textColor,
            fontWeight: "bold",
          }}
        >
          Upcoming
        </Button>

        <Button
          mode={activeTab === "Completed Exams" ? "contained" : "text"}
          onPress={() => setActiveTab("Completed Exams")}
          style={{
            width: "33%",
            backgroundColor:
              activeTab === "Completed Exams" ? COLORS.darkBlue : "transparent",
          }}
          labelStyle={{
            color: activeTab === "Completed Exams" ? "white" : colors.textColor,
            fontWeight: "bold",
          }}
        >
          Completed
        </Button>

        <Button
          mode={activeTab === "Exam History" ? "contained" : "text"}
          onPress={() => setActiveTab("Exam History")}
          style={{
            width: "33%",
            backgroundColor:
              activeTab === "Exam History" ? COLORS.darkBlue : "transparent",
          }}
          labelStyle={{
            color: activeTab === "Exam History" ? "white" : colors.textColor,
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

export default ExamsScreen;
