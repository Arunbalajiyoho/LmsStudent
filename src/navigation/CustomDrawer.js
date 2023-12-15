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
} from "react-native";
// import from native stack
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Correct import
import { SIZES } from "../constants";
// import from react navigation drawer
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
// import from expo vector icons
import { AntDesign, Entypo } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

// import from Screens
import {
  DashBoardScreen,
  ExamsScreen,
  UpcomingExamScreen,
  CompletedExamScreen,
  ExamHistoryScreen,
  ExamDetailedScreen,
  CommunityScreen,
  CommunityProfileScreen,
  AccountScreen,
  EditProfileScreen,
  ClassesScreen,
  UpcomingClassScreen,
  CompletedClassScreen,
  ClassHistoryScreen,
  ClassDetailedScreen,
  HelpCenterScreen,
  HelpDetailedScreen,
  NotificationScreen,
  TermsAndConditionScreen,
  PrivacyPolicyScreen,
  LibraryScreen,
  LibraryDetailedScreen,
  EventsScreen,
  EventDetailedScreen,
  PaymentsScreen,
  PaymentDetailedScreen,
  CertificatesModelScreen,
  IdCardModelScreen,
  CalendarScreen,
  AnswerPaperScreen,
  ResultScreen,
  ResultDetailedScreen,
  TicketsScreen,
  PendingTicketsScreen,
  CompletedTicketsScreen,
  LoadingScreen,
  HelpScreen,
  LogInScreen,
  ForgetPasswordScreen,
  OtpVerificationScreen,
  SetNewPasswordScreen,
  ProfileScreen,
  SplashScreen,
} from "../screens";
import dummyData from "../components/dummyData";

const Stack = createNativeStackNavigator(); // Correct variable name

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
      }}
    >
      <Text
        style={{
          marginLeft: 15,
          fontSize: 16,
          color: "black",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      {/* ... (rest of your code remains unchanged) */}
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  // const [progress, setProgress] = React.useState(new Animated.Value(0));

  // const scale = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.8],
  // });

  // const borderRadius = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 26],
  // });

  // const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "65%",
          paddingRight: 20,
          backgroundColor: "transparent",
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        initialRouteName="Dashboard"
        drawerContent={(props) => {
          // setTimeout(() => {
          //   setProgress(props.progress);
          // }, 0);
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
      >
        <Drawer.Screen name="DashboardScreen">
          {(props) => <DashBoardScreen {...props}
          //  drawerAnimationStyle={animatedStyle} 
           />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
