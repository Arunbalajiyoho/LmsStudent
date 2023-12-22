// import from react
import React from "react";
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
import CreateNativeStackNavigator, {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
// import from screens
import BottomTabs from "../screens/BottomTabs";
// import from react navigation drawer
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
// import from expo vector icons
import { AntDesign, Entypo, MaterialIcons, Feather } from "@expo/vector-icons";

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
  LogInScreen,
  ForgetPasswordScreen,
  OtpVerificationScreen,
  SetNewPasswordScreen,
  ProfileScreen,
  SplashScreen,
  CourseDetailedScreen,
} from "../screens";

// For Drawer Navigator
const Drawer = createDrawerNavigator();
// For Stack Navigator
const Stack = createNativeStackNavigator();

// Stack Navigator
const StackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >







<Stack.Screen name="IdCardModelScreen" component={IdCardModelScreen} />

      <Stack.Screen name="BottomTabs" component={BottomTabs} />

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
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen
        name="TermsAndConditionScreen"
        component={TermsAndConditionScreen}
      />
      <Stack.Screen name="HelpDetailedScreen" component={HelpDetailedScreen} />
      <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
      <Stack.Screen
        name="CourseDetailedScreen"
        component={CourseDetailedScreen}
      />
      <Stack.Screen
        name="ClassDetailedScreen"
        component={ClassDetailedScreen}
      />
      <Stack.Screen name="ExamDetailedScreen" component={ExamDetailedScreen} />
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
      <Stack.Screen name="ClassHistoryScreen" component={ClassHistoryScreen} />

      <Stack.Screen name="EventsScreen" component={EventsScreen} />
      <Stack.Screen
        name="EventDetailedScreen"
        component={EventDetailedScreen}
      />
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
      <Stack.Screen
        name="ResultDetailedScreen"
        component={ResultDetailedScreen}
      />
      <Stack.Screen name="TicketsScreen" component={TicketsScreen} />
      <Stack.Screen
        name="PendingTicketsScreen"
        component={PendingTicketsScreen}
      />
      <Stack.Screen
        name="CompletedTicketsScreen"
        component={CompletedTicketsScreen}
      />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
    </Stack.Navigator>
  );
};

// CustomDrawerContent

const CustomDrawerContent = (props) => {
  const user = {
    name: "ArunBalaji", // Replace with the actual name of the user
    email: "Arun.doe@example.com", // Replace with the actual email of the user
    image:
      "https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990_640.jpg", // Replace with the actual URL of the user's image
  };

  // For using Styles
  const styles = StyleSheet.create({
    drawerHeader: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
    },
    userImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
    },
    userName: {
      fontSize: 16,
      fontWeight: "bold",
    },
    userEmail: {
      fontSize: 14,
      color: "gray",
    },
    dashedLine: {
      marginTop: 15,
      // height: 1,
      borderWidth: 0.5,
      borderStyle: "solid",
      borderColor: "grey",
    },
  });

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image source={{ uri: user.image }} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>

      {/* <DrawerItem
      label="Profile"
      icon={({ color, size }) => <AntDesign name="user" size={size} color={color} />}
      onPress={() => props.navigation.navigate("Profile")}
    /> */}
      <DrawerItem
        label="Dashboard"
        icon={({ color, size }) => (
          <AntDesign name="dashboard" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("Dashboard")}
      />
      <DrawerItem
        label="Classes"
        icon={({ color, size }) => (
          <AntDesign name="book" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("Classes")}
      />
      <DrawerItem
        label="Exams"
        icon={({ color, size }) => (
          <AntDesign name="filetext1" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("Exams")}
      />
      <DrawerItem
        label="Community"
        icon={({ color, size }) => (
          <AntDesign name="team" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("Community")}
      />
      <DrawerItem
        label="Account"
        icon={({ color, size }) => (
          <AntDesign name="setting" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("Account")}
      />

      <DrawerItem
        label="Help"
        icon={({ color, size }) => (
          <Entypo name="help" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("HelpDetailedScreen")}
      />

      <DrawerItem
        label="Events"
        icon={({ color, size }) => (
          <MaterialIcons name="event" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("EventsScreen")}
      />

      <DrawerItem
        label="Answer"
        icon={({ color, size }) => (
          <Feather name="paperclip" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("AnswerPaperScreen")}
      />

      <View style={styles.dashedLine} />
    </DrawerContentScrollView>
  );
};

// For Navigation
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        labelStyle: { color: "black" },
      }}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { color: "black" },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={StackNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="dashboard" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Classes"
        component={ClassesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="book" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Exams"
        component={ExamsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="filetext1" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="team" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={AccountScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

// Navigation
const Navigation = () => {
  return <DrawerNavigator />;
};

export default Navigation;

// // import from react
// import React from "react";
// // import from react native
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// // import from native stack
// import CreateNativeStackNavigator, {
//   createNativeStackNavigator,
// } from "@react-navigation/native-stack";
// // import from screens
// // import BottomTabs from "../screens/BottomTabs";
// // import from react navigation drawer
// import { createDrawerNavigator,DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// // import from expo vector icons
// import { AntDesign, Entypo } from "@expo/vector-icons";

// // import from Screens
// import {
//   DashBoardScreen,
//   ExamsScreen,
//   UpcomingExamScreen,
//   CompletedExamScreen,
//   ExamHistoryScreen,
//   ExamDetailedScreen,
//   CommunityScreen,
//   CommunityProfileScreen,
//   AccountScreen,
//   EditProfileScreen,
//   ClassesScreen,
//   UpcomingClassScreen,
//   CompletedClassScreen,
//   ClassHistoryScreen,
//   ClassDetailedScreen,
//   HelpCenterScreen,
//   HelpDetailedScreen,
//   NotificationScreen,
//   TermsAndConditionScreen,
//   PrivacyPolicyScreen,
//   LibraryScreen,
//   LibraryDetailedScreen,
//   EventsScreen,
//   EventDetailedScreen,
//   PaymentsScreen,
//   PaymentDetailedScreen,
//   CertificatesModelScreen,
//   IdCardModelScreen,
//   CalendarScreen,
//   AnswerPaperScreen,
//   ResultScreen,
//   ResultDetailedScreen,
//   TicketsScreen,
//   PendingTicketsScreen,
//   CompletedTicketsScreen,
//   LoadingScreen,
//   HelpScreen,
//   LogInScreen,
//   ForgetPasswordScreen,
//   OtpVerificationScreen,
//   SetNewPasswordScreen,
//   ProfileScreen,
//   SplashScreen,
// } from "../screens";

// import CustomDrawer from "./CustomDrawer";

// // For Drawer Navigator
// const Drawer = createDrawerNavigator();
// // For Stack Navigator
// const Stack = createNativeStackNavigator();

// // Stack Navigator
// const Navigation = ({navigation}) => {

//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//        <Stack.Screen name="DashBoardScreen" component={CustomDrawer} />
//       <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
//        <Stack.Screen name="ExamsScreen" component={ExamsScreen} />
//        <Stack.Screen name="UpcomingExamScreen" component={UpcomingExamScreen} />
//        <Stack.Screen name="SplashScreen" component={SplashScreen} />
//        <Stack.Screen name="LogInScreen" component={LogInScreen} />
//        <Stack.Screen name="CommunityProfileScreen" component={CommunityProfileScreen} />
//        {/* <Stack.Screen name="BottomTabs" component={BottomTabs} />  */}
//        <Stack.Screen name="HelpScreen" component={HelpScreen} />
//        <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
//        <Stack.Screen name="SetNewPasswordScreen" component={SetNewPasswordScreen} />
//        <Stack.Screen name="OtpVerificationScreen" component={OtpVerificationScreen} />
//        <Stack.Screen name="CompletedExamScreen" component={CompletedExamScreen} />
//        <Stack.Screen name="ExamHistoryScreen" component={ExamHistoryScreen} />
//        <Stack.Screen name="ExamDetailedScreen" component={ExamDetailedScreen} />
//        <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
//        <Stack.Screen name="AccountScreen" component={AccountScreen} />
//        <Stack.Screen name="ClassesScreen" component={ClassesScreen} />
//        <Stack.Screen name="UpcomingClassScreen" component={UpcomingClassScreen} />
//        <Stack.Screen name="CompletedClassScreen" component={CompletedClassScreen} />
//        <Stack.Screen name="ClassHistoryScreen" component={ClassHistoryScreen} />
//        <Stack.Screen name="ClassDetailedScreen" component={ClassDetailedScreen} />
//        <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
//        <Stack.Screen name="HelpDetailedScreen" component={HelpDetailedScreen} />
//        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
//        <Stack.Screen name="TermsAndConditionScreen" component={TermsAndConditionScreen} />
//        <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
//        <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
//        <Stack.Screen name="LibraryDetailedScreen" component={LibraryDetailedScreen} />
//        <Stack.Screen name="EventsScreen" component={EventsScreen} />
//        <Stack.Screen name="EventDetailedScreen" component={EventDetailedScreen} />
//        <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} />
//        <Stack.Screen name="PaymentDetailedScreen" component={PaymentDetailedScreen} />
//        <Stack.Screen name="CertificatesModelScreen" component={CertificatesModelScreen} />
//        <Stack.Screen name="IdCardModelScreen" component={IdCardModelScreen} />
//        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
//        <Stack.Screen name="AnswerPaperScreen" component={AnswerPaperScreen} />
//        <Stack.Screen name="ResultScreen" component={ResultScreen} />
//        <Stack.Screen name="ResultDetailedScreen" component={ResultDetailedScreen} />
//        <Stack.Screen name="TicketsScreen" component={TicketsScreen} />
//        <Stack.Screen name="PendingTicketsScreen" component={PendingTicketsScreen} />
//        <Stack.Screen name="CompletedTicketsScreen" component={CompletedTicketsScreen} />
//        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />

//     </Stack.Navigator>
//   );
// };

// export default Navigation;
