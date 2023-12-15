//import from react 
import React from 'react';
// import from react native
import { View, Text, StyleSheet, Button } from 'react-native';
// import from dummy data
import  dummyData  from '../../components/dummyData';
// import from context
import { useStateContext } from '../../context/StateContext/StateContext';
import { SIZES } from '../../constants';
import Colors from '../../constants/Colors';
 

const CompletedExamScreen = ({ navigation }) => {
  // state for dark mode
  const { colors,isDarkMode } = useStateContext();
  // for using styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      paddingVertical:SIZES.radius,
      alignItems: 'center',
      backgroundColor: Colors.greenAlpha,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color:colors.textColor,
    },
    card: {
      width: '95%',
      padding: 20,
      borderRadius: 10,
      // elevation: 1,
      backgroundColor:  isDarkMode ? "white"  : colors.cardBackground,
      margin:10
    },
    cardText: {
      fontSize: 18,
      marginBottom: 10,
      color:colors.textColor,

    },
  });

  
  return (
 
    <View style={styles.grandParent}>
    
        
      
      <Text style={styles.title}>Exam Completed!</Text>
      {dummyData?.completed.map((item,index)=>(
      <View style={styles.card}
      key={index}>
        <Text style={styles.cardText}>Course Name: {item.coursename}</Text>
        <Text style={styles.cardText}>Timing: {item.timing}</Text>
        <Text style={styles.cardText}>Status: {item.status}</Text>
      </View>
))}
      
    </View>
  );
};



export default CompletedExamScreen;