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
import CreateNativeStackNavigator, {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import BottomTabs from "../screens/BottomTabs";
import { createDrawerNavigator,DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { AntDesign, Entypo } from "@expo/vector-icons";

   
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
} from "../screens";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
       {/* <Stack.Screen name="BottomTabs" component={BottomTabs} /> */}
       <Stack.Screen name="LogInScreen" component={LogInScreen} />
      <Stack.Screen name="ExamsScreen" component={ExamsScreen} />
       <Stack.Screen name="HelpScreen" component={HelpScreen} />
       <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
       <Stack.Screen name="SetNewPasswordScreen" component={SetNewPasswordScreen} />
       <Stack.Screen name="OtpVerificationScreen" component={OtpVerificationScreen} />
       <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />     
       <Stack.Screen name="UpcomingExamScreen" component={UpcomingExamScreen} />
       <Stack.Screen name="CompletedExamScreen" component={CompletedExamScreen} />
       <Stack.Screen name="ExamHistoryScreen" component={ExamHistoryScreen} />
       <Stack.Screen name="ExamDetailedScreen" component={ExamDetailedScreen} />
       <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
       <Stack.Screen name="CommunityProfileScreen" component={CommunityProfileScreen} />
       <Stack.Screen name="AccountScreen" component={AccountScreen} />
       <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
       <Stack.Screen name="ClassesScreen" component={ClassesScreen} />
       <Stack.Screen name="UpcomingClassScreen" component={UpcomingClassScreen} />
       <Stack.Screen name="CompletedClassScreen" component={CompletedClassScreen} />
       <Stack.Screen name="ClassHistoryScreen" component={ClassHistoryScreen} />
       <Stack.Screen name="ClassDetailedScreen" component={ClassDetailedScreen} />
       <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
       <Stack.Screen name="HelpDetailedScreen" component={HelpDetailedScreen} />
       <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
       <Stack.Screen name="TermsAndConditionScreen" component={TermsAndConditionScreen} />
       <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
       <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
       <Stack.Screen name="LibraryDetailedScreen" component={LibraryDetailedScreen} />
       <Stack.Screen name="EventsScreen" component={EventsScreen} />
       <Stack.Screen name="EventDetailedScreen" component={EventDetailedScreen} />
       <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} />
       <Stack.Screen name="PaymentDetailedScreen" component={PaymentDetailedScreen} />
       <Stack.Screen name="CertificatesModelScreen" component={CertificatesModelScreen} />
       <Stack.Screen name="IdCardModelScreen" component={IdCardModelScreen} />
       <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
       <Stack.Screen name="AnswerPaperScreen" component={AnswerPaperScreen} />
       <Stack.Screen name="ResultScreen" component={ResultScreen} />
       <Stack.Screen name="ResultDetailedScreen" component={ResultDetailedScreen} />
       <Stack.Screen name="TicketsScreen" component={TicketsScreen} />
       <Stack.Screen name="PendingTicketsScreen" component={PendingTicketsScreen} />
       <Stack.Screen name="CompletedTicketsScreen" component={CompletedTicketsScreen} />
       <Stack.Screen name="LoadingScreen" component={LoadingScreen} />    
  
    </Stack.Navigator>
  );
};



const CustomDrawerContent = (props) => {
  const user = {
    name: "ArunBalaji", // Replace with the actual name of the user
    email: "Arun.doe@example.com", // Replace with the actual email of the user
    image: "https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990_640.jpg", // Replace with the actual URL of the user's image
  };


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
  
    <DrawerItem
      label="Profile"
      icon={({ color, size }) => <AntDesign name="user" size={size} color={color} />}
      onPress={() => props.navigation.navigate("Profile")}
    />
    <DrawerItem
      label="Dashboard"
      icon={({ color, size }) => <AntDesign name="dashboard" size={size} color={color} />}
      onPress={() => props.navigation.navigate("Dashboard")}
    />
    <DrawerItem
      label="Classes"
      icon={({ color, size }) => <AntDesign name="book" size={size} color={color} />}
      onPress={() => props.navigation.navigate("Classes")}
    />
    <DrawerItem
      label="Exams"
      icon={({ color, size }) => <AntDesign name="filetext1" size={size} color={color} />}
      onPress={() => props.navigation.navigate("Exams")}
    />
    <DrawerItem
      label="Community"
      icon={({ color, size }) => <AntDesign name="team" size={size} color={color} />}
      onPress={() => props.navigation.navigate("Community")}
    />
    <DrawerItem
      label="Account"
      icon={({ color, size }) => <AntDesign name="setting" size={size} color={color} />}
      onPress={() => props.navigation.navigate("Account")}
    />
  </DrawerContentScrollView>
  );
};


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
    {/* <Drawer.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <AntDesign name="user" size={size} color={color} />
        ),
      }}
    /> */}
   
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


const Navigation = () => {
  return (
    <DrawerNavigator />
  );
};

export default Navigation;
