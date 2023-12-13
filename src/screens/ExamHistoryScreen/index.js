// import from react
import React from 'react';
// import from react native
import { View, Text, StyleSheet, FlatList } from 'react-native';
// import from context
import { useStateContext } from '../../context/StateContext/StateContext'; 
// import from dummy data
import  dummyData  from '../../components/dummyData';
// import from constants
import { SIZES, FONTS, COLORS } from "../../constants/theme";

const ExamHistoryScreen = () => {
 
  // state for dark mode
  const { colors,isDarkMode } = useStateContext();
  // for using styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal:SIZES.base,
      paddingVertical:SIZES.base,

       
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingVertical:SIZES.radius,
      marginVertical:SIZES.radius,
      color:colors.textColor,
      textAlign:"center"
    },
    card: {
      width: '100%',
      padding: 20,
      borderRadius: 10,
      marginBottom: 15,
      backgroundColor:  isDarkMode ? "#9eb7dc" : colors.cardBackground,
      borderRadius:10,
      // elevation: 5, // Add elevation for a card-like shadow
    },
    cardText: {
      fontSize: 18,
      marginBottom: 10,
      color: colors.textColor,
    },
  });
  return (
    <View style={styles.grandParent}>
      <Text style={styles.title}>Exam History</Text>

      <FlatList
        data={dummyData.examHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>Course Name: {item.courseName}</Text>
            <Text style={styles.cardText}>Timing: {item.timing}</Text>
            <Text style={styles.cardText}>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};



export default ExamHistoryScreen;