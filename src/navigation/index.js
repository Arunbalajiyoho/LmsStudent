import React from "react";
import CreateNativeStackNavigator, {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import BottomTabs from "../screens/BottomTabs";
   
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
} from "../screens";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
     
       {/* <Stack.Screen name="BottomTabs" component={BottomTabs} /> */}
       <Stack.Screen name="LogInScreen" component={LogInScreen} />
       <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
       <Stack.Screen name="SetNewPasswordScreen" component={SetNewPasswordScreen} />
       <Stack.Screen name="OtpVerificationScreen" component={OtpVerificationScreen} />
       <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
       <Stack.Screen name="ExamsScreen" component={ExamsScreen} />
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
       <Stack.Screen name="HelpScreen" component={HelpScreen} />
       
       
      
      
      
    </Stack.Navigator>
  );
};

export default Navigation;
