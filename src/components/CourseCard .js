import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useStateContext } from '../context/StateContext/StateContext';
import { SIZES } from '../constants';

const CourseCard = ({ courseName, lessons, duration, imageSource, onPress, }) => {


    // for using colors from context
  const { colors, isDarkMode } = useStateContext();

  const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: isDarkMode ? "#9bcefc" : colors.cardBackground,
      borderRadius: 10,
      elevation: 1,
      marginHorizontal: 10,
      overflow: 'hidden',
      height:160
    },
    contentContainer: {
    flexDirection:"row",
    alignItems:"center",
    flex:1,
    // padding:SIZES.padding,
    // marginTop:30
    },
    textContainer: {
      padding: 15,
      flex: 1,
      
    },
    courseName: {
    
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: colors.textColor,
    },
    courseImage: {
      width: 100,
      height: 150,
      resizeMode: 'cover',
      
    },
  });

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.courseName}>{courseName}</Text>
          <Text style={{ color: colors.textColor,}}>{`${lessons} Lessons`}</Text>
          <Text style={{ color: colors.textColor,}}>{`Duration: ${duration}`}</Text>
          <Text style={{
            textDecorationStyle:"solid",
            color: colors.textColor,
          }}>Start Now</Text>
        </View>
        <View style={{paddingHorizontal:SIZES.padding}}>
        <Image source={ imageSource } style={styles.courseImage} />
        </View>
      </View>
    </TouchableOpacity>
  );
};



export default CourseCard;
