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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import from constants
import { SIZES, FONTS, COLORS } from "../../../constants";
// import from context
import { useStateContext } from "../../../context/StateContext/StateContext";
// import from expo
import Checkbox from "expo-checkbox";
import { MaterialIcons, Ionicons, Entypo, Feather } from "@expo/vector-icons";

const LogInScreen = () => {
  const { colors } = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };
  function isEnableLogIn() {
    return (
      email != "" && password != ""
      // emailError == "" &&
    );
  }

  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: colors.background,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius,
    },
    title: {
      fontSize: SIZES.h1,
      fontWeight: "bold",
      fontFamily:"",
    },

    sign: {
      fontSize: SIZES.h3,
      fontWeight: "bold",
    },
    container: {
      marginVertical: SIZES.radius,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 25,
      padding: SIZES.radius,
    },
    input: {
      flex: 1,
      marginLeft: 10,
    },
    icon: {
      marginHorizontal: 10,
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
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.title}>Back</Text>
        </View>

        <View style={{paddingVertical:SIZES.radius}}> 
        <Text style={styles.sign}>Hey! Good to see you again</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={24} color="black" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Ionicons name="key" size={24} color="black" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
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
          <View
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
          </View>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate(ForgetPasswordScreen)}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  paddingLeft: 6,
                  color: COLORS.lightblue,
                }}
              >
                Forget Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: 30 }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              height: 50,
              width: "100%",
              alignItems: "center",
              borderRadius: 20,
              justifyContent: "center",
            }}
            // onPress={handleLogIn}
            disabled={isEnableLogIn() ? false : true}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LogInScreen;
