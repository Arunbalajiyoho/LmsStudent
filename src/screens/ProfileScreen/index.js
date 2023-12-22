import React, { useMemo, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useStateContext } from "../../context/StateContext/StateContext";
import { COLORS, SIZES } from "../../constants/theme";
import { FontAwesome5 } from "@expo/vector-icons";
import dummyData from "../../components/dummyData";



const ProfileScreen = () => {
  const { colors } = useStateContext();
  const navigation = useNavigation();

  const updateProfile = (updatedProfile) => {
    // Implement your logic to update the profile data
    console.log("Updated Profile:", updatedProfile);
    // For simplicity, you can update the state or redux store with the new profile data
  };



  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: SIZES.padding,
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
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: SIZES.base,
    },
    detailText: {
      fontSize: 18,
      marginBottom: 12,
      color: colors.textColor,
    
    },
    editButton: {
      backgroundColor: COLORS.darkBlue,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: "center",
      marginTop: SIZES.base,
    },
    editText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
  });

  const goToEditProfile = () => {
    navigation.navigate("EditProfileScreen");
  };

  return (
    <SafeAreaView style={styles.grandParent}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <FontAwesome5
              name="chevron-left"
              size={16}
              color={COLORS.darkBlue}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.heading}> Profile</Text>
          </View>
        </View>
        {dummyData.studentDetails.map((item, index) => (
          <View style={{ flex: 1, alignItems: "center" }} key={index}>
            <Image
              source={{ uri: item.profileImage }}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.detailText}>Name: {item.name}</Text>
              <Text style={styles.detailText}>Email: {item.email}</Text>
              <Text style={styles.detailText}>Age: {item.age}</Text>
              <Text style={styles.detailText}>Grade: {item.grade}</Text>
              <Text style={styles.detailText}>Enrolled Courses:</Text>

              {item.enrolledCourses.map((course, index) => (
                <Text key={index} style={styles.detailText}>
                  - {course}
                </Text>
              ))}
            </View>
          </View>
        ))}

        <TouchableOpacity 
          style={styles.editButton}
          onPress={() => {
            navigation.navigate("EditProfileScreen", { updateProfile });
          }}
        >
          <Text style={styles.editText}>Edit Profile</Text>

        </TouchableOpacity>

       
      

      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
