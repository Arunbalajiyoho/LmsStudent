// import from react
import React from "react";
// import from react native
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from constants
import { SIZES, COLORS } from "../../constants";
// import from expo
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  Feather,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";




const LibraryScreen = () => {
  // for colors
  const { colors, isDarkMode } = useStateContext();

  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
    },
    heading: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      marginLeft: SIZES.radius,
      color: colors.textColor,
    },
    back: {
      backgroundColor: COLORS.lightblue,
      padding: SIZES.base,
      borderRadius: 10,
      color: COLORS.darkBlue,
    },
    dashedLine: {
      marginTop: 10,
      // height: 1,
      borderWidth: 0.5,
      borderStyle: "dotted",
      borderColor: "grey",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      // borderWidth: 1,
      // borderColor: "#ccc",
      borderRadius: SIZES.radius,
      marginBottom: 10,
      marginTop: 10,
      paddingHorizontal: 10,
      backgroundColor: "white",
      elevation:5,
    },
    input: {
      flex: 1,
      paddingVertical: 8,
    },
    clearButton: {
      padding: 8,
    },
  });

  return (
    <SafeAreaView style={styles.grandParent}>
      <View>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Ionicons name="ios-arrow-back" size={24} color={COLORS.darkBlue} />
        </TouchableOpacity>

        <View>
          <Text style={styles.heading}>Library</Text>
        </View>
      </View>

      <View style={styles.dashedLine} />

      <View style={{marginTop:SIZES.padding}}>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          // value={searchQuery}
         
        />
       
          <TouchableOpacity style={styles.clearButton}>
            <Icon name="clear" size={20} color="gray" />
          </TouchableOpacity>
       
      </View>
      </View>









      </View>
    </SafeAreaView>
  );
};

export default LibraryScreen;
