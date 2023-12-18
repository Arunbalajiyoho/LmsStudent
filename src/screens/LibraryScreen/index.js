// import from react
import React, { useState } from "react";
// import from react native
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons"; // Add this import
import { Button } from "react-native-paper";
import { COLORS, SIZES } from "../../constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useStateContext } from "../../context/StateContext/StateContext";


const LibraryScreen = ({ navigation }) => {
  // for colors
  const { colors, isDarkMode } = useStateContext();

  // State for the selected tab
  const [selectedTab, setSelectedTab] = useState("coding");

  // Placeholder course data (replace with your actual data)
  const courses = {
    coding: [
      { title: "Introduction to Programming", instructor: "John Doe", description: "Learn the basics of programming and coding concepts." },
      { title: "Web Development Basics", instructor: "Jane Smith", description: "Explore the fundamentals of web development and design." },
      // Add more coding courses
    ],
    maths: [
      { title: "Algebra 101", instructor: "Alice Johnson", description: "Understand the principles of algebra and solve algebraic equations." },
      { title: "Calculus Fundamentals", instructor: "Bob Williams", description: "Explore the basics of calculus and its applications." },
      // Add more maths courses
    ],
    science: [
      { title: "Physics for Beginners", instructor: "Eve Davis", description: "Discover the fundamental principles of physics and its real-world applications." },
      { title: "Biology Essentials", instructor: "Charlie Brown", description: "Learn the essential concepts of biology and life sciences." },
      // Add more science courses
    ],
  };

  const selectedCourses = courses[selectedTab];

  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius,
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
      padding: SIZES.base,
      borderRadius: 10,
      color: COLORS.darkBlue,
    },
    dashedLine: {
      marginTop: 10,
      borderWidth: 0.5,
      borderStyle: "dotted",
      borderColor: "grey",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: SIZES.radius,
      marginBottom: 10,
      marginTop: 10,
      paddingHorizontal: 10,
      backgroundColor: "white",
      elevation: 5,
    },
    input: {
      flex: 1,
      paddingVertical: 8,
    },
    clearButton: {
      padding: 8,
    },
    tabContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: SIZES.base,
    },
    tabButton: {
      flex: 1,
      width: "15%",
      backgroundColor: COLORS.lightblue,
    },
    tabButtonText: {
      fontWeight: "bold",
    },
    activeTab: {
      backgroundColor: COLORS.darkBlue,
    },
    activeTabText: {
      color: "white",
    },
    card: {
      flexDirection: "row",
     
      padding: SIZES.padding,
      backgroundColor: COLORS.lightblue,
      borderRadius: SIZES.radius,
      marginBottom: SIZES.base,
      elevation: 5,
    },

    cardText: {
      color: colors.textColor,
      fontSize: SIZES.body3,
    },
    cardDescription: {
      color: "gray",
      fontSize: SIZES.body4,
      marginTop: 10,
    },
  });

  return (
    <SafeAreaView style={styles.grandParent}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
            <Ionicons name="ios-arrow-back" size={24} color={COLORS.darkBlue} />
          </TouchableOpacity>
          <View>
            <Text style={styles.heading}>Library</Text>
          </View>
        </View>

        <View style={styles.dashedLine} />

        <View style={{ marginTop: SIZES.padding }}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search..."
              // value={searchQuery}
            />
            <TouchableOpacity style={styles.clearButton}>
              <Icon name="clear" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

          
          



       
      </View>
    </SafeAreaView>
  );
};

export default LibraryScreen;
