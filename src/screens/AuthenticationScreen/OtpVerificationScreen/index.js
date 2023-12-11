// imports from react
import React, { useEffect, useRef, useState } from "react";
// imports from react native
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View,Button } from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import { SafeAreaView } from "react-native-safe-area-context";
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
} from "@expo/vector-icons";
// import from Screens
import SetNewPasswordScreen from "../SetNewPasswordScreen";

const OtpVerificationScreen = ({ navigation }) => {

  // for colors
  const { colors, isDarkMode } = useStateContext();

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
      color: COLORS.primary,
    },
    OTPText: {
      color: colors.textColor,
      // ...FONTS.h2,
      fontSize:SIZES.h3,
   
    },
    OTPNumb: {
      color: colors.textColor,
      // ...FONTS.h2,
      fontSize:SIZES.h3,
      paddingHorizontal:SIZES.base
    
     
    },
    OTPTextContainer: {
      flexDirection:"row",
      alignItems:"center",
      marginVertical: SIZES.radius*2,
      marginHorizontal:SIZES.radius*4
     
    },
    Continue: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      backgroundColor: colors.primary,
      borderRadius: SIZES.radius,
      marginVertical: SIZES.radius,
    },
    ContinueText: {
      color: COLORS.white,
      fontWeight: "bold",
      fontSize: SIZES.h3,
    },
    textinput: {
      marginBottom: SIZES.radius,
    },
  
  });

// state for otp
  const [otp, setOtp] = useState("");
  // state for count down
  const [countdown, setCountdown] = useState(5);
  // state for inputs
  const [inputDisabled, setInputDisabled] = useState(false);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      } else {
        setInputDisabled(true);
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown]);

  // function for resend OTP
  const handleResendOTP = () => {
    if (countdown === 0) {
      setCountdown(5);
      setInputDisabled(false);
      // Add logic to resend OTP here
      Alert.alert("OTP Resent!");
    }
  };

  let otpInput = useRef(null);

  // function for clear the text
  const clearText = () => {
    otpInput.current.clear();
  };

  // function for set the text
  const setText = () => {
    otpInput.current.setValue("1234");
  };

 

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
          <Text style={styles.heading}>Otp Verification</Text>
        </View>
      </View>

         <View style={{flex:1,justifyContent:"center",}}>

        <View style={styles.OTPTextContainer}>
          <Text style={styles.OTPText}>Code has sent sent to</Text>
          <Text style={styles.OTPNumb}>(+91) ******55</Text>
        </View>
     
      <View style={styles.textinput}>
        <OTPTextInput
          inputCount={6}
          textInputStyle={{
            borderWidth: 1,
            borderRadius: 10,
            borderBottomWidth: 1,
            flex: 1,
            color: colors.textColor,
          }}
          ref={(e) => (otpInput = e)}
          tintColor={colors.primary}
        />
        {/* <Button title="clear" onClick={clearText} /> */}
      </View>
     

         <View style={{ alignItems: "center", marginTop: 30 }}>
            <TouchableOpacity
             onPress={() => navigation.navigate(SetNewPasswordScreen)}
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
                  color: COLORS.lightblue,
                  fontWeight: "bold",
                  flex: 1,
                  textAlign: "center",
                }}
              >
                Verify
              </Text>
              <View
                style={{ backgroundColor: COLORS.blue1, borderRadius: 29, left: 10 }}
              >
                <Feather
                  name="arrow-right"
                  size={20}
                  color= {COLORS.darkBlue}
                  style={{ paddingHorizontal: 15, paddingVertical: 13 }}
                />
              </View>
            </TouchableOpacity>
          </View>

      {countdown > 0 ? (
        <Text style={{color:COLORS.white,textAlign:"center",paddingVertical:SIZES.radius}}>Resend OTP in {countdown} seconds</Text>
      ) : (
        <TouchableOpacity onPress={handleResendOTP}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: colors.iconBackground,
              width:120,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              paddingVertical: SIZES.radius,
              marginTop:20
            }}
          >
          <Ionicons name="md-chatbubble-outline" size={24} color= {COLORS.darkBlue} />
            <View style={{ marginLeft: 5 ,}}>
              <Text style={{ color:colors.textColor }}>via sms</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      </View>
    </SafeAreaView>
  );
};

export default OtpVerificationScreen;