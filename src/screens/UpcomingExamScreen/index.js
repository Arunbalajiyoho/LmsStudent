// import from react
import React from "react";
// import from react native
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// import from react native safe area context
import { SafeAreaView } from "react-native-safe-area-context";
// import from constants
import { SIZES, COLORS } from "../../constants/theme";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from dummy data
import { dummyData } from "../../components/dummyData";

const UpcomingExamScreen = ({navigation}) => {

  // state for dark mode
  const { colors } = useStateContext();


  // for using styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: COLORS.background,
      // paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius * 2,
    },
  
    card: {
      backgroundColor: COLORS.lightblue,
      borderRadius: SIZES.radius,
      padding: SIZES.padding,
      marginBottom: SIZES.radius,
      flexDirection: "row",
      alignItems: "center",
    },
    cardText: {
      fontSize: SIZES.body3,
      color: COLORS.textColor,
      padding:SIZES.base
    },
    title: {
      fontWeight: "bold",
      marginBottom: SIZES.base,
    },
    dateContainer: {
      marginLeft: "auto",
      alignItems: "flex-end",
    },
  
  });

  
  return (
    <SafeAreaView style={styles.grandParent}>
      
      {dummyData.upcomingExam.map((item, index)=> (

    
         <View style={styles.card}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.cardText, styles.title]}>{item.title}</Text>
          <Text style={styles.cardText}>{`Type: ${item.examType}`}</Text>
          <Text style={styles.cardText}>{`Questions: ${item.numberOfQuestions}`}</Text>
          <Text style={styles.cardText}>{`Highlight Marks: ${item.highlightMarks}`}</Text>
          <Text style={styles.cardText}>{`Time: ${item.time}`}</Text>
          <Text style={styles.cardText}>{`Duration: ${item.duration.hours}h ${item.duration.minutes}min`}</Text>
        </View>

        {/* Date Container */}
        <View style={styles.dateContainer}>
          <Text style={styles.cardText}>{item.date}</Text>
        </View>
      </View>
        ))}
    </SafeAreaView>
  )
}

export default UpcomingExamScreen