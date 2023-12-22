// EditProfileScreen.js

import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants/theme";
import { FontAwesome5 } from "@expo/vector-icons";

const EditProfileScreen = ({ route, navigation }) => {
  const { updateProfile } = route.params;

  const [editedProfile, setEditedProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    age: "25",
    grade: "A",
    // Add more fields as needed
  });

  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius,
      backgroundColor: COLORS.background,
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
      color: COLORS.textColor,
    },
    back: {
      backgroundColor: COLORS.lightblue,
      padding: SIZES.radius,
      borderRadius: 10,
      color: COLORS.darkBlue,
    },
    inputContainer: {
      marginBottom: SIZES.base,
    },
    inputLabel: {
      fontSize: 16,
      marginBottom: 8,
      color: COLORS.textColor,
    },
    input: {
      backgroundColor: COLORS.lightGray,
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      color: COLORS.textColor,
    },
    saveButton: {
      backgroundColor: COLORS.darkBlue,
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: "center",
      marginTop: SIZES.base,
    },
    saveText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
  });

  const saveProfile = () => {
    // Implement your logic to save the edited profile data
    // For simplicity, we're just logging the data for now
    console.log("Saved Profile:", editedProfile);
    updateProfile(editedProfile); // Call the updateProfile callback with the new data
    navigation.goBack(); // Navigate back to the Profile screen after saving
  };

  return (
    <SafeAreaView style={styles.grandParent}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
            <FontAwesome5 name="chevron-left" size={16} color={COLORS.darkBlue} />
          </TouchableOpacity>
          <View>
            <Text style={styles.heading}>Edit Profile</Text>
          </View>
        </View>

        {/* Editable Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.input}
            value={editedProfile.name}
            onChangeText={(text) => setEditedProfile({ ...editedProfile, name: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            value={editedProfile.email}
            onChangeText={(text) => setEditedProfile({ ...editedProfile, email: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Age</Text>
          <TextInput
            style={styles.input}
            value={editedProfile.age}
            onChangeText={(text) => setEditedProfile({ ...editedProfile, age: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Grade</Text>
          <TextInput
            style={styles.input}
            value={editedProfile.grade}
            onChangeText={(text) => setEditedProfile({ ...editedProfile, grade: text })}
          />
        </View>

        {/* Add more fields as needed */}

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;