// import from react
import React from "react";
import { useState } from "react";
// import from react native
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from constants
import { SIZES, FONTS, COLORS, icons, images } from "../../constants/index";
// import from expo
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
// import from expo vector icons
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  Feather,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";

import DatePicker from "expo-datepicker";





const EditProfileScreen = ({ navigation }) => {


  const [date, setDate] = useState(new Date().toString());




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
  const [emailError, setemailError] = React.useState("");
  // states for date of birth
  const [dateOfBirth, setDateOfBirth] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [dateOfBirthError, setDateOfBirthError] = React.useState("");

 

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

  const handleSave = () => {
    // Handle save logic here
  };

  const handleCancel = () => {
    // Handle cancel logic here
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDateOfBirth(selectedDate);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };


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
      color: colors.textColor,
    },
    back: {
      backgroundColor: COLORS.lightblue,
      padding: SIZES.base,
      borderRadius: 10,
      color: COLORS.darkBlue,
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
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
    inputContainer: {
      marginTop: SIZES.radius,
    },
    inputLabel: {
      ...FONTS.body3,
      color: colors.textColor,
      marginBottom: 6,
    },
    inputField: {
      backgroundColor: colors.cardColor,
      borderRadius: SIZES.radius,
      paddingHorizontal: SIZES.padding,
      height: 40,
      ...FONTS.body3,
      color: colors.textColor,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: SIZES.radius,
    },
    button: {
      flex: 1,
      height: 40,
      borderRadius: SIZES.radius,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: SIZES.radius,
    },
    saveButton: {
      backgroundColor: COLORS.lightblue,
    },
    cancelButton: {
      backgroundColor: COLORS.red,
    },
    buttonText: {
      ...FONTS.h3,
      color: COLORS.white,
    },
  });

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
          <FontAwesome5 name="chevron-left" size={16} color={COLORS.darkBlue} />
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
              src="https://media.istockphoto.com/id/1301397300/photo/portrait-of-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=Xvgo-k58_woBTuQaRNZ4JXP2SQsw_RSbrlSbt7XbQlU="
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

      <View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your full name"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      {/* ... (Add similar sections for other fields like phone number, date of birth, etc.) */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={handleSave}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={handleCancel}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      

      <View style={styles.container}>
      <DatePicker
        date={date}
        onChange={(date) => setDate(date)}
        // icon={<Entypo name="chevron-right" size={40} color="#689CA3" />}
      />
    </View>
     
      

  

      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
