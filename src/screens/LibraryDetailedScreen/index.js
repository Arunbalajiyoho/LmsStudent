// import from react
import React from "react";
// import from react native
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import dummyData from "../../components/dummyData";
import Navigation from "../../navigation";

const LibraryDetailedScreen = ({ route }) => {
  const  course  = route.params;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    header: {
      marginBottom: 16,
    },
    headerText: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 8,
    },
    instructorText: {
      color: "gray",
    },
    courseDetails: {
      marginBottom: 16,
    },
    courseDescription: {
      fontSize: 16,
      lineHeight: 24,
    },
    enrollButton: {
      backgroundColor: "blue",
      padding: 16,
      borderRadius: 8,
      alignItems: "center",
    },
    enrollButtonText: {
      color: "white",
      fontWeight: "bold",
    },
  });


  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header Section */}
        <View style={styles.header}>
          {/* Add your header content here */}
          <Text style={styles.headerText}>Course Title</Text>
          <Text style={styles.instructorText}>Instructor: John Doe</Text>
        </View>

        {/* Course Details Section */}
        <View style={styles.courseDetails}>
          {/* Add your course details content here */}
          <Text style={styles.courseDescription}>
            This is a detailed description of the course. It covers various topics related to React Native development.
          </Text>
          {/* Add more course details components as needed */}
        </View>

        {/* Additional Actions Section (e.g., Enroll Button) */}
        <TouchableOpacity style={styles.enrollButton}>
          <Text style={styles.enrollButtonText}>Enroll in Course</Text>
        </TouchableOpacity>
        {/* Add more sections as needed */}


      

      </ScrollView>

     {/* npm command for number */}

    </SafeAreaView>
  );
};



export default LibraryDetailedScreen;
