// import from react
import React from "react";
// import from react native
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ScrollViewBase,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from constants
import { SIZES, FONTS, COLORS } from "../../constants/theme";
// import from components
import TopTabs from "../../components/TopTabs";
// import from expo
import { FontAwesome5, MaterialIcons, FontAwesome,Entypo  } from "@expo/vector-icons";




const HelpScreen = () => {
  // for colors
  const { colors } = useStateContext();


  // styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: colors.background,
    //   paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius * 2,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: SIZES.radius,
    },
    heading: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      marginLeft: SIZES.radius,
      color: colors.textColor,
    },
    back: {
      backgroundColor: colors.iconBackground,
      padding: SIZES.radius,
      borderRadius: 10,
      color: COLORS.lightblue,
    },
  });
  return (
    <SafeAreaView style={styles.grandParent}>
      <ScrollView>
        <View style={{marginTop:SIZES.radius}}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.back}
            >
              <FontAwesome5
                name="chevron-left"
                size={16}
                color={colors.primary}
              />
            </TouchableOpacity>

            <View>
              <Text style={styles.heading}>Help Center</Text>
            </View>
          </View>

            <View style={{marginTop:SIZES.radius,}}> 
            <TopTabs />
            </View>
           
           





        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpScreen;
