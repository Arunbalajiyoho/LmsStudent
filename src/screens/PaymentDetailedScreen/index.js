// import from react
import React, { useState } from "react";
// import from react native
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
// imports from constants
import { COLORS, SIZES } from "../../constants";
// imports from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from expo vector icons
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  Feather,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const PaymentDetailedScreen = ({ navigation }) => {
  // for colors
  const { colors, isDarkMode } = useStateContext();


  const PaymentStatus = ({ status, time }) => {
   
  
    return (
      <View style={styles.statusContainer}>
        <View style={styles.statusDot} />
        <View style={styles.statusTextContainer}>
          <Text style={{ color: colors.textColor, fontWeight: "bold" }}>{status}</Text>
          <Text style={{ color: colors.textColor, fontSize: 12 }}>{time}</Text>
        </View>
      </View>
    );
  };


  const paymentStatus = [
    { id: 1, status: "Payment Started", time: "10 Nov 2023, 12:00 PM" },
    { id: 2, status: "Payment Received by Student", time: "10 Nov 2023, 01:00 PM" },
    { id: 3, status: "Payment Completed", time: "10 Nov 2023, 02:00 PM" },
  ];




  // styles

  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor:  colors.background,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      // marginBottom: SIZES.padding,
    },
    heading: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      marginLeft: SIZES.base,
      color: colors.textColor,
    },
    back: {
      backgroundColor: COLORS.lightblue,
      padding: SIZES.radius,
      borderRadius: 10,
      color: COLORS.darkBlue,
    },
    dashedLine: {
      marginTop: 10,
      borderWidth: 0.5,
      borderStyle: "dotted",
      borderColor: "grey",
      marginBottom: SIZES.padding,
    },

    statusContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: SIZES.radius,
    },
    statusDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: COLORS.darkBlue,
      marginRight: 10,
    },
    statusTextContainer: {
      flex: 1,
    },
  });




  return (
    <SafeAreaView style={styles.grandParent}>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
            <FontAwesome5 name="chevron-left" size={16} color={COLORS.darkBlue} />
          </TouchableOpacity>

          <View>
            <Text style={styles.heading}> Payment Details</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: colors.cardBackground,
            padding: SIZES.padding,
            marginTop: SIZES.padding,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Paid to :</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between",marginTop:SIZES.radius }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                style={{ width: 35, height: 35, borderRadius: 35 }}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={{fontWeight:"bold"}}>Yoho.Pvt.Ltd</Text>
                <Text>UPI ID :Arun@okaxis.com</Text>
              </View>
            </View>
            <View>
              <Text style={{fontWeight:"bold",color:"#8377"}}>&#8377;10000</Text>
            </View>
          </View>
          <View style={{ marginTop: SIZES.base, flexDirection: "row" }}>
            <Image
              src="https://www.freepnglogos.com/uploads/tick-png/tick-paddy-power-hotshot-jackpot-first-goalscorer-predictor-18.png"
              style={{ width: 30, height: 30 }}
            />
            <View style={{ marginLeft: 15 }}>
              <Text style={{fontWeight:"bold"}}>Payment Successful</Text>
              <Text>10 Nov 2023,12.00 PM</Text>
            </View>
          </View>
          <View style={{marginTop:SIZES.radius,borderBottomWidth:0.5,}}>

          </View>
         

          <View style={{marginTop:SIZES.radius}}>
          <FlatList
          data={paymentStatus}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PaymentStatus status={item.status} time={item.time} />
          )}
        />
          </View>
        </View>
        <View   style={{
            backgroundColor:isDarkMode ? Colors.greenAlpha: colors.cardBackground,
            padding: SIZES.padding,
            marginTop: SIZES.padding,
            borderRadius: 20,
          }}>
          <View>
          <Text style={{ fontWeight: "bold", fontSize: 16}}>
          UPI transaction Id :
          </Text>
          <Text>
            358956558555
          </Text>
          </View>
          <View style={{marginTop:SIZES.radius}}>
          <Text style={{ fontWeight: "bold", fontSize: 16}}>
            To :
          </Text>
          <Text>
            vilperr@paytm
          </Text>
          </View>
          <View style={{marginTop:SIZES.radius}}>
          <Text style={{ fontWeight: "bold", fontSize: 16}}>
            From:ARUN M (Canara Bank)
          </Text>
          <Text>
            arun30-1@okaxis
          </Text>
          </View>
          <View style={{marginTop:SIZES.radius}}>
          <Text style={{ fontWeight: "bold", fontSize: 16}}>
          Google transaction ID :
          </Text>
          <Text>
           cCIAtasdQdweW
          </Text>
          </View>
        </View>

       




      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default PaymentDetailedScreen;