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


const DashBoardScreen = ({ navigation, drawerAnimationStyle}) => {
  // for using colors from context
  const { colors,isDarkMode} = useStateContext();

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

  // styles
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
    courses: {
      backgroundColor:isDarkMode ? "#ffe1e8": colors.cardBackground,
      borderRadius: 10,
      padding: SIZES.padding,
      marginTop: SIZES.padding,
      flex: 1,
      height: 170,
      alignItems: "center",
      justifyContent: "center",
      margin: SIZES.base,
      borderTopRightRadius: 50,
      borderBottomLeftRadius:50
    },
    Exams: {
      backgroundColor:  isDarkMode ? "#9eb7dc" : colors.cardBackground,
      borderRadius: 10,
      padding: SIZES.padding,
      marginTop: SIZES.padding,
      flex: 1,
      height: 170,
      alignItems: "center",
      justifyContent: "center",
      margin: SIZES.base,
      borderTopLeftRadius: 50,
      borderBottomRightRadius:50
    },
    coursenumber: {
      fontSize: SIZES.h2,
      color:colors.textColor
    },
    coursetext: {
      fontSize: SIZES.h3,
      color:colors.textColor
    },
    examtext: {
      fontSize: SIZES.h3,
      color:colors.textColor
    },
    videos: {
      backgroundColor: isDarkMode ? "#E6C7C2" : colors.cardBackground,
      borderRadius: 10,
      padding: SIZES.padding,
      marginTop: SIZES.base,
      flex: 1,
      height: 170,
      alignItems: "center",
      justifyContent: "center",
      margin: SIZES.base,
      borderTopRightRadius: 50,
      borderBottomLeftRadius:50
    },
    class: {
      backgroundColor:  isDarkMode ? "#DCD0FF" : colors.cardBackground,
      borderRadius: 10,
      padding: SIZES.padding,
      marginTop: SIZES.base,
      flex: 1,
      height: 170,
      alignItems: "center",
      justifyContent: "center",
      margin: SIZES.base,
      borderTopLeftRadius: 50,
      borderBottomRightRadius:50
    },
    dashedLine: {
      marginTop: 15,
      // height: 1,
      borderWidth: 0.5,
      borderStyle: "dashed",
      borderColor: "grey",
    },
    lesson: {
      backgroundColor:  isDarkMode ? "#87AFC7" : colors.cardBackground,
      padding: 30,
      margin: SIZES.base,
      borderRadius: 10,
    },
    container: {
      flex: 1,
      marginTop: 50,
      padding: 16,
    },
    addButton: {
      marginTop: 16,
      padding: 10,
      backgroundColor: "#3498db",
      borderRadius: 5,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
    },
    eventsContainer: {
      marginTop: 20,
    },
    eventsHeader: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    
  });

  return (
    <Animated.View 
       style={{
        flex:1,
        ...drawerAnimationStyle
      
      }}
    >
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
          <TouchableOpacity>
            <Entypo name="notification" size={28} color={COLORS.darkBlue} />
          </TouchableOpacity>
        </View>
        <View style={styles.dashedLine} />

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.courses}>
            <Text style={styles.coursenumber}>20</Text>
            <Text style={styles.coursetext}>Courses</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Exams}>
            <Text style={styles.coursenumber}>10</Text>
            <Text style={styles.examtext}>Exams Completed</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.videos}>
            <Text style={styles.coursenumber}>30</Text>
            <Text style={styles.coursetext}>Videos Watched</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.class}>
            <Text style={styles.coursenumber}>10</Text>
            <Text style={styles.examtext}>Classes Attended</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.lesson}>
            <View style={{flexDirection:"row"}}>
              <View>
                <Text style={{ fontSize: SIZES.h3,color:colors.textColor }}>App Development</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: SIZES.base,
                  }}
                >
                  <FontAwesome name="play-circle-o" size={24} color={COLORS.darkBlue} />
                  <Text style={{ marginLeft: 5,color:colors.textColor }}>24 Lessons</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: SIZES.base,
                  }}
                >
                  <Ionicons name="time" size={24} color={COLORS.darkBlue}/>
                  <Text style={{ marginLeft: 5,color:colors.textColor }}>15 hrs</Text>
                </View>
              </View>

            
            </View>
          </TouchableOpacity>
        </View>




        <View>
          <Text
            style={{
              fontSize: SIZES.h2,
              fontWeight: "bold",
              margin: SIZES.base,
              color:colors.textColor
            }}
          >
            Events
          </Text>
        </View>

        <MyCalendar />

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.videos}>
            <Text style={styles.coursenumber}>30</Text>
            <Text style={styles.coursetext}>Videos Watched</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.class}>
            <Text style={styles.coursenumber}>10</Text>
            <Text style={styles.examtext}>Classes Attended</Text>
          </TouchableOpacity>
        </View>



      
      </ScrollView>
    </SafeAreaView>
    </Animated.View>
  );
};

export default DashBoardScreen;
