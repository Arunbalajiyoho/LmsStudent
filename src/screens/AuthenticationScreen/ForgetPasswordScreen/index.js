// import from react
import React, { useState } from "react";
// import from react native
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// imports from constants
import { COLORS, FONTS, SIZES, icons, images } from "../../../constants";
// imports from context
import { useStateContext } from "../../../context/StateContext/StateContext";
// import from expo vector icons
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
// import from Screens
import OtpVerificationScreen from "../OtpVerificationScreen";

const ForgetPasswordScreen = ({ navigation }) => {
  const data = [
    {
      id: 1,
      text: "via Email",
      mail: "aru******@gmail.com",
    },
  ];

  // usestate for hover
  const [isHovered, setIsHovered] = useState(false);

  // function for hover
  const handleMouseEnter = () => {
    setIsHovered(!isHovered);
  };

  // function for button
  function isEnableForget() {
    return isHovered != "";
  }

  // TO set border color
  const borderColor = isHovered ? "lightblue" : "white";

  // use for colors
  const { colors } = useStateContext();

   // navigate to next page
   const handlenext = () => {
    navigation.navigate(OtpVerificationScreen);
  };

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
    heading: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      marginLeft: SIZES.radius,
      color:colors.textColor,
    },
    back: {
      backgroundColor: COLORS.lightblue,
      padding: SIZES.radius,
      borderRadius: 10,
      color: COLORS.purple,
    },
    fonttext: {
      marginVertical: SIZES.radius,
      marginHorizontal: SIZES.radius,
      color:colors.textColor,
    },
    messageicon: {
      backgroundColor: COLORS.lightblue,
      width: 80,
      height: 80,
      borderRadius: 60,
      alignItems: "center",
      justifyContent: "center",
      marginRight: SIZES.radius,
    },
    card: {
      flexDirection: "row",
      alignItems: "center",
      padding: SIZES.radius,
      backgroundColor: colors.cardBackground,
      elevation: 2,
      marginVertical: SIZES.radius,
      margin: 5,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: "",
    },
    card1: {
      flexDirection: "row",
      alignItems: "center",
      padding: SIZES.radius,
      backgroundColor: colors.cardBackground,
      elevation: 1,
      marginVertical: SIZES.radius,
      margin: 5,
      borderRadius: 8,
      borderColor: "",
      borderWidth: 2,
    },
    cardtext: {
      marginBottom: SIZES.base,
      color: colors.textColor,
      color: COLORS.darkGray,
    },
    cadrnumber: {
      fontWeight: "bold",
    },
    button: {
      backgroundColor: colors.primary,
      height: 50,
      width: "100%",
      alignItems: "center",
      borderRadius: 20,
      justifyContent: "center",
    },
    btntext: {
      color: COLORS.white,
    },

    cardHovered: {
      color: "blue",
      border: "blue",
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    cardContent: {
      fontSize: 14,
      color: "#666",
      borderColor: "blue",
    },
    button1: {
      padding: 10,
      borderWidth: 2,
      // borderColor: 'blue',
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  return (
    <SafeAreaView style={styles.grandParent}>
      
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Ionicons name="ios-arrow-back" size={24} color= {COLORS.darkBlue} />
        </TouchableOpacity>

        <View>
          <Text style={styles.heading}>Forget Password</Text>
        </View>
      </View>

      <View style={{flex:1,justifyContent:"center"}}>
      <View>
        <Text  style={styles.fonttext}>
          Select which contact details which use to reset your Password
        </Text>
      </View>

      {data.map((value, index) => (
        <Pressable
          key={index}
          style={[styles.card, { borderColor }]}
          onPress={handleMouseEnter}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.messageicon}>
              <MaterialCommunityIcons
                name="message-text-outline"
                size={30}
                color={COLORS.darkBlue}
              />
            </View>

            <View>
              <Text style={styles.cardtext}>{value.text}</Text>
              <Text style={styles.cadrnumber}>{value.mail}</Text>
            </View>
          </View>
        </Pressable>
      ))}

    


      <View style={{ alignItems: "center", marginTop: 30 }}>
            <TouchableOpacity  
             onPress={handlenext}
             disabled={isEnableForget() ? false : true}
              style={{
                backgroundColor: COLORS.darkBlue,

                height: 57,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 26,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  flex: 1,
                  textAlign: "center",
                }}
              >
                Continue
              </Text>
              <View
                style={{ backgroundColor: COLORS.blue1, borderRadius: 29, left: 10 }}
              >
                <Feather
                  name="arrow-right"
                  size={20}
                  color={COLORS.darkBlue}
                  style={{ paddingHorizontal: 15, paddingVertical: 13 }}
                />
              </View>
            </TouchableOpacity>
          </View>
          </View>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;
