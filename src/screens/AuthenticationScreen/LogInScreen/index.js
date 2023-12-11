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
  TextInput,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import from constants
import { SIZES, FONTS, COLORS } from "../../../constants";
// import from context
import { useStateContext } from "../../../context/StateContext/StateContext";
// import from expo
import Checkbox from "expo-checkbox";
// import from expo vector icons
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";

// import from screens.
import ForgetPasswordScreen from "../ForgetPasswordScreen";

const LogInScreen = ({ navigation }) => {

  const Logo = require("../../../../assets/images/logo.jpg");
  const { colors } = useStateContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Clear previous error messages
    setEmailError("");
    setPasswordError("");

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email address");
    }

    // Validate password
    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    }

    // Check if any errors exist
    if (emailError || passwordError) {
      // Handle the case where there are validation errors
      console.log("Validation failed. Please check the form.");
      return;
    }

    // Your login logic here (e.g., API call, authentication)
    console.log("Logging in with:", { email, password });
  };

  const isFormEmpty = () => {
    return !email || !password;
  };

  const getLoginButtonColor = () => {
    return isFormEmpty() ? COLORS.lightblue : COLORS.darkBlue;
  };

  // styles

  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: colors.background,
      paddingHorizontal: SIZES.radius,
      // paddingVertical: SIZES.radius,
    },

    title: {
      fontSize: SIZES.h1,
      fontWeight: "bold",
      fontFamily: "",
      color:colors.textColor,
    },

    sign: {
      fontSize: SIZES.h3,
      fontWeight: "bold",
      color:colors.textColor,
    },
    container: {
      marginVertical: SIZES.radius,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderColor: "gray",
      // borderWidth: 1,
      borderRadius: 25,
      padding: SIZES.radius,
      height: 55,
      marginTop: SIZES.base,
      backgroundColor: COLORS.lightGray2,
    },
    input: {
      flex: 1,
      marginLeft: 10,
    },
    icon: {
      marginHorizontal: 10,
    },
    errorText: {
      color: "red",
      // Add any necessary styling like fontSize, fontWeight, etc.
    },
    image:{
    width:"100%",
    height:250,
    alignSelf:"center",
    marginBottom:25,
    
    },
  });

  return (
   
      <SafeAreaView style={styles.grandParent}>
        <KeyboardAwareScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
          }}
        >

            <View>
              <Image src="https://i.pinimg.com/564x/67/0c/4c/670c4c0739772da3da9358550222baa2.jpg" style={styles.image}/>
               {/* <Image source={Logo}  style={styles.image}/> */}
            </View>
          <View>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.title}>Back</Text>
          </View>

          <View style={{ paddingVertical: SIZES.radius }}>
            <Text style={styles.sign}>Hey! Good to see you again</Text>
          </View>

          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Ionicons
                name="mail"
                size={24}
                color="black"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setEmailError(""); // Clear email error when user starts typing
                }}
              />
            </View>
            {emailError ? (
              <Text style={styles.errorText}>{emailError}</Text>
            ) : null}
          </View>

          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Ionicons
                name="key"
                size={24}
                color="black"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordError(""); // Clear password error when user starts typing
                }}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                 name={showPassword ? "eye" : "eye-off"}
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 1,
              paddingVertical: SIZES.radius,
            }}
          >
            {/* <View
              style={{
                flexDirection: "row",
                // paddingHorizontal: SIZES.radius,
                paddingVertical: SIZES.radius,
              }}
            >
              <Checkbox value={rememberMe} onValueChange={toggleRememberMe} />
              <Text
                style={{ fontSize: SIZES.h4, paddingHorizontal: SIZES.radius }}
              >
                Remember Me
              </Text>
            </View> */}

            <View style={{flexDirection:"row",justifyContent:"flex-end",flex:1}}>
              <TouchableOpacity
                onPress={() => navigation.navigate(ForgetPasswordScreen)}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingLeft: 6,
                    color: COLORS.darkBlue,
                  }}
                >
                  Forget Password
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity
              style={{
                backgroundColor: getLoginButtonColor(),
                height: 57,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 26,
                paddingHorizontal: 20,
              }}
              onPress={handleLogin}
              // disabled={!isEnableLogIn()}
            >
              <Text
                style={{
                  color:"white",
                  fontWeight: "bold",
                  flex: 1,
                  textAlign: "center",
                }}
              >
                Log In
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
        </KeyboardAwareScrollView>
      </SafeAreaView>
   
  );
};

export default LogInScreen;
