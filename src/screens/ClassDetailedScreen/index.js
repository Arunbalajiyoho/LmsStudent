// import from react
import React from "react";
// import from react native
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
// imports from constants
import { COLORS, SIZES } from "../../constants";
// imports from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from expo vector icons
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
const ClassDetailedScreen = () => {
  // for colors
  const { colors, isDarkMode } = useStateContext();

  // styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: isDarkMode ? Colors.greenAlpha : colors.background,
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
      marginLeft: SIZES.base,
      color: colors.textColor,
    },
    back: {
      backgroundColor: COLORS.lightblue,
      padding: SIZES.base,
      borderRadius: 10,
      color: COLORS.darkBlue,
    },
    title: {
      fontSize: SIZES.h3,
      fontWeight: "bold",
    },
    titlehead: {
      marginTop: SIZES.radius,
      backgroundColor: isDarkMode ? "#9bcefc" : colors.cardBackground,
      padding: SIZES.padding,
      borderRadius: 20,
    },
    time: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: SIZES.base,
      alignItems: "center",
    },
    timetext: {
      fontWeight: "bold",
      fontSize: SIZES.h3,
      textAlign: "center",
    },
    timetext1: {
      fontWeight: "bold",
      fontSize: SIZES.h3,
      marginRight: 35,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 60,
    },
    imageview: {
      marginTop: SIZES.padding,
      flexDirection: "row",
    },
    notify: {
      borderWidth:1,
      backgroundColor: COLORS.lightblue,
      padding: SIZES.base,
      borderRadius: 10,
      alignItems: "center",
    },
    bottom: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
    },
    enroll: {
      backgroundColor: COLORS.darkBlue,
      height: 50,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 26,
      marginHorizontal: 20,
      marginVertical:SIZES.radius
    },
    bottomsheet: {
      backgroundColor: colors.cardBackground,
      borderTopEndRadius: 25,
      borderTopStartRadius: 25,
      flex: 1,
      marginTop: SIZES.padding,
    },
    exam: {
      color: colors.textColor,
      fontSize: SIZES.h2,
    },
    examoverview: {
      marginTop: SIZES.radius,
      marginHorizontal: SIZES.base,
    },
    exam1: {
      fontSize: SIZES.h3,
      color: colors.textColor,
    },
    cardContainer: {
      flexDirection: "row",

      alignItems: "center",
    },
    memberInfo: {
      marginLeft: 8,
      color: colors.textColor,
    },
    memberName: {
      fontWeight: "bold",
      fontSize: 16,
    },
    designation: {
      color: colors.textColor,
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 50,
    },
    imageview: {
      marginLeft: -15,
    },
  });

  return (
    <SafeAreaView style={styles.grandParent}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <Ionicons name="ios-arrow-back" size={24} color={COLORS.darkBlue} />
          </TouchableOpacity>

          <View>
            <Text style={styles.heading}> Class Details</Text>
          </View>
        </View>

        <View style={styles.titlehead}>
          <Text style={styles.title}>App Development Exams</Text>
          <View style={styles.time}>
            <View>
              <Text style={styles.timetext}>Time</Text>
              <Text>2 hrs</Text>
            </View>
            <View>
              <Text style={styles.timetext}>Duration</Text>
              <Text>10.00AM to 12.00AM</Text>
            </View>
          </View>

          <View style={styles.time}>
            <View style={styles.cardContainer}>
              <Image
                src="https://www.shutterstock.com/shutterstock/photos/2071252046/display_1500/stock-photo-portrait-of-cheerful-male-international-indian-student-with-backpack-learning-accessories-standing-2071252046.jpg"
                style={{ width: 40, height: 40, borderRadius: 50 }}
              />
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>ArunBalaji</Text>
                <Text style={styles.designation}>Instructor</Text>
              </View>
            </View>
            <View style={styles.timetext1}>
              <Text style={styles.timetext}>Online</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomsheet}>
          <View style={styles.bottom}>
            <View
              style={{
                flexDirection: "row",
                marginTop: SIZES.radius,
                alignItems: "center",
              }}
            >
              <Image
                src="https://media.istockphoto.com/id/1301397300/photo/portrait-of-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=Xvgo-k58_woBTuQaRNZ4JXP2SQsw_RSbrlSbt7XbQlU="
                style={styles.image}
              />

              <View style={styles.imageview}>
                <Image
                  src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2015/03/18/Incoming/Pictures/1327679_Wallpaper2.jpg"
                  style={styles.image}
                />
              </View>
              <View style={styles.imageview}>
                <Image
                  src="https://media.istockphoto.com/id/1165150697/photo/portrait-of-happy-exchange-student-facing-camera-smiling-while-holding-his-notebook-at-the.jpg?s=612x612&w=0&k=20&c=_2jF1Ql41WqH7HUEtCdg_r16wIC95sjqT27NBaVcVW4="
                  style={styles.image}
                />
              </View>
              <Text style={{paddingHorizontal:SIZES.base,fontWeight:"600"}}>+5 more</Text>
            </View>

            <TouchableOpacity style={styles.notify}>
              <Text>Notify</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex:1,justifyContent:"space-between"}}>
            <View style={styles.examoverview}>
              <Text style={styles.exam}>Class Overview:</Text>
              <View style={styles.examoverview}>
                <Text style={styles.exam1} numberOfLines={4}>
                  Figurative description relies on creating likenesses between
                  objects, often through simile (e.g. like a snowflake...or
                  fragile as a snowflake...) or metaphor. Such likenesses allow
                  the reader to perceive the object more precisely.
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.enroll}>
                <Text style={{ color: "white" }}>Enroll Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ClassDetailedScreen;
