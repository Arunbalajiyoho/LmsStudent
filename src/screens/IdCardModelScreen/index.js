import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES, COLORS } from "../../constants/theme";
import { useStateContext } from "../../context/StateContext/StateContext";
import Colors from "../../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";


const IdCardModelScreen = ({navigation}) => {
  const studentData = {
    name: "John Doe",
    course: "Computer Science",
    studentID: "YT0502",
    contactNumber: "6380730461",
    enrollmentDate: "01/01/2000",
    additionalFrontFields: [
      { label: "name", value: "Value1" },
      { label: "Department", value: "Value2" },
    ],
    additionalBackFields: [
      { label: "Dept", value: "Value3" },
      { label: "Dept", value: "Value4" },
    ],
  };

  const { colors, isDarkMode } = useStateContext();
  const [showBack, setShowBack] = useState(false);
  const rotateValue = useRef(new Animated.Value(0)).current;


  const rotateCard = () => {
    setShowBack(!showBack);
    Animated.spring(rotateValue, {
      toValue: showBack ? 0 : 1,
      friction: 8,
      tension: 10,
      useNativeDriver: false,
    }).start();
  };

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["1deg", "180deg", "360deg"],
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? Colors.greenAlpha : colors.background,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius * 2,
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: SIZES.padding,
    },
    heading: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      marginLeft: SIZES.base,
      color: COLORS.textColor,
    },
    back: {
      backgroundColor: COLORS.lightblue,
      padding: SIZES.radius,
      borderRadius: 10,
      color: COLORS.darkBlue,
    },
    card: {
      backgroundColor: COLORS.lightblue,
      borderRadius: SIZES.radius,
      padding: SIZES.padding * 2,
      width: "80%",
      alignItems: "center",
      elevation: 5,
      transform: [{ rotateY: rotateInterpolate }],
    },
    title: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      marginBottom: SIZES.base,
      color: colors.textColor,
    },
    text: {
      fontSize: SIZES.body3,
      color: colors.textColor,
      marginBottom: SIZES.base,
      paddingVertical: SIZES.base,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: SIZES.base,
    },
    qrCode: {
      width: 110, // Adjust size as needed
      height: 110, // Adjust size as needed
      marginBottom: SIZES.base,
    },
    backButton: {
      marginTop: SIZES.radius,
      padding: SIZES.base,
      backgroundColor: COLORS.darkBlue,
      borderRadius: SIZES.radius,
    },
  });

  const cardContent = (
    <>
      <Text style={styles.title}>
        {showBack ? "Student ID Card (Back)" : "Student ID Card (Front)"}
      </Text>
      {!showBack ? (
        <>
          <Image
            source={{
              uri: "https://img.freepik.com/premium-photo/young-indian-college-girl-holding-backpack-books-giving-happy-expression_54391-7232.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.text}>Name: {studentData.name}</Text>
          <Text style={styles.text}>Course: {studentData.course}</Text>
          <Text style={styles.text}>Student ID: {studentData.studentID}</Text>
          {studentData.additionalFrontFields.map((field, index) => (
            <Text key={index} style={styles.text}>
              {field.label}: {field.value}
            </Text>
          ))}
        </>
      ) : (
        <>
          <Image
            source={{
              uri: "https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg",
            }}
            style={[styles.qrCode, { backgroundColor: "white" }]} // Set background color if needed
          />

          <Text style={styles.text}>
            Contact Number: {studentData.contactNumber}
          </Text>
          <Text style={styles.text}>
            Enrollment Date: {studentData.enrollmentDate}
          </Text>
          {studentData.additionalBackFields.map((field, index) => (
            <Text key={index} style={styles.text}>
              {field.label}: {field.value}
            </Text>
          ))}
        </>
      )}
    </>
  );

  const frontAnimatedStyle = {
    transform: [{ rotateY: rotateInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: rotateInterpolate }],
  };


  return (

    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[styles.card, showBack ? backAnimatedStyle : frontAnimatedStyle]}
        onPress={rotateCard}
      >
        {cardContent}
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={rotateCard}>
        <Text style={{ color: "white" }}>Flip Here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default IdCardModelScreen;
