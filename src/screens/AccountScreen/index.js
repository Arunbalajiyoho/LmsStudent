import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES, icons, images } from "../../constants";
import Colors from "../../constants/Colors";
import Icon, { Icons } from "../../constants/Icons";
import { useStateContext } from "../../context/StateContext/StateContext";

// import from expo
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  Feather,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import { StatusBar } from "react-native";

const AccountScreen = ({ navigation }) => {
  const { colors, isDarkMode } = useStateContext();

  const user = require("../../../assets/images/Arunbalaji.jpg")

  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: colors.background,
      // paddingHorizontal: SIZES.radius,
      // paddingVertical: SIZES.radius,
    },
    back: {
      backgroundColor: COLORS.lightblue,
      padding: SIZES.base,
      borderRadius: 10,
      color: COLORS.primary,
      
    },
    Notification: {
      marginHorizontal: SIZES.base,
      color:"white",
      ...FONTS.h2,
    },
    Container: {
      display: "flex",
      flexDirection: "row",
      alignItems:"center"
    },
    TextContainer: {
      display: "flex",
      flexDirection: "row",
    },
    overContainer: {
      height:"37%",
      // flex:1,
      backgroundColor: COLORS.lightblue,
      padding: 15,
    },
    profileContainer: {
      paddingVertical:SIZES.radius,
      justifyContent: "center",
      alignItems: "center",
    },
    icons: {
      paddingLeft: 50,
    },
    EditprofileContainer: {
      // display: "flex",
      flexDirection: "row",
      paddingVertical: 20,
      flex: 1,
      justifyContent: "center",
    },
    Editprofile: {
      flex: 1,
      alignItems: "center",
    },
    EditprofileText: {
      ...FONTS.h3,
      color: colors.textColor,
    },
    EditprofileView: {
      ...FONTS.h4,
      color: colors.textColor,
    },
    flexContainer: {
      flex: 1,
      borderRadius: 30,
      marginTop: -25,
      backgroundColor: "white",
      backgroundColor: colors.background,
    },
    menuContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.cardBackground,
      shadowColor: colors.textColor, // Adjust shadow properties
      shadowOffset: { width: 0, height: 2 },
      // shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 3, // Adjust elevation for Android
      paddingVertical: SIZES.radius,
      paddingHorizontal: SIZES.base,
      borderRadius: 20,
      marginVertical: SIZES.base,
    },
    menuIcons: {
      backgroundColor: COLORS.lightblue,
      borderRadius: 50,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius,
      justifyContent: "center",
      alignItems: "center",
    },
    menuText: {
      // ...FONTS,
      fontWeight: "600",
      marginHorizontal: SIZES.radius,
      color: colors.textColor,
    },
    overalprofilecontainer: {
      marginTop: 20,
      marginHorizontal: 10,
      backgroundColor: "red",
    },
  });
  return (
    <SafeAreaView style={styles.grandParent}>
      <ScrollView>
      <StatusBar
        style={isDarkMode ? "light" : "dark"}
        backgroundColor={colors.background}
      />

      <View style={styles.overContainer}>
        <View style={styles.Container}>
         

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <FontAwesome5 name="chevron-left" size={16} color={COLORS.darkBlue} />
        </TouchableOpacity>
           
          
          <View style={styles.TextContainer}>
            <Text style={styles.Notification}>Profile</Text>
          </View>
        </View>

        <View style={styles.profileContainer}>
          <Pressable onPress={() => navigation.navigate("EditProfileScreen")}>
           
            <Image source={user} resizeMode="contain" style={{height:120,width:120,borderRadius:20}} />
          </Pressable>
          <Pressable style={styles.icons} onPress={() => navigation.navigate("EditProfileScreen")}>
             <Image
              // source={icons.edit}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.black,
                marginTop: -30,
                // backgroundColor: COLORS.white,
                padding:10
              }}
            /> 

          
          </Pressable>
        </View>

        <View
          style={{
            marginBottom: 15,
            // marginTop:10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.h2,color:COLORS.darkBlue }}>Arun Balaji</Text>
          <Text style={{ ...FONTS.h4,color:COLORS.darkBlue }}>balajiarun533@gmail.com</Text>
        </View>
      </View>

      <View style={styles.flexContainer}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.radius,
            paddingVertical: SIZES.radius,
          }}
        >
          <View style={{ marginVertical: SIZES.radius }}>
          <Text style={{ ...FONTS.h2, color: colors.textColor }}>Account Overview</Text>

          </View>

          <View Style={styles.overalprofilecontainer}>
            <TouchableOpacity
              style={styles.menuContainer}
              onPress={() => navigation.navigate("EditProfileScreen")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.menuIcons}>
                 
                  <Feather name="edit" size={24} color={COLORS.darkBlue} />
                </View>
                <View>
                  <Text style={styles.menuText}>Edit Profile</Text>
                </View>
              </View>
              <View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={20}
                  color={colors.textColor}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuContainer}
              onPress={() => navigation.navigate("NotificationScreen")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.menuIcons}>
                <Ionicons name="notifications-outline" size={24} color={COLORS.darkBlue} />
                </View>
                <View>
                  <Text style={styles.menuText}>Notifications</Text>
                </View>
              </View>
              <View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={20}
                  color={colors.textColor}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuContainer}
              onPress={() => navigation.navigate("HelpCenterScreen")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.menuIcons}>
                <Ionicons name="help" size={24} color={COLORS.darkBlue} />
                </View>
                <View>
                  <Text style={styles.menuText}>HelpCenter</Text>
                </View>
              </View>
              <View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={20}
                  color={colors.textColor}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuContainer}
              onPress={() => navigation.navigate("PrivacyPolicyScreen")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.menuIcons}>
                <MaterialIcons name="privacy-tip" size={24} color={COLORS.darkBlue} />
                </View>
                <View>
                  <Text style={styles.menuText}>Privacy Policy</Text>
                </View>
              </View>
              <View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={20}
                  color={colors.textColor}
                />
              </View>
            </TouchableOpacity>

         

          </View>

          <View style={{ alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity 
              style={{
                backgroundColor: COLORS.darkBlue,

                height: 57,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 26,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: "bold",
                  flex: 1,
                  textAlign: "center",
                }}
              >
               Sign out
              </Text>
              <View
                style={{ backgroundColor:COLORS.blue1, borderRadius: 29, left: 10 }}
              >
                <Feather
                  name="arrow-right"
                  size={20}
                  color= {COLORS.darkBlue}
                  style={{ paddingHorizontal: 15, paddingVertical: 13 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;