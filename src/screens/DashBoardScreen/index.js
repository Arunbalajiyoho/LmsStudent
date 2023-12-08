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
import { SafeAreaView } from "react-native-safe-area-context";
// import from constants
import { SIZES, FONTS, COLORS } from "../../constants/theme";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from expo
import { MaterialIcons, Ionicons, Entypo, Feather } from "@expo/vector-icons";
// import from components
import ImageSwiper from "../../components/ImageSwiper ";

const DashBoardScreen = () => {

  // for using colors from context
  const { colors } = useStateContext();
 
// for image 
  const user = require("../../../assets/images/Arunbalaji.jpg");

  // styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: colors.background,
      // paddingHorizontal: SIZES.radius,
      // paddingVertical: SIZES.radius * 2,
    },
    headericons: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: SIZES.radius,
    },
    headertext: {
      fontSize: SIZES.largeTitle,
      fontWeight: "bold",
      color: colors.textColor,
    },
    headersubtext: {
      fontSize: SIZES.h2,
      fontWeight: "400",
      color: colors.textColor,
    },
    user: {
      width: 45,
      height: 45,
      borderRadius: 45,
    },
    dashedLine: {
      marginTop: 15,
      // height: 1,
      borderWidth: 0.5,
      borderStyle: "dotted",
      color: colors.iconBackground,
    },

    secondsection: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: SIZES.radius,
      paddingHorizontal: SIZES.radius,
    },
    seeall: {
      color: colors.textColor,
    },
    searchBarContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#f0f0f4",
      borderRadius: 16,  
      marginVertical: SIZES.radius,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowRadius: 2,
      shadowOffset: {
        width: 0,
        height: 1,
      },
    },
    input: {
      flex: 1,
      height: 50,
      backgroundColor: "transparent",
      paddingLeft: 10,
      justifyContent: "center",
    },
    searchButton: {
      padding: 4,
      borderRightWidth: 0.5,
      paddingHorizontal: 4,
    },
    searchButton1: {
      padding: 4,
      marginLeft: 5,
    },
  });

  return (
    <SafeAreaView style={styles.grandParent}>
      <ScrollView>
        <View style={{ }}>
          <View style={{backgroundColor:COLORS.lightblue, paddingHorizontal:SIZES.base,borderRadius:10}}>
          <View style={styles.headericons}>
            <MaterialIcons
              name="read-more"
              size={35}
              color="black"
              // style={{ color: colors.iconBackground }}
            />
            <Ionicons
              name="notifications-outline"
              size={24}
              color="black"
              // style={{ color: colors.iconBackground }}
            />
         
          </View>

          <View style={styles.header}>
            <View>
              <Text style={styles.headertext}>Home</Text>
              <Text style={styles.headersubtext}>Welcome Arun!</Text>
            </View>
            <Image source={user} style={styles.user} />
          </View>

          <View style={{ marginTop: 3 }}>
            <TouchableOpacity
              style={styles.searchBarContainer}
              onPress={() => navigation.navigate("")}
            >
              <View
                style={styles.input}

                // onChangeText={handleSearch}
                // value={searchQuery}
              >
                <Text >
                  Search Course!
                </Text>
              </View>

              <TouchableOpacity style={styles.searchButton}>
                {/* <Image
                    resizeMode="contain"
                    source={}
                    style={{
                      height: 18,
                      width: 18,
                     
                      marginRight: 8,
                      tintColor: "black",
                    }}
                  /> */}

                <Feather name="search" size={24} color="black"  style={{}}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.searchButton1}>
                <Entypo name="mic" size={20} color={COLORS.primary} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          </View>

          <View style={styles.dashedLine} />

          <View style={styles.secondsection}>
            <Text style={{ color:colors.textColor,fontSize:SIZES.h3,fontWeight:"bold"}}>Announcement</Text>
            <TouchableOpacity>
              <Text style={styles.seeall}>See All</Text>

            </TouchableOpacity>
          </View>



              <View style={{paddingHorizontal:SIZES.base}}>
                   <ImageSwiper />
              </View>




        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashBoardScreen;
