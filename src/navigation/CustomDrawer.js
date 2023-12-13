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
import CreateNativeStackNavigator, {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
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
import  dummyData from "../components/dummyData";

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
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>

          {/* profile */}

          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginTop: SIZES.radius,
              alignItems: "center",
            }}
          >
            <Image
              src="https://www.shutterstock.com/shutterstock/photos/2071252046/display_1500/stock-photo-portrait-of-cheerful-male-international-indian-student-with-backpack-learning-accessories-standing-2071252046.jpg"
              style={{
                width: 50,
                height: 50,
                borderRadius: 23,
              }}
            />

            <View
              style={{
                marginLeft: SIZES.radius,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Arunbalaji
              </Text>

              <Text>arunbalajiyoho@gmail.com</Text>
            </View>
          </TouchableOpacity>

          {/* Drawer Items */}

          <View
            style={{
              flex: 1,
              marginTop: SIZES.padding,
            }}
          >
            <CustomDrawerItem
              label={dummyData.screens[0].dashboard}
              // icon={({ color, size }) => <AntDesign name="dashboard" size={size} color={color} />}
              //       onPress={() => props.navigation.navigate("Dashboard")}
            ></CustomDrawerItem>

            <CustomDrawerItem
              label={dummyData.screens[0].classes}
              icon={({ color, size }) => (
                <AntDesign name="book" size={size} color={color} />
              )}
            ></CustomDrawerItem>

            <CustomDrawerItem
              label={dummyData.screens[0].exams}
              icon={({ color, size }) => (
                <AntDesign name="filetext1" size={size} color={color} />
              )}
            ></CustomDrawerItem>

            <CustomDrawerItem
              label={dummyData.screens[0].community}
              icon={({ color, size }) => (
                <AntDesign name="team" size={size} color={color} />
              )}
            ></CustomDrawerItem>

            <CustomDrawerItem
              label={dummyData.screens[0].account}
              icon={({ color, size }) => (
                <AntDesign name="setting" size={size} color={color} />
              )}
            ></CustomDrawerItem>

            {/* divider */}

            <View 
             style={{
                height:1,
                marginVertical:SIZES.radius,
                marginLeft:SIZES.radius,
                backgroundColor:"black",
                
             }}
            > 

            </View>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {

    // const [progress, setProgress] = React.useState(new Animated.Value(0));

     
    // const scale = Animated.interpolateNode(progress, {
    //     inputRange: [0,1],
    //     outputRange: [1, 0.8]
    // })

    // const borderRadius = Animated.interpolateNode(progress, {
    //     inputRange: [0,1],
    //     outputRange: [0, 26]
    // })

    // const animatedStyle = {borderRadius, transform: [{scale}] }

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
            //     setProgress(props.progress)
            // },0) 
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
      >
        <Drawer.Screen name="DashboardScreen">
          {props => <DashBoardScreen {...props} 
        //   drawerAnimationStyle ={animatedStyle}
         />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
