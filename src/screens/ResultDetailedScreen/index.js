import React from "react";
import { View, Text, StyleSheet,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES,COLORS } from "../../constants";
import { useStateContext } from "../../context/StateContext/StateContext";
// import from vector icons
import { FontAwesome5 } from "@expo/vector-icons";


const ResultDetailedScreen = ({navigation}) => {

    // state for darkmode
    const { colors, isDarkMode } = useStateContext();

  // Sample result details data
  const resultDetails = {
    subject: "Math",
    score: 85,
    grade: "A",
    comments: "Excellent performance! Keep up the good work.",
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#f0f0f0",
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
    resultContainer: {
      backgroundColor: "#E3F2FD",
      padding: 16,
      borderRadius: 8,
    },
    subject: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 8,
      color: "#333",
    },
    score: {
      fontSize: 18,
      marginBottom: 8,
      color: "#555",
    },
    grade: {
      fontSize: 18,
      marginBottom: 8,
      color: "#555",
    },
    comments: {
      fontSize: 16,
      color: "#333",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <FontAwesome5 name="chevron-left" size={16} color={COLORS.darkBlue} />
        </TouchableOpacity>
        <View>
          <Text style={styles.heading}>Result Details</Text>
        </View>
      </View>
     
      <View style={styles.resultContainer}>
        <Text style={styles.subject}>{resultDetails.subject}</Text>
        <Text style={styles.score}>Score: {resultDetails.score}%</Text>
        <Text style={styles.grade}>Grade: {resultDetails.grade}</Text>
        <Text style={styles.comments}>{resultDetails.comments}</Text>
      </View>
    </SafeAreaView>
  );
};



export default ResultDetailedScreen;
