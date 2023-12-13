// import from React
import React, { useEffect } from "react";
// import from expo
import { StatusBar } from "expo-status-bar";
// import from reactnative
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import from constants
import { COLORS, FONTS, SIZES, images } from "../../constants";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from expo vector icons
import { FontAwesome5 } from '@expo/vector-icons';


const SplashScreen = ({ navigation }) => {
// for using colors and darkmode

  const { isDarkMode, colors } = useStateContext();

  // store the image
  const Logo = require("../../../assets/images/login.jpg");

  // state for set time
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("LogInScreen");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: SIZES.radius,
      }}
    >
      <StatusBar
        style={isDarkMode ? "light" : "dark"}
        backgroundColor={colors.background}
      />
      {/* <Image
        style={{ height: 200, width: 200 }}
        resizeMode="contain"
        source={Logo}
      /> */}

     <FontAwesome5 name="graduation-cap" size={100} color={COLORS.lightblue} />
      <Text style={{ color: colors.textColor, ...FONTS.h1 }}>
      Lms student
      </Text>
     
    </SafeAreaView>
  );
};

export default SplashScreen;
