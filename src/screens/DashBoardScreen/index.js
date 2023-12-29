// import from react
import React, { useState, useEffect } from "react";
// import from react native
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
// import from constants
import { SIZES, FONTS, COLORS } from "../../constants/theme";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from expo
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  Feather,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

// import from components
import ImageSwiper from "../../components/ImageSwiper ";
import Colors from "../../constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MyCalendar from "../../components/MyCalendar";
// import CircularProgress from "react-native-circular-progress-indicator";
import Animated from "react-native-reanimated";
import CourseCard from "../../components/CourseCard ";
import dummyData from "../../components/dummyData";
import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";



const DashBoardScreen = ({ navigation, drawerAnimationStyle }) => {
  const {openDrawer} = navigation;
  // for using colors from context
  const { colors, isDarkMode } = useStateContext();

  const { top } = useSafeAreaInsets();

  const [fill, setFill] = useState(0);

  const student = {
    name: "ArunBalaji", // Replace with the actual name of the user
    email: "Arun.doe@example.com", // Replace with the actual email of the user
    image:
      "https://cdn.pixabay.com/photo/2016/11/14/03/16/book-1822474_1280.jpg", // Replace with the actual URL of the user's image
  };

  // for image
  const user = require("../../../assets/images/Arunbalaji.jpg");

  const test = require("../../../assets/images/background.png");

  const handleCardPress = () => {
    // Handle card press action
  };


  // styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: SIZES.base,
      paddingVertical: SIZES.radius,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
    },
    name: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    userName: {
      fontSize: 16,
      fontWeight: "bold",
      marginLeft: SIZES.radius * 2,
      color: colors.textColor,
    },
    userEmail: {
      fontSize: 14,
      color: "gray",
      marginLeft: SIZES.radius * 2,
      color: colors.textColor,
    },
    back: {
      marginRight: SIZES.radius,
      backgroundColor: colors.iconBackground,
      padding: SIZES.base,
      borderRadius: 10,
    },

    eventsContainer: {
      marginTop: 20,
    },
    eventsHeader: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    dashedLine: {
      marginTop: 10,
      // height: 1,
      borderWidth: 0.5,
      borderStyle: "dashed",
      borderColor: "grey",
    },
    coursesContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: SIZES.padding,
    },
    courseCard: {
      width: "32%",
      backgroundColor: isDarkMode ? "#ffe1C7" : colors.cardBackground,
      borderRadius: 10,
      padding: SIZES.radius,
      marginTop: SIZES.radius,
      height: 170,
    },
    courseImage: {
      width: "50%",
      height: 50, // Set the desired height for the course image
      resizeMode: "cover",
      borderRadius: 20,
    },
    courseName: {
      fontSize: 14,
      fontWeight: "bold",
      marginTop: 20,
      color: colors.textColor,
    },
    detailsContainer: {
      flexDirection: "row",
      // justifyContent: "space-between",
      alignItems: "center",
      marginTop: 18,
    },
    detailsText: {
      fontSize: 12,
      color: colors.textColor,
    },
    paperlist: {
      flexDirection: "row",
      paddingHorizontal: SIZES.base,
      justifyContent: "space-between",
      marginTop: SIZES.radius,
    },
  });



  const courses = [
    {
      name: "Course 1",
      image:
        "https://www.shutterstock.com/shutterstock/photos/2071252046/display_1500/stock-photo-portrait-of-cheerful-male-international-indian-student-with-backpack-learning-accessories-standing-2071252046.jpg",
      details: "More details",
      backgroundColor: isDarkMode ? "#9bcefc" : colors.cardBackground,
    },
    {
      name: "Course 2",
      image:
        "https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-stock-photo-asian-college-student.jpg",
      details: "More details",
      backgroundColor: isDarkMode ? "#c3e3" : colors.cardBackground,
      // backgroundColor: isDarkMode ? "#ffe1c7" : colors.cardBackground,
    },
    {
      name: "Course 3",
      image:
        "https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-stock-photo-asian-college-student.jpg",
      details: "More details",
      // backgroundColor: isDarkMode ? "#e8ffad" : colors.cardBackground,
      backgroundColor: isDarkMode ? "#ffe1c7" : colors.cardBackground,
    },
  ];

  const renderCourseCard = (course, index) => (
    <TouchableOpacity onPress={() => navigation.navigate("CourseDetailedScreen")}
      key={index}
      style={[styles.courseCard, { backgroundColor: course.backgroundColor }]}
    >
      <Image source={{ uri: course.image }} style={styles.courseImage} />
      <Text style={styles.courseName}>{course.name}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>{course.details}</Text>
        <FontAwesome
          name="angle-double-right"
          size={18}
          color="black"
          style={{ marginLeft: 5 }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
   
    <DrawerSceneWrapper>
      <SafeAreaView style={styles.grandParent}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.name}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <AntDesign name="menu-fold" size={28} color={COLORS.darkBlue} />
              </TouchableOpacity>

              <View>
                <Text style={styles.userName}>{student.name}</Text>
                <Text style={styles.userEmail}>{student.email}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")}>
              <Entypo name="notification" size={28} color={COLORS.darkBlue} />
            </TouchableOpacity>
          </View>
          <View style={styles.dashedLine} />

          <TouchableOpacity style={styles.coursesContainer}>
            {courses.map((course, index) => renderCourseCard(course, index))}
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: SIZES.padding,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: SIZES.h3,
                  fontWeight: "bold",
                  // margin: SIZES.base,
                  color: colors.textColor,
                }}
              >
                Quick Test
              </Text>
            </View>

            <View>
              <TouchableOpacity>
                <Text 
                style={{
                   color: colors.textColor,
                   textDecorationLine: "underline",
                    textDecorationStyle: "dashed",
                    fontWeight:"600"
                     }}>
                      View All
                 </Text>

              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <CourseCard
              courseName="React Native"
              lessons={10}
              duration="4 weeks"
              imageSource={test}
              onPress={handleCardPress}
            />
          </View>


          <View>
            <Text
              style={{
                fontSize: SIZES.h3,
                fontWeight: "bold",
                marginTop: SIZES.radius,
                color: colors.textColor,
              }}
            >
              Papers List
            </Text>
          </View>

          <View style={styles.paperlist}>
            <View
              style={{
                backgroundColor: isDarkMode ? "#9bcefc" : colors.cardBackground,
                padding: SIZES.base*2,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", color: colors.textColor }}>
                O/L
              </Text>
              <Text style={{ color: colors.textColor }}>
                100+ Question Paper
              </Text>
              <Text style={{ color: colors.textColor }}>Available</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.darkBlue,
                  marginTop: SIZES.base,
                  padding: 5,
                  borderRadius: 20,
                  width: 100,
                }}
              >
                <Text style={{ color: "lightgray", paddingHorizontal: 8 }}>
                  See More
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: isDarkMode ? "#e8ffad" : colors.cardBackground,
                padding: SIZES.base*2,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", color: colors.textColor }}>
                Model Paper
              </Text>
              <Text style={{ color: colors.textColor }}>
                100+ Question Paper
              </Text>
              <Text style={{ color: colors.textColor }}>Available</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.darkBlue,
                  marginTop: SIZES.base,
                  padding: 5,
                  borderRadius: 20,
                  width: 100,
                }}
              >
                <Text style={{ color: "lightgray", paddingHorizontal: 8 }}>
                  See More
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: SIZES.h3,
                fontWeight: "bold",
                marginTop: SIZES.radius,
                color: colors.textColor,
                paddingVertical: SIZES.radius,
                
              }}
            >
              Events
            </Text>
          </View>

          <MyCalendar />
          <View style={{marginBottom:50}}>

          </View>

        </ScrollView>
      </SafeAreaView>
      </DrawerSceneWrapper>

  );
};

export default DashBoardScreen;
