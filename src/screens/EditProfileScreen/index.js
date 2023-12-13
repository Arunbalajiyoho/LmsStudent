// import from react
import React from 'react'
import { useState } from 'react';
// import from react native
import { View,Text,TouchableOpacity,Image, Pressable,StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from constants
import { SIZES,FONTS,COLORS,icons, images, } from '../../constants/index';
// import from expo 
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from 'expo-image-picker';
// import from expo vector icons
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  Feather,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";

const EditProfileScreen = ({navigation}) => {

  // for using colors and dark mode
  const { colors, isDarkMode } = useStateContext();

  // states for usernames and errors
  const [username, setUsername] = React.useState("");
  const [usernameError, setUsernameError] = React.useState("");
  // states for phone number and errors
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [phoneNumberError, setPhoneNumberError] = React.useState("");
// states for Email and errors
  const [email, setEmail] = React.useState("");
  const [emailError, setemailError ] = React.useState("");

  // for using styles.
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
      color:colors.textColor,
    },
    back: {
      backgroundColor: COLORS.lightblue,
      padding: SIZES.radius,
      borderRadius: 10,
      color: COLORS.purple,
    },
    profileContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    icons: {
      paddingLeft: 60,
      justifyContent: "center",
      alignItems: "center",
    },
  
})

// state for image
const [image, setImage] = useState(null);
// for pick the image
const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};

  return (
    <SafeAreaView style={styles.grandParent}>
      <StatusBar
        style={isDarkMode ? "light" : "dark"}
        backgroundColor={colors.background}
      />
           <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.back}
            >
              <FontAwesome5
                name="chevron-left"
                size={16}
                color={  COLORS.darkBlue}
              />
            </TouchableOpacity>

            <View>
              <Text style={styles.heading}>Edit Profile</Text>
            </View>
          </View>
          <View style={styles.profileContainer}>
        <Pressable onPress={pickImage}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 120, height: 120, borderRadius: 100 }}
            />
          ) : (
            <Image
              // source={images.profile}
              src='https://media.istockphoto.com/id/1301397300/photo/portrait-of-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=Xvgo-k58_woBTuQaRNZ4JXP2SQsw_RSbrlSbt7XbQlU='
              style={{ width: 120, height: 120, borderRadius: 100 }}
            />
          )}
        </Pressable>
        <Pressable style={styles.icons} onPress={pickImage}>
          <Feather
            name="edit"
            size={15}
            color={COLORS.gray}
            style={{
              elevation: 1,
              marginTop: -25,
              backgroundColor: COLORS.white,
              padding: 6,
              borderRadius: 100,
            }}
          />
        </Pressable>

           

        
      </View>


  </SafeAreaView>     
  )
}

export default EditProfileScreen