// DrawerNavigator.js
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createDrawerNavigator } from "@react-navigation/drawer";
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
  LogInScreen,
  ForgetPasswordScreen,
  OtpVerificationScreen,
  SetNewPasswordScreen,
  ProfileScreen,
  SplashScreen,
  CourseDetailedScreen,
} from "../screens";

import { Platform } from "react-native";
import BottomTabs from "../screens/BottomTabs";
// import from native stack
import CreateNativeStackNavigator, {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const drawerIcon = ({ focused, size }, name) => {
    return (
      <Icon
        name={name}
        size={size}
        color={focused ? Colors.active : Colors.inactive}
      />
    );
  };
  const Stack = createNativeStackNavigator();

  
  // Stack Navigator
  const StackNavigator = ({ navigation }) => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />

        <Stack.Screen
          name="ResultDetailedScreen"
          component={ResultDetailedScreen}
        />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />

        <Stack.Screen name="IdCardModelScreen" component={IdCardModelScreen} />

        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="TicketsScreen" component={TicketsScreen} />

        <Stack.Screen
          name="PendingTicketsScreen"
          component={PendingTicketsScreen}
        />

        <Stack.Screen
          name="CompletedTicketsScreen"
          component={CompletedTicketsScreen}
        />

        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen
          name="CertificatesModelScreen"
          component={CertificatesModelScreen}
        />
        <Stack.Screen name="AnswerPaperScreen" component={AnswerPaperScreen} />
        <Stack.Screen
          name="PaymentDetailedScreen"
          component={PaymentDetailedScreen}
        />
        <Stack.Screen
          name="LibraryDetailedScreen"
          component={LibraryDetailedScreen}
        />
        <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
        <Stack.Screen name="ExamsScreen" component={ExamsScreen} />
        <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
        />
        <Stack.Screen
          name="TermsAndConditionScreen"
          component={TermsAndConditionScreen}
        />
        <Stack.Screen
          name="HelpDetailedScreen"
          component={HelpDetailedScreen}
        />
        <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
        <Stack.Screen
          name="CourseDetailedScreen"
          component={CourseDetailedScreen}
        />
        <Stack.Screen
          name="ClassDetailedScreen"
          component={ClassDetailedScreen}
        />
        <Stack.Screen
          name="ExamDetailedScreen"
          component={ExamDetailedScreen}
        />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen
          name="CommunityProfileScreen"
          component={CommunityProfileScreen}
        />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
        />
        <Stack.Screen
          name="SetNewPasswordScreen"
          component={SetNewPasswordScreen}
        />
        <Stack.Screen
          name="OtpVerificationScreen"
          component={OtpVerificationScreen}
        />
        <Stack.Screen
          name="UpcomingExamScreen"
          component={UpcomingExamScreen}
          initialParams={{ navigation }}
        />
        <Stack.Screen
          name="CompletedExamScreen"
          component={CompletedExamScreen}
        />
        <Stack.Screen name="ExamHistoryScreen" component={ExamHistoryScreen} />
        <Stack.Screen name="CommunityScreen" component={CommunityScreen} />

        <Stack.Screen name="ClassesScreen" component={ClassesScreen} />
        <Stack.Screen
          name="UpcomingClassScreen"
          component={UpcomingClassScreen}
        />
        <Stack.Screen
          name="CompletedClassScreen"
          component={CompletedClassScreen}
        />
        <Stack.Screen
          name="ClassHistoryScreen"
          component={ClassHistoryScreen}
        />
        <Stack.Screen name="EventsScreen" component={EventsScreen} />
        <Stack.Screen
          name="EventDetailedScreen"
          component={EventDetailedScreen}
        />

        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <Drawer.Navigator
      drawerType="slide"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.transparent,
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive,
        drawerHideStatusBarOnOpen: Platform.OS === "ios" ? true : false,
        overlayColor: Colors.transparent,
        drawerStyle: {
          backgroundColor: Colors.bg,
          width: "60%",
        },
        sceneContainerStyle: {
          backgroundColor: Colors.bg,
        },
      }}
    >
      <Drawer.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          drawerIcon: (options) => drawerIcon(options, "home-outline"),
        }}
      />

      <Drawer.Screen
        name="DashBoardScreen"
        component={DashBoardScreen}
        options={{
          drawerIcon: (options) => drawerIcon(options, "home-outline"),
        }}
      />
      <Drawer.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          drawerIcon: (options) => drawerIcon(options, "heart-outline"),
        }}
      />
      <Drawer.Screen
        name="ClassesScreen"
        component={ClassesScreen}
        options={{
          drawerIcon: (options) => drawerIcon(options, "history"),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const Colors = {
  bg: "#009688",
  active: "#fff",
  inactive: "#eee",
  transparent: "transparent",
};
